const  ldap  = require('ldapjs')

export const ldapClient = ldap.createClient({
     url:"ldap://127.0.0.1:389"
})