const os=require('os');

//infor about current users

const user =os.userInfo()

//methos returns the system uptime in seconds

console.log(`the system is uptime is ${os.uptime()} seconds`)


const currentOS={
    name:os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}

console.log(currentOS);