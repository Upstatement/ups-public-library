const { DateTime } = require('luxon');

module.exports = dateObj => DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('LLL dd, yyyy');
