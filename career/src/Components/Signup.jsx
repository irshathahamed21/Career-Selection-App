import React from "react";
import {TextField,Button,FormHelperText,OutlinedInput,InputLabel,InputAdornment,MenuItem,Select,IconButton,FormControl} from "@mui/material"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { SocialIcon } from 'react-social-icons';
import "./Singup.css"
import {Link,useHistory} from "react-router-dom"
import axios from "axios";

const initstate={
        email:"",
        fullName:"",
        phoneNumber:Number(""),
        education:"",
        password: ""
      }
export default function Signup(){
    const [form,setForm]=React.useState(initstate)

    const [name,setName]=React.useState("")
    const [phoneno,setPhoneno]= React.useState("")
    const [email,setEmail]= React.useState("")     


    const [education, setEducation] = React.useState('');
    //select options education
    const handleChange_option = (event) => {
      setEducation(event.target.value);
    };


    const [pwd1,setPwd1] = React.useState("")
    const [flag1,setFlag1] = React.useState(false)
    const [pwd2,setPwd2]= React.useState("")
    const [flag2,setFlag2] = React.useState(false)

      // pwd1
      const pwd1_hndlechange = (prop) => (event) => {
        setPwd1(event.target.value);
      };
      const handleClickShowPassword1 = () => {
        setFlag1(!flag1)
      };

       
      // pwd2
      const pwd2_hndlechange = (prop) => (event) => {
        setPwd2(event.target.value);
      };

      const handleClickShowPassword2 = () => {
        setFlag2(!flag2)
      };
       // both pwd    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
  

      const submit=()=>{
        setForm(initstate)
        validation()
        if(check===false){
          setcheckflag(true)
          console.log("dsnt match");
        }
        else if(check===true){
          setcheckflag(false)
        
        if(check===true &&
             pwd_match===false &&
            email_flag===false &&
            Name_flag===false && 
            phoneflag===false && 
            education_flag===false && 
            pwd1_flag1===false && 
            pwd2_flag2===false){
              
          
                form.email=email
                form.fullName=name
                form.phoneNumber=phoneno
                form.education=education
                form.password=pwd1
            
              console.log(email,phoneno);
        console.log("matched");
        receiver(form)
      } 
    }
}
  const [userverify,setuserverify]=React.useState(false)
async function receiver(data) { 
  console.log(data.email,data.phoneno);
  try {
   await axios.post("http://localhost:2345/register",data).then(res => (console.log(res.data)))      
   
   setuserverify(false)
  } catch (error) {
    setuserverify(true)
  }
  }
      const [email_flag,setEmail_flag]= React.useState(false)
      const [Name_flag,setName_flag]=React.useState(false)
      const [phoneflag,setphoneflag]=React.useState(false)
      const [education_flag,setEducation_flag]=React.useState(false)
      const [pwd1_flag1,setFlag1_flag1] = React.useState(false)
      const [pwd2_flag2,setFlag2_flag2] = React.useState(false)
      const [pwd_match,setpwd_match]=React.useState(false)
      const [check,setcheck]=React.useState(false)
      const [checkflag,setcheckflag]=React.useState(false)
      
      
      let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')

      const validation=()=>{
       
        if(!strongPassword.test(pwd1)){
          setFlag1_flag1(true)
        }else{
          setFlag1_flag1(false)
        }

        if(!strongPassword.test(pwd2)){

          setFlag2_flag2(true)
        }
        else{
          setFlag2_flag2(false)
        }

        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
          setEmail_flag(true)
        }
        else{
          setEmail_flag(false)
        }

        if(name===""){
          setName_flag(true)
        }else{
          setName_flag(false)
        }

        if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(phoneno)){
          setphoneflag(true)
        }else{
          setphoneflag(false)
        }
        
        if(education===""){
          setEducation_flag(true)
        }else{ 
          setEducation_flag(false)
        }
        if(pwd1===pwd2 && pwd1_flag1===false && pwd2_flag2===false){
          setpwd_match(false)
        }else{
          setpwd_match(true)
        }
      }   

return(
<>
  <div className="Container_mobile">
    <div>navbar</div>
      <div className="title_parent_div">
          <div className="title_div">
              <img className="title_vector" src="images/Vector.png" alt="" />
          </div> 
          <div className="title_txt">
            {/* <img className="sign_title_sd_img" src="Images/Rectangle_title.png" alt="" /> */}
            <p className="sign_title">Sign up with Education to Get Started</p>
          </div>
      </div>
      <div className="inpt_feilds">
          <div className="inpt_padding">
            <TextField 
             error={Name_flag}
             label={Name_flag? "error" : "Full Name" } 
             helperText={Name_flag ? "Name is required" : "" }
            value={name} 
            onChange={(e)=>{setName(e.target.value);}} 
            id="outlined-basic" 
            variant="outlined" 
            className="name_inpt" 
            size="small"/>
          </div>
          <div className="inpt_padding">
            <TextField  
            error={phoneflag}
            label={phoneflag? "error" : "Phone No" } 
            helperText={phoneflag ? "Phone No Required" : "" }
            value={phoneno}  
            onChange={(e)=>{setPhoneno(e.target.value);console.log(phoneno)}}  
            id="outlined-basic" 
           
            variant="outlined" 
            className="name_inpt" 
            size="small"/>
          </div>
          <div className="inpt_padding">
            <TextField 
            error={email_flag}
            label={email_flag? "error" : "Email" } 
            helperText={email_flag ? "Invalid email address" : "" }
            value={email}  
            onChange={(e)=>{setEmail(e.target.value);}} 
            id="outlined-basic" 
            variant="outlined" 
            className="name_inpt" 
            size="small"/>
          </div>
             
          <div className="inpt_padding">
            <FormControl  error={education_flag}  
                 sx={{ m: 1, minWidth: 120 }} className="name_inpt">
              <InputLabel  
                id="demo-simple-select-helper-label" 
                size="small">{education_flag? "error" : "Education"}</InputLabel>
              <Select size="small"
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={education}
              label={education_flag? "error" : "Education" } 
                onChange={handleChange_option}>
                  <MenuItem value={""} size="small" >
                    <em>Select Education</em>
                  </MenuItem>
                    <MenuItem size="small" value={"8_9"}>Class 8-9</MenuItem>
                    <MenuItem size="small" value={"10_12"}>Class 10-12</MenuItem>
                    <MenuItem size="small" value={"graduate"}>Graduate</MenuItem>
                  <MenuItem size="small" value={"others"}>
                    <em>Other</em>
                  </MenuItem>
              </Select>
              <FormHelperText>{education_flag? "Education Required" : "" }</FormHelperText>
            </FormControl>
          </div>
           {/* pwd1 */}
          <div className="inpt_padding">
            <FormControl  error={pwd1_flag1}   sx={{ m: 1, width: '25ch' }} variant="outlined" >
              <InputLabel htmlFor="outlined-adornment-password" size="small" >{pwd1_flag1? "error" : "Password" }</InputLabel>
              <OutlinedInput size="small"
                id="outlined-adornment-password"
                type={flag1 ? 'text' : 'password'}
                
                value={pwd1}
                onChange={pwd1_hndlechange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      >
                      {flag1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={pwd1_flag1? "error" : "Password" } 
              />
               <FormHelperText>{pwd1_flag1? "Password Required" : "" }</FormHelperText>
            </FormControl>
          </div>
          {/* pwd2 */}
          <div className="inpt_padding">
            <FormControl  error={pwd2_flag2}   sx={{ m: 1, width: '25ch' }} variant="outlined" >
              <InputLabel htmlFor="outlined-adornment-password" size="small" className="cnfm_pwd" >{pwd2_flag2? "error" : "Confirm Password" }</InputLabel>
              <OutlinedInput size="small"
                id="outlined-adornment-password"
                type={flag2 ? 'text' : 'password'}
                value={pwd2}
                onChange={pwd2_hndlechange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      >
                      {flag2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={pwd2_flag2? "error" : "Password" }
              />
               <FormHelperText>{pwd2_flag2? "Password Required" : (pwd_match? "Password Missmatch" : "" ) }</FormHelperText>
               <FormHelperText>{checkflag? "Please apply t&c":""  }</FormHelperText>
               <FormHelperText>{userverify? "User already exists or somethin wrong" : "" }</FormHelperText>
               
            </FormControl>
          </div>
          <div className="t_c_div" onClick={()=>{setcheck(!check)}}>
              <div className="ckbx_div">
                <input type="checkbox" name="" id=""  checked={check}/>
              </div> 
              <div >
                <p className="t_c_condtion">By Signing up, you confirm you accept our </p>
                <p className="t_and_c">Terms of use</p>
              </div>
          </div>
          

      </div>
          <div className="btn_div" onClick={submit}>
         <Button variant="contained" >Sign Up</Button> 
         {/* <Link to="/Intrest">wwede</Link> */}
          </div>
          <div >
            <p className="or_section">or</p>
          </div>
          <div>
            <div className="google_singup_img_div">
              <div className="google_singup_img" alt="" >
                <SocialIcon url="https://www.google.co.in/" className="google_singup_img_icon"/> 
                <p  className="btn_info">Continue with Faceboox</p> 
              </div>
              <div className="google_singup_img" alt="" >
                <SocialIcon url="https://www.facebook.com/" className="google_singup_img_icon"/>
                 <p className="btn_info">Continue with Faceboox</p>
              </div>
            </div>
          </div>
        <div className="login_part">
          <p className="sign_info">Already have an account?</p>
          <Link to="/Signup"> <p className="login_link">Log in</p></Link>
        
        </div>
  </div>
</>
)}