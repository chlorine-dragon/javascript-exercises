const fibonacci = function(n) {
  n = Number(n);
  let fib = [1,1];
  let i = 0;
  if(n < 0){
    return 'OOPS'
  }else if(n==0){
    return 0;
  }else{
    while(i < n+1){
      fib.push(fib[i] + fib[i+1]);
      i++;
    }
  }
  return(fib[n-1]);
};

// Do not edit below this line
module.exports = fibonacci;
