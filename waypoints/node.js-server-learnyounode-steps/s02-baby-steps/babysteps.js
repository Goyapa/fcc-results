//console.log(process.argv)
//console.log("test");
var sum = function(array) {
var  sumOfArgs = 0;
for (var i = 2; i < array.length; i++){
//  console.log(i);
  sumOfArgs = sumOfArgs + Number(array[i]);
   
}
console.log(sumOfArgs);

};
sum(process.argv);

/*
Here's the official solution in case you want to compare notes:
var result = 0
    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])
    console.log(result)  
*/