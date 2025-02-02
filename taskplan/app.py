import json
import time
import uuid

from flask import Flask, jsonify, Response, Blueprint
from flask import request, render_template

from taskplan.Controller import Controller
from taskplan.EventManager import EventManager

try:
  from pathlib2 import Path
except ImportError:
  from pathlib import Path

def run(refresh_interval, taskplan_config):
    event_manager = EventManager()

    controller = Controller(event_manager, refresh_interval, taskplan_config, allow_remote=True, print_log=False)
    controller.start()

    app = Flask(__name__, static_url_path="/static_web")
    main_bp = Blueprint('main', __name__, static_folder="web/build/main/static_main", static_url_path="/static_main", template_folder="web/build/")
    table_bp = Blueprint('table', __name__, static_folder="web/build/table/static_table", static_url_path="/static_table", template_folder="web/build/")
    app.config["DEBUG"] = True
    #app.config["EXPLAIN_TEMPLATE_LOADING"] = True

    log_file_lines = {}

    @main_bp.route('/')
    def static_page():
        return render_template('main/index.html')

    @table_bp.route('/table')
    def static_page():
        return render_template('table/index.html')

    @app.route('/update')
    def update():
        def gen():
            q = event_manager.subscribe()
            print("subscribe")

            controller.update_new_client(q)

            try:
                while True:
                    event = q.get()
                    yield event.encode()
            finally:
                event_manager.unsubscribe(q)
                print("unsubscribe")

        return Response(gen(), mimetype="text/event-stream")

    @app.route('/start/<int:total_iterations>', methods=['POST'])
    def start(total_iterations):
        data = json.loads(request.form.get('data'))
        controller.start_new_task(data["params"], data["config"], total_iterations, device_uuid=data["device"], tags=data["tags"])
        return jsonify({})

    @app.route('/test/<int:total_iterations>', methods=['POST'])
    def test(total_iterations):
        data = json.loads(request.form.get('data'))
        controller.start_new_task(data["params"], data["config"], total_iterations, is_test=True, device_uuid=data["device"], tags=data["tags"])
        return jsonify({})

    @app.route('/edit_task/<string:task_uuid>/<int:total_iterations>', methods=['POST'])
    def edit_task(task_uuid, total_iterations):
        data = json.loads(request.form.get('data'))
        controller.edit_task(task_uuid, data["params"], data["config"], total_iterations)
        return jsonify({})

    @app.route('/pause/<string:task_uuid>')
    def pause(task_uuid):
        controller.pause_task(task_uuid)
        return jsonify({})

    @app.route('/pause_all/')
    def pause_all():
        controller.pause_all_tasks()
        return jsonify({})

    @app.route('/terminate/<string:task_uuid>')
    def terminate(task_uuid):
        controller.terminate_task(task_uuid)
        return jsonify({})

    @app.route('/save_now/<string:task_uuid>')
    def save_now(task_uuid):
        controller.save_now_task(task_uuid)
        return jsonify({})

    @app.route('/cancel/<string:task_uuid>')
    def cancel(task_uuid):
        controller.cancel_task(task_uuid)
        return jsonify({})

    @app.route('/reload')
    def reload():
        controller.reload()
        return jsonify({})

    @app.route('/remove_task/<string:task_uuid>')
    def remove_task(task_uuid):
        controller.remove_task(task_uuid)
        return jsonify({})

    @app.route('/make_test_persistent/<string:task_uuid>')
    def make_test_persistent(task_uuid):
        controller.make_test_persistent(task_uuid)
        return jsonify({})

    @app.route('/remove_param/<string:param_uuid>')
    def remove_param(param_uuid):
        controller.remove_param(param_uuid)
        return jsonify({})

    @app.route('/remove_param_value/<string:param_value_uuid>')
    def remove_param_value(param_value_uuid):
        controller.remove_param_value(param_value_uuid)
        return jsonify({})

    @app.route('/run_now/<string:task_uuid>')
    def run_now(task_uuid):
        controller.run_task_now(task_uuid)
        return jsonify({})

    @app.route('/continue/<string:task_uuid>/<string:device_uuid>')
    @app.route('/continue/<string:task_uuid>/<string:device_uuid>/<int:total_iterations>')
    def continue_task(task_uuid, device_uuid, total_iterations=0):
        controller.continue_task(task_uuid, total_iterations, device_uuid)
        return jsonify({})

    @app.route('/finish/<string:task_uuid>')
    def finish(task_uuid):
        controller.finish_task(task_uuid)
        return jsonify({})

    @app.route('/reorder_task/<string:task_uuid>/<int:new_index>')
    def reorder_task(task_uuid, new_index):
        controller.reorder_task(task_uuid, new_index)
        return jsonify({})

    @app.route('/edit_param/<string:param_uuid>', methods=['POST'])
    def edit_param(param_uuid):
        new_data = json.loads(request.form.get('data'))
        controller.edit_param(param_uuid, new_data)
        return jsonify({})

    @app.route('/edit_param_value/<string:param_uuid>/<string:param_value_uuid>', methods=['POST'])
    def edit_param_value(param_uuid, param_value_uuid):
        new_data = json.loads(request.form.get('data'))
        controller.edit_param_value( param_uuid, param_value_uuid, new_data)
        return jsonify({})

    @app.route('/add_param', methods=['POST'])
    def add_param():
        new_data = json.loads(request.form.get('data'))
        controller.add_param(new_data)
        return jsonify({})

    @app.route('/add_param_batch', methods=['POST'])
    def add_param_batch():
        config = json.loads(request.form.get('data'))["config"]
        controller.add_param_batch(config)
        return jsonify({})

    @app.route('/add_param_value/<string:param_uuid>', methods=['POST'])
    def add_param_value(param_uuid):
        new_data = json.loads(request.form.get('data'))
        controller.add_param_value(param_uuid, new_data)
        return jsonify({})

    @app.route('/change/<string:task_uuid>/<int:total_iterations>')
    def change(task_uuid, total_iterations):
        controller.change_total_iterations(task_uuid, total_iterations)
        return jsonify({})

    @app.route('/tensorboard', methods=['POST'])
    def open_tensorboard():
        data = json.loads(request.form.get('data'))
        return jsonify({"port": controller.open_tensorboard(data["path"])})

    @app.route('/tensorboard_close', methods=['POST'])
    def close_tensorboard():
        data = json.loads(request.form.get('data'))
        return jsonify({"port": controller.close_tensorboard(data["path"])})

    @app.route('/log')
    @app.route('/log/<string:task_uuid>')
    @app.route('/log/<string:task_uuid>/<string:sub_task>')
    def log(task_uuid="", sub_task=""):
        if task_uuid is "":
            return render_template('log.html', task_name="Global")
        else:
            if not controller.task_exists(task_uuid):
                raise Exception("No such task " + task_uuid)
            #task = controller.find_task_by_uuid(task_uuid)
            return render_template('log.html', task_uuid=task_uuid, sub_task=sub_task, task_name="", created=str(""))

    @app.route('/read_log/')
    @app.route('/read_log/<string:task_uuid>')
    def read_log(task_uuid=""):
        if task_uuid is not "":
            path = controller.get_task_dir(task_uuid)
            log_path = str(path / "main.log")
        else:
            log_path = str(Path('.') / "global.log")

        def gen():
            log_uuid = str(uuid.uuid4())
            log_file_lines[log_uuid] = (log_path, [])
            yield "data: " + str(log_uuid) + "\n\n"
            with open(log_path, 'r') as log_file:
                last_sent_lines = -1
                last_sent = time.time()
                lines = 0
                while not log_file.closed:
                    start_pos = log_file.tell()
                    line = log_file.readline()
                    if not line or lines > 33554400 // 20:
                        time.sleep(1)
                    else:
                        lines += 1
                        log_file_lines[log_uuid][1].append(start_pos)

                    if lines != last_sent_lines and time.time() - last_sent > 1:
                        last_sent_lines = lines
                        last_sent = time.time()
                        print(last_sent_lines)
                        yield "data: " + str(last_sent_lines) + "\n\n"

        return Response(gen(), mimetype="text/event-stream")

    @app.route('/read_log_lines/<string:log_uuid>/<int:start_line>/<int:end_line>')
    def read_log_lines(log_uuid, start_line, end_line):
        log_file = open(log_file_lines[log_uuid][0], 'r')
        log_file.seek(log_file_lines[log_uuid][1][start_line])

        lines = []
        for i in range(end_line - start_line + 1):
            lines.append(log_file.readline())

        return jsonify(lines)

    @app.route('/change_max_running/<int:new_max_running>')
    def change_max_running(new_max_running):
        controller.change_max_running_tasks(new_max_running)
        return jsonify({})

    @app.route('/fetch_code_version/<string:commit_id>')
    def fetch_code_version(commit_id):
        return jsonify(controller.fetch_code_version(commit_id))

    @app.route('/set_version_label/<string:commit_id>/')
    @app.route('/set_version_label/<string:commit_id>/<string:label>')
    def set_version_label(commit_id, label=""):
        controller.set_version_label(commit_id, label)
        return jsonify({})

    @app.route('/hard_reset/<string:commit_id>')
    def reset_hard(commit_id):
        return jsonify(controller.reset_hard(commit_id))

    @app.route('/soft_reset/<string:commit_id>')
    def reset_soft(commit_id):
        return jsonify(controller.reset_soft(commit_id))

    @app.route('/config/param_value', methods=['POST'])
    @app.route('/config/param_value/<string:param_value_uuid>', methods=['POST'])
    def config_param_value(param_value_uuid=None):
        base_uuid = json.loads(request.form.get('data'))["bases"]
        return jsonify(controller.config_param_value(base_uuid[0] if len(base_uuid) > 0 and base_uuid[0] != "" else None, param_value_uuid))

    @app.route('/config/existing_task/<string:task_uuid>', methods=['POST'])
    def config_existing_task(task_uuid):
        return jsonify(controller.existing_task_config(task_uuid))

    @app.route('/config/task', methods=['POST'])
    def config_task():
        param_value_uuids = json.loads(request.form.get('data'))["bases"]
        return jsonify(controller.task_config(param_value_uuids))

    @app.route('/clone_task/<string:task_uuid>')
    def clone_task(task_uuid):
        controller.clone_task(task_uuid)

        return jsonify({})

    @app.route('/set_task_notes/<string:task_uuid>', methods=['POST'])
    def set_task_notes(task_uuid):
        new_notes = json.loads(request.form.get('data'))["notes"]
        controller.set_task_notes(task_uuid, new_notes)

        return jsonify({})

    @app.route('/extract_checkpoint/<string:task_uuid>/<int:checkpoint_id>')
    def extract_checkpoint(task_uuid, checkpoint_id):
        controller.extract_checkpoint(task_uuid, checkpoint_id)

        return jsonify({})

    @app.route('/reorder_param/<string:param_uuid>/<int:new_index>')
    def reorder_param(param_uuid, new_index):
        controller.reorder_param(param_uuid, new_index)
        return jsonify({})

    @app.route('/force_param/<string:param_uuid>/<int:enabled>')
    def force_param(param_uuid, enabled):
        controller.force_param(param_uuid, enabled == 1)
        return jsonify({})

    @app.route('/connect_device/<string:device_uuid>')
    def connect_device(device_uuid):
        controller.connect_device(device_uuid)
        return jsonify({})


    @app.route('/disconnect_device/<string:device_uuid>')
    def disconnect_device(device_uuid):
        controller.disconnect_device(device_uuid)
        return jsonify({})


    @app.route('/add_device/<string:device_address>')
    def add_device(device_address):
        controller.add_device(device_address)
        return jsonify({})

    @app.route('/create_checkpoint/<string:task_uuid>')
    def create_checkpoint(task_uuid):
        controller.create_checkpoint(task_uuid)
        return jsonify({})

    @app.route('/filter_tasks', methods=['POST'])
    def filter_tasks():
        data = json.loads(request.form.get('data'))
        tasks, metric_superset = controller.filter_tasks(data["filter"], data["collapse"], data["collapse_sorting"], data["collapse_enabled"], data["group"], data["param_sorting"], None, None, data["sort_col"], data["sort_dir"], data["version_in_name"], data["force_param_in_name"])
        return jsonify([tasks, metric_superset])

    @app.route('/task_details/<string:task_uuid>')
    def task_details(task_uuid):
        controller.task_details(task_uuid)
        return jsonify({})

    @app.route('/set_view_path/<string:name>/<string:path>',)
    def set_view_path(name, path):
        controller.set_view_path(name, path)
        return jsonify({})

    @app.route('/remove_view_path/<string:name>')
    def remove_view_path(name):
        controller.remove_view_path(name)
        return jsonify({})

    @app.route('/add_view', methods=['POST'])
    def add_view():
        data = json.loads(request.form.get('data'))
        path = data["name"]
        del data["name"]
        controller.add_view(path, data)
        return jsonify({})

    @app.route('/delete_view', methods=['POST'])
    def delete_view():
        data = json.loads(request.form.get('data'))
        controller.delete_view(data["path"])
        return jsonify({})

    @app.route('/set_tags/<string:task_uuid>', methods=['POST'])
    def set_tags(task_uuid):
        data = json.loads(request.form.get('data'))
        controller.set_tags(task_uuid, data["tags"])
        return jsonify({})

    @app.route('/fetch_metrics/<string:task_uuid>')
    def fetch_metrics(task_uuid):
        metrics = controller.fetch_metrics(task_uuid)
        return jsonify(metrics)


    app.register_blueprint(main_bp)
    app.register_blueprint(table_bp)
    return app, controller
