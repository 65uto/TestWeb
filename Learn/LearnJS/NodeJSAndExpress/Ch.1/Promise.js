//Promise
/*
const connect = true 
const url1 = 'A-test/file.json'

function dowloading(url){
    return new Promise(function(resolve,reject){
        if(connect){
            console.log(`โหลด ${url} เรีบยร้อยเเล้ว`)
        }
        else{
            console.log(`เกิดข้อผิดพลาด`)
        }
    })
}
dowloading(url1)
*/
//รอประมวลผลข้อมูล
const connect = true
const url1 = 'A-test/file.json'

function dowloading(url) {
    return new Promise(function (resolve, reject) {
        settimeout(()=>{
            if(connect){
                resolve(`โหลด ${url} เรียบนร้อย`)
            }
        })
    })
}
dowloading(url1)