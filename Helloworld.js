//1
function summ(a){
    s = 0;
    for (i=0; a[i]>0;i++){
        if (a[i] >= 0){
            s= s+a[i];
        }
    }
    return s;
}
//2
function summdispari(a){
    s=0
    for (i=0; i < a;i++){
        s=s+(2*i)+1;
    }
    return s;
}
//3
function media(a){
    s=0;
    for (i = 0;i < a.length; i++){
        s= s + a[i];
    }
    return s/a.length;
}
//4
function suminterval(a,b){
    s = 0;
    if (a < b){
        for (i = a; i <= b; i++){
            s = s+i;
        } 
     } else if (a > b) {
         for (i = b; i <= a; i++){
             s = s+i;
         }
    }
    return s;
}
//5
function mult(a,b){
    s=0;
    for (i = 0; i < b; i++){
        s = s +a;
    }
    return s;
}
//6
function div(a,b){
    resto = 0;
    divisore = b;
    dividendo = a;
    quoziente = 0;
    if (a < b){
        return quoziente + ' resto' + dividendo;
    } else {
       do{
        dividendo=dividendo-divisore;
        quoziente++;
       } while (dividendo >= divisore){
       resto=dividendo;
       } 
     }
      return quoziente + 'resto' + resto;
}

//7
function pow(a,b) {
   var s = 1;
   for (var i = 0; i < b; i++){
      s  = mult(s,a) ;
   }
   return s;
}

//8 NON FATTO
function barray(a){

}

//9
function reverses(a){
    var b = [];
    var c = a.length-1;
    for (var i = 0; i < a.length; i++){
        b[c] = a[i];
        c = c -1;
    }
    return a=b;
}

//10
function replicate (a,b){
    var c = [];
    for (var i = 0; i < b; i++){
        c[i] = a;
    }
    return c;
}

//11
function place(a){
    var pari = [];
    var dispari = [];
    var contp = 0;
    var contd = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i]%2 == 0){
            pari[contp] = a[i];
            contp++;
        } else {
            dispari[contd] = a[i];
            contd++;
        }
    }
    return dispari.concat(pari);
}
