function uniqueSubstrings(s, k) {
  let res = new Set();

  let i = 0;
  let j = k-1;

  while (j < s.length) {
    let curSubStr = s.slice(i, j+1);
    if (isValid(curSubStr)) {
      res.add(curSubStr)
    }
    i++;
    j++;
  }

    return Array.from(res);
}

const isValid = (str) => {
  let mySet = new Set();

  for (let i = 0; i < str.length; i++) {
    if (mySet.has(str[i])) return false;
    mySet.add(str[i])
  }
  return true;
}

let now = new Date().getTime();
console.log(uniqueSubstrings('abcabc', 3));
let now2 = new Date().getTime();
console.log(now2 - now);
console.log(uniqueSubstrings('abacab', 3));
let now3 = new Date().getTime();
console.log(now3 - now2);
console.log(uniqueSubstrings('awaglknagawunagwkwagl', 4));
let now4 = new Date().getTime();
console.log(now4 - now3);
