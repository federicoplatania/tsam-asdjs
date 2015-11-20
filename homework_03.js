//1 sumwhileneg
Array.prototype.ex_1 = function (){ 
    var tot=0;
    this.every(x => {
        if (x>0){
            tot+=x;
        }
        return x>0;
        }
    )
    return tot;
}
//media
Array.prototype.ex_3 = function () {
        if (this.length == 0){
        return 0;
    }else{
       return this.reduce((acc,x) => acc + x,0) / this.length;
    }
}
/*
Array.prototype.revert = function () {
    var b = [];
    var c = this.length-1;
    for (var i = 0; i < this.length; i++){
        b[c] = this[i];
        c = c -1;
    }
    return a=b;
}
*/
//11 oddfirst
Array.prototype.ex_11 = function () {
    var tarray = this.filter(x => (x%2 == 0));
    var tarrayodd = this.filter(x => !(x%2 == 0));
    return tarrayodd.concat(tarray);
}