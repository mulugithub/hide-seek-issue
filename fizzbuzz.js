module.exports = function () {
  // write your code here
  let array = [];
  for (let i=1 ; i< 100 ; i++){
    array.push(i);
  }
  for (let i = 1; i <= array.length; i++){
    if (array[i]%3===0 && array[i]%5===0){
      array[i]="FizzBuzz";
    }
    else if (array[i]%3===0){ 
      array[i]= "Fizz";
    }
    else if (array[i]%5===0){
      array[i]="Buzz";
    }
    else {
      array[i];
    }
  }
  return array;
}
