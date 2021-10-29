let x = 5;
let y = 4;
function a_plus_abs_b(a,b) {

	return (a + Math.abs(b))
}
let z = a_plus_abs_b(x,y);

function two_of_three(x, y, z){
    return Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2)-Math.pow((max(x,y,z)), 2); 
}

function largest_factor(n){
    let k=n-1; 
    let remainder=n%k; 
    while (remainder!=0) {
        k=k-1; 
        remainder=n%k; 
    }
    return k; 
}

function hailstone(n){
    let k = 1; 
    print (n); 
    while (n!=1) {
        if (n%2==0) {
            n=n/2; 
            print (n); 
        } else {
            n=n*3+1; 
            print (n); 
        }
    k=k+1; 
    }
    return k; 
}


    