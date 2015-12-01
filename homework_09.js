function ex_1a (myarray){
    return T(myarray);
}

function T(myarray){
    if (myarray.length == 0){
        return 0;
    } else {
        return (5 * myarray[0] + T(myarray.slice(1)));
    }
}
function ex_1b(myarray){
    return sumquadpariR(myarray);
}

function sumquadpariR(myarray){
    if(myarray.length == 0){
        return 0;
    }else{
        if(myarray[0] % 2 == 0){
             return (myarray[0] * myarray[0]) + sumquadpariR(myarray.slice(1));
         }else{
             return sumquadpariR(myarray.slice(1));
         }
    }
}

function ex_2(myarray){
    return sumquadpari(myarray)
}
function sumquadpari(myarray){
    if(myarray.length == 0){
        return 0;
    }else{
        var tarray = myarray.filter(function fil(myarray){if (myarray%2 == 0)return myarray;}).map(tarray => tarray * tarray);
        } 
        return tarray.reduce((acc,tarray) => acc + tarray,0);  
    }


function Stack(){
    this.myarray = [];
}
var a = new Stack();

Stack.prototype.push = function (e){this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray[this.myarray.length -1];}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}
Stack.prototype.popAll = function (callback) {
    while (!this.isEmpty()){
        callback(this.pop());
    }
}
/*
function insert (myarray){
    var stackpari = new Stack();
    var stackdispari = new Stack();
    for (var i = 0; i < myarray.length; i++){
        if (myarray[i]%2 == 0){
            stackpari.push(myarray[i]);          
        } else {
            stackdispari.push(myarray[i])
        }
    }
   
}
*/
function moltiplicaStack(myarray){
    var pariStack = new Stack();
    var dispariStack = new Stack();
    var risultatoStack = new Stack();
    while(myarray.length>0){
        if(myarray[0]%2==0)
            pariStack.push(myarray[0]);
        else
            dispariStack.push(myarray[0]);
        myarray.shift();
    }
    while(!pariStack.isEmpty() && !dispariStack.isEmpty()){
        risultatoStack.push(pariStack.pop()*dispariStack.pop());    
    }
    var s = 0;
    risultatoStack.popAll(function(x){s+=x;});
    return s;
}
function ex_3(myarray){
    return moltiplicaStack(myarray);
}