
const debounce = (_, timeout) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        _.apply(this, args);
      }, timeout);
    };
  }

const unique = (a,t={}) => a.filter(e=>!(t[e]=e in t));

const getAllParamsByKey = (key) => {
    const params = new URLSearchParams(document.location.search)
    return params.getAll(key)
}
const intersection = (arr1, arr2) => {
  return unique(arr1.filter(x => arr2.includes(x))) ;
};

const intersectMany = (arrays) => {
    let res = arrays[0];
    for(let i = 1; i < arrays.length; i++){
       res = intersection(res, arrays[i]);
    };
    return res;
 };

 const declOfNum = (n, text_forms) => {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }
  return text_forms[2];
}

