const fs = require('node:fs');
const regulerUser = fs.readFileSync('C:/Users/admin/Desktop/A1QA/a.istear/TaskOne/src/regular_users.json','utf-8');
const regulerObj = JSON.parse(regulerUser);
const adminUser = fs.readFileSync('C:/Users/admin/Desktop/A1QA/a.istear/TaskOne/src/admin_users.json','utf-8'); 
const adminObj = JSON.parse(adminUser);

class myClass{
    constructor(){
    }
    returnRegulerObj(){
        return regulerObj;
    }
    returnAdminObj(){
        return adminObj;
    }
}

module.exports = myClass;