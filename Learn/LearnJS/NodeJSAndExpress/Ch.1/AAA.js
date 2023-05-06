const url1 = "Test/AA1.jason"
const url2 = "Test/AA2.jason"
const url3 = "Test/AA3.jason"
const url4 = "Test/AA4.jason"
const url5 = "Test/AA5.jason"
const connect = "true"


// Promise
function downloading(url){
    return new Promise(function(resolve,reject){
        console.log(`กำลังโหลดไฟล์จาก ${url}`)
        setTimeout(()=>{
            if(connect){
                resolve(`โหลด ${url} เรียบร้อย`)
            }else{
                reject(`เกิดข้อผิดพลาด`)
            }
        },1000)
    })
}

//Async & Await

async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}

start()