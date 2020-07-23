var kClosest = function(points, K) {
    points.sort((a, b) => {
        return (a[0]*a[0]+a[1]*a[1]) - (b[0]*b[0]+b[1]*b[1]);
    })

    return points.slice(0, K)
};

let points = [[1,3],[-2,2]];
let K = 1;

console.log(kClosest(points, K));

points = [[3,3],[5,-1],[-2,4]]
K = 2

console.log(kClosest(points, K));
