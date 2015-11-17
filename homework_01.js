//1
function ex_1_I(x){
    return sumwhileneg(x);
}

function sumwhileneg(myarray){
    var tot = 0;
    for (var i= 0; i < myarray.length && myarray[i] > 0; i++){
        tot += myarray[i];
    }
    return tot;
}

function ex_1_R(x){
    return sumwhilenegR(x);
}

function sumwhilenegR(myarray){
    if (myarray.length == 0 || myarray[0] < 0){
        return 0;
    } else  {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}
//2
function ex_2_I(x){
    return summdispari(x);
}
function summdispari(a){
    var s=0
    for (var i=0; i < a;i++){
        s=s+(2*i)+1;
    }
    return s;
}

function ex_2_R(x){
    return summdispariR(x);
}

function summdispariR(x){
        if (x == 0) {
        return 0;
    } else {
        return 2 * x - 1 + summdispariR(x-1);
    }
}

//3
function ex_3_I(x){
    return media(x);
}
function media(a){
    var s=0;
    for (var i = 0;i < a.length; i++){
        s= s + a[i];
    }
    return s/a.length;
}

function mediaRW(x) {
    if (x.length == 0) {
        return 0;
    } else {
        return x[0] + mediaRW(x.slice(1));
    }
}

function mediaR(x) {
    return mediaRW(x) / x.length;
}

function ex_3_R(x) {
    return mediaR(x);
}
//4
function ex_4_I(x,y){
    return suminterval(x,y);
}
function suminterval(a,b){
    var s = 0;
    if (a < b){
        for (var i = a; i <= b; i++){
            s = s+i;
        } 
     } else  {
         for (var i = b; i <= a; i++){
             s = s+i;
         }
    }
    return s;
}

function sumIntervalRW(a, b) {
    if (a == b) {
        return a;
    } else {
        return a + sumIntervalRW(a + 1, b);
    }
}

function sumIntervalR(a, b) {
    if (a < b){
        return sumIntervalRW(a, b);
    } else {
        return sumIntervalRW(b, a);
    }
}

function ex_4_R(x, y) {
    return sumIntervalR(x, y);
}
//5
function ex_5_I(x,y){
    return mult(x,y);
}
function mult(a,b){
    var s=0;
    for (var i = 0; i < b; i++){
        s = s +a;
    }
    return s;
}

function multR(x,y){
    if (x == 0 || y == 0){
        return 0;
    } else {
        return x + multR(x,y-1);
    }
}

function ex_5_R(x,y){
    return multR(x,y);
}
//6
function ex_6_I(x,y){
    return div(x,y);
}

function div(a,b){
    var resto = 0;
    var divisore = b;
    var dividendo = a;
    var quoziente = 0;
    var c = [];
    if (a < b){
        c[0]= quoziente;
        c[1] = dividendo;
        return c;
    } else {
       do{
        dividendo=dividendo-divisore;
        quoziente++;
       } while (dividendo >= divisore){
       resto=dividendo;
       } 
       c[0]= quoziente;
       c[1] = resto;
     }
      return c;
}

function ex_6_R(x,y){
    return "non so farlo"
}

//7
function ex_7_I(x,y){
    return pow(x,y);
}
function pow(a,b) {
   var s = 1;
   for (var i = 0; i < b; i++){
      s  = mult(s,a) ;
   }
   return s;
}

function powR(x,y){
    if (y == 0){
        return 1;
    } else {
        return ex_5_R(x,powR(x,y-1))
    }
}

function ex_7_R(x,y){
    return powR(x,y);
}
//8
function ex_8_I(x){
    return "non so farlo";
}
function barray(a){
    var m =[,];
    for (var i = 0; i < a; i++){
        for(var j = 0; j < a; j++){
            m[i,j]= i+j;
        }
    }
    return m;
}

function ex_8_R(x){
    return "non so farlo"
}

//9
function ex_9_I(x){
    return reverses(x);
}
function reverses(a){
    var b = [];
    var c = a.length-1;
    for (var i = 0; i < a.length; i++){
        b[c] = a[i];
        c = c -1;
    }
    return a=b;
}

function ex_9_R(x){
    return "non so farlo";
}

//10
function ex_10_I(x,y){
    return replicate(x,y);
}
function replicate (a,b){
    var c = [];
    for (var i = 0; i < b; i++){
        c[i] = a;
    }
    return c;
}

function ex_10_R(x,y){
    return "non so farlo";
}

//11
function ex_11_I(x){
    return place (x)
}
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

function ex_11_R(x){
    return "non so farlo"
}