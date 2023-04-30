import moment from 'moment';

// create the timestamp here. I use the end of the day here as an example
const end = moment().endOf('day');

setInterval(() => {
  const timeLeft = moment(end.diff(moment())); // get difference between now and timestamp
  const formatted = timeLeft.format('HH:mm:ss'); // make pretty

  console.log(formatted); // or do your jQuery stuff here
}, 1000);
