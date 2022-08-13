import React,{useState} from 'react'
//import alidator from 'validator';
//import Validate from './Validate';

export default function Form1() {

    const [errors,seterrors] = useState({});

    const [value,setvalue] = useState({
        email:"",
        password:"",
        repassword:"",
        fname:"",
        lname:"",
    });
    
    const handleChange = (e) =>{
        setvalue({
            ...value,
            [e.target.name] : e.target.value,
        });
    };

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
  
      if(value.repassword != value.password){
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
  
  
    const handleFormSubmit = (eve) =>{
        eve.preventDefault();
        seterrors(Validate(value));
    };


    return (
        <div className="container my-3">
            <h1>Registration Form</h1>
            <form>
                <div>
                    <div>
                        <div className="row mb-3">
                            <label className="visually-hidden" htmlFor="autoSizingInputGroup">Email</label>
                            <div className="input-group">
                                <div className="input-group-text">✉</div>
                                <input type="email" className="form-control" name="email" id="colFormLabel1" placeholder="Email" 
                                value = {value.email} onChange={handleChange}/>
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="row mb-3 ">
                            <label className="visually-hidden" htmlFor="autoSizingInputGroup">Password</label>
                            <div className="input-group">
                                <div className="input-group-text">🔒</div>
                                <input type="password" className="form-control" name="password" id="colFormLabel2" placeholder="Password" 
                                 value = {value.password} onChange={handleChange}/>
                                 {errors.password && <p className="password" >{errors.password}</p>}
                                
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="visually-hidden" htmlFor="autoSizingInputGroup">Re-type Password</label>
                            <div className="input-group">
                                <div className="input-group-text">🔒</div>
                                <input type="password" className="form-control" id="colFormLabel3"
                                    name="repassword" placeholder="Re-type Password"  value = {value.repassword} onChange={handleChange}/>
                                    {errors.repassword && <p className="repassword">{errors.repassword}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="visually-hidden" htmlFor="autoSizingInputGroup">First Name</label>
                            <div className="input-group">
                                <div className="input-group-text">👤</div>
                                <input type="text" className="form-control" id="autoSizingInputGroup"
                                    name="fname" placeholder="First name"value = {value.fname} onChange={handleChange}/>
                                    {errors.fname && <p className="fname">{errors.fname}</p>}
                            </div>
                        </div>
                        <div className="col">
                            <label className="visually-hidden" htmlFor="autoSizingInputGroup">Last Name</label>
                            <div className="input-group">
                                <div className="input-group-text">👤</div>
                                <input type="text" className="form-control" id="autoSizingInputGroup1"
                                    name="lname" placeholder="Last name" value = {value.lname} onChange={handleChange}/>
                                    {errors.lname && <p className="lname">{errors.lname}</p>}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row my-3">
                        <div className="col">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1"> Male</label>
                        </div>
                        <div className="col">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2"> Female</label>
                        </div>
                    </div>
                    <div className="container my-1">
                        <select className="form-select" aria-label="Default select example">
                            <option>Select a country</option>
                            <option value="1">India</option>
                            <option value="2">Australia</option>
                            <option value="3">China</option>
                        </select>
                        <div className="form-check my-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                            <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                I agree with terms and conditions
                            </label>
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 my-3">
                    <button className="btn btn-warning" type="submit" onClick={handleFormSubmit}>Register Now</button>
                </div>
            </form>
        </div>
    );
}
