//CallBack Function
/* 
function calculate(x,y,callback){
    console.log('กำลังคำนวณ...')
    setTimeout(()=>{
        const sum = x + y
        callback(sum)        
    }, 3000)

}

function display(result){
    console.log(`ผลบวก = ${result}`)
}

calculate(100,50,display)
*/

//callBack เขียนโปรเเกรมโหลดไฟล์

const url1 = 'A.json'
const url2 = 'A.json'
const url3 = 'A.json'

function dowloading(url,callBack){
    console.log(`กำลังโหลไฟล์จาก ${url}`)
    setTimeout(() =>{
        callBack(url)
    },3000)
}

function complete(result){
    console.log('ดาวโหลดเรียบร้อย')
}

dowloading(url1,complete)


