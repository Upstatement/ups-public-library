const _ = require('lodash');

/**
 * From Stackbit's nunjucks implementation, unibit.
 * Filters array of objects by values using their path.
 *
 * Source: https://github.com/stackbit/unibit/blob/2fb46d3834743b72a9faa0ff3d443f375c72ab81/src/filters.js#L95
 * Documentation: https://www.stackbit.com/docs/unibit/nunjucks-filters/#where_path_operator_match
 * Usage:
 *
 * {{ array | where(path: String[, operator: any, match: (== | != | > | >= | < | <=)]) }}
 *
 * 1. If only path is specified, then array items are filtered by objects having a field in the specified path, regardless of their values.
 * 2. If first two parameters are specified, then == operator is assumed and array objects are filtered by values equal to match.
 * 3. Similar to where(path, match), but allows to specifying comparison operator which is one of the supported operators: ==, !=, >, >=, <, <=
 */

module.exports = (array, key, operator, match) => {
  let predicate;
  const operatorMap = {
    '==': _.eq,
    '!=': (value, otherValue) => value !== otherValue,
    '>': _.gt,
    '>=': _.ge,
    '<': _.lt,
    '<=': _.le,
  };
  if (!operator) {
    predicate = function(element) {
      return _.has(element, key);
    };
  } else {
    if (!match) {
      match = operator;
      operator = '==';
    }
    predicate = function(element) {
      const value = _.get(element, key);
      return operatorMap[operator](value, match);
    };
  }
  return _.filter(array, predicate);
};
