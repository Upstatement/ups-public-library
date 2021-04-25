const _ = require('lodash');

/**
 * Filters an array of objects given a path, test, and comparison operator.
 *
 * Implementing our own because the selectattr and removeattr filters don't work:
 * @see https://github.com/11ty/eleventy/issues/910
 *
 * Adapted from Stackbit's nunjucks implementation, unibit.
 * @see https://github.com/stackbit/unibit/blob/2fb46d3834743b72a9faa0ff3d443f375c72ab81/src/filters.js#L95
 *
 * Usage:
 *
 * {{ array | where(key: String[, match: any, operator: (== | != | > | >= | < | <=)]) }}
 *
 * 1. If only key is specified, then array items are filtered by objects having a field in the specified key, regardless of their values.
 * 2. If first key and match are specified, then == operator is assumed and array objects are filtered by values equal to match.
 * 3. Similar to where(key, match), using one of the available operators: ==, !=, >, >=, <, <=
 */

module.exports = (array, key, match, operator = '==') => {
  if (key === undefined) {
    console.error(
      `Error in 'where' filter: got undefined key. Check that you provided the path in string format.`,
    );
    return;
  }

  const operatorMap = {
    '==': _.eq,
    '!=': (value, otherValue) => value !== otherValue,
    '>': _.gt,
    '>=': _.ge,
    '<': _.lt,
    '<=': _.le,
  };

  const predicate = element => {
    if (!match) {
      return _.has(element, key);
    } else {
      const value = _.get(element, key);
      return operatorMap[operator](value, match);
    }
  };

  return _.filter(array, predicate);
};
