const { DateTime } = require('luxon');
// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
module.exports = dateObj => DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
