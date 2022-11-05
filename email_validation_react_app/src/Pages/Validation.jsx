
const Validation = (val) => {

let error = {};
  
if(!val.fullname){
    error.fullname="Name is required."
}

if(!val.email){
    error.email="Email is required."
}
else if(!/\S+@\S+\.\S+/.test(val.email)){
    error.email = "Email is Invalid."
}

if(!val.password){
    error.password = "Password id required."
}
else if(val.password.length < 5){
    error.password = "Password must be more then five charecter"
}


    return error;
}

export default Validation;