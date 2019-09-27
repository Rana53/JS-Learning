var p = new Promise((resolve, reject) => {
  var a = 1 + 3;
  if(a === 3){
    resolve('Success');
  }else{
    reject('Failed');
  }
});
p.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
