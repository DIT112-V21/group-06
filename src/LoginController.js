import comparePassword from './passwordHashing'

let loginAttempt = 0

function loginAttempt(email, password){

    let passwordHash//retrieve password hash from db.
    if(comparePassword(password, passwordHash) == true)
    //change to orderInterface
    }else{
    //display error message
    }
   
}
