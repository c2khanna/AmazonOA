var reorderLogFiles = function(logs) {
    let letterLogs = [];
    let digitLogs = [];

    logs.forEach(log => {
        if (log.split(' ')[1] >= 0) {
            digitLogs.push(log)
        } else {
            letterLogs.push(log)
        }
    })
    sortLetterLogs(letterLogs);
    return letterLogs.concat(digitLogs)

};

const sortLetterLogs = (letterLogs) => {
    letterLogs.sort((log1, log2) => {
        let [id1, ...strArr1] = log1.split(' ');
        let [id2, ...strArr2] = log2.split(' ');

        let str1 = strArr1.join(' ');
        let str2 = strArr2.join(' ');

        if (str1 === str2) {
            return id1.localeCompare(id2);
        }
        return str1.localeCompare(str2);
    })
}

let logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];

console.log(reorderLogFiles(logs))
