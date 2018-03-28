function fib() {
    // Some variables here
    console.log('fib');
    var a=0, b=0, x;

    function nacci() {
      // do something to those variables here
      console.log('nacci');
      x = a;
      a = a + b;
      b = x;
      if (a == 0) { a = 1};
      console.log(a);
    }

    return nacci;

}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
  