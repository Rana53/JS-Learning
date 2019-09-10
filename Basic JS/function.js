let array = [1,2,3,4,5]
array.shift();
//console.log(array);
array.unshift(1);
console.log(array);
array.push(6);
console.log('push 6 at the end of array ' + array);
array.pop();
console.log('pop 6 from the end of array ' + array);
array.splice(2,1,8,9);
console.log(array);
