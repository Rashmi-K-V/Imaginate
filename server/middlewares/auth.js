import jwt from 'jsonwebtoken';

const userAuth = (req,res,next) =>{
  const {token} = req.headers;
  if(!token){
    return res.json({success:false,message:"Not authorized, Login again"});

  }

  try{
    const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);

    if(tokenDecode.id){
      req.body.userId = tokenDecode.id; //adding userId to req body
    }else{
      return res.json({success:false,message:"ID is not valid, Login again"});
    }
    next(); //move to next middleware or controller
  
  }catch(error){
    console.log(error);
    return res.json({success:false,message:error.message});
  }

}
export default userAuth;