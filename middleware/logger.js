const moment=require('moment');
//Middleware Functions:Everytime make a request this middleware func. runs
const logger=(req,res,next)=>{
    //Returns the whole url address in console.ie.http://localhost:5000/api/members.
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
}
module.exports=logger;