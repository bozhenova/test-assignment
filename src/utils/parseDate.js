import moment from 'moment';

export const parseDate = date => {
  return moment(date).startOf('hour').fromNow();
};

export default parseDate;
