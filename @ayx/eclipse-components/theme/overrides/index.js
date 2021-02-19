"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _accordion = _interopRequireDefault(require("./accordion"));

var _alert = _interopRequireDefault(require("./alert"));

var _appBar = _interopRequireDefault(require("./app-bar"));

var _autocomplete = _interopRequireDefault(require("./autocomplete"));

var _avatar = _interopRequireDefault(require("./avatar"));

var _backdrop = _interopRequireDefault(require("./backdrop"));

var _badge = _interopRequireDefault(require("./badge"));

var _breadcrumbs = _interopRequireDefault(require("./breadcrumbs"));

var _button = _interopRequireDefault(require("./button"));

var _card = _interopRequireDefault(require("./card"));

var _chip = _interopRequireDefault(require("./chip"));

var _checkbox = _interopRequireDefault(require("./checkbox"));

var _dialog = _interopRequireDefault(require("./dialog"));

var _divider = _interopRequireDefault(require("./divider"));

var _drawer = _interopRequireDefault(require("./drawer"));

var _form = _interopRequireDefault(require("./form"));

var _iconButton = _interopRequireDefault(require("./icon-button"));

var _input = _interopRequireDefault(require("./input"));

var _linearProgress = _interopRequireDefault(require("./linear-progress"));

var _link = _interopRequireDefault(require("./link"));

var _list = _interopRequireDefault(require("./list"));

var _listBox = _interopRequireDefault(require("./list-box"));

var _menu = _interopRequireDefault(require("./menu"));

var _modal = _interopRequireDefault(require("./modal"));

var _numericInput = _interopRequireDefault(require("./numeric-input"));

var _paper = _interopRequireDefault(require("./paper"));

var _popover = _interopRequireDefault(require("./popover"));

var _radio = _interopRequireDefault(require("./radio"));

var _skeleton = _interopRequireDefault(require("./skeleton"));

var _slider = _interopRequireDefault(require("./slider"));

var _snackbar = _interopRequireDefault(require("./snackbar"));

var _speedDialIcon = _interopRequireDefault(require("./speed-dial-icon"));

var _stepper = _interopRequireDefault(require("./stepper"));

var _svgIcon = _interopRequireDefault(require("./svg-icon"));

var _switch = _interopRequireDefault(require("./switch"));

var _table = _interopRequireDefault(require("./table"));

var _tabs = _interopRequireDefault(require("./tabs"));

var _togglebutton = _interopRequireDefault(require("./togglebutton"));

var _tooltip = _interopRequireDefault(require("./tooltip"));

var _toolbar = _interopRequireDefault(require("./toolbar"));

var _treeview = _interopRequireDefault(require("./treeview"));

var _default = function _default(theme) {
  return (0, _extends2.default)({}, (0, _accordion.default)(theme), (0, _alert.default)(theme), (0, _appBar.default)(theme), (0, _autocomplete.default)(theme), (0, _avatar.default)(theme), (0, _backdrop.default)(theme), (0, _badge.default)(theme), (0, _breadcrumbs.default)(theme), (0, _button.default)(theme), (0, _card.default)(theme), (0, _checkbox.default)(theme), (0, _chip.default)(theme), (0, _dialog.default)(theme), (0, _divider.default)(theme), (0, _drawer.default)(theme), (0, _form.default)(theme), (0, _iconButton.default)(theme), (0, _input.default)(theme), (0, _linearProgress.default)(theme), (0, _link.default)(theme), (0, _list.default)(theme), (0, _listBox.default)(theme), (0, _menu.default)(theme), (0, _modal.default)(theme), (0, _numericInput.default)(theme), (0, _paper.default)(theme), (0, _popover.default)(theme), (0, _radio.default)(theme), (0, _skeleton.default)(theme), (0, _slider.default)(theme), (0, _snackbar.default)(theme), (0, _speedDialIcon.default)(theme), (0, _stepper.default)(theme), (0, _svgIcon.default)(theme), (0, _switch.default)(theme), (0, _table.default)(theme), (0, _tabs.default)(theme), (0, _togglebutton.default)(theme), (0, _toolbar.default)(theme), (0, _tooltip.default)(theme), (0, _treeview.default)(theme));
};

exports.default = _default;