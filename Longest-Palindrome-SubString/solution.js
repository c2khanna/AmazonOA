var longestPalindrome = function(s) {
    if (s == null || s.length < 1) return "";

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i+=0.5) {
        let curLen = 0;
        if (i - Math.floor(i) == 0) {
            curLen = expandAroundCenter(s, i, i);
        } else {
            curLen = expandAroundCenter(s, Math.floor(i), Math.ceil(i));
        }
        if (curLen > end - start) {
            start = i - (curLen - 1) / 2;
            end = i + curLen / 2;
        }
    }
    return s.substring(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
    let L = left;
    let R = right;
    while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
