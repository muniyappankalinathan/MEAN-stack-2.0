const mongoose = require('mongoose');
// import { EmailValidator } from './../client/dist/vendor.bundle';
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const  bcrypt = require('bcrypt-nodejs');
/*** E-mail validator condition ***/ 
let emailLengthChecker = (email) => {
    if(!email){
        return false;
    }else{
        if(email.length < 5 || email.length > 30){
            return false;
        }else{
            return true;
        }
    }
    };

/*** valid email checker condition ***/ 
let validEmailChecker = (email) => {
    if(!email){
        return false;
    }else{
 const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email);
    }
};


let usernameLengthChecker = (username) => {
    if(!username){
        return false;
    }else{
        if(username.length < 3 || username.length > 15){
            return false;
        }else{
            return true;
        }
    }
    };

/*** valid email checker condition ***/ 
let validUsernameChecker = (username) => {
    if(!username){
        return false;
    }else{
 const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(username);
    }
};

// Validate Function to check password length
let passwordLengthChecker = (password) => {
    // Check if password exists
    if (!password) {
      return false; // Return error
    } else {
      // Check password length
      if (password.length < 7 || password.length > 35) {
        return false; // Return error if passord length requirement is not met
      } else {
        return true; // Return password as valid
      }
    }
  };
  
  // Validate Function to check if valid password format
  let validPassword = (password) => {
    // Check if password exists
    if (!password) {
      return false; // Return error
    } else {
      // Regular Expression to test if password is valid format
      const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{7,35}$/);
      return regExp.test(password); // Return regular expression test result (true or false)
    }
  };

/*** setup for E-mail validator ***/ 
const emailValidators =[
        {
            validator:emailLengthChecker,message:'E-must must contain atleast 5 charecters but not more than 30 charecters'
        },
        {
            validator:validEmailChecker,message:'Please provide a valid email'
        }
    ];
    
    /*** setup for E-mail validator ***/ 
const usernameValidators =[
    {
        validator:usernameLengthChecker,message:'Username must contain atleast 3 charecters but not more than 15 charecters'
    },
    {
        validator:validUsernameChecker ,message:'Username does not contain any special charecters.Please provide a valid username'
    }
];

 
  // Array of Password validators
  const passwordValidators = [
    // First password validator
    {
      validator: passwordLengthChecker,
      message: 'Password must be at least 7 characters but no more than 35'
    },
    // Second password validator
    {
      validator: validPassword,
      message: 'Must have at least one uppercase, lowercase, special character, and number'
    }
  ];

const userSchema = new Schema({
email: { type: String, required: true, unique: true, lowercase: true, validate: emailValidators },
username: { type: String, required: true, unique: true, lowercase: true, validate: usernameValidators },
password: { type: String, required: true, validate: passwordValidators }
});

userSchema.pre('save',function(next) {
    if(!this.isModified('password'))
    return next();

    bcrypt.hash(this.password, null, null, (err, hash) => {
        if(err) return next(err);
        this.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = (password) => {
    return bcrypt.compareSync(password, this.password); 
};

module.exports = mongoose.model('User', userSchema);
