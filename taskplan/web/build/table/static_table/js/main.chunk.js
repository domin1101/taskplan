(window["webpackJsonpweb"] = window["webpackJsonpweb"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/less/table.less":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-7-1!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--6-oneOf-7-3!./src/less/table.less ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #757575;\n  line-height: 1.15;\n  background: #FAFAFA;\n}\nhtml,\nbody,\n#root,\n#root > #page,\n#root > #page > .container > .row,\n#root > #page > .container > .row > div,\n#root > #page > .container > .row > div > #scheduler {\n  height: 100%;\n}\n#root > #page > .container {\n  height: calc(100% - 39px);\n  max-width: none;\n}\n#root > #page > .container > .row > div:first-child {\n  padding-right: 0;\n}\n#root > .container > .row > div:last-child {\n  padding-left: 0;\n}\nh1 {\n  font-size: 80px;\n  font-weight: 300;\n  line-height: 1;\n  margin-bottom: 40px;\n}\nh2 {\n  font-size: 30px;\n  font-weight: 400;\n  line-height: 40px;\n  margin-bottom: 15px;\n}\n.buttons {\n  display: flex;\n}\n.buttons div {\n  background: rgba(158, 158, 158, 0.2);\n  padding: 6px 10px;\n  border-radius: 2px;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n.buttons div:first-child {\n  background: #3f51b5;\n  color: white;\n  margin-right: 10px;\n}\n.buttons div:last-child {\n  margin-right: 0;\n}\nlabel {\n  margin-bottom: 0;\n}\n.separator {\n  margin: 0 5px;\n}\n.editor.task-editor {\n  flex: 1 1;\n}\n.editor .header {\n  padding: 5px 16px;\n  background: rgba(158, 158, 158, 0.2);\n}\n.editor .iterations {\n  margin: 10px 16px;\n  margin-bottom: 0;\n  display: flex;\n}\n.editor .iterations .iteration,\n.editor .iterations .new-iteration {\n  background: rgba(158, 158, 158, 0.05);\n  padding: 5px 10px;\n  margin-right: 5px;\n  cursor: pointer;\n  border: 1px solid rgba(158, 158, 158, 0.2);\n  border-bottom: 0;\n}\n.editor .iterations .iteration.iteration-current {\n  background: #3f51b5;\n  color: white;\n}\n.editor .field {\n  margin: 10px 16px;\n}\n.editor .param-filter {\n  margin: 30px 16px;\n  margin-top: 0;\n}\n.editor .field {\n  display: flex;\n  align-items: center;\n  justify-content: stretch;\n}\n.editor .field label {\n  margin: 0;\n  width: 150px;\n}\n.editor .field input,\n.editor .field select {\n  flex: 2 1;\n  padding-left: 5px;\n}\n.editor .field input[type=\"checkbox\"] {\n  flex: none;\n}\n.editor .jsoneditor {\n  width: calc(100% - 32px);\n  resize: vertical;\n  margin: 16px;\n  height: 250px;\n  border-color: #3f51b5;\n}\n.editor .jsoneditor-readOnly .jsoneditor {\n  border-color: rgba(158, 158, 158, 0.2);\n  height: auto;\n}\n.editor .jsoneditor-readOnly .ace-jsoneditor .ace_marker-layer .ace_active-line,\n.editor .jsoneditor-readOnly .ace-jsoneditor .ace_gutter-active-line {\n  background-color: inherit;\n}\n.editor .jsoneditor-readOnly .ace-jsoneditor .ace_scroller {\n  background-color: rgba(158, 158, 158, 0.1);\n}\n.editor .jsoneditor-readOnly .ace_cursor-layer {\n  display: none;\n}\n.editor .editor-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 250px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 16px;\n}\n.editor .jsoneditor div.jsoneditor-menu {\n  background-color: #3f51b5;\n  border-color: #3f51b5;\n}\n.task-editor .command {\n  cursor: pointer;\n}\n.slide-editor {\n  position: absolute;\n  width: 400px;\n  left: -400px;\n  top: 0;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fafafa;\n  height: 100%;\n  animation: slide-in 0.4s ease;\n  overflow-y: auto;\n}\n@keyframes slide-in {\n  0% {\n    transform: translateX(400px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.slide-editor .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.slide-editor .header i {\n  padding: 2px 10px;\n  margin: -2px -10px;\n}\n.task-viewer .title,\n.task-viewer .metadata,\n.task-viewer h2,\n.task-viewer .notes,\n.task-viewer .params,\n.task-viewer .checkpoints,\n.task-viewer .code-versions,\n.code-version-viewer .metadata {\n  margin: 10px 16px;\n}\n.task-viewer .title {\n  font-weight: 300;\n  font-size: 20px;\n}\n.task-viewer .title .try-number {\n  background: rgba(158, 158, 158, 0.2);\n  padding: 4px 10px;\n  margin-right: 10px;\n  display: inline-block;\n  line-height: 1;\n  font-size: 18px;\n  vertical-align: top;\n}\n.task-viewer .metadata,\n.task-viewer .params {\n  font-weight: 300;\n}\n.task-viewer .metadata div,\n.task-viewer .params div {\n  margin-bottom: 5px;\n}\n.task-viewer .metadata div:first-child {\n  margin: 10px 0;\n}\n.task-viewer .metadata div span,\n.task-viewer .params div span {\n  font-weight: 400;\n  display: inline-block;\n  width: 150px;\n}\n.code-version-viewer .metadata {\n  font-weight: 300;\n}\n.code-version-viewer .metadata div {\n  margin-bottom: 10px;\n}\n.code-version-viewer .metadata div:first-child {\n  margin: 10px 0;\n}\n.code-version-viewer .metadata div span {\n  font-weight: 400;\n  display: block;\n  margin-bottom: 5px;\n}\n.code-version-viewer .buttons div:first-child {\n  background: rgba(158, 158, 158, 0.2);\n  color: inherit;\n}\n.task-viewer h2 {\n  font-weight: 300;\n  font-size: 24px;\n}\n.task-viewer .checkpoints {\n  max-height: 300px;\n  overflow: auto;\n}\n.task-viewer .checkpoints > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin-bottom: 5px;\n  align-items: center;\n}\n.task-viewer .checkpoints > div .iteration {\n  background: rgba(158, 158, 158, 0.2);\n}\n.task-viewer .checkpoints > div .action {\n  background: #3f51b5;\n  cursor: pointer;\n  color: white;\n}\n.task-viewer .checkpoints > div .iteration,\n.task-viewer .checkpoints > div .action {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.task-viewer .checkpoints > div .time {\n  font-weight: 300;\n}\n.task-viewer .code-versions {\n  max-height: 300px;\n  overflow: auto;\n}\n.task-viewer .code-versions > div {\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin-bottom: 5px;\n  align-items: center;\n  cursor: pointer;\n}\n.task-viewer .code-versions > div .iteration {\n  background: rgba(158, 158, 158, 0.2);\n}\n.task-viewer .code-versions > div .iteration {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.task-viewer .code-versions > div .name {\n  font-weight: 300;\n  margin-left: 10px;\n}\n.task-viewer textarea {\n  width: 100%;\n}\n.task-viewer .ace_editor {\n  min-height: 250px;\n}\n.task-viewer .notes textarea {\n  min-height: 50px;\n}\n.task-viewer .tags-edit {\n  margin-bottom: 15px;\n}\n.task-viewer .tags-edit > div {\n  margin: 0 16px;\n}\n.code-version-viewer {\n  display: flex;\n  flex-direction: column;\n}\n.code-version-viewer .code-versions {\n  overflow: auto;\n}\n.code-version-viewer .code-versions .code-version-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.code-version-viewer .code-versions .code-version-row .code-version-branch-arrow {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.code-version-viewer .code-versions .code-version {\n  background: rgba(158, 158, 158, 0.1);\n  margin: 5px 0;\n  max-width: 300px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  flex: 1 1 auto;\n}\n.code-version-viewer .code-versions .code-version.current-code-version {\n  background: #3f51b5;\n  color: white;\n}\n.code-version-viewer .code-versions .code-version .name {\n  background: rgba(0, 0, 0, 0.05);\n  font-weight: 300;\n  padding: 5px 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.code-version-viewer .code-versions .code-version .time {\n  font-size: 12px;\n  text-align: center;\n  padding: 2px 0;\n}\n.code-version-viewer .code-versions .arrow {\n  text-align: center;\n  font-size: 20px;\n}\n.param-viewer label {\n  display: flex;\n  align-items: center;\n  margin: 10px 16px;\n}\n.param-viewer label input {\n  margin-right: 10px;\n}\n.param-viewer .param-filter {\n  margin: 10px 16px;\n  max-height: none;\n}\n.prompt-wrapper {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n.prompt-wrapper .prompt {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background: white;\n  max-width: 300px;\n  border-radius: 2px;\n}\n.prompt-wrapper .prompt.param-prompt {\n  max-width: 600px;\n  width: 600px;\n}\n.prompt-wrapper .prompt .prompt-header {\n  background: #3f51b5;\n  padding: 5px 16px;\n  color: white;\n}\n.prompt-wrapper .prompt .prompt-text {\n  font-size: 14px;\n  padding: 16px;\n  padding-bottom: 0;\n}\n.prompt-wrapper .prompt > input,\n.prompt-wrapper .prompt > select {\n  margin: 10px 16px 0 16px;\n  text-align: right;\n  width: calc(100% - 32px);\n}\n.prompt-wrapper .jsoneditor {\n  width: calc(100% - 32px);\n  margin: 10px 16px 16px 16px;\n  height: 250px;\n  border-color: #3f51b5;\n}\n.prompt-wrapper .jsoneditor div.jsoneditor-menu {\n  background-color: #3f51b5;\n  border-color: #3f51b5;\n}\n.editor .buttons,\n.prompt-wrapper .prompt .buttons {\n  display: flex;\n  justify-content: flex-end;\n  margin: 16px 16px 16px 16px;\n}\n.prompt-wrapper .prompt .param-filter .param-name {\n  cursor: pointer;\n}\n.param-filter {\n  border: 1px solid rgba(158, 158, 158, 0.2);\n  border-bottom: none;\n  max-height: 350px;\n  overflow: auto;\n}\n.param-filter .param-name {\n  background: rgba(158, 158, 158, 0.05);\n  padding: 5px 10px;\n  display: flex;\n  overflow: hidden;\n  justify-content: space-between;\n  align-items: center;\n}\n.param-filter .param-name.param-name-selected {\n  background: #3f51b5;\n  color: white;\n}\n.param-filter .param-name i {\n  cursor: pointer;\n}\n.param-filter .param-name.param-name-collapsed {\n  border-bottom: 1px solid rgba(158, 158, 158, 0.2);\n}\n.param-filter .param-name.param-name-expanded {\n  justify-content: space-between;\n}\n.param-filter .param-name .param-value-hint,\n.param-filter .param-name .all-button {\n  border-radius: 2px;\n  font-weight: 600;\n  padding: 0 5px;\n  background: #ececec;\n}\n.param-filter .param-name .param-value-hint {\n  margin-left: 10px;\n}\n.param-filter .param-name .all-button {\n  cursor: pointer;\n}\n.param-filter .param-name .all-button.all-button-activated {\n  background: #3f51b5;\n  color: white;\n}\n.param-filter .param-values {\n  border-top: 1px solid rgba(158, 158, 158, 0.2);\n  border-bottom: 1px solid rgba(158, 158, 158, 0.2);\n  overflow-y: auto;\n}\n.param-filter .param-values .param-value {\n  padding: 10px;\n  white-space: nowrap;\n}\n.param-filter .param-values .param-value {\n  background: white;\n  cursor: pointer;\n}\n.param-filter .param-values .param-value-selected.param-value {\n  background: #3f51b5;\n  color: white;\n}\n.param-filter .param-values {\n  display: flex;\n}\n.param-filter .param-values .param-value {\n  border-right: 1px solid rgba(158, 158, 158, 0.2);\n}\n.param-filter .param-values .param-value.param-value-default {\n  font-weight: 500;\n}\n.param-filter .param-values .param-value .task-numbers {\n  margin-left: 10px;\n  background: #ededed;\n  border-radius: 2px;\n  color: #1c1c1c;\n  font-weight: 300;\n  padding: 0 2px;\n}\n.param-filter .param-values .param-value input {\n  padding: 0;\n  border: 1px solid rgba(158, 158, 158, 0.2);\n}\n.param-filter .group-header {\n  cursor: pointer;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: white;\n  font-weight: 300;\n  justify-content: center;\n  font-size: 24px;\n  padding: 0 0 0 16px;\n  text-transform: uppercase;\n}\n.param-viewer > input {\n  width: calc(100% - 32px);\n  margin: 10px 16px;\n  display: flex;\n}\n.param-viewer .table-cols {\n  display: flex;\n}\n.param-viewer .table-cols .table-col {\n  flex: 1 1;\n  margin: 10px;\n}\n.param-viewer .table-cols .table-col .table-col-entry {\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 5px 0;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  cursor: grab;\n}\n.param-viewer .table-cols .table-col .table-col-dummy {\n  height: 30px;\n  margin: 5px 0;\n}\n.param-viewer .table-cols .table-col .table-col-dummy.on-drag-over,\n.param-viewer .table-cols .table-col .table-col-entry.on-drag-over {\n  border: 3px dashed #3f51b5;\n  box-shadow: none;\n}\n.param-viewer .table-cols .table-col .table-col-entry i {\n  margin-left: 5px;\n  cursor: pointer;\n}\n.param-viewer .table-cols .table-col .table-col-entry div {\n  flex: 2 1;\n}\n.param-viewer .param-filter:empty {\n  border: none;\n}\n#project-manager #projects .project .param-viewer .param-filter ul,\n.param-viewer .param-filter ul {\n  padding: 0;\n  margin-bottom: 0;\n}\n#project-manager #projects .project .param-viewer .param-filter ul .item,\n.param-viewer .param-filter ul .item {\n  list-style: none;\n}\n#project-manager #projects .project .param-viewer .param-filter ul .item-param .header,\n.param-viewer .param-filter ul .item-param .header {\n  height: auto;\n  padding: 5px 10px;\n  background: rgba(158, 158, 158, 0.05);\n  cursor: grab;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n#project-manager #projects .project .param-viewer .param-filter ul .item-param.on-drag-over,\n.param-viewer .param-filter ul .item-param.on-drag-over {\n  border: 3px dashed #3f51b5;\n  box-shadow: none;\n}\n#project-manager #projects .project .param-viewer .param-filter ul .item-param.on-drag-over .header,\n.param-viewer .param-filter ul .item-param.on-drag-over .header {\n  visibility: hidden;\n}\n#project-manager #projects .project .param-viewer .param-filter ul .item-param .header .title,\n.param-viewer .param-filter ul .item-param .header .title {\n  font-size: initial;\n  font-weight: initial;\n}\n#project-manager #projects .project .param-viewer .param-filter ul .item-param .header .grip-icon,\n.param-viewer .param-filter ul .item-param .header .grip-icon {\n  height: auto;\n  width: auto;\n}\n.param-viewer .param-filter .tb-link,\n.param-viewer .param-filter .tb-link-active {\n  background: #888888;\n  color: white;\n  border-radius: 2px;\n  padding: 0 3px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.param-viewer .param-filter .fa-folder-plus,\n.param-viewer .param-filter .fa-folder-minus,\n.param-viewer .param-filter .fa-arrow-alt-circle-up {\n  margin-right: 5px;\n}\n.param-viewer .param-filter .tb-link-active {\n  background: #F57C00;\n}\n.param-viewer .param-filter .tb-link-icon {\n  margin-right: 5px;\n  color: #F57C00;\n  font-size: 10pt;\n}\n.param-viewer .param-filter {\n  max-height: 500px;\n  overflow-y: auto;\n}\n#root > #page > .container {\n  height: 100%;\n}\n.task-table-wrapper {\n  flex: 2 1;\n  overflow: auto;\n}\n.task-table {\n  width: calc(100% - 1px);\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.task-table th {\n  position: -webkit-sticky;\n  position: sticky;\n  background: white;\n  top: 0;\n  padding: 5px 10px;\n}\n.task-table th,\n.task-table td {\n  border-bottom: 1px solid rgba(158, 158, 158, 0.2);\n}\n.task-table th i {\n  cursor: pointer;\n  margin-left: 5px;\n}\n.task-table .table-row:nth-child(odd) {\n  background: rgba(158, 158, 158, 0.05);\n}\n.task-table .table-row td {\n  padding: 10px;\n}\n.task-table .table-row.group-header {\n  padding: 10px;\n  background: rgba(158, 158, 158, 0.2);\n  border: 1px solid #d9d9d9;\n  border-left: 0;\n  cursor: pointer;\n  border-right: 0;\n}\n.task-table .table-row.group-header .title {\n  align-items: end;\n}\n.task-table .table-row.group-header .title i {\n  margin-right: 5px;\n  font-size: 20px;\n}\n.task-table .task-table-header .sort-active {\n  color: #3f51b5;\n}\n.task-table .collapse-toggle {\n  padding: 5px;\n  background: #e5e5e5;\n  font-weight: 300;\n  cursor: pointer;\n  font-size: 12px;\n}\n.task-table .collapse-toggle > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task-table .collapse-toggle > div i {\n  margin-right: 5px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/fonts/fonts.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/fonts/fonts.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./Roboto-300-cyrillic-ext1.woff2 */ "./src/fonts/Roboto-300-cyrillic-ext1.woff2"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./Roboto-300-cyrillic2.woff2 */ "./src/fonts/Roboto-300-cyrillic2.woff2"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./Roboto-300-greek-ext3.woff2 */ "./src/fonts/Roboto-300-greek-ext3.woff2"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./Roboto-300-greek4.woff2 */ "./src/fonts/Roboto-300-greek4.woff2"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ./Roboto-300-vietnamese5.woff2 */ "./src/fonts/Roboto-300-vietnamese5.woff2"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ./Roboto-300-latin-ext6.woff2 */ "./src/fonts/Roboto-300-latin-ext6.woff2"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ./Roboto-300-latin7.woff2 */ "./src/fonts/Roboto-300-latin7.woff2"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ./Roboto-400-cyrillic-ext8.woff2 */ "./src/fonts/Roboto-400-cyrillic-ext8.woff2"));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ./Roboto-400-cyrillic9.woff2 */ "./src/fonts/Roboto-400-cyrillic9.woff2"));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ./Roboto-400-greek-ext10.woff2 */ "./src/fonts/Roboto-400-greek-ext10.woff2"));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(/*! ./Roboto-400-greek11.woff2 */ "./src/fonts/Roboto-400-greek11.woff2"));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(/*! ./Roboto-400-vietnamese12.woff2 */ "./src/fonts/Roboto-400-vietnamese12.woff2"));
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(/*! ./Roboto-400-latin-ext13.woff2 */ "./src/fonts/Roboto-400-latin-ext13.woff2"));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(/*! ./Roboto-400-latin14.woff2 */ "./src/fonts/Roboto-400-latin14.woff2"));
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(/*! ./Roboto-500-cyrillic-ext15.woff2 */ "./src/fonts/Roboto-500-cyrillic-ext15.woff2"));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(/*! ./Roboto-500-cyrillic16.woff2 */ "./src/fonts/Roboto-500-cyrillic16.woff2"));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(/*! ./Roboto-500-greek-ext17.woff2 */ "./src/fonts/Roboto-500-greek-ext17.woff2"));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(/*! ./Roboto-500-greek18.woff2 */ "./src/fonts/Roboto-500-greek18.woff2"));
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(/*! ./Roboto-500-vietnamese19.woff2 */ "./src/fonts/Roboto-500-vietnamese19.woff2"));
var ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(/*! ./Roboto-500-latin-ext20.woff2 */ "./src/fonts/Roboto-500-latin-ext20.woff2"));
var ___CSS_LOADER_URL___20___ = urlEscape(__webpack_require__(/*! ./Roboto-500-latin21.woff2 */ "./src/fonts/Roboto-500-latin21.woff2"));
var ___CSS_LOADER_URL___21___ = urlEscape(__webpack_require__(/*! ./Roboto-700-cyrillic-ext22.woff2 */ "./src/fonts/Roboto-700-cyrillic-ext22.woff2"));
var ___CSS_LOADER_URL___22___ = urlEscape(__webpack_require__(/*! ./Roboto-700-cyrillic23.woff2 */ "./src/fonts/Roboto-700-cyrillic23.woff2"));
var ___CSS_LOADER_URL___23___ = urlEscape(__webpack_require__(/*! ./Roboto-700-greek-ext24.woff2 */ "./src/fonts/Roboto-700-greek-ext24.woff2"));
var ___CSS_LOADER_URL___24___ = urlEscape(__webpack_require__(/*! ./Roboto-700-greek25.woff2 */ "./src/fonts/Roboto-700-greek25.woff2"));
var ___CSS_LOADER_URL___25___ = urlEscape(__webpack_require__(/*! ./Roboto-700-vietnamese26.woff2 */ "./src/fonts/Roboto-700-vietnamese26.woff2"));
var ___CSS_LOADER_URL___26___ = urlEscape(__webpack_require__(/*! ./Roboto-700-latin-ext27.woff2 */ "./src/fonts/Roboto-700-latin-ext27.woff2"));
var ___CSS_LOADER_URL___27___ = urlEscape(__webpack_require__(/*! ./Roboto-700-latin28.woff2 */ "./src/fonts/Roboto-700-latin28.woff2"));

// Module
exports.push([module.i, "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(" + ___CSS_LOADER_URL___0___ + ") format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(" + ___CSS_LOADER_URL___1___ + ") format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(" + ___CSS_LOADER_URL___2___ + ") format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(" + ___CSS_LOADER_URL___3___ + ") format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(" + ___CSS_LOADER_URL___4___ + ") format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(" + ___CSS_LOADER_URL___5___ + ") format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(" + ___CSS_LOADER_URL___6___ + ") format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(" + ___CSS_LOADER_URL___7___ + ") format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(" + ___CSS_LOADER_URL___8___ + ") format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(" + ___CSS_LOADER_URL___9___ + ") format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(" + ___CSS_LOADER_URL___10___ + ") format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(" + ___CSS_LOADER_URL___11___ + ") format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(" + ___CSS_LOADER_URL___12___ + ") format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(" + ___CSS_LOADER_URL___13___ + ") format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(" + ___CSS_LOADER_URL___14___ + ") format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(" + ___CSS_LOADER_URL___15___ + ") format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(" + ___CSS_LOADER_URL___16___ + ") format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(" + ___CSS_LOADER_URL___17___ + ") format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(" + ___CSS_LOADER_URL___18___ + ") format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(" + ___CSS_LOADER_URL___19___ + ") format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(" + ___CSS_LOADER_URL___20___ + ") format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(" + ___CSS_LOADER_URL___21___ + ") format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(" + ___CSS_LOADER_URL___22___ + ") format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(" + ___CSS_LOADER_URL___23___ + ") format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(" + ___CSS_LOADER_URL___24___ + ") format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(" + ___CSS_LOADER_URL___25___ + ") format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(" + ___CSS_LOADER_URL___26___ + ") format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(" + ___CSS_LOADER_URL___27___ + ") format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n", ""]);



/***/ }),

/***/ "./src/CollapsedTasks.js":
/*!*******************************!*\
  !*** ./src/CollapsedTasks.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PausedTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PausedTask */ "./src/PausedTask.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/CollapsedTasks.js";




class CollapsedTasks extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    let tasks = Object.values(this.props.tasks); //.filter(task => task.task !== null);

    if (tasks.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: tasks[0].uuid,
        height: 102,
        offset: [0, 0],
        scrollContainer: ".project",
        resize: true,
        overflow: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PausedTask__WEBPACK_IMPORTED_MODULE_1__["default"], {
        uuid: tasks[0].uuid,
        rerunTask: this.props.rerunTask,
        editTask: this.props.editTask,
        task: tasks[0].task,
        metrics: tasks[0].metrics,
        name: !this.state.collapsed ? tasks[0].collapsed_name === undefined ? tasks[0].name : tasks[0].name.slice(0, -1).concat(tasks[0].collapsed_name, tasks[0].name.slice(-1)) : tasks[0].name,
        showTask: this.props.showTask,
        highlight: tasks[0].uuid === this.props.highlightedTask,
        filterLikeTask: this.props.filterLikeTask,
        devices: this.props.devices,
        detailCol: this.props.detailCol,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), tasks.length > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "collapse-toggle",
        onClick: this.toggleCollapsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.state.collapsed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-double-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), " ", "Expand (" + (tasks.length - 1) + ")") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-double-up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), " Collapse")), !this.state.collapsed && tasks.slice(1).map(task => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: tasks.uuid,
        height: 102,
        offset: [0, 0],
        scrollContainer: ".project",
        resize: true,
        overflow: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PausedTask__WEBPACK_IMPORTED_MODULE_1__["default"], {
        uuid: task.uuid,
        rerunTask: this.props.rerunTask,
        task: task.task,
        name: task.collapsed_name === undefined ? task.name : task.name.slice(0, -1).concat(task.collapsed_name, task.name.slice(-1)),
        showTask: this.props.showTask,
        highlight: task.uuid === this.props.highlightedTask,
        filterLikeTask: this.props.filterLikeTask,
        devices: this.props.devices,
        detailCol: this.props.detailCol,
        metrics: task.metrics,
        collapsed: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }))));
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CollapsedTasks);

/***/ }),

/***/ "./src/ConfigEditor.js":
/*!*****************************!*\
  !*** ./src/ConfigEditor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _JsonEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JsonEditor */ "./src/JsonEditor.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ConfigEditor.js";



class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {},
      inheritedConfig: {},
      loadedUrl: null,
      dataJsonString: ''
    };
    this.jsonEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.url !== this.props.url || JSON.stringify(prevProps.bases) !== JSON.stringify(this.props.bases)) this.reload();
  }

  componentDidMount() {
    this.setState({
      loadedUrl: null
    });
    this.reload();
  }

  reload() {
    if (this.props.url === "") {
      if (this.state.loadedUrl !== this.props.url) {
        this.setState({
          config: {},
          inheritedConfig: {},
          loadedUrl: this.props.url
        });
        if (this.jsonEditor.current !== null) this.jsonEditor.current.updateEditor();
      }
    } else {
      var dataJson = {};
      dataJson['bases'] = this.props.bases;
      let dataJsonString = JSON.stringify(dataJson);

      if (this.state.loadedUrl !== this.props.url || this.state.dataJsonString !== dataJsonString) {
        var data = new FormData();
        data.append("data", dataJsonString);
        fetch(this.props.url, {
          method: "POST",
          body: data
        }).then(res => res.json()).then(result => {
          if (result['param_visibility'] !== undefined) this.props.onParamVisibilityChanged(result['param_visibility']);
          this.setState({
            inheritedConfig: result['inherited_config'],
            config: result['config'] !== null ? result['config'] : this.state.config,
            loadedUrl: this.props.url,
            dataJsonString: dataJsonString
          });
          this.jsonEditor.current.updateEditor();
          if (this.props.onDynamicChange !== undefined) this.props.onDynamicChange(result['dynamic']);
        }, error => {});
      }
    }
  }

  onChange(data) {
    this.setState({
      config: data
    });
  }

  render() {
    if (this.state.loadedUrl === this.props.url) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JsonEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: this.jsonEditor,
      json: this.state.config,
      inheritedJson: this.state.inheritedConfig,
      onChange: this.onChange,
      options: this.props.preview ? {
        mode: 'code',
        modes: ['code'],
        readOnly: true,
        mainMenuBar: false,
        statusBar: false
      } : {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    });else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "editor-loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-sync fa-spin fa-2x",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ConfigEditor);

/***/ }),

/***/ "./src/Device.js":
/*!***********************!*\
  !*** ./src/Device.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global */ "./src/Global.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/Device.js";




class Device extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      max_running: 1,
      showQueue: false
    };
    this.openMaxRunningDialog = this.openMaxRunningDialog.bind(this);
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.toggleQueue = this.toggleQueue.bind(this);
  }

  openMaxRunningDialog() {
    this.openMaxRunningDialogRefs.current.openDialog();
  }

  connect() {
    fetch("/connect_device/" + this.props.device.uuid).then(res => res.json()).then(result => {});
  }

  disconnect() {
    fetch("/disconnect_device/" + this.props.device.uuid).then(res => res.json()).then(result => {});
  }

  toggleQueue() {
    this.setState({
      showQueue: !this.state.showQueue
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "device",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, this.props.device.name), this.props.device.is_connected === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.connect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Connect"), this.props.device.is_connected === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.disconnect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Disconnect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hide-device",
      onClick: () => this.props.hideDevice(this.props.device),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-times",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, this.props.device.is_connected !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "tasks",
      id: "tasks-running",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, this.props.tasks.filter(task => task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].RUNNING).length === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "mock-task",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Idle"), this.props.tasks.filter(task => task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].RUNNING).map((task, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_2__["default"], {
      editTask: this.props.editTask,
      key: task.uuid,
      task: task,
      index: index,
      highlightTask: this.props.highlightTask,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "queue-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.toggleQueue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, this.state.showQueue ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-minus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-plus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })), "Waiting (", this.props.tasks.filter(task => task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].QUEUED).length, ")"), this.state.showQueue && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "tasks tasks-queued",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, this.props.tasks.filter(task => task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].QUEUED).sort(function (a, b) {
      return a.queue_index - b.queue_index;
    }).map((task, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_2__["default"], {
      editTask: this.props.editTask,
      key: task.uuid,
      task: task,
      index: index,
      highlightTask: this.props.highlightTask,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Device);

/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var State = {
  INIT: 0,
  QUEUED: 1,
  RUNNING: 2,
  STOPPED: 3
};

Date.prototype.toShortStr = function () {
  function pad(n) {
    n = parseInt(n);
    return n < 10 ? "0" + n : n;
  }

  return this.getDate() + "." + (this.getMonth() + 1) + " - " + pad(this.getHours()) + ":" + pad(this.getMinutes());
};

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ "./src/GroupedTasks.js":
/*!*****************************!*\
  !*** ./src/GroupedTasks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./src/Prompt.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Global */ "./src/Global.js");
/* harmony import */ var _ReassuringPrompt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReassuringPrompt */ "./src/ReassuringPrompt.js");
/* harmony import */ var _PausedTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PausedTask */ "./src/PausedTask.js");
/* harmony import */ var _CollapsedTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CollapsedTasks */ "./src/CollapsedTasks.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/GroupedTasks.js";








class GroupedTasks extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: {}
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed(group) {
    let collapsed = Object.assign({}, this.state.collapsed);
    if (!(group in collapsed)) collapsed[group] = true;else collapsed[group] = !collapsed[group];
    this.setState({
      collapsed: collapsed
    });
  }

  render() {
    if (Object.values(this.props.tasks).length > 0) {
      if (this.props.tasks instanceof Array) {
        //console.log(this.props.tasks);
        return this.props.tasks.map((tasks, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CollapsedTasks__WEBPACK_IMPORTED_MODULE_6__["default"], {
          tasks: tasks,
          key: tasks[0] !== null ? tasks[0].uuid : i,
          rerunTask: this.props.rerunTask,
          editTask: this.props.editTask,
          showTask: this.props.showTask,
          filterLikeTask: this.props.filterLikeTask,
          devices: this.props.devices,
          detailCol: this.props.detailCol,
          highlightedTask: this.props.highlightedTask,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }));
      } else {
        return Object.keys(this.props.tasks).sort((a, b) => a.localeCompare(b)).map(group => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: group,
          className: "param-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "group-header",
          onClick: () => this.toggleCollapsed(group),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, !(group in this.state.collapsed) || !this.state.collapsed[group] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-caret-down",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-caret-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), group)), (!(group in this.state.collapsed) || !this.state.collapsed[group]) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "group-tasks",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedTasks, {
          tasks: this.props.tasks[group],
          rerunTask: this.props.rerunTask,
          editTask: this.props.editTask,
          showTask: this.props.showTask,
          filterLikeTask: this.props.filterLikeTask,
          devices: this.props.devices,
          detailCol: this.props.detailCol,
          highlightedTask: this.props.highlightedTask,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }))));
      }
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GroupedTasks);

/***/ }),

/***/ "./src/JsonEditor.js":
/*!***************************!*\
  !*** ./src/JsonEditor.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsoneditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsoneditor */ "./node_modules/jsoneditor/index.js");
/* harmony import */ var jsoneditor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsoneditor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jsoneditor_react_es_editor_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsoneditor-react/es/editor.min.css */ "./node_modules/jsoneditor-react/es/editor.min.css");
/* harmony import */ var jsoneditor_react_es_editor_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsoneditor_react_es_editor_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! brace */ "./node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! brace/mode/json */ "./node_modules/brace/mode/json.js");
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(brace_mode_json__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/JsonEditor.js";










var stringify = __webpack_require__(/*! json-stable-stringify */ "./node_modules/json-stable-stringify/index.js");

var Node = __webpack_require__(/*! jsoneditor/src/js/Node */ "./node_modules/jsoneditor/src/js/Node.js");

var originalUpdateDom = Node.prototype.updateDom;

Node.prototype.updateDom = function (options) {
  originalUpdateDom.call(this, options);
  var tdRevert = this.dom.tdRevert;

  if (!tdRevert && this.dom && this.dom.tr && this.fieldEditable && (this.type === "auto" || this.type === "array" || this.type === "string")) {
    tdRevert = document.createElement('td');
    this.dom.tdRevert = tdRevert;
    this.dom.tdValue.parentNode.appendChild(tdRevert);
    var icon = document.createElement('i');
    icon.type = 'i';
    icon.className = 'fas fa-undo-alt';
    var button = document.createElement('div');
    button.type = 'div';
    button.className = 'revert';

    button.onclick = () => {
      this.editor.options.onRevert({
        path: this.getPath(),
        field: this.field,
        value: this.value
      });
    };

    button.appendChild(icon);
    tdRevert.appendChild(button);
  }
};

jsoneditor__WEBPACK_IMPORTED_MODULE_5___default.a.VALID_OPTIONS.push('onRevert');
console.log(Node);

class JsonEditor extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    const options = {};

    options.onModeChange = mode => {
      this.updateEditor();
      if (mode === "tree") this.jsoneditor.expandAll();
    };

    options.onClassName = node => {
      if (this.pathExistsInJson(node.path, this.props.inheritedJson) && !this.pathExistsInJson(node.path, this.props.json)) {
        return 'inherited-value';
      } else if (!this.pathExistsInJson(node.path, this.props.inheritedJson) && this.pathExistsInJson(node.path, this.props.json)) {
        return 'new-value';
      }

      return undefined;
    };

    options.onEditable = node => {
      if (this.pathExistsInJson(node.path, this.props.inheritedJson)) {
        return {
          "field": false,
          "value": true
        };
      } else {
        return {
          "field": true,
          "value": true
        };
      }
    };

    options.onChange = () => {
      if (this.jsoneditor.getMode() === "code") {
        try {
          const currentJson = this.jsoneditor.get();

          if (this.props.json !== currentJson) {
            this.props.onChange(currentJson);
          }
        } catch (err) {
          this.err = err;
        }
      }
    };

    options.onChangeJSON = json => {
      if (this.jsoneditor.getMode() === "tree") {
        var newJson = {};
        this.updateFromJsonEditor(newJson, this.props.json, this.props.inheritedJson, json, []);
        this.props.onChange(newJson);
        console.log(newJson);
      }
    };

    options.onRevert = node => {
      var newJson = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(this.props.json);
      var currentBlock = newJson;
      var prevBlocks = [newJson];

      for (var i = 0; i < node.path.length; i++) {
        if (i === node.path.length - 1) {
          delete currentBlock[node.path[i]];
        } else {
          currentBlock = currentBlock[node.path[i]];
          prevBlocks.push(currentBlock);
        }
      }

      for (var i = node.path.length - 2; i >= 0; i--) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(prevBlocks[i][node.path[i]])) {
          delete prevBlocks[i][node.path[i]];
        } else {
          break;
        }
      }

      this.props.onChange(newJson);
      this.updateEditor();
    };

    options.mode = 'mode' in this.props.options ? this.props.options.mode : 'code';
    options.modes = 'modes' in this.props.options ? this.props.options.modes : ['code', 'tree'];
    options.ace = brace__WEBPACK_IMPORTED_MODULE_7___default.a;
    options.history = false;
    options.enableSort = false;
    options.enableTransform = false;
    options.mainMenuBar = 'mainMenuBar' in this.props.options ? this.props.options.mainMenuBar : true;
    options.statusBar = 'statusBar' in this.props.options ? this.props.options.statusBar : true;
    this.jsoneditor = new jsoneditor__WEBPACK_IMPORTED_MODULE_5___default.a(this.container, options);

    if ('readOnly' in this.props.options && this.props.options.readOnly) {
      this.jsoneditor.aceEditor.setReadOnly(true);
    }

    if ('json' in this.props) {
      this.updateEditor();
      if (options.mode === 'tree') this.jsoneditor.expandAll();
    }
  }

  updateFromJsonEditor(newJson, oldJson, inheritedJson, editorJson, path) {
    for (var prop in editorJson) {
      if (typeof editorJson[prop] === "object" && !Array.isArray(editorJson[prop]) && Object.keys(editorJson[prop]).length > 0) {
        this.updateFromJsonEditor(newJson, prop in oldJson ? oldJson[prop] : {}, prop in inheritedJson ? inheritedJson[prop] : {}, editorJson[prop], path.concat([prop]));
      } else {
        if (prop in inheritedJson && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(inheritedJson[prop], editorJson[prop]) || !(prop in inheritedJson) || prop in oldJson) {
          this.setValueAtPath(newJson, path.concat([prop]), editorJson[prop]);
        }
      }
    }
  }

  pathExistsInJson(path, json) {
    if (!path) {
      return false;
    }

    var currentBlock = json;

    for (var i = 0; i < path.length; i++) {
      if (i === path.length - 1) {
        return path[i] in currentBlock;
      } else {
        if (!(path[i] in currentBlock)) {
          return false;
        }

        currentBlock = currentBlock[path[i]];
      }
    }

    return false;
  }

  setValueAtPath(json, path, value) {
    var currentBlock = json;

    for (var i = 0; i < path.length; i++) {
      if (i === path.length - 1) {
        currentBlock[path[i]] = value;
      } else {
        if (!(path[i] in currentBlock)) {
          currentBlock[path[i]] = {};
        }

        currentBlock = currentBlock[path[i]];
      }
    }
  }

  componentDidUpdate() {}

  updateEditor() {
    if (this.jsoneditor.getMode() === "code") {
      this.jsoneditor.setText(stringify(this.props.json, {
        space: '  '
      }));
    } else {
      var mergedJson = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(this.props.inheritedJson);
      lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(mergedJson, this.props.json);
      this.jsoneditor.setText(stringify(mergedJson, {
        space: '  '
      }));
    }
  }

  componentWillUnmount() {
    if (this.jsoneditor) {
      this.jsoneditor.destroy();
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "jsoneditor-react-container" + ('readOnly' in this.props.options && this.props.options.readOnly ? ' jsoneditor-readOnly' : ''),
      ref: elem => this.container = elem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (JsonEditor);

/***/ }),

/***/ "./src/Param.js":
/*!**********************!*\
  !*** ./src/Param.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParamValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParamValue */ "./src/ParamValue.js");
/* harmony import */ var _ReassuringPrompt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReassuringPrompt */ "./src/ReassuringPrompt.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/Param.js";




class Param extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideParamValues: true
    };
    this.toggleHideParamValues = this.toggleHideParamValues.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.reassuringRemovePromptRefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.paramRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.dragEnterCounter = 0;
  }

  toggleHideParamValues() {
    this.setState({
      hideParamValues: !this.state.hideParamValues
    });
  }

  onDragStart(e) {
    e.dataTransfer.setData("text/plain", this.props.param.uuid);
  }

  onDragOver(e) {
    if (this.props.sortMode && this.props.param.uuid !== e.dataTransfer.getData("text/plain")) {
      e.preventDefault();
    }
  }

  onDrop(e) {
    if (this.props.sortMode && this.props.param.uuid !== e.dataTransfer.getData("text/plain")) {
      e.preventDefault();
      this.props.reorderParam(e.dataTransfer.getData("text/plain"), this.props.param);
      this.dragEnterCounter = 0;
      this.paramRef.current.className = "item item-param";
    }
  }

  onDragEnter(e) {
    if (this.props.sortMode && this.props.param.uuid !== e.dataTransfer.getData("text/plain")) {
      e.preventDefault();
      this.paramRef.current.className = "item item-param on-drag-over";
      this.dragEnterCounter++;
    }
  }

  onDragLeave(e) {
    if (this.props.sortMode && this.props.param.uuid !== e.dataTransfer.getData("text/plain")) {
      e.preventDefault();
      this.dragEnterCounter--;
      if (this.dragEnterCounter === 0) this.paramRef.current.className = "item item-param";
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      ref: this.paramRef,
      className: "item item-param",
      onDragOver: this.onDragOver,
      onDragLeave: this.onDragLeave,
      onDragEnter: this.onDragEnter,
      onDrop: this.onDrop,
      onDragStart: this.onDragStart,
      draggable: this.props.sortMode ? "true" : "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header",
      onClick: () => this.toggleHideParamValues(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, this.props.sortMode && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      title: "Always show parameter in default names",
      style: {
        "margin-right": "5px"
      },
      checked: this.props.forceInName,
      onChange: e => this.props.onChangeForceParamInName(e, this.props.param.uuid),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, this.props.sortMode ? this.props.param.group.concat([this.props.param.name]).join(" / ") : this.props.param.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        "flex": "2 1 auto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), !this.props.sortMode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "toolbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: e => {
        this.props.newParamValueFunc(this.props.param, this.props.param.values);
        e.stopPropagation();
      },
      title: "New parameter value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-plus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: e => {
        this.props.editParamFunc(this.props.param);
        e.stopPropagation();
      },
      title: "Edit parameter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-edit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })), this.props.param.values.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: () => this.reassuringRemovePromptRefs.current.openDialog(),
      title: "Remove parameter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-trash-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action action-disabled",
      title: "Parameter cannot be removed, as it still has values.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-trash-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "toolbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grip-icon",
      title: "Move param in ordering for default naming",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-bars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })))), !this.state.hideParamValues && !this.props.sortMode && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, this.props.param.values.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }).map(value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamValue__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: value.uuid,
      paramValue: value,
      param: this.props.param,
      editFunc: this.props.editParamValueFunc,
      removable: Object.values(value.number_of_tasks).map(x => x[0]).reduce((accumulator, currentValue) => accumulator + currentValue, 0) === 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReassuringPrompt__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: this.reassuringRemovePromptRefs,
      header: "Really want to delete?",
      text: "Do you really want to remove this parameter?",
      url: "/remove_param/" + this.props.param.uuid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Param);

/***/ }),

/***/ "./src/ParamBatchEditor.js":
/*!*********************************!*\
  !*** ./src/ParamBatchEditor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigEditor */ "./src/ConfigEditor.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ParamBatchEditor.js";



class ParamBatchEditor extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.configEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
  }

  open() {
    this.props.closeEditors();
    this.setState({
      open: true
    });
  }

  close() {
    this.setState({
      open: false
    });
  }

  save() {
    var data = new FormData();
    var dataJson = {};
    dataJson['config'] = this.configEditor.current.state.config;
    data.append("data", JSON.stringify(dataJson));
    var url = "/add_param_batch";
    fetch(url, {
      method: "POST",
      body: data
    }).then(res => res.json()).then(result => {}, error => {});
    this.close();
  }

  render() {
    if (this.state.open) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "param-batch-editor editor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Add multiple parameters"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ref: this.configEditor,
        url: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.save,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Cancel")));
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParamBatchEditor);

/***/ }),

/***/ "./src/ParamEditor.js":
/*!****************************!*\
  !*** ./src/ParamEditor.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ParamEditor.js";


class ParamEditor extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      param: null,
      name: '',
      deprecatedParamValue: '',
      defaultParamValue: '',
      condition: ''
    };
    this.configEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
    this.new = this.new.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onConditionChange = this.onConditionChange.bind(this);
    this.onDeprecatedParamValueChange = this.onDeprecatedParamValueChange.bind(this);
    this.onDefaultParamValueChange = this.onDefaultParamValueChange.bind(this);
  }

  open(param) {
    this.props.closeEditors();
    this.setState({
      param: param,
      name: param.name,
      condition: param.condition,
      deprecatedParamValue: param.deprecated_param_value.uuid === undefined ? param.values[0].uuid : param.deprecated_param_value.uuid,
      defaultParamValue: param.default_param_value.uuid === undefined ? param.values[0].uuid : param.default_param_value.uuid
    });
  }

  new() {
    this.props.closeEditors();
    this.setState({
      param: {
        name: 'New parameter',
        values: []
      },
      name: '',
      condition: '',
      deprecatedParamValue: '',
      defaultParamValue: ''
    });
  }

  close() {
    this.setState({
      param: null
    });
  }

  save() {
    var data = new FormData();
    var dataJson = {};
    dataJson['name'] = this.state.name;
    dataJson['condition'] = this.state.condition;
    dataJson['deprecated_param_value'] = this.state.deprecatedParamValue;
    dataJson['default_param_value'] = this.state.defaultParamValue;
    dataJson['config'] = {};
    data.append("data", JSON.stringify(dataJson));
    var url = "";
    if (this.state.param.uuid) url = "/edit_param/" + this.state.param.uuid;else url = "/add_param";
    fetch(url, {
      method: "POST",
      body: data
    }).then(res => res.json()).then(result => {}, error => {});
    this.close();
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  onConditionChange(event) {
    this.setState({
      condition: event.target.value
    });
  }

  onDeprecatedParamValueChange(event) {
    this.setState({
      deprecatedParamValue: event.target.value
    });
  }

  onDefaultParamValueChange(event) {
    this.setState({
      defaultParamValue: event.target.value
    });
  }

  render() {
    if (this.state.param !== null) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "param-editor editor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, this.state.param.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.name,
        onChange: this.onNameChange,
        required: "required",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), this.state.param.values.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Parameter value for deprecated tasks:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.state.deprecatedParamValue,
        onChange: this.onDeprecatedParamValueChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.param.values.map(value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: value.uuid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, value.name)))), this.state.param.values.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Default parameter value for new tasks:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.state.defaultParamValue,
        onChange: this.onDefaultParamValueChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, this.state.param.values.map(value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: value.uuid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, value.name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Condition:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.condition,
        onChange: this.onConditionChange,
        required: "required",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.save,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Cancel")));
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParamEditor);

/***/ }),

/***/ "./src/ParamFilter.js":
/*!****************************!*\
  !*** ./src/ParamFilter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ParamFilter.js";


class ParamFilterParam extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.mapValueToValues = this.mapValueToValues.bind(this);
    this.calcParamValueName = this.calcParamValueName.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  calcParamValueName(paramValue, args) {
    let name = paramValue.name;

    for (let i = 0; i < args.length; i++) {
      name = name.replace("$T" + i + "$", args[i]);
    }

    return name;
  }

  calcParamValueClasses(param, value) {
    let classes = "param-value ";

    if (this.props.selectMultiple) {
      const paramValue = [value.uuid, ...value.args];
      if (!(param.uuid in this.props.selectedParamValues) || param.uuid in this.props.selectedParamValues && this.props.selectedParamValues[param.uuid].findIndex(selection => selection.length === paramValue.length && selection.every((value, index) => value === paramValue[index])) !== -1) classes += "param-value-selected ";
    } else {
      if (param.uuid in this.props.selectedParamValues && this.props.selectedParamValues[param.uuid][0] === value.uuid && (!("resolvedName" in value) || this.calcParamValueName(value, this.props.selectedParamValues[param.uuid].slice(1)) === value.resolvedName)) classes += "param-value-selected ";
    }

    if (param.default_param_value.uuid === value.uuid) classes += "param-value-default ";
    return classes;
  }

  mapValueToValues(paramValue) {
    if (!this.props.useTemplateFields) {
      let paramValues = [];

      for (let name in paramValue.number_of_tasks) paramValues.push({
        "uuid": paramValue.uuid,
        "name": paramValue.name,
        "resolvedName": name,
        "numberOfTasks": paramValue.number_of_tasks[name][0],
        "args": paramValue.number_of_tasks[name][1]
      });

      return paramValues;
    } else {
      return [{
        "uuid": paramValue.uuid,
        "name": paramValue.name,
        "resolvedName": paramValue.name,
        "numberOfTasks": null,
        "args": []
      }];
    }
  }

  toggleAll(evt) {
    this.props.toggleSelection(this.props.param, null, []);
    evt.stopPropagation();
  }

  getSelectedValues() {
    if (!(this.props.param.uuid in this.props.selectedParamValues)) return ["All"];else if (this.props.selectedParamValues[this.props.param.uuid].length === 0) return ["None"];else {
      let selectedParamValues = this.props.selectedParamValues[this.props.param.uuid];
      if (!this.props.selectMultiple) selectedParamValues = [selectedParamValues];
      let values = [];

      for (let selection of selectedParamValues) {
        const paramValue = this.props.param.values.find(value => value.uuid === selection[0]);
        values.push(this.calcParamValueName(paramValue, selection.slice(1)));
      }

      return values;
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: this.props.param.uuid,
      className: "param",
      style: this.props.spaceBelow && {
        "margin-bottom": "5px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.expanded ? "param-name param-name-expanded" : "param-name param-name-collapsed",
      onClick: () => this.props.toggleExpandedParam(this.props.param.uuid),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, this.props.param.name, this.props.expanded ? this.props.selectMultiple && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: !(this.props.param.uuid in this.props.selectedParamValues) ? "all-button all-button-activated" : "all-button",
      onClick: this.toggleAll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "All") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "param-value-hints",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, this.getSelectedValues().map(paramValue => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "param-value-hint",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, paramValue)))), this.props.expanded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "param-values-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "param-values",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, this.props.param.values.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }).map(paramValue => !paramValue.isTemplate || !this.props.useTemplateFields ? this.mapValueToValues(paramValue).map(value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: value.uuid,
      className: this.calcParamValueClasses(this.props.param, value),
      onClick: () => this.props.toggleSelection(this.props.param, value, value.args),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, value.resolvedName, value.numberOfTasks !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "task-numbers",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, value.numberOfTasks)))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: paramValue.uuid,
      className: this.calcParamValueClasses(this.props.param, paramValue),
      onClick: () => this.props.toggleSelection(this.props.param, paramValue, [this.props.getParamValueArg(this.props.param, paramValue)]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, paramValue.name.split("$T0$")[0], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: this.props.getParamValueArg(this.props.param, paramValue),
      style: {
        "width": Math.max(10, 10 * this.props.getParamValueArg(this.props.param, paramValue).toString().length) + "px"
      },
      onChange: evt => this.props.onParamValueArgChange(this.props.param, paramValue, evt),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }), paramValue.name.split("$T0$")[1]))))));
  }

}

class ParamFilter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      paramValueArguments: {},
      expandedParam: null
    };
    this.onParamValueArgChange = this.onParamValueArgChange.bind(this);
    this.getParamValueArg = this.getParamValueArg.bind(this);
    this.toggleExpandedParam = this.toggleExpandedParam.bind(this);
  }

  onParamValueArgChange(param, value, evt) {
    const paramValueArguments = Object.assign({}, this.state.paramValueArguments);
    paramValueArguments[value.uuid] = evt.target.value;
    this.props.toggleSelection(param, value, evt.target.value);
    this.setState({
      paramValueArguments: paramValueArguments
    });
  }

  getParamValueArg(param, value) {
    if (param.uuid in this.props.selectedParamValues && this.props.selectedParamValues[param.uuid].length > 1) {
      if (!(value.uuid in this.state.paramValueArguments) || this.state.paramValueArguments[value.uuid] !== this.props.selectedParamValues[param.uuid][1]) {
        const paramValueArguments = Object.assign({}, this.state.paramValueArguments);
        paramValueArguments[value.uuid] = this.props.selectedParamValues[param.uuid][1];
        this.setState({
          paramValueArguments: paramValueArguments
        });
      }

      return this.props.selectedParamValues[param.uuid][1];
    } else if (value.uuid in this.state.paramValueArguments) return this.state.paramValueArguments[value.uuid];else if (value.template_defaults.length > 0) return value.template_defaults[0];else return null;
  }

  toggleExpandedParam(param) {
    this.setState({
      expandedParam: param === this.state.expandedParam ? null : param
    });
  }

  render() {
    let tagsParam = null;

    if (this.props.tags !== undefined && this.props.tags.length > 0) {
      tagsParam = {
        "uuid": "tags",
        "name": "tags",
        "deprecated_param_value": this.props.tags[0],
        "default_param_value": this.props.tags[0],
        "values": []
      };
      tagsParam["values"] = [];

      for (const tag of this.props.tags) {
        tagsParam["values"].push({
          "name": tag,
          "uuid": tag,
          "number_of_tasks": {
            [tag]: [null, []]
          }
        });
      }
    }

    let versionsParam = null;

    if (this.props.codeVersions !== undefined && this.props.codeVersions.length > 0) {
      versionsParam = {
        "uuid": "versions",
        "name": "versions",
        "deprecated_param_value": "test",
        "default_param_value": "test",
        "values": []
      };
      versionsParam["values"] = [];

      for (const version of this.props.codeVersions) {
        versionsParam["values"].push({
          "name": version,
          "uuid": version,
          "number_of_tasks": {
            [version]: [null, []]
          }
        });
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, versionsParam !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "param-filter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParamFilterParam, {
      param: versionsParam,
      useTemplateFields: this.props.useTemplateFields,
      toggleSelection: this.props.toggleSelection,
      selectedParamValues: this.props.selectedParamValues,
      getParamValueArg: this.getParamValueArg,
      selectMultiple: this.props.selectMultiple,
      expanded: "versions" === this.state.expandedParam,
      toggleExpandedParam: this.toggleExpandedParam,
      onParamValueArgChange: this.onParamValueArgChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    })), tagsParam !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "param-filter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParamFilterParam, {
      param: tagsParam,
      useTemplateFields: this.props.useTemplateFields,
      toggleSelection: this.props.toggleSelection,
      selectedParamValues: this.props.selectedParamValues,
      getParamValueArg: this.getParamValueArg,
      selectMultiple: this.props.selectMultiple,
      expanded: "tags" === this.state.expandedParam,
      toggleExpandedParam: this.toggleExpandedParam,
      onParamValueArgChange: this.onParamValueArgChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "param-filter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, Object.keys(this.props.paramsByGroup).sort((a, b) => a.localeCompare(b)).map(group => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: group,
      className: "param-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, group !== "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "group-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, group)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "params",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "params",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, this.props.paramsByGroup[group].sort((a, b) => a.name.localeCompare(b.name)).filter(param => param.values.length > 0 && (this.props.paramVisibility === undefined || !(param.uuid in this.props.paramVisibility) || this.props.paramVisibility[param.uuid])).map(param => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParamFilterParam, {
      param: param,
      useTemplateFields: this.props.useTemplateFields,
      toggleSelection: this.props.toggleSelection,
      selectedParamValues: this.props.selectedParamValues,
      getParamValueArg: this.getParamValueArg,
      selectMultiple: this.props.selectMultiple,
      expanded: param.uuid === this.state.expandedParam,
      toggleExpandedParam: this.toggleExpandedParam,
      onParamValueArgChange: this.onParamValueArgChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParamFilter);

/***/ }),

/***/ "./src/ParamGroup.js":
/*!***************************!*\
  !*** ./src/ParamGroup.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Param__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Param */ "./src/Param.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ParamGroup.js";



class ParamGroup extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideParamValue: false
    };
    this.toggleHideParamValues = this.toggleHideParamValues.bind(this);
  }

  toggleHideParamValues() {
    this.setState({
      hideParamValue: !this.state.hideParamValue
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "item item-param",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, this.props.group !== "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "group-header",
      onClick: () => this.toggleHideParamValues(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, this.props.group)), !this.state.hideParamValue && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, this.props.params.sort((a, b) => a.name.localeCompare(b.name)).map(param => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Param__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: param.uuid,
      param: param,
      editParamFunc: this.props.editParamFunc,
      editParamValueFunc: this.props.editParamValueFunc,
      newParamValueFunc: this.props.newParamValueFunc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParamGroup);

/***/ }),

/***/ "./src/ParamSelection.js":
/*!*******************************!*\
  !*** ./src/ParamSelection.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigEditor */ "./src/ConfigEditor.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ParamSelection.js";



class ParamSelection extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      selectedParams: []
    };
    this.configEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.selectParam = this.selectParam.bind(this);
    this.sendSelection = this.sendSelection.bind(this);
  }

  selectParam(param) {
    if (this.props.selectMultiple) {
      let selectedParams = this.state.selectedParams.slice();
      let index = selectedParams.indexOf(param);

      if (index === -1) {
        selectedParams.push(param);
      } else {
        selectedParams.splice(index, 1);
      }

      this.setState({
        selectedParams: selectedParams
      });
    } else {
      this.props.onSelect(param);
      this.closeDialog();
    }
  }

  openDialog() {
    this.setState({
      dialogOpen: true,
      device: this.props.devices ? this.props.devices[0].uuid : null,
      selectedParams: []
    });
  }

  closeDialog() {
    this.setState({
      dialogOpen: false
    });
  }

  sendSelection() {
    this.props.onSelect(this.state.selectedParams);
    this.closeDialog();
  }

  render() {
    if (this.state.dialogOpen) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prompt-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.paramEditor ? 'prompt param-prompt' : 'prompt',
        style: {
          "width": "300px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prompt-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, this.props.header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "param-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, Object.keys(this.props.paramsByGroup).sort((a, b) => a.localeCompare(b)).map(group => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: group,
        className: "param-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, group !== "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "group-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, group)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "params",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "params",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.props.paramsByGroup[group].sort((a, b) => a.name.localeCompare(b.name)).filter(param => param.values.length > 0).map(param => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: param.uuid,
        className: "param",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "param-name param-name-collapsed " + (this.state.selectedParams.indexOf(param) !== -1 ? " param-name-selected" : ""),
        onClick: () => this.selectParam(param),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, param.name)))))))), this.props.selectMultiple && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.sendSelection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Ok"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.closeDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Cancel"))));
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParamSelection);

/***/ }),

/***/ "./src/ParamTab.js":
/*!*************************!*\
  !*** ./src/ParamTab.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Param__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Param */ "./src/Param.js");
/* harmony import */ var _ParamEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParamEditor */ "./src/ParamEditor.js");
/* harmony import */ var _ParamValueEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ParamValueEditor */ "./src/ParamValueEditor.js");
/* harmony import */ var _ParamBatchEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ParamBatchEditor */ "./src/ParamBatchEditor.js");
/* harmony import */ var _ParamGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ParamGroup */ "./src/ParamGroup.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ParamTab.js";







class ParamTab extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbstract: true
    };
    this.toggleShowAbstract = this.toggleShowAbstract.bind(this);
    this.addParam = this.addParam.bind(this);
    this.addParamBatch = this.addParamBatch.bind(this);
    this.closeEditors = this.closeEditors.bind(this);
    this.reorderParam = this.reorderParam.bind(this);
    this.onChangeForceParamInName = this.onChangeForceParamInName.bind(this);
    this.paramEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.paramBatchEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.paramValueEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  toggleShowAbstract() {
    this.setState({
      showAbstract: !this.state.showAbstract
    });
  }

  closeEditors() {
    this.paramEditor.current.close();
    this.paramBatchEditor.current.close();
    this.paramValueEditor.current.close();
  }

  addParam() {
    this.paramEditor.current.new();
  }

  addParamBatch() {
    this.paramBatchEditor.current.open();
  }

  addParamValue(param) {
    this.paramValueEditor.current.new(param);
  }

  reorderParam(param_uuid, target_param) {
    fetch("/reorder_param/" + param_uuid + "/" + target_param.sorting).then(res => res.json()).then(result => {}, error => {});
  }

  onChangeForceParamInName(e, param_uuid) {
    fetch("/force_param/" + param_uuid + "/" + (e.target.checked ? "1" : "0")).then(res => res.json()).then(result => {}, error => {});
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tab",
      style: {
        'display': this.props.active ? 'flex' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "params-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, this.props.paramSortingMode ? this.props.params.sort((a, b) => a.sorting - b.sorting).map(param => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Param__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: param.uuid,
      param: param,
      sortMode: true,
      reorderParam: this.reorderParam,
      forceInName: param.force,
      onChangeForceParamInName: this.onChangeForceParamInName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })) : Object.keys(this.props.paramsByGroup).sort((a, b) => a.localeCompare(b)).map(group => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: group,
      params: this.props.paramsByGroup[group],
      group: group,
      sorting: this.props.sorting[0],
      sortingDescending: this.props.sorting[1],
      editParamFunc: this.paramEditor.current.open,
      editParamValueFunc: this.paramValueEditor.current.open,
      newParamValueFunc: this.paramValueEditor.current.new,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamEditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: this.paramEditor,
      closeEditors: this.closeEditors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamValueEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref: this.paramValueEditor,
      closeEditors: this.closeEditors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamBatchEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: this.paramBatchEditor,
      closeEditors: this.closeEditors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tab-toolbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      defaultChecked: this.state.showAbstract,
      onChange: this.toggleShowAbstract,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Show abstract parameter values")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.addParam,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Add parameter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.addParamBatch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Add batch"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParamTab);

/***/ }),

/***/ "./src/ParamValue.js":
/*!***************************!*\
  !*** ./src/ParamValue.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReassuringPrompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReassuringPrompt */ "./src/ReassuringPrompt.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ParamValue.js";



class ParamValue extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.reassuringRemovePromptRefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: this.props.paramValue.abstract ? "item item-abstract item-param-value" : "item item-param-value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, this.props.paramValue.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.paramValue.base !== "" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Inherits from:"), " ", this.props.paramValue.base) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Created:"), " ", this.props.paramValue.creation_time.toShortStr()))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "toolbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: () => this.props.editFunc(this.props.paramValue, true, this.props.param, this.props.param.values),
      title: "Clone parameter value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-copy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: () => this.props.editFunc(this.props.paramValue, false, this.props.param, this.props.param.values),
      title: "Edit parameter value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-edit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-ellipsis-h",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, this.props.removable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: () => this.reassuringRemovePromptRefs.current.openDialog(),
      title: "Remove parameter value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-trash-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action action-disabled",
      title: "Parameter value cannot be removed, as there are tasks using it.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-trash-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReassuringPrompt__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: this.reassuringRemovePromptRefs,
      header: "Really want to delete?",
      text: "Do you really want to remove this parameter value?",
      url: "/remove_param_value/" + this.props.paramValue.uuid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParamValue);

/***/ }),

/***/ "./src/ParamValueEditor.js":
/*!*********************************!*\
  !*** ./src/ParamValueEditor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigEditor */ "./src/ConfigEditor.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ParamValueEditor.js";



class ParamValueEditor extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      paramValue: null,
      name: '',
      base: '',
      abstract: false,
      dynamic: false,
      forceDynamic: false,
      possible_base_param_values: [],
      uuid_to_load: null,
      param: null,
      templateDefaults: "",
      templateDeprecated: ""
    };
    this.configEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
    this.new = this.new.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onBaseChange = this.onBaseChange.bind(this);
    this.onAbstractChange = this.onAbstractChange.bind(this);
    this.onDynamicChange = this.onDynamicChange.bind(this);
    this.onIsBaseDynamic = this.onIsBaseDynamic.bind(this);
    this.onTemplateChange = this.onTemplateChange.bind(this);
    this.onTemplateDefaultsChange = this.onTemplateDefaultsChange.bind(this);
    this.onTemplateDeprecatedChange = this.onTemplateDeprecatedChange.bind(this);
  }

  open(paramValue, duplicate, param, possible_base_param_values) {
    this.props.closeEditors();

    if (duplicate) {
      this.setState({
        paramValue: {
          name: paramValue.name
        },
        name: paramValue.name,
        base: paramValue.base_uuid,
        uuid_to_load: paramValue.uuid,
        abstract: paramValue.abstract,
        dynamic: paramValue.dynamic,
        template: paramValue.isTemplate,
        templateDefaults: paramValue.template_defaults,
        templateDeprecated: paramValue.template_deprecated,
        forceDynamic: false,
        param: param,
        possible_base_param_values: possible_base_param_values
      });
    } else {
      this.setState({
        paramValue: paramValue,
        name: paramValue.name,
        base: paramValue.base_uuid,
        uuid_to_load: paramValue.uuid,
        abstract: paramValue.abstract,
        dynamic: paramValue.dynamic,
        template: paramValue.isTemplate,
        templateDefaults: paramValue.template_defaults,
        templateDeprecated: paramValue.template_deprecated,
        forceDynamic: false,
        param: param,
        possible_base_param_values: possible_base_param_values
      });
    }
  }

  new(param, possible_base_param_values) {
    this.props.closeEditors();
    this.setState({
      paramValue: {
        name: 'New parameter value'
      },
      name: '',
      base: '',
      abstract: false,
      dynamic: false,
      uuid_to_load: null,
      forceDynamic: false,
      param: param,
      possible_base_param_values: possible_base_param_values
    });
  }

  close() {
    this.setState({
      paramValue: null
    });
  }

  save() {
    var data = new FormData();
    var dataJson = {};
    if (this.state.name !== "") dataJson['name'] = this.state.name;
    if (this.state.base !== '') dataJson['base'] = this.state.base;
    if (this.state.abstract) dataJson['abstract'] = this.state.abstract;
    if (this.state.dynamic) dataJson['dynamic'] = this.state.dynamic;

    if (this.state.template) {
      dataJson['isTemplate'] = this.state.template;
      dataJson['template_defaults'] = this.state.templateDefaults;
      dataJson['template_deprecated'] = this.state.templateDeprecated;
    }

    dataJson['config'] = this.configEditor.current.state.config;
    data.append("data", JSON.stringify(dataJson));
    var url = "";
    if (this.state.paramValue.uuid) url = "/edit_param_value/" + this.state.param.uuid + "/" + this.state.paramValue.uuid;else url = "/add_param_value/" + this.state.param.uuid;
    fetch(url, {
      method: "POST",
      body: data
    }).then(res => res.json()).then(result => {}, error => {});
    this.close();
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  onBaseChange(event) {
    this.setState({
      base: event.target.value
    });
  }

  onAbstractChange(event) {
    this.setState({
      abstract: event.target.checked
    });
  }

  onDynamicChange(event) {
    this.setState({
      dynamic: event.target.checked
    });
  }

  onIsBaseDynamic(isDynamic) {
    if (isDynamic) {
      this.setState({
        dynamic: true,
        forceDynamic: true
      });
    } else if (this.state.forceDynamic) {
      this.setState({
        dynamic: false,
        forceDynamic: false
      });
    }
  }

  onTemplateChange(event) {
    this.setState({
      template: event.target.checked
    });
  }

  onTemplateDefaultsChange(event) {
    this.setState({
      templateDefaults: [event.target.value]
    });
  }

  onTemplateDeprecatedChange(event) {
    this.setState({
      templateDeprecated: [event.target.value]
    });
  }

  render() {
    if (this.state.paramValue !== null) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "param-value-editor editor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, this.state.paramValue.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.name,
        onChange: this.onNameChange,
        required: "required",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Base:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.state.base,
        onChange: this.onBaseChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "None"), this.state.possible_base_param_values.filter(value => value.uuid !== this.state.uuid_to_load).map(paramValue => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: paramValue.uuid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, paramValue.name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Abstract:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        checked: this.state.abstract,
        onChange: this.onAbstractChange,
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Dynamic:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        checked: this.state.dynamic,
        onChange: this.onDynamicChange,
        type: "checkbox",
        disabled: this.state.forceDynamic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "Template:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        checked: this.state.template,
        onChange: this.onTemplateChange,
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      })), this.state.template && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "Template default:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.templateDefaults[0],
        onChange: this.onTemplateDefaultsChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      })), this.state.template && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Template deprecated:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.templateDeprecated[0],
        onChange: this.onTemplateDeprecatedChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ref: this.configEditor,
        onDynamicChange: this.onIsBaseDynamic,
        url: "/config/param_value" + (this.state.uuid_to_load !== null ? "/" + this.state.uuid_to_load : ""),
        bases: [this.state.base],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.save,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Cancel")));
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParamValueEditor);

/***/ }),

/***/ "./src/ParamViewer.js":
/*!****************************!*\
  !*** ./src/ParamViewer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParamFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParamFilter */ "./src/ParamFilter.js");
/* harmony import */ var _ParamSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParamSelection */ "./src/ParamSelection.js");
/* harmony import */ var _Param__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Param */ "./src/Param.js");
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Prompt */ "./src/Prompt.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ParamViewer.js";






class Column extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.colRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.dragEnterCounter = 0;
  }

  getClassName() {
    return this.props.isDummy ? "table-col-dummy" : "table-col-entry";
  }

  onDragStart(e) {
    e.dataTransfer.setData("text/plain", this.props.col);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(e) {
    if (this.props.allowDrop) {
      e.preventDefault();
      this.props.addCol(e.dataTransfer.getData("text/plain"), this.props.col);
      this.dragEnterCounter = 0;
      this.colRef.current.className = this.getClassName();
    }
  }

  onDragEnter(e) {
    if (this.props.allowDrop) {
      e.preventDefault();
      this.colRef.current.className = this.getClassName() + " on-drag-over";
      this.dragEnterCounter++;
    }
  }

  onDragLeave(e) {
    if (this.props.allowDrop) {
      e.preventDefault();
      this.dragEnterCounter--;
      if (this.dragEnterCounter === 0) this.colRef.current.className = this.getClassName();
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.getClassName(),
      ref: this.colRef,
      onDragOver: this.onDragOver,
      onDragLeave: this.onDragLeave,
      onDragEnter: this.onDragEnter,
      onDrop: this.onDrop,
      onDragStart: this.onDragStart,
      draggable: "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, !this.props.isDummy && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, this.props.col), this.props.removeCol && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-times",
      onClick: () => this.props.removeCol(this.props.col),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })));
  }

}

class ParamViewer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open == true,
      filterSaveName: "",
      viewPath: ""
    };
    this.paramCollapseSelection = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.paramGroupSelection = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleFilterSaveNameChange = this.handleFilterSaveNameChange.bind(this);
    this.handleViewPathChange = this.handleViewPathChange.bind(this);
    this.addView = this.addView.bind(this);
    this.addViewPath = this.addView.bind(this);
    this.removeViewPath = this.removeViewPath.bind(this);
    this.promptViewPathRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.gotoTB = this.gotoTB.bind(this);
  }

  open() {
    this.setState({
      open: true
    });
  }

  close() {
    this.setState({
      open: false
    });
  }

  handleFilterSaveNameChange(event) {
    this.setState({
      filterSaveName: event.target.value
    });
  }

  handleViewPathChange(event) {
    this.setState({
      viewPath: event.target.value
    });
  }

  addView(e, name = "") {
    if (name === "") {
      if (this.state.viewPath !== "") {
        this.props.addView(this.state.viewPath);
        this.setState({
          viewPath: ""
        });
      }
    } else {
      this.props.addView(name);
    }
  }

  deleteView(path) {
    var data = new FormData();
    var dataJson = {};
    dataJson['path'] = path;
    data.append("data", JSON.stringify(dataJson));
    fetch("delete_view", {
      method: "POST",
      body: data
    });
  }

  removeViewPath(name) {
    fetch("remove_view_path/" + name);
  }

  gotoTB(path) {
    if (!(path in this.props.tensorboard_ports)) {
      var data = new FormData();
      var dataJson = {};
      dataJson['path'] = path;
      data.append("data", JSON.stringify(dataJson));
      fetch("/tensorboard", {
        method: "POST",
        body: data
      }).then(res => res.json()).then(result => {
        window.open("//" + window.location.hostname + ":" + result.port, '_blank');
      }, error => {});
    } else {
      window.open("//" + window.location.hostname + ":" + this.props.tensorboard_ports[path], '_blank');
    }
  }

  closeTB(path) {
    var data = new FormData();
    var dataJson = {};
    dataJson['path'] = path;
    data.append("data", JSON.stringify(dataJson));
    fetch("/tensorboard_close", {
      method: "POST",
      body: data
    }).then(res => res.json()).then(result => {}, error => {});
  }

  render() {
    if (this.state.open) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "param-viewer slide-editor editor",
        style: this.props.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "Save / Load", this.props.allowClose && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times",
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "params-to-group param-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, Object.keys(this.props.views).sort().map(name => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "param-name param-name-collapsed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: () => this.props.loadFilter(this.props.views[name]),
        style: {
          "cursor": "pointer"
        },
        title: "Load filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, name, " ", this.props.views[name].path !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          "font-style": "italic"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "(/", this.props.views[name].path, ")")), !this.props.hideViewEdits && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          "flex": "2 1 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }), this.props.views[name].path !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, !(name in this.props.tensorboard_ports) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tb-link",
        onClick: () => this.gotoTB(name),
        title: "Start and open tensorboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "TB") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-link tb-link-icon",
        title: "Open in new tab",
        onClick: () => this.gotoTB(name),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tb-link-active",
        onClick: () => this.closeTB(name),
        title: "Close tensorboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "TB"))), this.props.views[name].path === null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-folder-plus",
        title: "Show in filesystem",
        onClick: () => this.promptViewPathRef.current.openDialog(name),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-folder-minus",
        title: "Remove from filesystem",
        onClick: () => this.removeViewPath(name),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-arrow-alt-circle-up",
        title: "Update filter",
        onClick: () => this.addView(null, name),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times",
        title: "Remove filter",
        onClick: () => this.deleteView(name),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }))))), !this.props.hideViewEdits && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "viewPath",
        value: this.state.viewPath,
        onChange: this.handleViewPathChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons",
        title: "Save current filter with the specified name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.addView,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "Add")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Prompt__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ref: this.promptViewPathRef,
        defaultValue: "",
        header: "Set path of view",
        text: "Specify the path where to store the view:",
        url: "/set_view_path",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamFilter__WEBPACK_IMPORTED_MODULE_1__["default"], {
        tags: this.props.tags,
        codeVersions: this.props.codeVersions,
        selectMultiple: true,
        paramsByGroup: this.props.paramsByGroup,
        selectedParamValues: this.props.selectedParamValues,
        toggleSelection: this.props.toggleSelection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Collapsing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        defaultChecked: this.props.collapseEnabled,
        onChange: this.props.toggleCollapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Enabled")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "params-to-collapse param-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, this.props.collapsedParams.map(param_uuid => this.props.params.find(p => p.uuid === param_uuid)).map(param => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "param-name param-name-collapsed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, param.name, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times",
        onClick: () => this.props.removeParamCollapse(param),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          "display": "flex",
          "align-items": "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Sorting:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.props.collapseSorting[0],
        onChange: this.props.onChangeCollapseSorting,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "saved",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "Saved"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "created",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "iterations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "Iterations"), this.props.metric_superset.map(col => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: col,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, col))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          "margin-left": "5px",
          "cursor": "pointer"
        },
        onClick: this.props.flipCollapseSortingDirection,
        className: this.props.collapseSorting[1] ? "fa fa-sort-amount-down" : "fa fa-sort-amount-up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamSelection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        header: "Select param to collapse",
        ref: this.paramCollapseSelection,
        paramsByGroup: this.props.paramsByGroup,
        onSelect: this.props.addParamCollapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: () => this.paramCollapseSelection.current.openDialog(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "Add")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, "Grouping"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "params-to-group param-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, this.props.groupedParams.map(params => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "param-name param-name-collapsed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, params.map(param_uuid => this.props.params.find(p => p.uuid === param_uuid)).map(param => param.name).join(" / "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times",
        onClick: () => this.props.removeParamGroup(params),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamSelection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        header: "Select params to group",
        selectMultiple: true,
        ref: this.paramGroupSelection,
        paramsByGroup: this.props.paramsByGroup,
        onSelect: this.props.addParamGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: () => this.paramGroupSelection.current.openDialog(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Add")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "Parameter sorting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          "display": "flex",
          "align-items": "center",
          "margin-top": "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "Version:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.props.versionInName,
        onChange: this.props.onChangeVersionInName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "None"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "commit_id",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "Commit id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "Label"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "params-to-collapse param-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "params-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, this.props.params.sort((a, b) => this.props.paramSorting[a.uuid] - this.props.paramSorting[b.uuid]).map(param => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Param__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: param.uuid,
        param: param,
        sortMode: true,
        reorderParam: this.props.reorderParam,
        forceInName: param.uuid in this.props.forceParamInName && this.props.forceParamInName[param.uuid],
        onChangeForceParamInName: this.props.onChangeForceParamInName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      })))), this.props.selectedCols !== undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, "Columns"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table-cols",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table-col-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, "Used:"), this.props.selectedCols.map(col => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
        col: col,
        allowDrop: true,
        removeCol: this.props.removeCol,
        addCol: this.props.addCol,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
        col: null,
        allowDrop: true,
        removeCol: this.props.removeCol,
        addCol: this.props.addCol,
        isDummy: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table-col-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Not used:"), this.props.allCols.filter(col => this.props.selectedCols.findIndex(x => x === col) === -1).map(col => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
        col: col,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }))))));
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParamViewer);

/***/ }),

/***/ "./src/PausedTask.js":
/*!***************************!*\
  !*** ./src/PausedTask.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./src/Prompt.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Global */ "./src/Global.js");
/* harmony import */ var _ReassuringPrompt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReassuringPrompt */ "./src/ReassuringPrompt.js");
/* harmony import */ var _GroupedTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GroupedTasks */ "./src/GroupedTasks.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/PausedTask.js";







class PausedTask extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.reassuringRemovePromptRefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.itemRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.promptExtraRefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.openExtraDialog = this.openExtraDialog.bind(this);
    this.finish = this.finish.bind(this);
    this.openLog = this.openLog.bind(this);
    this.clone = this.clone.bind(this);
    this.pause = this.pause.bind(this);
    this.makeTestPersistent = this.makeTestPersistent.bind(this);
    this.queueCancel = this.queueCancel.bind(this);
  }

  openExtraDialog() {
    this.promptExtraRefs.current.openDialog();
  }

  finish() {
    fetch("/finish/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  openLog() {
    window.open("/log/" + this.props.task.uuid, '_blank');
  }

  clone() {
    fetch("/clone_task/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /*if (prevProps.highlight !== this.props.highlight && this.props.highlight) {
        this.itemRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }*/
  }

  componentDidMount() {
    /*if (this.props.highlight) {
        this.itemRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }*/
    if (this.props.task === null) {
      fetch("/task_details/" + this.props.uuid).then(res => res.json()).then(result => {});
    }
  }

  itemClass() {
    let classname = "item item-task ";
    if (this.props.highlight) classname += "item-highlight ";
    if (this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_3__["default"].RUNNING) classname += "task-running ";else if (this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_3__["default"].QUEUED) classname += "task-queued ";
    if (this.props.collapsed) classname += "item-task-collapsed ";
    return classname;
  }

  pause() {
    fetch("/pause/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  queueCancel() {
    fetch("/cancel/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  createCheckpoint() {
    fetch("/create_checkpoint/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  makeTestPersistent() {
    fetch("/make_test_persistent/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  render() {
    if (this.props.task !== null) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        ref: this.itemRef,
        className: this.itemClass(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "try-number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, this.props.name[this.props.name.length - 1]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_2__["TaskName"], {
        name: this.props.name.slice(0, -1),
        is_test: this.props.task.is_test,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Iterations:"), " ", this.props.task.finished_iterations, " / ", this.props.task.total_iterations), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Created:"), " ", this.props.task.creation_time.toShortStr()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Last saved:"), " ", this.props.task.saved_time.toShortStr(), " ", this.props.task.had_error == true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "task-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "(Error)")), ["name", "saved", "created", "iterations", "started"].findIndex(x => x === this.props.detailCol) === -1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, this.props.detailCol, ":"), " ", this.props.detailCol in this.props.metrics ? this.props.metrics[this.props.detailCol][2].toFixed(3) : "N/A")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, this.props.task.tags.map(tag => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, tag)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "toolbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_3__["default"].RUNNING ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: this.pause,
        title: "Pause task",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pause",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      })) : this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_3__["default"].QUEUED ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: this.queueCancel,
        title: "Remove this task from queue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: this.openExtraDialog,
        title: "Run for more iterations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-play",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: () => this.props.showTask(this.props.task.uuid),
        title: "Show detail information",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-ellipsis-h",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: () => this.props.editTask(this.props.task),
        title: "Edit the task config",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-pencil-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: () => this.props.rerunTask(this.props.task),
        title: "Run new task with the exact same config",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-redo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      })), !this.props.task.is_test && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: () => this.props.filterLikeTask(this.props.task),
        title: "Filter for similar tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-sliders-h",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: this.clone,
        title: "Clone task",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: this.openLog,
        title: "View log",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-file-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: () => this.createCheckpoint(),
        title: "Create checkpoint",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      })), this.props.task.state !== _Global__WEBPACK_IMPORTED_MODULE_3__["default"].RUNNING && this.props.task.state !== _Global__WEBPACK_IMPORTED_MODULE_3__["default"].QUEUED && this.props.task.is_test && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: () => this.makeTestPersistent(),
        title: "Make test run persistent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-infinity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      })), this.props.task.state !== _Global__WEBPACK_IMPORTED_MODULE_3__["default"].RUNNING && this.props.task.state !== _Global__WEBPACK_IMPORTED_MODULE_3__["default"].QUEUED && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action",
        onClick: () => this.reassuringRemovePromptRefs.current.openDialog(),
        title: "Remove task",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-trash-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Prompt__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ref: this.promptExtraRefs,
        devices: this.props.devices,
        defaultValue: this.props.task.total_iterations,
        header: "Change total iterations?",
        text: "Specify the new number of iterations, you want the task to run:",
        url: "/continue/" + this.props.task.uuid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReassuringPrompt__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ref: this.reassuringRemovePromptRefs,
        header: "Really want to delete?",
        text: "Do you really want to remove this task?",
        url: "/remove_task/" + this.props.task.uuid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        ref: this.itemRef,
        className: "item item-task item-task-loading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Loading...");
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PausedTask);

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParamTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParamTab */ "./src/ParamTab.js");
/* harmony import */ var _TaskTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskTab */ "./src/TaskTab.js");
/* harmony import */ var _ParamViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ParamViewer */ "./src/ParamViewer.js");
/* harmony import */ var _TaskContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskContainer */ "./src/TaskContainer.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/Project.js";






class Project extends _TaskContainer__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(props) {
    super(props);
    this.state = {
      params: [],
      paramsByGroup: {},
      tasks: {},
      task_lookup: {},
      activeTab: 0,
      sorting_tasks: ["saved", true],
      sorting_params: [0, false],
      selectedParamValues: {},
      collapsedParams: [],
      groupedParams: [],
      paramSortingMode: false,
      paramSorting: {},
      collapseSorting: ["saved", true],
      metric_superset: [],
      taskTabInitialized: false,
      versionInName: "label",
      showSearchBar: false,
      searchValue: "",
      forceParamInName: {},
      collapseEnabled: false
    };
    this.toggleShowAbstract = this.toggleShowAbstract.bind(this);
    this.showTab = this.showTab.bind(this);
    this.onChangeSorting = this.onChangeSorting.bind(this);
    this.switchSortingDirection = this.switchSortingDirection.bind(this);
    this.openParamViewer = this.openParamViewer.bind(this);
    this.toggleParamSortingMode = this.toggleParamSortingMode.bind(this);
    this.filterLikeTask = this.filterLikeTask.bind(this);
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    this.searchBarKeyDown = this.searchBarKeyDown.bind(this);
    this.addView = this.addView.bind(this);
    this.paramViewerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.taskTabRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  addView(name) {
    var data = new FormData();
    var dataJson = {};
    dataJson['filter'] = this.state.selectedParamValues;
    dataJson['collapse'] = this.state.collapsedParams;
    dataJson['collapse_sorting'] = this.state.collapseSorting;
    dataJson['group'] = this.state.groupedParams;
    dataJson['param_sorting'] = this.state.paramSorting;
    dataJson['sorting_tasks'] = this.state.sorting_tasks;
    dataJson['name'] = name;
    dataJson['path'] = null;
    dataJson['version_in_name'] = this.state.versionInName;
    dataJson['force_param_in_name'] = this.state.forceParamInName;
    dataJson['collapse_enabled'] = this.state.collapseEnabled;
    data.append("data", JSON.stringify(dataJson));
    fetch("add_view", {
      method: "POST",
      body: data
    });
  }

  toggleShowAbstract() {
    this.setState({
      showAbstract: !this.state.showAbstract
    });
  }

  showTab(tab) {
    this.setState({
      activeTab: tab,
      taskTabInitialized: this.state.taskTabInitialized || tab === 1
    });
  }

  onChangeSorting(e) {
    if (this.state.activeTab === 0) {
      const sorting_params = this.state.sorting_params.slice();
      sorting_params[0] = parseInt(e.target.value);
      this.setState({
        sorting_params: sorting_params
      });
    } else {
      const sorting_tasks = this.state.sorting_tasks.slice();
      sorting_tasks[0] = e.target.value;
      this.setState({
        sorting_tasks: sorting_tasks
      }, () => this.filterHasUpdated());
    }
  }

  switchSortingDirection() {
    if (this.state.activeTab === 0) {
      const sorting_params = this.state.sorting_params.slice();
      sorting_params[1] = !sorting_params[1];
      this.setState({
        sorting_params: sorting_params
      });
    } else {
      const sorting_tasks = this.state.sorting_tasks.slice();
      sorting_tasks[1] = !sorting_tasks[1];
      this.setState({
        sorting_tasks: sorting_tasks
      }, () => this.filterHasUpdated());
    }
  }

  filterLikeTask(task) {
    const selectedParamValues = {};

    for (const param of this.state.params) {
      let suitableParamValue = null;
      let args = [];

      for (const value of task.paramValues["0"]) {
        if (value[0].param === param.uuid) {
          suitableParamValue = value[0];
          args = value.slice(1);
          break;
        }
      }

      if (suitableParamValue === null) selectedParamValues[param.uuid] = [[param.deprecated_param_value.uuid, ...param.deprecated_param_value.template_deprecated]];else selectedParamValues[param.uuid] = [[suitableParamValue.uuid, ...args]];
    }

    this.setState({
      selectedParamValues: selectedParamValues
    }, () => this.filterHasUpdated());
    this.openParamViewer();
  }

  editTask(task) {
    this.taskTabRef.current.editTask(task);
  }

  openParamViewer() {
    this.props.closeViewer();
    this.paramViewerRef.current.open();
  }

  toggleParamSortingMode() {
    this.setState({
      paramSortingMode: !this.state.paramSortingMode
    });
  }

  handleSearchValueChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  searchBarKeyDown(e) {
    if (e.keyCode === 13 && this.state.searchValue in this.props.repository.tasks) {
      this.props.showTask(this.state.searchValue);
      this.setState({
        showSearchBar: false
      });
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tabs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.state.activeTab === 0 ? "tab-active" : "",
      onClick: () => this.showTab(0),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, "Parameters"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.state.activeTab === 1 ? "tab-active" : "",
      onClick: () => this.showTab(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "Tasks")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sorting",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, this.state.activeTab === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: this.toggleParamSortingMode,
      className: "fas fa-sort",
      title: "Switch to sorting mode for default naming",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    })), this.state.activeTab === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, "Sorting:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      value: this.state.sorting_tasks[0],
      onChange: this.onChangeSorting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "saved",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "Saved"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "created",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "iterations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "Iterations"), this.state.metric_superset.map(col => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, col))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: this.switchSortingDirection,
      title: "Switch sorting direction",
      className: this.state.sorting_tasks[1] ? "fa fa-sort-amount-down" : "fa fa-sort-amount-up",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas fa-sliders-h",
      title: "Open filter configurator",
      onClick: this.openParamViewer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas fa-sync-alt",
      title: "Update listing",
      onClick: this.filterHasUpdated,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas fa-search",
      title: "Find task by uuid",
      onClick: () => this.setState({
        showSearchBar: !this.state.showSearchBar,
        searchValue: ""
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }))), this.state.showSearchBar && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, "Search:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: this.state.searchValue,
      onKeyDown: this.searchBarKeyDown,
      placeholder: "uuid",
      onChange: this.handleSearchValueChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamTab__WEBPACK_IMPORTED_MODULE_1__["default"], {
      active: this.state.activeTab === 0,
      paramsByGroup: this.state.paramsByGroup,
      sorting: this.state.sorting_params,
      paramSortingMode: this.state.paramSortingMode,
      params: this.state.params,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskTab__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: this.taskTabRef,
      closeViewer: this.props.closeViewer,
      allTags: this.props.allTags,
      active: this.state.activeTab === 1,
      params: this.state.params,
      tasks: this.state.tasks,
      selectedParamValues: this.state.selectedParamValues,
      showTask: this.props.showTask,
      paramsByGroup: this.state.paramsByGroup,
      highlightedTask: this.props.highlightedTask,
      filterLikeTask: this.filterLikeTask,
      devices: this.props.devices,
      detailCol: this.state.collapseSorting[0],
      initialized: this.state.taskTabInitialized,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamViewer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref: this.paramViewerRef,
      paramsByGroup: this.state.paramsByGroup,
      selectedParamValues: this.state.selectedParamValues,
      toggleSelection: this.toggleSelection,
      allowClose: true,
      tags: this.props.allTags,
      codeVersions: this.props.codeVersions,
      params: this.state.params,
      collapsedParams: this.state.collapsedParams,
      addParamCollapse: this.addParamCollapse,
      removeParamCollapse: this.removeParamCollapse,
      groupedParams: this.state.groupedParams,
      addParamGroup: this.addParamGroup,
      removeParamGroup: this.removeParamGroup,
      saveFilter: this.saveFilter,
      loadFilter: this.loadFilter,
      views: this.props.views,
      addView: this.addView,
      paramSorting: this.state.paramSorting,
      reorderParam: this.reorderParam,
      metric_superset: this.state.metric_superset,
      collapseSorting: this.state.collapseSorting,
      onChangeCollapseSorting: this.onChangeCollapseSorting,
      flipCollapseSortingDirection: this.flipCollapseSortingDirection,
      onChangeVersionInName: this.onChangeVersionInName,
      versionInName: this.state.versionInName,
      tensorboard_ports: this.props.tensorboard_ports,
      forceParamInName: this.state.forceParamInName,
      onChangeForceParamInName: this.onChangeForceParamInName,
      collapseEnabled: this.state.collapseEnabled,
      toggleCollapse: this.toggleCollapse,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/Prompt.js":
/*!***********************!*\
  !*** ./src/Prompt.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigEditor */ "./src/ConfigEditor.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/Prompt.js";



class Prompt extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      inputValue: this.props.defaultValue,
      device: null
    };
    this.configEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.start = this.start.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDeviceChange = this.onDeviceChange.bind(this);
  }

  start() {
    this.setState({
      dialogOpen: false
    });

    if (this.props.url) {
      if (this.props.paramEditor) {
        var data = new FormData();
        data.append("data", JSON.stringify(this.configEditor.current.state.config));
        fetch(this.props.url, {
          method: "POST",
          body: data
        }).then(res => res.json()).then(result => {}, error => {});
      } else {
        fetch(this.props.url + (this.props.devices || this.state.device ? "/" + this.state.device : "") + "/" + this.state.inputValue).then(res => res.json()).then(result => {}, error => {});
      }
    } else {
      this.props.onSend(this.state.inputValue);
    }
  }

  onDeviceChange(event) {
    this.setState({
      device: event.target.value
    });
  }

  openDialog(device = null) {
    this.setState({
      dialogOpen: true,
      device: this.props.devices ? this.props.devices[0].uuid : device
    });
  }

  closeDialog() {
    this.setState({
      dialogOpen: false
    });
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.start();
    }

    if (e.keyCode === 27) {
      e.preventDefault();
      this.closeDialog();
    }
  }

  onChange(data) {
    this.setState({
      inputValue: data
    });
  }

  render() {
    if (this.state.dialogOpen) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prompt-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.paramEditor ? 'prompt param-prompt' : 'prompt',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prompt-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, this.props.header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prompt-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, this.props.text), !this.props.paramEditor && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        autoFocus: true,
        onFocus: e => {
          e.target.select();
        },
        type: "text",
        name: "iterations",
        value: this.state.inputValue,
        onChange: evt => this.updateInputValue(evt),
        onKeyDown: this.onKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), this.props.paramEditor && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ref: this.configEditor,
        url: this.props.paramEditorUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), this.props.devices && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.state.device,
        onChange: this.onDeviceChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, this.props.devices.map(device => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: device.uuid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, device.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.start,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Ok"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.closeDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Cancel"))));
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Prompt);

/***/ }),

/***/ "./src/ReassuringPrompt.js":
/*!*********************************!*\
  !*** ./src/ReassuringPrompt.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/ReassuringPrompt.js";


class ReassuringPrompt extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
    this.execute = this.execute.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  execute() {
    this.setState({
      dialogOpen: false
    });
    fetch(this.props.url).then(res => res.json()).then(result => {
      if (this.props.onSuccess !== undefined) this.props.onSuccess();
    }, error => {});
  }

  openDialog() {
    this.setState({
      dialogOpen: true
    });
  }

  closeDialog() {
    this.setState({
      dialogOpen: false
    });
  }

  render() {
    if (this.state.dialogOpen) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prompt-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prompt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prompt-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, this.props.header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prompt-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.props.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.execute,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Yes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.closeDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "No"))));
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ReassuringPrompt);

/***/ }),

/***/ "./src/Repository.js":
/*!***************************!*\
  !*** ./src/Repository.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Global */ "./src/Global.js");
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scheduler */ "./src/Scheduler.js");



class Repository {
  constructor(evtSource) {
    this.evtSource = evtSource;
    this.params = {};
    this.paramValues = {};
    this.tasks = {};
    this.onChangeListeners = {
      "params": [],
      "paramValues": [],
      "tasks": []
    };
    this.onAddListeners = {
      "params": [],
      "paramValues": [],
      "tasks": []
    };
    this.onRemoveListeners = {
      "params": [],
      "paramValues": [],
      "tasks": []
    };
    this.evtSource.addEventListener("PARAM_CHANGED", e => {
      const changedParam = JSON.parse(e.data);

      if (changedParam.uuid in this.params) {
        changedParam.values = this.params[changedParam.uuid].values;
      } else {
        changedParam.values = [];
      }

      if (changedParam.deprecated_param_value in this.paramValues) changedParam.deprecated_param_value = this.paramValues[changedParam.deprecated_param_value];
      if (changedParam.default_param_value in this.paramValues) changedParam.default_param_value = this.paramValues[changedParam.default_param_value];
      this.updateEntity(this.params, changedParam, "params");
    });
    this.evtSource.addEventListener("PARAM_VALUE_CHANGED", e => {
      const changedParamValue = JSON.parse(e.data);
      changedParamValue.creation_time = new Date(changedParamValue.creation_time * 1000);
      this.updateEntity(this.paramValues, changedParamValue, "paramValues");
      let param = this.params[changedParamValue.param];
      const previousIndex = param.values.findIndex(function (e) {
        return e.uuid === changedParamValue.uuid;
      });

      if (previousIndex >= 0) {
        param.values[previousIndex] = changedParamValue;
      } else {
        param.values.push(changedParamValue);
      }

      this.updateEntity(this.params, param, "params");
      param = Object.values(this.params).find(param => param.deprecated_param_value === changedParamValue.uuid);

      if (param !== undefined) {
        param.deprecated_param_value = changedParamValue;
        this.updateEntity(this.params, param, "params");
      }

      param = Object.values(this.params).find(param => param.default_param_value === changedParamValue.uuid);

      if (param !== undefined) {
        param.default_param_value = changedParamValue;
        this.updateEntity(this.params, param, "params");
      }
    });
    this.evtSource.addEventListener("TASK_CHANGED", e => {
      const changedTask = JSON.parse(e.data);
      changedTask.creation_time = new Date(changedTask.creation_time * 1000);
      changedTask.saved_time = new Date(changedTask.saved_time * 1000);

      for (let iteration in changedTask.paramValues) changedTask.paramValues[iteration] = changedTask.paramValues[iteration].map(e => [this.paramValues[e[0]]].concat(e.slice(1)));

      for (let checkpoint of changedTask.checkpoints) {
        checkpoint.time = new Date(checkpoint.time * 1000);
      }

      this.updateEntity(this.tasks, changedTask, "tasks");
    });
    this.evtSource.addEventListener("TASK_REMOVED", e => {
      const changedTask = JSON.parse(e.data);
      this.removeEntity(this.tasks, changedTask, "tasks");
    });
    this.evtSource.addEventListener("PARAM_VALUE_REMOVED", e => {
      const changedParamValue = JSON.parse(e.data);
      this.removeEntity(this.paramValues, changedParamValue, "paramValues");
      let param = this.params[changedParamValue.param];
      const previousIndex = param.values.findIndex(function (e) {
        return e.uuid === changedParamValue.uuid;
      });

      if (previousIndex >= 0) {
        param.values.splice(previousIndex, 1);
        this.updateEntity(this.params, param, "params");
      }
    });
    this.evtSource.addEventListener("PARAM_REMOVED", e => {
      const changedParam = JSON.parse(e.data);
      this.removeEntity(this.params, changedParam, "params");
    });
    this.evtSource.addEventListener("TASK_NAMES_CHANGED", e => {
      for (let task_uuid of Object.keys(this.tasks)) {
        fetch("/task_details/" + task_uuid).then(res => res.json()).then(result => {});
      }
    });
  }

  updateEntity(entities, newEntity, entityType, key = "uuid") {
    const isNew = !(newEntity[key] in entities);
    entities[newEntity[key]] = newEntity;
    if (isNew) this.throwOnAddEvent(newEntity, entityType);
    this.throwOnChangeEvent(entities, entityType, newEntity[key]);
  }

  removeEntity(entities, entityToRemove, entityType, key = "uuid") {
    let entity = entities[entityToRemove[key]];
    delete entities[entityToRemove[key]];
    this.throwOnRemoveEvent(entity, entityType);
    this.throwOnChangeEvent(entities, entityType, entityToRemove[key]);
  }

  throwOnChangeEvent(entities, entityType, key) {
    let entitiesClone = Object.assign({}, entities);

    for (let listener of this.onChangeListeners[entityType]) {
      listener(entitiesClone, key);
    }
  }

  throwOnAddEvent(entity, entityType) {
    for (let listener of this.onAddListeners[entityType]) {
      listener(entity);
    }
  }

  throwOnRemoveEvent(entity, entityType) {
    for (let listener of this.onRemoveListeners[entityType]) {
      listener(entity);
    }
  }

  onChange(entityType, listener) {
    this.onChangeListeners[entityType].push(listener);
  }

  removeOnChange(entityType, listener) {
    const listenerIndex = this.onChangeListeners[entityType].findIndex(listener);
    if (listenerIndex >= 0) this.onChangeListeners[entityType].splice(listenerIndex, 1);
  }

  onAdd(entityType, listener) {
    this.onAddListeners[entityType].push(listener);
  }

  removeOnAdd(entityType, listener) {
    const listenerIndex = this.onAddListeners[entityType].findIndex(listener);
    if (listenerIndex >= 0) this.onAddListeners[entityType].splice(listenerIndex, 1);
  }

  onRemove(entityType, listener) {
    this.onRemoveListeners[entityType].push(listener);
  }

  removeOnRemove(entityType, listener) {
    const listenerIndex = this.onRemoveListeners[entityType].findIndex(listener);
    if (listenerIndex >= 0) this.onRemoveListeners[entityType].splice(listenerIndex, 1);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Repository);

/***/ }),

/***/ "./src/Scheduler.js":
/*!**************************!*\
  !*** ./src/Scheduler.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Device */ "./src/Device.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Global */ "./src/Global.js");
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Prompt */ "./src/Prompt.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/Scheduler.js";





class Scheduler extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      max_running: 1,
      hiddenDevices: {}
    };
    this.promptAddDeviceRefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.openMaxRunningDialogRefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.updateTasks = this.updateTasks.bind(this);
    this.openMaxRunningDialog = this.openMaxRunningDialog.bind(this);
    this.hideDevice = this.hideDevice.bind(this);
    this.shouldShowDevice = this.shouldShowDevice.bind(this);
  }

  componentDidMount() {
    this.props.repository.onChange("tasks", this.updateTasks);
    this.updateTasks(this.props.repository.tasks);
  }

  componentWillUnmount() {
    this.props.repository.removeOnChange("tasks", this.updateTasks);
  }

  updateTasks(tasks) {
    this.setState({
      tasks: Object.values(tasks).filter(task => task.state === _Global__WEBPACK_IMPORTED_MODULE_2__["default"].RUNNING || task.state === _Global__WEBPACK_IMPORTED_MODULE_2__["default"].QUEUED)
    });
  }

  openMaxRunningDialog() {
    this.openMaxRunningDialogRefs.current.openDialog();
  }

  hideDevice(device) {
    const hiddenDevices = Object.assign({}, this.state.hiddenDevices);
    hiddenDevices[device.uuid] = true;
    this.setState({
      hiddenDevices: hiddenDevices
    });
  }

  showDevice(device) {
    const hiddenDevices = Object.assign({}, this.state.hiddenDevices);
    hiddenDevices[device.uuid] = false;
    this.setState({
      hiddenDevices: hiddenDevices
    });
    fetch("/connect_device/" + device.uuid).then(res => res.json()).then(result => {});
  }

  shouldShowDevice(device) {
    return device.uuid in this.state.hiddenDevices && !this.state.hiddenDevices[device.uuid] || !(device.uuid in this.state.hiddenDevices) && device.is_connected !== 0;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "scheduler",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Add device"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-menu",
      "aria-labelledby": "dropdownMenuButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, this.props.devices.filter(device => !this.shouldShowDevice(device)).map(device => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-item",
      onClick: () => this.showDevice(device),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, device.name)), this.props.devices.filter(device => !this.shouldShowDevice(device)).length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-divider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-item",
      onClick: () => this.promptAddDeviceRefs.current.openDialog(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Add new device"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Prompt__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref: this.promptAddDeviceRefs,
      header: "Add new device",
      text: "Specify the ip address and the port of the new device:",
      url: "/add_device",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mock-device",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), this.props.devices.filter(this.shouldShowDevice).map(device => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Device__WEBPACK_IMPORTED_MODULE_1__["default"], {
      device: device,
      editTask: this.props.editTask,
      tasks: this.state.tasks.filter(task => task.device === device.uuid),
      hideDevice: this.hideDevice,
      highlightTask: this.props.highlightTask,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mock-device",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Scheduler);

/***/ }),

/***/ "./src/TagsEdit.js":
/*!*************************!*\
  !*** ./src/TagsEdit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autocomplete */ "../../node_modules/react-autocomplete/build/lib/Autocomplete.js");
/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autocomplete__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/TagsEdit.js";



class TagsEdit extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.remove = this.remove.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.autocompleteRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  updateValue(value) {
    this.setState({
      value: value
    });
    this.autocompleteRef.current.setState({
      highlightedIndex: null
    });
  }

  onSelect(value) {
    this.setState({
      value: value
    }, () => this.add());
  }

  onKeyDown(e) {
    if (e.keyCode === 13 && this.autocompleteRef.current.state.highlightedIndex === null) {
      e.preventDefault();
      this.add();
    }
  }

  add() {
    if (this.state.value === "") return;
    let tags = this.props.tags.slice();
    tags.push(this.state.value);
    this.props.updateTags(tags);
    this.setState({
      value: ""
    });
  }

  remove(value) {
    let tags = this.props.tags.slice();
    tags.splice(tags.indexOf(value), 1);
    this.props.updateTags(tags);
  }

  componentDidMount() {
    this.autocompleteRef.current.highlightItemFromMouse = item => {};
  }

  selectableValues() {
    let values = this.props.allTags.slice();

    for (let tag of this.props.tags) {
      var index = values.indexOf(tag);
      if (index !== -1) values.splice(index, 1);
    }

    return values;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tags-edit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, this.props.tags.map(value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: value,
      className: "value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-times",
      onClick: () => this.remove(value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_autocomplete__WEBPACK_IMPORTED_MODULE_1___default.a, {
      ref: this.autocompleteRef,
      autoHighlight: false,
      shouldItemRender: (item, value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1,
      getItemValue: item => item,
      items: this.selectableValues(),
      renderItem: (item, isHighlighted) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: isHighlighted ? 'autocomplete-hover' : '',
        style: {
          background: isHighlighted ? 'lightgray' : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, item),
      value: this.state.value,
      onChange: evt => this.updateValue(evt.target.value),
      inputProps: {
        'onKeyDown': this.onKeyDown
      },
      onSelect: val => this.onSelect(val),
      wrapperStyle: {
        position: 'relative'
      },
      menuStyle: {
        position: 'absolute',
        top: '35px',
        left: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TagsEdit);

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/*! exports provided: TaskName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskName", function() { return TaskName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global */ "./src/Global.js");
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prompt */ "./src/Prompt.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/Task.js";




class TaskName extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.wrapperRef.current).find('[data-toggle="tooltip"]').tooltip();
  }

  componentDidUpdate() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.wrapperRef.current).find('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    if (this.props.is_test) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        ref: this.wrapperRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Test");
    } else {
      if (this.props.name !== undefined && this.props.name.length > 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          ref: this.wrapperRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, this.props.name.map((name, i) => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, i !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "separator",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, "/"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            "data-toggle": "tooltip",
            "data-placement": "bottom",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, name));
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          ref: this.wrapperRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Task");
      }
    }
  }

}

function TaskStatus(props) {
  if (props.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].RUNNING) {
    function pad(n) {
      n = parseInt(n);
      return n < 10 ? "0" + n : n;
    }

    function renderTime(time) {
      if (time !== null) {
        if (time >= 3600) return pad(time / 3600) + ":" + pad(time % 3600 / 60) + ":" + pad(time % 60);else return pad(time / 60) + ":" + pad(time % 60);
      } else return "--:--";
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, renderTime(props.run_time), " / ", renderTime(props.time_left));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, props.index + 1);
  }
}

function TaskProgress(props) {
  if (props.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].RUNNING) {
    var style = {
      width: Math.min(1, props.finished_iterations / props.total_iterations) * 100 + '%'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress",
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    });
  } else {
    return "";
  }
}

class TaskToolbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.pause = this.pause.bind(this);
    this.saveNow = this.saveNow.bind(this);
    this.cancel = this.cancel.bind(this);
    this.runNow = this.runNow.bind(this);
    this.openExtraDialog = this.openExtraDialog.bind(this);
    this.promptExtraRefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.openLog = this.openLog.bind(this);
    this.clone = this.clone.bind(this);
    this.terminate = this.terminate.bind(this);
    this.createCheckpoint = this.createCheckpoint.bind(this);
  }

  pause() {
    fetch("/pause/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  saveNow() {
    fetch("/save_now/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  createCheckpoint() {
    fetch("/create_checkpoint/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  cancel() {
    fetch("/cancel/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  runNow() {
    fetch("/run_now/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  openExtraDialog() {
    this.promptExtraRefs.current.openDialog();
  }

  openLog() {
    window.open("/log/" + this.props.task.uuid, '_blank');
  }

  clone() {
    fetch("/clone_task/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  terminate() {
    fetch("/terminate/" + this.props.task.uuid).then(res => res.json()).then(result => {}, error => {});
  }

  render() {
    let currentAction = "";

    if (this.props.task.is_pausing) {
      currentAction = "pausing...";
    } else if (this.props.task.is_saving) {
      currentAction = "saving...";
    } else if (this.props.task.creating_checkpoint) {
      currentAction = "checkpoint...";
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "toolbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].RUNNING && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.pause,
      title: "Pause the task after the current iteration",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-pause",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "Pause")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.saveNow,
      title: "Force the task to save after the current iteration",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-save",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "Save now!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: () => this.props.editTask(this.props.task),
      title: "Change the scheduled number of total iterations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-edit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-ellipsis-v",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.openLog,
      title: "View the log",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-file-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, "Log")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.terminate,
      title: "Terminate task",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-skull-crossbones",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, "Terminate")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.createCheckpoint,
      title: "Create checkpoint",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-flag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, "Checkpoint")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "current-action",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, currentAction)), this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].QUEUED && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.runNow,
      title: "Pause one of the running tasks and start this one instead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-exclamation-triangle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, "Run now!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.openExtraDialog,
      title: "Change the scheduled number of total iterations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-edit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, "Change")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-ellipsis-v",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "action",
      onClick: this.cancel,
      title: "Remove this task from the queue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-times",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, "Cancel"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Prompt__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: this.promptExtraRefs,
      defaultValue: this.props.task.total_iterations,
      header: "Change total iterations?",
      text: "Specify the new number of iterations, you want the task to run:",
      url: "/change/" + this.props.task.uuid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }));
  }

}

class Task extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.taskRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.dragEnterCounter = 0;
  }

  onMouseDown(e) {
    this.target = e.target;
  }

  onDragStart(e) {
    e.dataTransfer.setData("text/plain", this.props.task.uuid);
  }

  onDragOver(e) {
    if (this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].QUEUED && this.props.task.uuid !== e.dataTransfer.getData("text/plain")) {
      e.preventDefault();
    }
  }

  onDrop(e) {
    if (this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].QUEUED && this.props.task.uuid !== e.dataTransfer.getData("text/plain")) {
      e.preventDefault();
      fetch("/reorder_task/" + e.dataTransfer.getData("text/plain") + "/" + this.props.index).then(res => res.json()).then(result => {}, error => {});
      this.dragEnterCounter = 0;
      this.taskRef.current.className = "task";
    }
  }

  onDragEnter(e) {
    if (this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].QUEUED && this.props.task.uuid !== e.dataTransfer.getData("text/plain")) {
      e.preventDefault();
      this.taskRef.current.className = "task on-drag-over";
      this.dragEnterCounter++;
    }
  }

  onDragLeave(e) {
    if (this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].QUEUED && this.props.task.uuid !== e.dataTransfer.getData("text/plain")) {
      e.preventDefault();
      this.dragEnterCounter--;
      if (this.dragEnterCounter === 0) this.taskRef.current.className = "task";
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      ref: this.taskRef,
      className: "task",
      onDragOver: this.onDragOver,
      onDragLeave: this.onDragLeave,
      onDragEnter: this.onDragEnter,
      onDrop: this.onDrop,
      onDragStart: this.onDragStart,
      onMouseDown: this.onMouseDown,
      draggable: this.props.task.state === _Global__WEBPACK_IMPORTED_MODULE_1__["default"].QUEUED ? "true" : "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, "Task"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskStatus, {
      index: this.props.index,
      state: this.props.task.state,
      time_left: this.props.task.time_left,
      run_time: this.props.task.run_time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "iterations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, this.props.task.finished_iterations, " / ", this.props.task.total_iterations))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskProgress, {
      state: this.props.task.state,
      total_iterations: this.props.task.total_iterations,
      finished_iterations: this.props.task.finished_iterations,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "param-name",
      onClick: () => this.props.highlightTask(this.props.task),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "try-number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, this.props.task.try), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskName, {
      task: this.props.task,
      name: this.props.task.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskToolbar, {
      task: this.props.task,
      editTask: this.props.editTask,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Task);

/***/ }),

/***/ "./src/TaskContainer.js":
/*!******************************!*\
  !*** ./src/TaskContainer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);



class TaskContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.filterHasUpdated = this.filterHasUpdated.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.toggleSelection = this.toggleSelection.bind(this);
    this.addParamCollapse = this.addParamCollapse.bind(this);
    this.removeParamCollapse = this.removeParamCollapse.bind(this);
    this.addParamGroup = this.addParamGroup.bind(this);
    this.removeParamGroup = this.removeParamGroup.bind(this);
    this.replaceUuidsWithTasks = this.replaceUuidsWithTasks.bind(this);
    this.loadFilter = this.loadFilter.bind(this);
    this.saveFilter = this.saveFilter.bind(this);
    this.newTask = this.newTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.onChangeCollapseSorting = this.onChangeCollapseSorting.bind(this);
    this.onChangeVersionInName = this.onChangeVersionInName.bind(this);
    this.flipCollapseSortingDirection = this.flipCollapseSortingDirection.bind(this);
    this.reorderParam = this.reorderParam.bind(this);
    this.onChangeForceParamInName = this.onChangeForceParamInName.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.intervalId = null;
    this.autoFilterUpdate = true;
  }

  componentDidMount() {
    this.props.repository.onChange("tasks", this.updateTasks);
    this.props.repository.onAdd("tasks", this.newTask);
    this.props.repository.onRemove("tasks", this.removeTask);
    this.props.repository.onChange("params", this.updateParams);
    this.updateParams(this.props.repository.params);
    this.intervalId = null;

    if (this.props.viewsLoaded) {
      if ("overview" in this.props.views) this.loadFilter(this.props.views["overview"]);else this.filterHasUpdated();
      this.intervalId = setInterval(this.filterHasUpdated, this.props.refreshRate);
    }
  }

  componentWillUnmount() {
    this.props.repository.removeOnChange("tasks", this.updateTasks);
    this.props.repository.removeOnChange("params", this.updateParams);
    if (this.intervalId !== null) clearInterval(this.intervalId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.viewsLoaded && this.props.viewsLoaded) {
      if ("overview" in this.props.views) this.loadFilter(this.props.views["overview"]);else this.filterHasUpdated();
      this.intervalId = setInterval(this.filterHasUpdated, this.props.refreshRate);
    }
  }

  replaceUuidsWithTasks(tasks, task_lookup) {
    for (let key in tasks) {
      if (tasks[key] instanceof Object && !("uuid" in tasks[key])) {
        this.replaceUuidsWithTasks(tasks[key], task_lookup);
      } else {
        let task = tasks[key];
        let replacement = {
          "name": task.name,
          "metrics": task.metrics,
          "uuid": task.uuid,
          "collapsed_name": task.collapsed_name
        };
        if (task.uuid in this.props.repository.tasks) replacement["task"] = this.props.repository.tasks[task.uuid];else {
          replacement["task"] = null;
        }
        task_lookup[task.uuid] = replacement;
        tasks[key] = replacement;
      }
    }
  }

  filterHasUpdated() {
    var data = new FormData();
    var dataJson = {};
    dataJson['filter'] = this.state.selectedParamValues;
    dataJson['collapse'] = this.state.collapsedParams;
    dataJson['group'] = this.state.groupedParams;
    dataJson['param_sorting'] = this.state.paramSorting;
    dataJson['sort_col'] = this.state.sorting_tasks[0];
    dataJson['sort_dir'] = this.state.sorting_tasks[1] ? "DESC" : "ASC";
    dataJson['collapse_sorting'] = [this.state.collapseSorting[0], this.state.collapseSorting[1] ? "DESC" : "ASC"];
    dataJson['version_in_name'] = this.state.versionInName;
    dataJson['force_param_in_name'] = this.state.forceParamInName;
    dataJson['collapse_enabled'] = this.state.collapseEnabled;
    data.append("data", JSON.stringify(dataJson));
    let self = this;
    fetch("filter_tasks", {
      method: "POST",
      body: data
    }).then(res => res.json()).then(result => {
      let task_lookup = {}; //console.log(result);

      this.replaceUuidsWithTasks(result[0], task_lookup); //console.log(result);

      self.setState({
        tasks: result[0],
        metric_superset: result[1].sort(),
        task_lookup: task_lookup
      }, react_lazyload__WEBPACK_IMPORTED_MODULE_1__["forceCheck"]);
    }, error => {});
  }

  saveFilter(saveName) {
    var data = new FormData();
    var dataJson = {};
    dataJson['filter'] = this.state.selectedParamValues;
    dataJson['collapse'] = this.state.collapsedParams;
    dataJson['group'] = this.state.groupedParams;
    dataJson['param_sorting'] = this.state.paramSorting;
    dataJson['saveName'] = saveName;
    dataJson['sorting_tasks'] = this.state.sorting_tasks;
    dataJson['collapse_sorting'] = this.state.collapseSorting;
    dataJson['version_in_name'] = this.state.versionInName;
    dataJson['force_param_in_name'] = this.state.forceParamInName;
    dataJson['collapse_enabled'] = this.state.collapseEnabled;
    data.append("data", JSON.stringify(dataJson));
    fetch("save_filter", {
      method: "POST",
      body: data
    });
  }

  loadFilter(data) {
    let param_sorting = data.param_sorting;

    for (const param of this.state.params) {
      if (!(param.uuid in param_sorting)) {
        param_sorting[param.uuid] = Object.keys(param_sorting).length;
      }
    }

    this.setState({
      selectedParamValues: data.filter,
      collapsedParams: data.collapse,
      groupedParams: data.group,
      paramSorting: data.param_sorting,
      sorting_tasks: data.sorting_tasks,
      collapseSorting: data.collapse_sorting
    }, () => this.filterHasUpdated());
  }

  updateParams(params) {
    params = Object.values(params); // this.filterView.updateParams(params);

    let paramsByGroup = {};

    for (const param of params) {
      const group = param.group.length > 0 ? param.group[0] : '';
      if (!(group in paramsByGroup)) paramsByGroup[group] = [];
      paramsByGroup[group].push(param);
    }

    let paramSorting = Object.assign({}, this.state.paramSorting);

    for (const param of params) {
      if (!(param.uuid in paramSorting)) {
        paramSorting[param.uuid] = Object.keys(paramSorting).length;
      }
    }

    this.setState({
      params: params,
      paramsByGroup: paramsByGroup,
      paramSorting: paramSorting
    });
  }

  newTask(task) {
    if (!(task.uuid in this.state.task_lookup) && this.autoFilterUpdate) {
      this.filterHasUpdated();
    }
  }

  removeTask(task) {
    if (this.autoFilterUpdate) this.filterHasUpdated();
  }

  updateTasks(all_tasks, changed) {
    if (all_tasks[changed] !== undefined) {
      let task_lookup = Object.assign({}, this.state.task_lookup);

      if (changed in task_lookup) {
        task_lookup[changed].task = all_tasks[changed];
      }

      this.setState({
        task_lookup: task_lookup,
        tasks: this.state.tasks instanceof Array ? this.state.tasks.slice() : Object.assign({}, this.state.tasks)
      });
    }
  }

  toggleSelection(param, value, args) {
    const selectedParamValues = Object.assign({}, this.state.selectedParamValues);

    if (value === null) {
      if (param.uuid in selectedParamValues) {
        delete selectedParamValues[param.uuid];
      } else {
        selectedParamValues[param.uuid] = [];
      }
    } else {
      const newValue = [value.uuid, ...args];

      if (param.uuid in selectedParamValues) {
        const existingIndex = selectedParamValues[param.uuid].findIndex(paramValue => newValue.length === paramValue.length && newValue.every((value, index) => value === paramValue[index]));
        if (existingIndex !== -1) selectedParamValues[param.uuid].splice(existingIndex, 1);else selectedParamValues[param.uuid].push(newValue);
      } else {
        selectedParamValues[param.uuid] = [newValue];
      }
    }

    this.setState({
      selectedParamValues: selectedParamValues
    }, () => this.filterHasUpdated());
  }

  addParamCollapse(param) {
    let collapsedParams = this.state.collapsedParams.slice();
    let index = collapsedParams.indexOf(param.uuid);

    if (index === -1) {
      collapsedParams.push(param.uuid);
    }

    this.setState({
      collapsedParams: collapsedParams
    }, () => this.filterHasUpdated());
  }

  removeParamCollapse(param) {
    let collapsedParams = this.state.collapsedParams.slice();
    let index = collapsedParams.indexOf(param.uuid);

    if (index !== -1) {
      collapsedParams.splice(index, 1);
      ;
    }

    this.setState({
      collapsedParams: collapsedParams
    }, () => this.filterHasUpdated());
  }

  addParamGroup(params) {
    if (params.length === 0) return;

    for (let i = 0; i < params.length; i++) params[i] = params[i].uuid;

    let groupedParams = this.state.groupedParams.slice();
    groupedParams.push(params);
    this.setState({
      groupedParams: groupedParams
    }, () => this.filterHasUpdated());
  }

  arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  removeParamGroup(params) {
    let groupedParams = this.state.groupedParams.slice();
    let index = -1;

    for (let i = 0; i < groupedParams.length; i++) {
      if (this.arraysEqual(groupedParams[i], params)) {
        index = i;
      }
    }

    if (index !== -1) {
      groupedParams.splice(index, 1);
    }

    this.setState({
      groupedParams: groupedParams
    }, () => this.filterHasUpdated());
  }

  reorderParam(first_param_uuid, second_param) {
    let second_param_uuid = second_param.uuid;
    let paramSorting = Object.assign({}, this.state.paramSorting);

    if (paramSorting[first_param_uuid] > paramSorting[second_param_uuid]) {
      let tmp = first_param_uuid;
      first_param_uuid = second_param_uuid;
      second_param_uuid = tmp;
    }

    let startIndex = paramSorting[first_param_uuid];
    let endIndex = paramSorting[second_param_uuid];

    for (let key in paramSorting) {
      if (paramSorting[key] >= startIndex && paramSorting[key] < endIndex) {
        paramSorting[key] += 1;
      }
    }

    paramSorting[second_param_uuid] = startIndex;
    this.setState({
      paramSorting: paramSorting
    }, () => this.filterHasUpdated());
  }

  onChangeCollapseSorting(e) {
    const collapseSorting = this.state.collapseSorting.slice();
    collapseSorting[0] = e.target.value;
    this.setState({
      collapseSorting: collapseSorting
    }, () => this.filterHasUpdated());
  }

  flipCollapseSortingDirection() {
    const collapseSorting = this.state.collapseSorting.slice();
    collapseSorting[1] = !collapseSorting[1];
    this.setState({
      collapseSorting: collapseSorting
    }, () => this.filterHasUpdated());
  }

  onChangeVersionInName(e) {
    this.setState({
      versionInName: e.target.value
    }, () => this.filterHasUpdated());
  }

  onChangeForceParamInName(e, param_uuid) {
    const forceParamInName = Object.assign({}, this.state.forceParamInName);
    forceParamInName[param_uuid] = e.target.checked;
    this.setState({
      forceParamInName: forceParamInName
    }, () => this.filterHasUpdated());
  }

  toggleCollapse(e) {
    this.setState({
      collapseEnabled: e.target.checked
    }, () => this.filterHasUpdated());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TaskContainer);

/***/ }),

/***/ "./src/TaskEditor.js":
/*!***************************!*\
  !*** ./src/TaskEditor.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigEditor */ "./src/ConfigEditor.js");
/* harmony import */ var _ParamFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParamFilter */ "./src/ParamFilter.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TagsEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TagsEdit */ "./src/TagsEdit.js");
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Prompt */ "./src/Prompt.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/TaskEditor.js";







class TaskEditor extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    let selectedParamValues = {
      0: {}
    };

    for (const param of props.params) {
      if (param.values.length > 0) selectedParamValues[0][param.uuid] = [param.values[0].uuid];
    }

    this.state = {
      selectedParamValues: selectedParamValues,
      uuid_to_load: null,
      total_iterations: "",
      save_interval: "100",
      checkpoint_interval: "0",
      open: false,
      command: "",
      commandHint: "",
      isTest: false,
      device: null,
      tags: [],
      paramVisibility: {},
      current_iteration: 0,
      edit_task: null
    };
    this.configEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
    this.run = this.run.bind(this);
    this.new = this.new.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.onTotalIterationsChange = this.onTotalIterationsChange.bind(this);
    this.onCheckpointIntervalChange = this.onCheckpointIntervalChange.bind(this);
    this.onSaveIntervalChange = this.onSaveIntervalChange.bind(this);
    this.copyCommand = this.copyCommand.bind(this);
    this.onIsTestChange = this.onIsTestChange.bind(this);
    this.onDeviceChange = this.onDeviceChange.bind(this);
    this.onParamVisibilityChanged = this.onParamVisibilityChanged.bind(this);
    this.addIteration = this.addIteration.bind(this);
    this.removeIteration = this.removeIteration.bind(this);
    this.changeIteration = this.changeIteration.bind(this);
    this.updateTags = this.updateTags.bind(this);
    this.wrapperRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.commandInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.promptNewIterRefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  open(task, edit_task = null) {
    let selectedParamValues = {};

    for (const iteration in task.paramValues) {
      selectedParamValues[iteration] = {};

      for (const param of this.props.params) {
        if (param.values.length > 0) {
          let suitableParamValue = null;
          let args = [];

          for (const value of task.paramValues[iteration]) {
            if (value[0].param === param.uuid) {
              suitableParamValue = value[0];
              args = value.slice(1);
              break;
            }
          }

          if (suitableParamValue === null) selectedParamValues[iteration][param.uuid] = [param.deprecated_param_value.uuid, ...param.deprecated_param_value.template_deprecated];else selectedParamValues[iteration][param.uuid] = [suitableParamValue.uuid, ...args];
        }
      }
    }

    this.setState({
      edit_task: edit_task,
      selectedParamValues: selectedParamValues,
      open: true,
      isTest: task.is_test,
      device: this.state.device === null ? this.props.devices[0].uuid : this.state.device,
      total_iterations: task.total_iterations,
      save_interval: task.save_interval,
      checkpoint_interval: task.checkpoint_interval,
      current_iteration: 0
    }, () => this.updateCommand(selectedParamValues));
  }

  edit(task) {
    this.open(task, task.uuid);
  }

  new() {
    let selectedParamValues = Object.assign({}, this.state.selectedParamValues);
    selectedParamValues["0"] = Object.assign({}, selectedParamValues["0"]);

    for (const param of this.props.params) {
      if (!(param.uuid in selectedParamValues["0"]) && param.values.length > 0) selectedParamValues["0"][param.uuid] = [param.default_param_value.uuid, ...param.default_param_value.template_defaults];
    }

    this.setState({
      selectedParamValues: selectedParamValues,
      open: true,
      edit_task: null,
      device: this.state.device === null ? this.props.devices[0].uuid : this.state.device
    });
    this.updateCommand(selectedParamValues);
  }

  close() {
    this.setState({
      param_value: null,
      open: false
    });
  }

  run() {
    var data = new FormData();
    let visibleParams = {};

    for (const iteration in this.state.selectedParamValues) {
      visibleParams[iteration] = {};

      for (const param of this.props.params) {
        if (param.uuid in this.state.selectedParamValues[iteration] && (!(param.uuid in this.state.paramVisibility) || this.state.paramVisibility[param.uuid])) {
          visibleParams[iteration][param.uuid] = this.state.selectedParamValues[iteration][param.uuid];
        }
      }
    }

    var dataJson = {};
    dataJson['params'] = visibleParams;
    dataJson['config'] = {
      "save_interval": parseInt(this.state.save_interval),
      "checkpoint_interval": parseInt(this.state.checkpoint_interval)
    };
    dataJson['device'] = this.state.device;
    dataJson['tags'] = this.state.tags;
    data.append("data", JSON.stringify(dataJson));
    var url = "/" + (this.state.isTest ? "test" : "start") + "/" + this.state.total_iterations;
    fetch(url, {
      method: "POST",
      body: data
    }).then(res => res.json()).then(result => {}, error => {});
    this.close();
  }

  save() {
    var data = new FormData();
    let visibleParams = {};

    for (const iteration in this.state.selectedParamValues) {
      visibleParams[iteration] = {};

      for (const param of this.props.params) {
        if (param.uuid in this.state.selectedParamValues[iteration] && (!(param.uuid in this.state.paramVisibility) || this.state.paramVisibility[param.uuid])) {
          visibleParams[iteration][param.uuid] = this.state.selectedParamValues[iteration][param.uuid];
        }
      }
    }

    var dataJson = {};
    dataJson['params'] = visibleParams;
    dataJson['config'] = {
      "save_interval": parseInt(this.state.save_interval),
      "checkpoint_interval": parseInt(this.state.checkpoint_interval)
    };
    data.append("data", JSON.stringify(dataJson));
    var url = "/edit_task/" + this.state.edit_task + "/" + this.state.total_iterations;
    fetch(url, {
      method: "POST",
      body: data
    }).then(res => res.json()).then(result => {}, error => {});
    this.close();
  }

  onSelectionChange(param, value, arg = []) {
    const selectedParamValues = Object.assign({}, this.state.selectedParamValues);
    selectedParamValues[this.state.current_iteration] = Object.assign({}, selectedParamValues[this.state.current_iteration]);
    selectedParamValues[this.state.current_iteration][param.uuid] = [value.uuid];
    selectedParamValues[this.state.current_iteration][param.uuid] = selectedParamValues[this.state.current_iteration][param.uuid].concat(arg);
    this.setState({
      selectedParamValues: selectedParamValues
    });
    this.updateCommand(selectedParamValues);
  }

  onTotalIterationsChange(event) {
    this.setState({
      total_iterations: event.target.value
    });
    this.updateCommand(null, event.target.value);
  }

  onSaveIntervalChange(event) {
    this.setState({
      save_interval: event.target.value
    }, () => this.updateCommand());
  }

  onCheckpointIntervalChange(event) {
    this.setState({
      checkpoint_interval: event.target.value
    }, () => this.updateCommand());
  }

  updateCommand(selectedParamValues = null, total_iterations = null) {
    if (selectedParamValues === null) selectedParamValues = this.state.selectedParamValues;
    if (total_iterations === null) total_iterations = this.state.total_iterations;
    let paramValues = "";

    for (const iteration in this.state.selectedParamValues) {
      for (const param of this.props.params) {
        if (param.uuid in selectedParamValues[iteration] && (!(param.uuid in this.state.paramVisibility) || this.state.paramVisibility[param.uuid])) {
          paramValues += iteration + ";" + param.uuid + " " + selectedParamValues[iteration][param.uuid][0];

          for (let i = 1; i < selectedParamValues[iteration][param.uuid].length; i++) paramValues += ":'" + selectedParamValues[iteration][param.uuid][i] + "'";

          paramValues += " ";
        }
      }
    }

    let additionalProps = "";
    additionalProps += "--save " + (this.state.save_interval === "" ? "0" : this.state.save_interval);
    additionalProps += " --checkpoint " + (this.state.checkpoint_interval === "" ? "0" : this.state.checkpoint_interval);

    if (total_iterations !== "") {
      this.setState({
        command: "taskplan " + (this.state.isTest ? "test " : "start ") + total_iterations + " " + paramValues + " " + additionalProps,
        commandHint: "Click to copy"
      });
    } else {
      this.setState({
        command: "",
        commandHint: "Total iterations missing"
      });
    }
  }

  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.wrapperRef.current).find('[data-toggle="tooltip"]').tooltip();
  }

  componentDidUpdate() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.wrapperRef.current).find('[data-toggle="tooltip"]').tooltip();
  }

  copyCommand() {
    this.commandInput.current.select();
    document.execCommand("copy");
    this.setState({
      commandHint: "Copied!"
    }, () => jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.commandInput.current).tooltip('show'));
  }

  onIsTestChange(event) {
    this.setState({
      isTest: event.target.checked
    }, () => this.updateCommand());
  }

  onDeviceChange(event) {
    this.setState({
      device: event.target.value
    });
  }

  updateTags(tags) {
    this.setState({
      tags: tags
    });
  }

  onParamVisibilityChanged(paramVisibility) {
    this.setState({
      paramVisibility: paramVisibility
    });
  }

  addIteration(newIteration) {
    const selectedParamValues = Object.assign({}, this.state.selectedParamValues);
    selectedParamValues[newIteration] = {};

    for (const param of this.props.params) {
      selectedParamValues[newIteration][param.uuid] = [param.default_param_value.uuid, ...param.default_param_value.template_defaults];
    }

    this.setState({
      selectedParamValues: selectedParamValues,
      current_iteration: newIteration
    });
  }

  removeIteration(e, iteration) {
    e.stopPropagation();
    if (iteration === 0) return;
    const selectedParamValues = Object.assign({}, this.state.selectedParamValues);
    delete selectedParamValues[iteration];
    this.setState({
      current_iteration: 0,
      selectedParamValues: selectedParamValues
    });
  }

  changeIteration(iteration) {
    if (iteration in this.state.selectedParamValues) {
      this.setState({
        current_iteration: iteration
      });
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: this.wrapperRef,
      style: {
        'display': this.state.open ? 'block' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "task-editor slide-editor editor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, this.state.edit_task === null ? "Start task" : "Edit task", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-times",
      onClick: this.close,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, "Total iterations:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: this.state.total_iterations,
      onChange: this.onTotalIterationsChange,
      required: "required",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }, "Save interval:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: this.state.save_interval,
      onChange: this.onSaveIntervalChange,
      required: "required",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    }, "Checkpoint interval:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: this.state.checkpoint_interval,
      onChange: this.onCheckpointIntervalChange,
      required: "required",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    })), this.state.edit_task === null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, "Is test:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      checked: this.state.isTest,
      onChange: this.onIsTestChange,
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "iterations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }, Object.keys(this.state.selectedParamValues).map(iteration => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "iteration " + (iteration == this.state.current_iteration ? "iteration-current" : ""),
      onClick: () => this.changeIteration(iteration),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }, iteration, " ", iteration > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-times",
      onClick: e => this.removeIteration(e, iteration),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new-iteration",
      onClick: () => this.promptNewIterRefs.current.openDialog(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Prompt__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ref: this.promptNewIterRefs,
      defaultValue: "",
      header: "New iteration?",
      text: "New iteration",
      onSend: this.addIteration,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
      selectMultiple: false,
      paramsByGroup: this.props.paramsByGroup,
      selectedParamValues: this.state.selectedParamValues[this.state.current_iteration],
      toggleSelection: this.onSelectionChange,
      useTemplateFields: true,
      paramVisibility: this.state.paramVisibility[this.state.current_iteration],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: this.configEditor,
      url: "/config/task",
      onParamVisibilityChanged: this.onParamVisibilityChanged,
      bases: this.state.selectedParamValues,
      preview: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }), this.state.edit_task === null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, "Device:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      value: this.state.device,
      onChange: this.onDeviceChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }, this.props.devices.map(device => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: device.uuid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: this
    }, device.name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404
      },
      __self: this
    }, "Command:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "command",
      ref: this.commandInput,
      onClick: this.copyCommand,
      "data-toggle": "tooltip",
      "data-placement": "bottom",
      "data-original-title": this.state.commandHint,
      value: this.state.command,
      readOnly: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: this
    }, "Tags:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TagsEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tags: this.state.tags,
      allTags: this.props.allTags,
      updateTags: this.updateTags,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    }, this.state.edit_task === null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.run,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: this
    }, "Run") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.save,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    }, "Save"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TaskEditor);

/***/ }),

/***/ "./src/TaskTab.js":
/*!************************!*\
  !*** ./src/TaskTab.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PausedTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PausedTask */ "./src/PausedTask.js");
/* harmony import */ var _TaskEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskEditor */ "./src/TaskEditor.js");
/* harmony import */ var _CollapsedTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CollapsedTasks */ "./src/CollapsedTasks.js");
/* harmony import */ var _GroupedTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupedTasks */ "./src/GroupedTasks.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/TaskTab.js";






class TaskTab extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.newTask = this.newTask.bind(this);
    this.rerunTask = this.rerunTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.closeEditors = this.closeEditors.bind(this);
    this.paramValueToName = this.paramValueToName.bind(this);
    this.taskEditor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  closeEditors() {
    this.taskEditor.current.close();
  }

  newTask() {
    this.props.closeViewer();
    this.taskEditor.current.new();
  }

  rerunTask(task) {
    this.props.closeViewer();
    this.taskEditor.current.open(task);
  }

  editTask(task) {
    this.props.closeViewer();
    this.taskEditor.current.edit(task);
  }

  paramValueToName(paramValue) {
    let paramValueName = paramValue[1].name;

    for (let i = 2; i < paramValue.length; i++) paramValueName = paramValueName.replace("$T" + (i - 2) + "$", paramValue[i]);

    return paramValueName;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tab",
      style: {
        'display': this.props.active ? 'flex' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "tasks-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, this.props.initialized && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupedTasks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tasks: this.props.tasks,
      rerunTask: this.rerunTask,
      editTask: this.editTask,
      showTask: this.props.showTask,
      filterLikeTask: this.props.filterLikeTask,
      devices: this.props.devices,
      detailCol: this.props.detailCol,
      highlightedTask: this.props.highlightedTask,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskEditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
      allTags: this.props.allTags,
      devices: this.props.devices,
      ref: this.taskEditor,
      params: this.props.params,
      paramsByGroup: this.props.paramsByGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tab-toolbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.newTask,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "New task"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TaskTab);

/***/ }),

/***/ "./src/fonts/Roboto-300-cyrillic-ext1.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/Roboto-300-cyrillic-ext1.woff2 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-300-cyrillic-ext1.d69a2de8.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-300-cyrillic2.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/Roboto-300-cyrillic2.woff2 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-300-cyrillic2.a5383450.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-300-greek-ext3.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/Roboto-300-greek-ext3.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-300-greek-ext3.d4a587db.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-300-greek4.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/Roboto-300-greek4.woff2 ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-300-greek4.f7059272.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-300-latin-ext6.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/Roboto-300-latin-ext6.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-300-latin-ext6.e83b8f97.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-300-latin7.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/Roboto-300-latin7.woff2 ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-300-latin7.ef7c6637.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-300-vietnamese5.woff2":
/*!************************************************!*\
  !*** ./src/fonts/Roboto-300-vietnamese5.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-300-vietnamese5.484cddf4.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-400-cyrillic-ext8.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/Roboto-400-cyrillic-ext8.woff2 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-400-cyrillic-ext8.4743c758.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-400-cyrillic9.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/Roboto-400-cyrillic9.woff2 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-400-cyrillic9.8bb64952.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-400-greek-ext10.woff2":
/*!************************************************!*\
  !*** ./src/fonts/Roboto-400-greek-ext10.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-400-greek-ext10.182ee6a4.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-400-greek11.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Roboto-400-greek11.woff2 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-400-greek11.c1e9793c.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-400-latin-ext13.woff2":
/*!************************************************!*\
  !*** ./src/fonts/Roboto-400-latin-ext13.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-400-latin-ext13.455200cb.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-400-latin14.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Roboto-400-latin14.woff2 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-400-latin14.479970ff.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-400-vietnamese12.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/Roboto-400-vietnamese12.woff2 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-400-vietnamese12.a8be5b46.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-500-cyrillic-ext15.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/Roboto-500-cyrillic-ext15.woff2 ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-500-cyrillic-ext15.378698af.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-500-cyrillic16.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/Roboto-500-cyrillic16.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-500-cyrillic16.7fd643e6.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-500-greek-ext17.woff2":
/*!************************************************!*\
  !*** ./src/fonts/Roboto-500-greek-ext17.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-500-greek-ext17.0f80978b.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-500-greek18.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Roboto-500-greek18.woff2 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-500-greek18.665639f6.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-500-latin-ext20.woff2":
/*!************************************************!*\
  !*** ./src/fonts/Roboto-500-latin-ext20.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-500-latin-ext20.b1b80843.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-500-latin21.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Roboto-500-latin21.woff2 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-500-latin21.020c97dc.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-500-vietnamese19.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/Roboto-500-vietnamese19.woff2 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-500-vietnamese19.16423fb4.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-700-cyrillic-ext22.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/Roboto-700-cyrillic-ext22.woff2 ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-700-cyrillic-ext22.2522a38e.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-700-cyrillic23.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/Roboto-700-cyrillic23.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-700-cyrillic23.9d484aa9.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-700-greek-ext24.woff2":
/*!************************************************!*\
  !*** ./src/fonts/Roboto-700-greek-ext24.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-700-greek-ext24.029b92b9.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-700-greek25.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Roboto-700-greek25.woff2 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-700-greek25.16d9701c.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-700-latin-ext27.woff2":
/*!************************************************!*\
  !*** ./src/fonts/Roboto-700-latin-ext27.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-700-latin-ext27.188b3976.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-700-latin28.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Roboto-700-latin28.woff2 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-700-latin28.2735a3a6.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-700-vietnamese26.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/Roboto-700-vietnamese26.woff2 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static_table/media/Roboto-700-vietnamese26.d9600d97.woff2";

/***/ }),

/***/ "./src/fonts/fonts.css":
/*!*****************************!*\
  !*** ./src/fonts/fonts.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./fonts.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/fonts/fonts.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/less/table.less":
/*!*****************************!*\
  !*** ./src/less/table.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-7-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/less-loader/dist/cjs.js??ref--6-oneOf-7-3!./table.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/less/table.less");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/table/CollapsedTableTasks.js":
/*!******************************************!*\
  !*** ./src/table/CollapsedTableTasks.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableRowTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableRowTask */ "./src/table/TableRowTask.js");
/* harmony import */ var _GroupedTableTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupedTableTasks */ "./src/table/GroupedTableTasks.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/table/CollapsedTableTasks.js";





class CollapsedTableTasks extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    let tasks = Object.values(this.props.tasks);

    if (tasks.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
        once: true,
        key: tasks[0].uuid,
        height: 40,
        offset: [0, 0],
        scrollContainer: ".project",
        resize: true,
        overflow: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableRowTask__WEBPACK_IMPORTED_MODULE_1__["default"], {
        uuid: tasks[0].uuid,
        task: tasks[0].task,
        name: tasks[0].name,
        metrics: tasks[0].metrics,
        selectedCols: this.props.selectedCols,
        intend: this.props.intend,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), tasks.length > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        class: "collapse-toggle",
        onClick: this.toggleCollapsed,
        colSpan: this.props.selectedCols.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.state.collapsed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-double-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), " ", "Expand (" + tasks.length + ")") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-double-up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), " Collapse"))), !this.state.collapsed && tasks.slice(1).map(task => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
        key: tasks.uuid,
        height: 40,
        offset: [0, 0],
        scrollContainer: ".project",
        resize: true,
        overflow: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableRowTask__WEBPACK_IMPORTED_MODULE_1__["default"], {
        uuid: task.uuid,
        task: task.task,
        name: task.name,
        metrics: task.metrics,
        selectedCols: this.props.selectedCols,
        intend: this.props.intend + 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }))));
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CollapsedTableTasks);

/***/ }),

/***/ "./src/table/GroupedTableTasks.js":
/*!****************************************!*\
  !*** ./src/table/GroupedTableTasks.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CollapsedTableTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollapsedTableTasks */ "./src/table/CollapsedTableTasks.js");
/* harmony import */ var _TableRowTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableRowTask */ "./src/table/TableRowTask.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/table/GroupedTableTasks.js";




class GroupedTableTasks extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: {}
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed(group) {
    let collapsed = Object.assign({}, this.state.collapsed);
    if (!(group in collapsed)) collapsed[group] = true;else collapsed[group] = !collapsed[group];
    this.setState({
      collapsed: collapsed
    });
  }

  render() {
    if (Object.values(this.props.tasks).length > 0) {
      if (this.props.tasks instanceof Array) {
        console.log(this.props.tasks);
        return this.props.tasks.map((tasks, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CollapsedTableTasks__WEBPACK_IMPORTED_MODULE_1__["default"], {
          tasks: tasks,
          selectedCols: this.props.selectedCols,
          intend: this.props.intend,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }));
      } else {
        return Object.keys(this.props.tasks).sort((a, b) => a.localeCompare(b)).map(group => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          className: "group-header table-row",
          onClick: () => this.toggleCollapsed(group),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "title",
          colSpan: this.props.selectedCols.length,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, !(group in this.state.collapsed) || !this.state.collapsed[group] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-caret-down",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-caret-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), group)), (!(group in this.state.collapsed) || !this.state.collapsed[group]) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedTableTasks, {
          tasks: this.props.tasks[group],
          selectedCols: this.props.selectedCols,
          intend: this.props.intend + 5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        })));
      }
    } else {
      return "";
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GroupedTableTasks);

/***/ }),

/***/ "./src/table/Table.js":
/*!****************************!*\
  !*** ./src/table/Table.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParamViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ParamViewer */ "./src/ParamViewer.js");
/* harmony import */ var _TaskContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TaskContainer */ "./src/TaskContainer.js");
/* harmony import */ var _TaskTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskTable */ "./src/table/TaskTable.js");
/* harmony import */ var _TaskTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TaskTab */ "./src/TaskTab.js");
/* harmony import */ var _TableRowTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TableRowTask */ "./src/table/TableRowTask.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/table/Table.js";







class Table extends _TaskContainer__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(props) {
    super(props);
    this.state = {
      params: [],
      paramsByGroup: {},
      tasks: {},
      task_lookup: {},
      sorting_tasks: ["name", true],
      selectedParamValues: {},
      collapsedParams: [],
      groupedParams: [],
      selectedCols: ["name", "iterations"],
      metric_superset: [],
      paramSorting: {},
      collapseSorting: ["saved", true],
      versionInName: "label",
      forceParamInName: {},
      collapseEnabled: false
    };
    this.changeSorting = this.changeSorting.bind(this);
    this.addCol = this.addCol.bind(this);
    this.removeCol = this.removeCol.bind(this);
    this.paramViewerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  changeSorting(name, direction) {
    const sorting_tasks = this.state.sorting_tasks.slice();
    sorting_tasks[0] = name;
    sorting_tasks[1] = direction;
    this.setState({
      sorting_tasks: sorting_tasks
    }, () => this.filterHasUpdated());
  }

  addCol(col, position_col) {
    if (col !== position_col) {
      const selectedCols = this.state.selectedCols.slice();
      if (selectedCols.findIndex(x => x === col) !== -1) selectedCols.splice(selectedCols.findIndex(x => x === col), 1);
      let position = selectedCols.length;

      if (position_col !== null) {
        position = selectedCols.findIndex(x => x === position_col);
      }

      selectedCols.splice(position, 0, col);
      this.setState({
        selectedCols: selectedCols
      });
    }
  }

  removeCol(col) {
    if (this.state.selectedCols.findIndex(x => x === col) !== -1) {
      const selectedCols = this.state.selectedCols.slice();
      selectedCols.splice(selectedCols.findIndex(x => x === col), 1);
      this.setState({
        selectedCols: selectedCols
      });
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        "display": "flex",
        "width": "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParamViewer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: this.paramViewerRef,
      paramsByGroup: this.state.paramsByGroup,
      selectedParamValues: this.state.selectedParamValues,
      toggleSelection: this.toggleSelection,
      views: this.props.views,
      tags: this.props.allTags,
      params: this.state.params,
      collapsedParams: this.state.collapsedParams,
      addParamCollapse: this.addParamCollapse,
      removeParamCollapse: this.removeParamCollapse,
      groupedParams: this.state.groupedParams,
      addParamGroup: this.addParamGroup,
      removeParamGroup: this.removeParamGroup,
      saveFilter: this.saveFilter,
      loadFilter: this.loadFilter,
      open: true,
      style: {
        "position": "static"
      },
      hideViewEdits: true,
      selectedCols: this.state.selectedCols,
      metric_superset: this.state.metric_superset,
      allCols: ["name", "iterations", "created", "saved", "uuid"].concat(this.state.metric_superset),
      addCol: this.addCol,
      removeCol: this.removeCol,
      collapseSorting: this.state.collapseSorting,
      onChangeCollapseSorting: this.onChangeCollapseSorting,
      flipCollapseSortingDirection: this.flipCollapseSortingDirection,
      paramSorting: this.state.paramSorting,
      reorderParam: this.reorderParam,
      onChangeVersionInName: this.onChangeVersionInName,
      versionInName: this.state.versionInName,
      forceParamInName: this.state.forceParamInName,
      onChangeForceParamInName: this.onChangeForceParamInName,
      collapseEnabled: this.state.collapseEnabled,
      toggleCollapse: this.toggleCollapse,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "task-table-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
      params: this.state.params,
      tasks: this.state.tasks,
      selectedCols: this.state.selectedCols,
      changeSorting: this.changeSorting,
      sorting: this.state.sorting_tasks,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./src/table/TableApp.js":
/*!*******************************!*\
  !*** ./src/table/TableApp.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.js */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reconnecting_eventsource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reconnecting-eventsource */ "./node_modules/reconnecting-eventsource/lib/index.js");
/* harmony import */ var reconnecting_eventsource__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reconnecting_eventsource__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Repository */ "./src/Repository.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Table */ "./src/table/Table.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Project */ "./src/Project.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/table/TableApp.js";









class TableApp extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      noConnection: true,
      devices: [],
      refreshRate: null,
      viewsLoaded: false
    };
    this.evtSource = new reconnecting_eventsource__WEBPACK_IMPORTED_MODULE_4___default.a("/update", {});
    this.repository = new _Repository__WEBPACK_IMPORTED_MODULE_5__["default"](this.evtSource);
    this.projectManagerRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
    this.refreshConnectionState = this.refreshConnectionState.bind(this);
    this.evtSource.onerror = this.refreshConnectionState;
    this.evtSource.onopen = this.refreshConnectionState;
    this.state.noConnection = this.evtSource.readyState === 0;
    this.evtSource.addEventListener("PROJECT_CHANGED", e => {
      const data = JSON.parse(e.data);
      this.setState({
        // current_code_version: data.current_code_version,
        // tensorboard_port: data.tensorboard_port,
        views: data.views,
        viewsLoaded: true,
        refreshRate: parseInt(data.refreshRate),
        allTags: data.all_tags
      });
    });
  }

  refreshConnectionState() {
    this.setState({
      noConnection: this.evtSource.readyState === 0
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      id: "page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, this.state.refreshRate !== null && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
      repository: this.repository,
      allTags: this.state.allTags,
      refreshRate: this.state.refreshRate,
      views: this.state.views,
      viewsLoaded: this.state.viewsLoaded,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TableApp);

/***/ }),

/***/ "./src/table/TableRowTask.js":
/*!***********************************!*\
  !*** ./src/table/TableRowTask.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Task */ "./src/Task.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/table/TableRowTask.js";



class TableRowTask extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount() {
    if (this.props.task === null) {
      fetch("/task_details/" + this.props.uuid).then(res => res.json()).then(result => {});
    }
  }

  render() {
    if (this.props.task !== null) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "table-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.props.selectedCols.map((col, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "table-col",
        style: i === 0 ? {
          "border-left": this.props.intend + "px solid #d9d9d9"
        } : {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, (() => {
        if (col === "name") return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_1__["TaskName"], {
          name: this.props.name,
          is_test: this.props.task.is_test,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        });else if (col === "iterations") return this.props.task.finished_iterations;else if (col === "saved") return this.props.task.saved_time.toShortStr();else if (col === "created") return this.props.task.creation_time.toShortStr();else if (col === "uuid") return this.props.task.uuid;else return col in this.props.metrics ? typeof this.props.metrics[col][2] === "number" ? this.props.metrics[col][2].toFixed(3) : this.props.metrics[col][2] : "N/A";
      })())));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "table-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: this.props.selectedCols.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Loading..."));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TableRowTask);

/***/ }),

/***/ "./src/table/TaskTable.js":
/*!********************************!*\
  !*** ./src/table/TaskTable.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GroupedTableTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupedTableTasks */ "./src/table/GroupedTableTasks.js");
/* harmony import */ var _ParamViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ParamViewer */ "./src/ParamViewer.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/table/TaskTable.js";




class TaskTable extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "task-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "task-table-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, this.props.selectedCols.map(name => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, name, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-caret-down " + (this.props.sorting[0] === name && this.props.sorting[1] ? "sort-active" : ""),
      onClick: () => this.props.changeSorting(name, true),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-caret-up " + (this.props.sorting[0] === name && !this.props.sorting[1] ? "sort-active" : ""),
      onClick: () => this.props.changeSorting(name, false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupedTableTasks__WEBPACK_IMPORTED_MODULE_1__["default"], {
      tasks: this.props.tasks,
      selectedCols: this.props.selectedCols,
      intend: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TaskTable);

/***/ }),

/***/ "./src/table/index.js":
/*!****************************!*\
  !*** ./src/table/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TableApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableApp */ "./src/table/TableApp.js");
var _jsxFileName = "/home/domin/PycharmProjects/taskplan/taskplan/web/src/table/index.js";




__webpack_require__(/*! ../less/table.less */ "./src/less/table.less");

__webpack_require__(/*! ../fonts/fonts.css */ "./src/fonts/fonts.css");

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableApp__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/table/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/domin/PycharmProjects/taskplan/taskplan/web/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/domin/PycharmProjects/taskplan/taskplan/web/src/table/index.js */"./src/table/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map