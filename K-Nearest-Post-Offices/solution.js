var kClosest = function(you, points, K) {
    points.sort((a, b) => {
        return (((a[0]-you[0])*(a[0]-you[0]))+((a[1]-you[1])*(a[1]-you[1]))) - (((b[0]-you[0])*(b[0]-you[0]))+((b[1]-you[1])*(b[1]-you[1])));
    })

    return points.slice(0, K)
};

let you = [0, 0]
let post_offices = [[-16, 5], [-1, 2], [4, 3], [10, -2], [0, 3], [-5, -9]]
let k = 3

console.log(kClosest(you, post_offices, k));
