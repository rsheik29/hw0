function accumulate(merger, base, n, term){
    let k = 1; 
    let total = base; 
    while (k<=n) {
        total = merger(total, term(k)); 
        k = k+1;
    }
    return total; 
 }
 
 function product(n, term){
     let total = 1; 
     let k = 1; 
     while (k <= n ) {
         total = total * term(k); 
         k = k +1; 
     }
     return total;
 }
 
 function make_repeater(func, n){
     let outer = identity; 
     while (n!=0) {
         outer = compose1(outer, func); 
         n-=1;
     }
     return outer; 
 }
 
 
 function compose1(func1, func2) {
     function f(x) {
         return func1(func2(x)); 
     }
 return f; 
 }