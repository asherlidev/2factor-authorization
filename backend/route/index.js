import { welcome } from "../controller/index.js"
import patient from './patient.js';
export const serverRoute=function(app){

     app.use('/',welcome);
     app.use('/patient',patient);    
    
}   