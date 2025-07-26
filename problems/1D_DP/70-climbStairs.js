/**
 * @param {number} n
 * @return {number}
 */

 // f(x)=f(x−1)+f(x−2)
var climbStairs = function(n) {
    const memo = [];
    memo[1] = 1;
    memo[2] = 2;
    for(let i=3; i<=n; i++){
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n];
};ß