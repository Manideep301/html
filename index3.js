function reverseArray(arr) {
     return arr.reverse();
}
    // Example usage:
let array = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(array);
console.log(reversedArray);
function fibonacciSeries(n){
    let series = [0, 1];
    for (let i = 2; i < n; i++){
        series-push(series[i - 1] + series[i - 2]);
    }
    return series.slice(o, n);
}
    // Example usage:
let series = fibonacciSeries(10);
console.log(Series);