/* 1-2-3-4-5-7-11
4-reduce
5-reduce
7-reduce
11-filtro odd + filtro even
 */

function ex_1_F(x){
    var tot=0;
    x.every(x => {
        if (x>0){
            tot+=x;
        }
        return x>0;
        }
    )
    return tot;
}
function ex_2_F(x){
    var tmparray= [];
    x.every(x => {
        if (x>0){
            tmparray.push(x);
        }
        return x>0;
        }
    )
    return tmparray.reduce((acc,x) =>acc + x, 0)
}
//3
function ex_3_F(myarray){
    return mediaF(myarray);
}
function mediaF(myarray){
    if (myarray.length == 0){
        return 0;
    }else{
       return myarray.reduce((acc,myarray) => acc+myarray,0) / myarray.length;
    }

}
//4
function ex_4_F(a,b){
    return sumintervalF(a,b);
}
function sumintervalF(a,b){
    var tarray=[]
    if (a < b){
        for (var i = a;i <= b ; i++){
            tarray[tarray.length]= i;
        }
        return tarray.reduce((acc,tarray) => acc+tarray,0);
    }else{
          for (var i = b;i <= a ; i++){
            tarray[tarray.length]= i;
        }
        return tarray.reduce((acc,tarray) => acc+tarray,0);
    }

}
//5
function ex_5_F(x,y){
    return multF(x,y);
}
function multF(x,y){
    var temparray=[];
    for(var i = 0; i< y; i++){
        temparray.push(x);
    }
    return temparray.reduce((acc,temparray) => acc + temparray,0)
    
}

//7
function ex_7_F(x,y){
    return powF(x,y);
}
function powF(x,y){
   var tarray = [];
   for (var i = 0; i < y; i++){
       tarray.push(x);
   }
   return tarray.reduce((acc,x) =>mult(acc,x),1 )
}

//11
function ex_11_F(a){
    return placeF(a);
}
function placeF(a){
    var tarray = a.filter(checkeven);
    var tarrayodd = a.filter(checkodd);
    return tarrayodd.concat(tarray);
}

function checkeven(x){
    if (x%2 == 0)
        return true;
    else 
        return false;
    
}

function checkodd(x){
    if (x%2 !== 0)
        return true;
    else 
        return false;
    
}