/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0;
    const rowLength = grid.length,
            colLength = grid[0].length;

    // 遍历每个单元格
    for(let i=0;i<rowLength;i++) {
        for(let j=0;j<colLength;j++){
            if(grid[i][j] === '1'){
                // 发现新岛屿，数量加1
                islandCount++;
                // 标记该岛屿的所有陆地为已访问
                dfs(i,j);
            }
        }
    }

    // 深度优先搜索：将当前陆地及其相邻陆地标记为已访问（'2'）
    // 因为是无相图，不需要回溯
    function dfs(i, j){
        // 检查边界条件和是否为陆地
        if(i >= rowLength || i<0 || j>=colLength || j<0 || grid[i][j] !== "1") {
            return;
        }

        // 标记当前单元格为已访问（插旗子2）
        grid[i][j] = '2';

        // 递归标记四个方向的相邻单元格
        dfs(i+1, j);
        dfs(i, j+1);
        dfs(i-1, j);
        dfs(i, j-1);

    }

    return islandCount;

};