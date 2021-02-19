"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MessageApiBase = _interopRequireDefault(require("../MessageApiBase"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

let initRes;
const initialized = new Promise(res => {
  initRes = res;
});

let MicroAppMessageApi = /*#__PURE__*/function (_MessageApi) {
  (0, _inherits2.default)(MicroAppMessageApi, _MessageApi);

  var _super = _createSuper(MicroAppMessageApi);

  function MicroAppMessageApi() {
    var _this;

    (0, _classCallCheck2.default)(this, MicroAppMessageApi);
    _this = _super.call(this, window);

    _this.sendMessage = (type, data) => {
      window.parent.postMessage({
        type,
        payload: { ...data
        }
      }, window.parent.origin);
    };

    _this.receiveMessage = message => {
      if (_this.subscriptions.has(message.data.type)) {
        _this.subscriptions.get(message.data.type)(message.data.payload);
      }
    };

    _this.init = () => {
      _this.sendMessage('INIT', null);

      window.addEventListener('message', message => {
        if (message.data.type === 'HANDSHAKE_RECEIVED') {
          initRes();
        }
      });
    };

    _this.onReady = () => {
      return initialized;
    };

    window.addEventListener('message', _this.receiveMessage);

    _this.init();

    return _this;
  }

  return MicroAppMessageApi;
}(_MessageApiBase.default);

var _default = MicroAppMessageApi;
exports.default = _default;