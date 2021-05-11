const bcrypt = require('bcrypt');
const saltRounds = 10;

export function hashPassword(password){
bcrypt.hash(password, saltRounds, function(err, hash){
    return hash //save to db
})
}

export function comparePassword(password, hashedPassword){
bcrypt.compare(password, hashedPassword, function(err, result) {
    return result //check if true and let user log in
});
}
