//1
function sumwhileneg(myarray){
    var tot = 0;
    for (i= 0; i < myarray.length && myarray[i] > 0; i++){
        tot += myarray[i];
    }
    return tot;
}