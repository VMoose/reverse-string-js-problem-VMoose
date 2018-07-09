// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (s) => {
  let revstring = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    revstring += s[i];
  }
  return revstring;
};

module.exports = reverse;
