//1
Array.prototype.sumwhileneg = function (){ 
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
//3
Array.prototype.media = function () {
        if (this.length == 0){
        return 0;
    }else{
       return this.reduce((acc,x) => acc + x,0) / this.length;
    }
}
//9
Array.prototype.revert = function () {
    var b = [];
    var c = this.length-1;
    for (var i = 0; i < this.length; i++){
        b[c] = this[i];
        c = c -1;
    }
    return a=b;
}
//11
Array.prototype.oddfirst = function () {
    var tarray = this.filter(x => (x%2 == 0));
    var tarrayodd = this.filter(x => !(x%2 == 0));
    return tarrayodd.concat(tarray);
}