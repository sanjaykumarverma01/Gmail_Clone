import express from 'express';
import { saveSentEmails, getEmails } from '../controller/email-controller.js';


const routes = express.Router();

routes.post('/save', saveSentEmails)
routes.get('/emails/:type', getEmails)
routes.post('/save-draft', saveSentEmails)

export default routes