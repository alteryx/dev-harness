"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.validateMultiplier = exports.validateCharacter = exports.MAX_MULTIPLIER = exports.MIN_MULTIPLIER = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var isObject = function isObject(obj) {
  return (0, _typeof2.default)(obj) === 'object' && obj !== null;
};

var MIN_MULTIPLIER = 0.0;
exports.MIN_MULTIPLIER = MIN_MULTIPLIER;
var MAX_MULTIPLIER = 3.0;
exports.MAX_MULTIPLIER = MAX_MULTIPLIER;

var applyPadding = function applyPadding(value, constrainedMultiplier, validatedCharacter) {
  var valueLength = value.length;
  var totalPadLength = Math.ceil(valueLength * constrainedMultiplier);
  var oneSidePadLength = Math.max(Math.ceil(totalPadLength / 2), 1);
  var leftPadChar = validatedCharacter || '⇚';
  var rightPadChar = validatedCharacter || '⇛';
  var leftPad = leftPadChar.repeat(oneSidePadLength);
  var rightPad = rightPadChar.repeat(oneSidePadLength); // https://github.com/eslint/eslint/issues/8581

  return "".concat(leftPad).concat(value).concat(rightPad);
};

var traverseMessagesObj = function traverseMessagesObj(msgObj, constrainedMultiplier, validatedCharacter) {
  if (typeof msgObj === 'string') {
    return applyPadding(msgObj, constrainedMultiplier, validatedCharacter);
  }

  if (Array.isArray(msgObj)) {
    return msgObj.map(function (item) {
      return traverseMessagesObj(item, constrainedMultiplier, validatedCharacter);
    });
  }

  if (isObject(msgObj)) {
    return Object.keys(msgObj).reduce(function (acc, key) {
      return (0, _extends3.default)({}, acc, (0, _defineProperty2.default)({}, key, traverseMessagesObj(msgObj[key], constrainedMultiplier, validatedCharacter)));
    }, {});
  }

  return msgObj;
};

var validateCharacter = function validateCharacter(character) {
  var validatedChar = character;

  if (character && character.length > 1) {
    // eslint-disable-next-line no-console
    console.warn("padMessages: The `character` option only supports a single character. Only first character of the provided string will be used."); // This DOES NOT WORK for multibyte characters and will behave in unpredictable ways.
    // A good explaination of how hard mutlibyte support is can be found here:
    // https://coolaj86.com/articles/how-to-count-unicode-characters-in-javascript/

    validatedChar = character.charAt(0);
  }

  return validatedChar;
};

exports.validateCharacter = validateCharacter;

var validateMultiplier = function validateMultiplier() {
  var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.4;
  var constrainedMultiplier = Math.min(Math.max(MIN_MULTIPLIER, multiplier), MAX_MULTIPLIER);

  var multiplierWarnMsg = function multiplierWarnMsg(val, min, max) {
    var minMaxStr;
    if (val > max) minMaxStr = 'Max';
    if (val < min) minMaxStr = 'Min';
    var minMaxVal;
    if (val > max) minMaxVal = max;
    if (val < min) minMaxVal = min;
    var minMaxPcnt = parseInt(minMaxVal * 100, 10); // eslint-disable-next-line no-console

    console.warn("padMessages: ".concat(minMaxStr, " allowed multiplier is ").concat(minMaxVal, ", (or ").concat(minMaxPcnt, "%). ").concat(minMaxStr, " was used instead of requested value of ").concat(multiplier, "."));
  };

  if (multiplier > MAX_MULTIPLIER || multiplier < MIN_MULTIPLIER) {
    multiplierWarnMsg(multiplier, MIN_MULTIPLIER, MAX_MULTIPLIER);
  }

  return constrainedMultiplier;
};
/**
 * Wraps the string values of a messages object in padding characters; arrows, by default.
 * @param {Object} msgObj - The data that should be wrapped with arrows. Can contain other objects and even arrays of strings.
 * @param {Object} [config] - Optional configuration object.
 * @param {number} [config.multiplier=0.4] - Min: 0.0; Max 3.0; Number of arrows to be added, as a multiplier of the character count of the source string. (e.g. 'characters' with growthRate of 0.4 would get two arrows on each side, for a total of 4 added arrow characters)
 * @param {string} [config.character] - Max length: 1; Custom character to use as padding. Defaults to traditional arrows characters.
 */


exports.validateMultiplier = validateMultiplier;

var padMessages = function padMessages() {
  var msgObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!isObject(msgObj)) {
    // eslint-disable-next-line no-console
    console.warn('Could not generate arrows language. Source messages were either not provided, or were not in the form of an object.');
    return msgObj;
  }

  var multiplier = config.multiplier,
      character = config.character;
  return traverseMessagesObj(msgObj, validateMultiplier(multiplier), validateCharacter(character));
};

var _default = padMessages;
exports.default = _default;