"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MessageApiBase2 = _interopRequireDefault(require("../MessageApiBase"));

var callback = _interopRequireWildcard(require("../Utils/callback"));

var _constants = require("../Utils/constants");

var _FieldListArray = _interopRequireDefault(require("../MetaInfoHelpers/FieldListArray"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

let DesignerMessageApi = /*#__PURE__*/function (_MessageApiBase) {
  (0, _inherits2.default)(DesignerMessageApi, _MessageApiBase);

  var _super = _createSuper(DesignerMessageApi);

  function DesignerMessageApi(ctx) {
    var _this;

    (0, _classCallCheck2.default)(this, DesignerMessageApi);
    _this = _super.call(this, ctx);

    _this.sendMessage = (type, payload) => {
      return callback.JsEvent(_this.context, type, payload);
    };

    _this.encryptSecrets = key => {
      if (!_this.model.Secrets[key].text.length) {
        // only send an encrypt call if a string is present
        // protects against empty default config values
        return {
          text: '',
          encryptionMode: ''
        };
      }

      if (_this.model.Secrets[key].encrypted) {
        return;
      }

      return Promise.resolve(_this.sendMessage('Encrypt', {
        text: _this.model.Secrets[key].text,
        encryptionMode: _this.model.Secrets[key].encryptionMode || 'obfuscation'
      })).then(res => {
        _this.model.Secrets[key] = {
          text: res,
          encryptionMode: _this.model.Secrets[key].encryptionMode,
          encrypted: true
        };
      });
    };

    _this.decryptSecrets = secret => {
      if (!secret.text.length) {
        return {
          text: '',
          encryptionMode: '' || 'obfuscation'
        };
      }

      return Promise.resolve(_this.sendMessage('Decrypt', {
        text: secret.text
      })).then(res => {
        return {
          text: res,
          encryptionMode: secret.encryptionMode
        };
      });
    };

    _this.generateConfigShape = async currentToolConfiguration => {
      const {
        Annotation
      } = currentToolConfiguration.Configuration.Configuration || _this.model;
      const [decryptedSecrets, cleanToolConfiguration] = await _this.cleanConfigAndDecryptSecrets(currentToolConfiguration);
      return {
        Configuration: cleanToolConfiguration.Configuration.Configuration || _this.model.Configuration,
        Secrets: decryptedSecrets || _this.model.Secrets,
        Annotation,
        Meta: new _FieldListArray.default(currentToolConfiguration.MetaInfo),
        ToolName: currentToolConfiguration.ToolName,
        ToolId: currentToolConfiguration.ToolId,
        srcData: currentToolConfiguration
      };
    };

    _this.cleanConfigAndDecryptSecrets = async (currentToolConfiguration) => {
      const decryptedSecrets = {};

      if (currentToolConfiguration.Configuration.Configuration && currentToolConfiguration.Configuration.Configuration.Annotation) {
        delete currentToolConfiguration.Configuration.Configuration.Annotation;
      }

      if (currentToolConfiguration.Configuration.Configuration && currentToolConfiguration.Configuration.Configuration.Secrets) {
        const encryptedValueKeys = Object.keys(currentToolConfiguration.Configuration.Configuration.Secrets);
        const valuesToDecrypt = encryptedValueKeys.map(key => currentToolConfiguration.Configuration.Configuration.Secrets[key]);
        const decryptedValues = await Promise.all(valuesToDecrypt.map(_this.decryptSecrets));

        _this.assignDecryptedSecrets(encryptedValueKeys, decryptedSecrets, decryptedValues);

        delete currentToolConfiguration.Configuration.Configuration.Secrets;
      }

      return [decryptedSecrets, currentToolConfiguration];
    };

    _this.assignDecryptedSecrets = (encryptedValueKeys, decryptedSecrets, decryptedValues) => {
      for (let i = 0; i < encryptedValueKeys.length; i++) {
        decryptedSecrets[encryptedValueKeys[i]] = decryptedValues[i];
      }
    };

    _this.model = {
      Configuration: {},
      Annotation: '',
      Meta: [],
      ToolName: '',
      Secrets: {},
      ToolId: undefined,
      srcData: {}
    };
    _this.ayxAppContext = {
      darkMode: false,
      productTheme: {},
      locale: _this.context.AlteryxLanguageCode
    };
    _this.context.Gui = {
      SetConfiguration: async currentToolConfiguration => {
        if (_this.subscriptions && _this.subscriptions.has('MODEL_UPDATED')) {
          _this.model = await _this.generateConfigShape(currentToolConfiguration);

          _this.subscriptions.get('MODEL_UPDATED')(_this.model);
        }

        _this.context.JsEvent(JSON.stringify({
          Event: _constants.MESSAGE_TYPES.SET_CONFIGURATION
        }));
      },
      GetConfiguration: () => {
        const keys = Object.keys(_this.model.Secrets);
        Promise.all(keys.map(_this.encryptSecrets)).then(() => {
          const payload = {
            Configuration: {
              Configuration: { ..._this.model.Configuration,
                Secrets: { ..._this.model.Secrets
                }
              },
              Annotation: _this.model.Annotation
            }
          };

          _this.sendMessage(_constants.MESSAGE_TYPES.GET_CONFIGURATION, payload);
        });
      },
      Callbacks: {}
    };
    return _this;
  }

  return DesignerMessageApi;
}(_MessageApiBase2.default);

var _default = DesignerMessageApi;
exports.default = _default;