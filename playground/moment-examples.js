var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('current timestamp', now.unix());
var timestamp = 1493674584;

var currentMoment = moment.unix(timestamp);

console.log('Current timestamp', currentMoment.format('MMM D, YY @ h:mm a'));

//May 1st, 2016 @ time
console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
