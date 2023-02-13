var arr=[1,2,3,4,5,7,8,9,11];
var ar= arr.find(function(s){
    return s > 1;
});
console.log(ar);


var arow=[8,5,7,3,4,6,2,1,9,10];
arow.sort(function(a,b){
    return a-b;
});
console.log(arow);