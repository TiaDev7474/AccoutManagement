const jwt = require('jsonwebtoken')
const authenticate = async (req, res, next) => {
     const token = req.headers.authorization.split('')[1]
     if(!token){
          return res.status(401).json({
               status:401,
               message:"Anauthorized user",
          })
     }
     try{
        const decodedToken = await jwt.verify(token,"JWT_SECRET")
        req.user = decodedToken;
        next()
     }catch(err){
         res.status(500).json({
              message:"An error occured"
         })
     }
    
}