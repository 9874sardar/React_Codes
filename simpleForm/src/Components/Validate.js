const Validate=(value)=>{

    let errors = {};
    
    if(!value.email){
        errors.email = "Email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(value.email)){
        errors.email = "Email is invalid ";
    }
    if (!value.password){
        errors.password = "Password is required";
    }
    else if(value.password.length < 8 ){
        errors.password = " Password must be great than 8 characters.";
    }
    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(value.password)){
        errors.password = "Password must have Uppercase,Lowercase,digit,special characters ."
    }

    if(value.repassword !== value.password){
        errors.repassword = "The password doesnt match";
    }

    if(!value.fname){
        errors.fname = "Enter a first name ";
    }

    if(!value.lname){
        errors.lname = "Enter the last name";
    }
    
    return errors;
}

export default Validate;