var generateParenthesis = function(n) {
    let res = [];

    const generate = (A = []) => {
        if (A.length == 2*n) {
            if (isValid(A.join(''))) {
                res.push(A.join(''))
            }
        } else {
            A.push('(')
            generate(A)
            A.pop()
            A.push(')')
            generate(A)
            A.pop()
        }
    }
    var isValid = function(s) {
        if (s === "") {
            return true;
        }

        let stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push(s[i]);
            } else {
                if (s[i] === ')' && stack[stack.length - 1] !== '(') {
                    return false;
                } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
                    stack.pop();
                }
            }
        }
        return stack.length === 0;
    };

    generate();
    return res

};

let n = 3;

console.log(generateParenthesis(n));
