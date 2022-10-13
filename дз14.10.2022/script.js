
//1
let str2 = 1;
if (str2 == 1) {
    console.log('dwdw')
} else {
    console.log('58494')
}

//2
let str3 = -6
if (str3 > 0) {
    console.log('Больше нуля')
}else {
    console.log('Меньше нуля')
}

//3
let n;
let m = 13;
if (m > 50) {
    n = 'Большое'
} else {
    n = 'Маленькое'
}

//5
 let i = 44;
while (i++ < 67) {
    console.log(`${i}`);
}

//6
//let i = 44
while (i++ < 670) {
    if (i % 10 == 0){
        console.log(`${i}`)
    }
}

//7
for (let i = 45; i <= 67; i++) {
    console.log (i)
}

for (let i = 45; i <= 670; i++) {
    if (i % 10 == 0)
    console.log (i)
}

//8
function  hello1() {
    return( '«Привет, JavaScript!»' );
  }
console.log(hello1())
