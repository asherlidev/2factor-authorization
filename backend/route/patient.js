import express from 'express'
import { addPatient, readPatient, updatePatient,deletePatient} from '../controller/patient.js';
const router =express.Router();

router.get('/read',readPatient);
router.post('/insert',addPatient);
router.put('/update',updatePatient);
router.delete('/delete',deletePatient);