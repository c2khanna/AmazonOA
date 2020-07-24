function SubstringsKDistinct(str, k) {
  let start = 0;
  let end = 0;
  let res = [];
  while (end < str.length && start < str.length) {
    while (end <= str.length) {

      if (new Set(str.slice(start, end)).size === k) {
        res.push(str.slice(start, end));
      }
      end++;
    }
    start++;
    end = start;
  }
  return res.length;
}


let s = "pqpqs", k = 2;
console.log(SubstringsKDistinct(s,2))

s = "aabab", k = 3
console.log(SubstringsKDistinct(s,3))
