import userModel from "../models/userModel.js";
import FormData from 'form-data';
import axios from 'axios';


export const generateImage = async( req , res ) =>{
  try{
    //Generate image using prompt

    

    //fetch user using userId
    const { prompt } = req.body;
    const { userId } = req.user; // comes from middleware

    // fetch user using userId
    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing details" });
    }
    if(user.creditBalance === 0 || userModel.creditBalance < 0){
      return res.json({success:false,message:"No Credit Balance available",creditBalance : user.creditBalance})
    }

    //ClipDrop api need to send prompt in form of multipar form data
    const formData = new FormData();
    formData.append('prompt',prompt)

    //api call [Refer Docs for more information]
    const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',formData,{
       headers: {
        'x-api-key': process.env.CLIPDROP_API,
      },
      responseType : 'arraybuffer'
    });

    //arraybuffer -> base 64 encoding
    const base64Image = Buffer.from(data,'binary').toString('base64')

    //image url generated
    const resultImage = `data:image/png;base64,${base64Image}`;


    //deducting user credit
    await userModel.findByIdAndUpdate(user._id,{creditBalance:user.creditBalance - 1})

    //response
    res.json({success:true,message:"Image Generated Successfully",creditBalance: user.creditBalance - 1, resultImage})


  }catch(error){
    console.log(error);
    res.json({success:false,message:error.message});
    
  }
  
}