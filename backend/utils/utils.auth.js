const { ldapClient } = require("../services/service.ldap")
const baseDN = "dc=eni,dc=univ,dc=mg"
exports.modules = {
     bindFn: async(email, password) => {
         ldapClient.bind(`mail=${email},${baseDN}`,password,(bindError, result)=>{
              return new Promise((resolve, reject) =>{
                   if(bindError){
                       return reject(bindError)
                   }
                    resolve(result)
              })

              
         })
     },
     addUser: async(userEntry) =>{
          return new Promise((resolve, reject) => {
               ldapClient.bind('cn=admin,dc=eni,dc=univ,dc=mg', 'Riry7474*', (bindErr) => {
                 if (bindErr) {
                   reject(bindErr);
                   return;
                 }
           
                 ldapClient.add(`mail=${userEntry.mail},ou=users,${baseDN}`, userEntry, (addErr) => {
                   if (addErr) {
                     reject(addErr);
                     return;
                   }
           
                   resolve(true);
                 });
               });
             });
     },
     searchUser: async(email,opts)=> {
          ldapClient.search(baseDN,opts,(searchError, searchRes) => {
                return new Promise((resolve, reject)=>{
                    const entries = [];

                    searchRes.on('searchEntry', (entry) => {
                    // Entry found, add attributes to the entries array
                       entries.push(entry.object);
                    });

                    searchRes.on('searchReference', (referral) => {
                    // Search referral encountered
                       console.log('Referral:', referral.uris.join());
                    });

                    searchRes.on('error', (searchErr) => {
                    // Search error occurred, reject the Promise
                       reject(searchErr);
                    });

                    searchRes.on('end', () => {
                    // Search finished, resolve the Promise with the entries
                       resolve(entries);
                })
          })
     })
    }
}