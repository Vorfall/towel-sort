
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) {
    return [];
  }
  count=0
arr=[]


console.log(matrix.length)

for(i=0;i<matrix.length;i++)
{
console.log(matrix[i].length)
}

tmp2=matrix[0][0]
tmpReverse=0

for(i=0;i<matrix.length;i++)
{
    tmp=matrix[i].length
   
    for(j=0;j<tmp;j++)
    {
       // console.log("i="+i+"j="+j)
        tmp2=matrix[i][j]
        tmpReverse=matrix[i][tmp-j-1]
    if(i%2===1){
        arr.push(matrix[i][tmp-j-1]);
    }
    else {
        arr.push(matrix[i][j]);
    }

    count++
  //  console.log("count="+count)
}
}


         //  console.log(arr)
  return arr;
}
