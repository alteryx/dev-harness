"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _DesignerMessageApi = _interopRequireDefault(require("../DesignerMessageApi"));

var _MicroAppMessageApi = _interopRequireDefault(require("../MicroAppMessageApi"));

var _constants = require("../Utils/constants");

var _Context = _interopRequireDefault(require("../Context"));

/* eslint-disable react/require-default-props */

/* eslint-disable no-underscore-dangle */

/* eslint-disable no-console */

/* eslint-disable react/forbid-prop-types */
let messageBroker;

const DesignerApi = props => {
  const {
    messages = {},
    defaultConfig = {}
  } = props;

  if (!messageBroker) {
    messageBroker = window.Alteryx && window.Alteryx.AlteryxLanguageCode ? new _DesignerMessageApi.default(props.ctx || window.Alteryx) : new _MicroAppMessageApi.default();
  }

  const mergedState = (0, _deepmerge.default)(messageBroker.model, defaultConfig);
  console.log('mergedState', mergedState);
  const [model, updateModel] = (0, _react.useState)(mergedState);
  const [appContext, updateAppContext] = (0, _react.useState)(messageBroker.ayxAppContext);

  const handleUpdateModel = updatedData => {
    updateModel(updatedData);
    messageBroker.model = updatedData;

    if (messageBroker instanceof _MicroAppMessageApi.default) {
      messageBroker.sendMessage(_constants.SUBSCRIPTION_EVENTS.MODEL_UPDATED, updatedData);
    }
  };

  (0, _react.useEffect)(() => {
    const receiveAppContext = data => {
      updateAppContext({ ...data
      });
    };

    const receiveModel = data => {
      updateModel((0, _deepmerge.default)(model, data));
    };

    messageBroker.subscribe(_constants.SUBSCRIPTION_EVENTS.MODEL_UPDATED, receiveModel);
    messageBroker.subscribe(_constants.SUBSCRIPTION_EVENTS.AYX_APP_CONTEXT_UPDATED, receiveAppContext);
    return function cleanUp() {
      handleUpdateModel(messageBroker.model);
    };
  }, []);
  const getContextValue = (0, _react.useCallback)(() => [model, handleUpdateModel], [model, handleUpdateModel]);
  console.log('getting context value', getContextValue());
  const contextProps = {
    id: 'sdk-provider',
    value: getContextValue()
  };
  console.log('context props', contextProps);
  const {
    darkMode,
    locale,
    productTheme
  } = appContext || {};
  const appPropsToSpread = {
    messages,
    paletteType: darkMode ? 'dark' : 'light',
    theme: productTheme,
    locale
  };
  return /*#__PURE__*/_react.default.createElement(_Context.default.Provider, contextProps, /*#__PURE__*/_react.default.cloneElement(props.children, { ...appPropsToSpread
  }));
};

var _default = DesignerApi;
exports.default = _default;