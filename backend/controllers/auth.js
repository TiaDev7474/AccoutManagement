const { ldapClient } = require('../services/service.ldap')
const { bindFn, searchUser , addUser} = require('../utils/utils.auth')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
export const baseDN = "dc=eni,dc=univ,dc=mg"
exports.modules = {
    login: async (req, res, next) => {
          const { email , password  } = req.body
           try{
               const isAuthenticated = await bindFn(email, password)
               if(!isAuthenticated){
                    return res.status(401).json({message:"Pair Email/password incorrect"})
               }
               const opts = {
                    filter:`(mail=${email})`,
                    scope: 'sub',
                    attributes:['cn','uid','mail']
               }
               const currentUser =  await searchUser(email, opts)
                res.status(201).json({
                     status:201,
                     token: jwt.sign(
                        {
                           userId:currentUser?.uid
                        },
                        "JWT_SECRET",
                     ),
                     data: currentUser
                })
           }catch(err){
              res.status(500).json({message:"An server error occured"})
           }     
    },
    register: async (req, res, next) => {
         const { username, email, password} = req.body
         const hashedPassword = await bcrypt.hash(password)
         const userEntry = {
              cn: username.split('')[0],
              sn: username,
              mail: email,
              userPassword: hashedPassword
         }
         try{
              await addUser(userEntry);
              res.status(201).json({
                    status:201,
                    message:"User successfully created"
              })

         }catch(err){
              res.status(500).json({message:"An server error occured"})
         }
       
        
    }
}