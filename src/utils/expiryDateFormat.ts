// borrowed from https://s-yadav.github.io/react-number-format/docs/customization
// format expiry date as MM/YY


const format = (val: string) => {
  if (val === '') return '';
  let month = val.substring(0, 2);
  const year = val.substring(2, 4);

  if (month.length === 1 && parseInt(month[0]) > 1) {
    month = `0${month[0]}`;
  } else if (month.length === 2) {
    // set the lower and upper boundary
    if (Number(month) === 0) {
      month = `01`;
    } else if (Number(month) > 12) {
      month = '12';
    }
  }

  return `${month}/${year}`;
};

export default format