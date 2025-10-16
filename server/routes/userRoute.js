import {registerUser, loginUser, userCredits,paymentRazorpay} from '../controllers/userController.js';

import express from 'express';
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser);

userRouter.post('/login',loginUser);

userRouter.get('/credits',userAuth,userCredits); //protected route, only logged in user can access

userRouter.post('/pay-razor',userAuth,paymentRazorpay);



export default userRouter;

//localhost:4000/api/user/register
//localhost:4000/api/user/login
//localhost:4000/api/user/credits
