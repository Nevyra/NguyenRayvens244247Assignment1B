function edgeobjext(deep, type) {
  return function edgeobjext(x) {
    do {
      if (Object.prototype.toString.call(x).slice(8, -1).toLowerCase() === type) return true;
      x = Object.getPrototypeOf(x);
    } while(deep && x !== null);

    return false;
  };
}

var arr = objTypeOf(false, "edge"),
 arrP = objTypeOf(true, "edge"); 

console.log(arr(x)); 
console.log(arrP(x)); 