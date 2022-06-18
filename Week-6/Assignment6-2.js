// Problem 6.2 Spiral Order Matrix II 
// Problem Description: 
// Given a matrix of m * n elements (m rows, n columns)
// return all elements of the matrix in spiral order.

function spiralOrderMatrix(matrix){
    //m=rows, n=columns
    let m = matrix.length-1;
    let n = matrix[0].length-1;
  
    //column details:
    let rowLower = 0;
    let rowUpper = m;
    let colLower = 0;
    let colUpper = n;
    let spiral = [];
    if ( m > 0 && n === 0){
      for (let i = rowLower; i<=rowUpper;i++){
        spiral.push(matrix[i][colLower]);
      }
      // spiral.push(matrix[0])
      return spiral
    } else if ( n > 0 && m === 0){
    for(let i=colLower; i<=colUpper; i++){
        //[[2,3]]
        spiral.push(matrix[rowLower][i]);
    }
    return spiral
    }
  
    while(rowLower<=rowUpper || colLower<=colUpper){
        //top left to right
        for(let i = colLower; i<= colUpper; i++){
          spiral.push(matrix[rowLower][i]);
        }
        rowLower++;
  
        //right top to bottom
        for (let j = rowLower; j<= rowUpper; j++){
          spiral.push(matrix[j][colUpper]);
        }
        colUpper--;
  
        //bottom right to left
        if(colUpper <= colLower && rowUpper <= rowLower){
            return spiral;
        }
        for(let k=colUpper; k>= colLower; k--){
          spiral.push(matrix[rowUpper][k]);
        }
        rowUpper--;
  
        //left bottom to top
        for(let l=rowUpper; l>= rowLower; l--){
          spiral.push(matrix[l][colLower]);
        }
        colLower++;
        }
    return spiral;
  }
  
  let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
  let matrix2 = [[1,2,3,-1],[4,5,6,-2],[7,8,9,-3],[10,11,12,-4]];
  let matrix3 = [[1,-1],[2,-2],[3,-3],[4,-4],[5,-5],[6,-6]];
  let matrix4 = [[1,2,3,4,5]];
  let matrix5 = [[1],[2],[3],[4],[5],[6]];
  console.time();
  let result = spiralOrderMatrix(matrix1);
  console.log(result);
  console.timeEnd();
  // TC is O(m*n) because of total elements traversal
  // SC is O(n) because of spiral elements size
  // Time taken = 7 ms