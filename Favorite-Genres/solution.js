const getFavouriteGenres = (userSongs, songGenres) => {
  let inv = {};

  Object.keys(songGenres).forEach(key => {
    for (let i = 0; i < songGenres[key].length; i++) {
      inv[songGenres[key][i]] = key;
    }
  });

  let res = {};

  Object.keys(userSongs).forEach((key) => {
    res[key] = {};
    for (let i = 0; i < userSongs[key].length; i++) {
      if (!inv[userSongs[key][i]]) {
        continue;
      }
      if (res[key][inv[userSongs[key][i]]]) {
        res[key][inv[userSongs[key][i]]]++
      } else {
        res[key][inv[userSongs[key][i]]] = 1
      }
    }
  });
  let result = {};
  Object.keys(res).forEach((key) => {
    result[key] = [];
    let max = 0;
    Object.keys(res[key]).forEach((genre) => {
      if (res[key][genre] > max) {
        result[key] = [];
        result[key].push(genre);
        max = res[key][genre];
      } else if (res[key][genre] === max) {
        result[key].push(genre);
      }
    });

  });

  return result;

}

let userSongs = {
  "David": ["song1", "song2", "song3", "song4", "song8"],
  "Emma":  ["song5", "song6", "song7"]
}

let songGenres = {
  "Rock":    ["song1", "song3"],
  "Dubstep": ["song7"],
  "Techno":  ["song2", "song4"],
  "Pop":     ["song5", "song6"],
  "Jazz":    ["song8", "song9"]
}

console.log(getFavouriteGenres(userSongs, songGenres));

userSongs = {
   "David": ["song1", "song2"],
   "Emma":  ["song3", "song4"]
}

songGenres = {}
console.log(getFavouriteGenres(userSongs, songGenres));
