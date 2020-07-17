var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.toLowerCase().split(/[ ?',;!.]/);
    let map = {}
    let res = "";
    let max = 0;
    for (let word of words) {
        if (banned.indexOf(word) < 0 && word.length > 0) {
            if (map[word]) {
                map[word] ++
            } else {
                map[word] = 1;
            }
            if (map[word] > max) {
                max = map[word];
                res = word;
            }
        }
    }

    return res
};

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
let banned = ["hit"];

console.log(mostCommonWord(paragraph, banned));
