"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _FieldInfo = _interopRequireDefault(require("./FieldInfo"));

var _FieldInfoJson = _interopRequireDefault(require("./FieldInfoJson"));

let FieldList = /*#__PURE__*/function () {
  // Type safety doesn't work here as the Field coming from Designer can be an object, an array, or a FieldInfo
  // The typing is not universal and can't be made so as fallback types expect all aspects of a
  // type to be present
  function FieldList(eRecordInfo, connectionName) {
    (0, _classCallCheck2.default)(this, FieldList);
    this.connectionName = void 0;
    this.fieldsByName = void 0;
    this.fields = void 0;
    this.Field = void 0;

    this.addField = fi => {
      if (fi instanceof _FieldInfo.default) {
        this.fields.push(fi);
      } else {
        // ignoring non-field input
        throw new Error('Attempted to add a non-field to FieldList.');
      }
    };

    // ConnectionName is only populated when there is a named connection coming in (multiple input)
    this.connectionName = connectionName || '';
    this.fields = [];

    if (eRecordInfo && eRecordInfo.Field) {
      if (eRecordInfo.Field.length) {
        // Field is iterable (multiple field JSON object)
        eRecordInfo.Field.forEach(info => {
          this.addField(new _FieldInfoJson.default(info));
        }, this);
      } else {
        // Field is not iterable (single field JSON object)
        this.addField(new _FieldInfoJson.default(eRecordInfo.Field));
      }
    } else if (eRecordInfo instanceof FieldList) {
      // Existing field list
      this.combineFields(eRecordInfo);
    }

    this.fieldsByName = this.fields.reduce((acc, field) => {
      acc[field.name.toLowerCase()] = field;
      return acc;
    }, {});
  }

  (0, _createClass2.default)(FieldList, [{
    key: "combineFields",
    value: function combineFields(recordInfo) {
      for (const fi of recordInfo.fields) {
        this.addField(fi);
      }
    }
  }]);
  return FieldList;
}();

exports.default = FieldList;