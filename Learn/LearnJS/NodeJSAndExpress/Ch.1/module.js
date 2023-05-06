//ทดสอบการสร้าง Module
//บริการเกี่ยวกับการทำงานต่างๆ

function getCurrentTime(){
    return new Date()
}

function Calculate(N1,N2){
    return N1+N2

}
//ส่งออกคำสั่ง
module.exports.getCurrentTime = getCurrentTime

module.exports.Calculate = Calculate