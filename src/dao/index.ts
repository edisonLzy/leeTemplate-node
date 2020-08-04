import mysql from 'mysql'
const db = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'ndmzwdxs'
})
db.on('connect',function(){
    console.log('connection is success')
})