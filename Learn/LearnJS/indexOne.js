console.log('Good')
let x = 10;
let y = Number('80')
let z = String(900)
let a = String('A')
console.log(x)
console.log(x + y)
console.log(z + a)
 let t = true
 let f = false

let ax = t || f
let ay = t && f
let az = !t

if (x > 20){
    console.log("True")
}
else if (x > 0){
    console.log("False")
    for(let i = 1;i <=10;i++){
        if (i % 10 == 0){
            continue;
        }
        let answer = i ** 2
        console.log(answer)
    }
}
console.log(ax,ay,az)
// Function
function P(l,w,h){
    let base = l * w
    let P = 1/3 * base *h
    return P
}

function A(){
    let l = 2
    let w = 2
    let h = 3
    let base = l * w
    let P = 1/3 * base *h
    console.log(P)
}

P(2,2,3);
A();
let area1 = P(2,3,2)
console.log('Area 1 = '+area1)
console.log("Hello")