function Stack(){
    this.myarray = [];
}
var a = new Stack();

Stack.prototype.push = function (e){this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray[this.myarray.length -1];}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}
Stack.prototype.popall = function (callback) {
    while (!this.isEmpty()){
        callback(this.pop());
    }
}
function callback(x){
    console.log(x);
}
function dec2bin(n){
    var stack = new Stack();
    while (n>0){
        stack.push(n%2);
        n = Math.floor(n/2);
    }
    var st = "";
    while (!stack.isEmpty()){
        st = st + stack.pop().toString();      
    }
    return st;
}