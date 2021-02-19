"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _FieldList = _interopRequireDefault(require("./FieldList"));

let FieldListArray = function FieldListArray(eIncomingMetaInfo) {
  (0, _classCallCheck2.default)(this, FieldListArray);
  this.fields = void 0;

  this.getListAt = (nInput, nIndex = undefined) => {
    if (this.fields.length === 0 || typeof this.fields[nInput] === 'undefined') return;

    if (nIndex >= 0) {
      return this.fields[nInput][nIndex];
    }

    return this.fields[nInput][0];
  };

  this.copyListAt = (nInput, nIndex = undefined) => {
    if (this.fields.length === 0 || typeof this.fields[nInput] === 'undefined') return;

    if (nIndex >= 0) {
      const originalFieldList = this.fields[nInput][nIndex];
      const newFieldsList = new _FieldList.default();
      newFieldsList.connectionName = originalFieldList.connectionName;

      for (const field of originalFieldList.fields) {
        newFieldsList.addField(field);
      }

      return newFieldsList;
    }

    return this.fields[nInput][0];
  };

  this.getCountMultiInputs = nInput => this.fields[nInput].length;

  this.getMultiInputs = nInput => this.fields[nInput];

  // array of json objects
  this.fields = [];

  if (eIncomingMetaInfo != null) {
    // if null return // TODO reractor to use !== and not !=
    for (const eMetaInfo of eIncomingMetaInfo) {
      const listFieldList = []; // array of fieldlists

      if (eMetaInfo == null) {
        // empty single input
        listFieldList.push(new _FieldList.default());
      } else if (eMetaInfo.hasOwnProperty('MultiMetaInfo')) {
        if (eMetaInfo.MultiMetaInfo == null) {
          listFieldList.push(new _FieldList.default());
        } else if (eMetaInfo.MultiMetaInfo.MetaInfo[Symbol.iterator] !== undefined) {
          // >1 connection to multi-input
          for (const eChildMetaInfo of eMetaInfo.MultiMetaInfo.MetaInfo) {
            listFieldList.push(new _FieldList.default(eChildMetaInfo.RecordInfo, eChildMetaInfo['@name']));
          }
        } else {
          // 1 connection to multi-input
          listFieldList.push(new _FieldList.default(eMetaInfo.MultiMetaInfo.MetaInfo.RecordInfo, eMetaInfo.MultiMetaInfo.MetaInfo['@name']));
        }
      } else {
        // single input
        listFieldList.push(new _FieldList.default(eMetaInfo.MetaInfo.RecordInfo));
      }

      this.fields.push(listFieldList);
    }
  }
};

exports.default = FieldListArray;