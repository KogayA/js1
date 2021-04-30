var a = +prompt('введите кол-во ступеней');
var b = prompt('введите знак отступов');
var c = prompt('введите конечный символ');

let d = '';
let i = 1;

if(isNaN(a) || a==0 ){
    console.log('error');
   

}
if(b=='' || c==''  ){
    console.log('error')
}

while(i <=a){
    d=(b+d);
    console.log(d+c);
    i++;
}



