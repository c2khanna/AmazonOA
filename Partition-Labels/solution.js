var partitionLabels = function(S) {
    let res = [];

    let endMap = {};

    for (let i = S.length - 1; i >= 0; i--) {
        if (!endMap[S[i]]) {
            endMap[S[i]] = i
        }
    }

    let curEnd = endMap[S[0]];
    let pushedSoFar = 0;
    for (let i = 0; i < S.length; i++) {
        if (i >= curEnd || i === S.length - 1) {
            res.push(curEnd + 1 - pushedSoFar);
            pushedSoFar = i + 1;
            curEnd = endMap[S[i+1]];
        }
        if (endMap[S[i]] > curEnd) {
            curEnd = endMap[S[i]];
        }
    }
    return res
};

let s = "ababcbacadefegdehijhklij"

console.log(partitionLabels(s));
