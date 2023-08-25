const  ldap  = require('ldapjs')

module.exports = ldapClient = ldap.createClient({
     url:"ldap://127.0.0.1:389"
})