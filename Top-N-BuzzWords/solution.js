

const getTopToys = (numToys, topToys, toys, numQuotes, quotes) => {
  let map = {};
  quotes.forEach((quote, i) => {
    let words = quote.toLowerCase().split(/[ ?',;!.]/);
    for(let word of words) {
      if (toys.indexOf(word) >= 0 && word.length > 0) {
        if (map[word]) {
            map[word][0]++;
            map[word][1].add(i);
        } else {
            let tempSet = new Set();
            tempSet.add(i)
            map[word] = [1, tempSet]
        }
      }
    }

  });

  // quotes.forEach((quote, i) => {
  //   let words = quote.toLowerCase().split(/[ ?',;!.]/);
  //
  //   Object.keys(map).forEach((key) => {
  //     if (words.indexOf(key) >= 0) {
  //       if (otherMap[key]) {
  //         otherMap[key]++
  //       } else {
  //         otherMap[key] = 1
  //       }
  //     }
  //   });
  //
  // });

  let res = Object
        .keys(map)
        .sort((a, b) => {
          if (map[b][0] === map[a][0]) {
            return map[b][1].size - map[a][1].size
          }
          return map[b][0] - map[a][0]
        })
        .slice(0, topToys);

  console.log(res)
}


(() => {
  var numToys = 5;
var topToys = 2;
var toys = ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"];
var numQuotes = 3;
var quotes = [
  "I love anacell Best services Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than eurocell",
  "betacellular is better than deltacellular",
];

numToys = 6
topToys = 2
toys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"]
numQuotes = 6
quotes = [
"Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
"The new Elmo dolls are super high quality",
"Expect the Elsa dolls to be very popular this year, Elsa!",
"Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
"For parents of older kids, look into buying them a drone",
"Warcraft is slowly rising in popularity ahead of the holiday season"
];

  getTopToys(numToys, topToys, toys, numQuotes, quotes);
})();
