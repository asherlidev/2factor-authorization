
import  winston from 'winston';


const auditLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'audit.log' })
  ]
});

export const logEvent = (req,res)=>{
    auditLogger.info({
        event: req.method,
        ip:"127.0.0.1",
        URL:req.url,
        data: "hehehe",
        timestamp: new Date()
    });
}