var generateParenthesis = function(n) {
    let res = [];

    const generate = (S = '', open = 0, close = 0) => {
        if (S.length === 2*n) {
            res.push(S);
            return;
        }

        if (open < n) {
            generate(S+'(', open+1, close);
        }
        if (close < open) {
            generate(S+')', open, close+1)
        }
    }

    generate();
    return res;
};

let n = 15;

console.log(generateParenthesis(n));
