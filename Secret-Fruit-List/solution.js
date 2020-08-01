function secretFruitList(codeList, shoppingCart) {
  let i = 0;
  let j = 0;
  shoppingCart.forEach((cartItem) => {
    if (i < codeList.length && j < codeList[i].length && (cartItem === codeList[i][j] || codeList[i][j] === "anything")) {
      if (j === codeList[i].length - 1) {
        j = 0;
        i++;
      } else {
        j++
      }
    } else {
      j = 0;
    }
  });

  if (i === codeList.length) {
    return 1;
  }
  else {
    return 0
  }
}

let codeList = [["apple", "apple"], ["banana", "anything", "banana"]];
let shoppingCart =  ["orange", "apple", "apple", "banana", "orange", "banana"];

console.log(secretFruitList(codeList, shoppingCart)); // expect 1

codeList = [["apple", "apple"], ["banana", "anything", "banana"]];
shoppingCart = ["banana", "orange", "banana", "apple", "apple"];

console.log(secretFruitList(codeList, shoppingCart)); // expect 0

codeList = [["apple", "apple"], ["banana", "anything", "banana"]];
shoppingCart = ["apple", "banana", "apple", "banana", "orange", "banana"];

console.log(secretFruitList(codeList, shoppingCart)); // expect 0

codeList = [["apple", "apple"], ["apple", "apple", "banana"]];
shoppingCart = ["apple", "apple", "apple", "banana"];

console.log(secretFruitList(codeList, shoppingCart)); // expect 0

codeList = [["apple", "apple"], ["banana", "anything", "banana"]];
shoppingCart =  ["apple", "apple", "orange", "orange", "banana", "apple", "banana", "banana"];

console.log(secretFruitList(codeList, shoppingCart)); // expect 1

codeList = [];
shoppingCart =  ["apple", "apple", "orange", "orange", "banana", "apple", "banana", "banana"];

console.log(secretFruitList(codeList, shoppingCart)); // expect 1

codeList = [["apple", "apple"], ["banana", "anything", "banana"]];
shoppingCart =  [];

console.log(secretFruitList(codeList, shoppingCart)); // expect 0
