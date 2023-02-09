let myClass = require('C:/Users/admin/Desktop/A1QA/a.istear/TaskOne/src/app.js');
let object = new myClass();
let chai = require('chai');
let assert = chai.assert; 

/*
==================================================Test for reguler_users.json==================================================
*/

describe(('Reguler user contatins array'), function(){
    it('array testing', function(){
        assert.isArray(object.returnRegulerObj(), 'Has to be an array');
    });
});
for( let i= 0 ;i<Object.keys(object.returnRegulerObj()).length;i++){
describe('for reguler user ID', function(){
    it('Have ID',function(){
        let ID = Object.keys(object.returnRegulerObj()[i])[0];
        assert.equal(ID,'id');
    })
})
}

for( let i= 0 ;i<Object.keys(object.returnRegulerObj()).length;i++){
    describe('for reguler user name', function(){
        it('Have name',function(){
            let Name = Object.keys(object.returnRegulerObj()[i])[1];
            assert.equal(Name,'name');
        })
    })
}

for( let i= 0 ;i<Object.keys(object.returnRegulerObj()).length;i++){
    describe('for reguler user address', function(){
        it('Have address',function(){
            let Address = Object.keys(object.returnRegulerObj()[i])[2];
            assert.equal(Address,'address');
        })
    })
}

/*
==================================================Test for admin_users.json==================================================
*/

describe(('Admin user contatins array'), function(){
    it('array testing', function(){
        assert.isArray(object.returnAdminObj(), 'Has to be an array');
    });
});

for( let i= 0 ;i<Object.keys(object.returnAdminObj()).length;i++){
    describe('for admin user ID', function(){
        it('Have ID',function(){
            let ID = Object.keys(object.returnAdminObj()[i])[0];
            assert.equal(ID,'id');
        })
    })
    }
    
    for( let i= 0 ;i<Object.keys(object.returnAdminObj()).length;i++){
        describe('for admin user name', function(){
            it('Have name',function(){
                let Name = Object.keys(object.returnAdminObj()[i])[1];
                assert.equal(Name,'name');
            })
        })
    }
    
    for( let i= 0 ;i<Object.keys(object.returnAdminObj()).length;i++){
        describe('for admin user address', function(){
            it('Have address',function(){
                if(object.returnAdminObj()[i].hasOwnProperty('address')==true){
                    assert.exists(Address,'address');
                }
                else{
                    assert.exists(object.returnAdminObj()[i][2],'Does not have address')
                }
            })
        })
    }






