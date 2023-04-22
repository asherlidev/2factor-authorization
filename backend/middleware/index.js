import { logEvent }  from "./auditlog.js"
import crypto  from "./crypto.js";
export default (req,res,next)=>{
    crypto(req,res);
    logEvent(req)
    next();
 
}