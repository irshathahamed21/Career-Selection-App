import React from "react";
import {TextField,Button,FormHelperText,OutlinedInput,InputLabel,InputAdornment,IconButton,FormControl} from "@mui/material"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { SocialIcon } from 'react-social-icons';
import "./Singup.css"
import axios from "axios";
import Navbar from "../Navbar/Navbar"
import {Link,Redirect,useHistory} from "react-router-dom"
const initstate={
 email:"",
  password: ""
}
export default function Login(){
  const [form,setForm]=React.useState(initstate)
  const [email,setEmail]= React.useState("")
  const [pwd1,setPwd1] = React.useState("")
  const [flag1,setFlag1] = React.useState(false)
     
  
       
      // pwd1
      const pwd1_hndlechange = (prop) => (event) => {
        setPwd1(event.target.value);
      };
      const handleClickShowPassword1 = () => {
        setFlag1(!flag1)
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const [pwd1_flag1,setFlag1_flag1] = React.useState(false)
      const [emailflag,setemailflag]=React.useState(false)
      let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
      const validation=()=>{
       
        if(!strongPassword.test(pwd1)){
          setFlag1_flag1(true)
        }else{
          setFlag1_flag1(false)
        }
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
          setemailflag(true)
        }else{
          setemailflag(false)
        }
      }  
      const submit=()=>{
        setForm(initstate)
        validation()
        if(
            emailflag===false &&
            pwd1_flag1===false){
          
                form.email=email
                form.password=pwd1
    
        receiver(form)
      } 
    }
    const google_auth=()=>{
      window.location.href = "http://localhost:2345/auth/google"
    }
    
    const [userverify,setuserverify]=React.useState(false)
    const [redirect,setRedirect]=React.useState(false)
    let history = useHistory();
    async function receiver(data) { 
      try {
      await axios.post("http://localhost:2345/login",data).then(res =>{
        
        history.push({
        pathname: '/Intrest',
        search:res.data.token,// query string
        state: {  // location state
          update: true, 
        },
      });
    });
    
      // <Redirect to='/Intrest />
      setuserverify(false)
      } catch (error) {
        setuserverify(true)
      }
      }
return (
<>
  <div className="Container_mobile">
    <div>
    <Navbar />
    </div>
    <div className="title_parent_div">
      <div className="title_div">
       <img className="title_vector" src="images/Vector.png" alt="" />
      </div> 
      <div className="title_txt_login">
        {/* <img className="sign_title_sd_img" src="Images/Rectangle_title.png" alt="" /> */}
        <p className="login_title_wlcm">Welcome Back</p>
        <p className="login_title">Login to Education</p>
      </div>
    </div>
    <div className="inpt_feilds">
      <div className="inpt_padding">
            <TextField  
            error={emailflag}
            label={emailflag? "error" : "Email" } 
            helperText={emailflag ? "Valid Email Required" : "" }
            value={email}  
            onChange={(e)=>{setEmail(e.target.value);console.log(email)}}  
            id="outlined-basic" 
           
            variant="outlined" 
            className="name_inpt" 
            size="small"/>
      </div>
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
               <FormHelperText>{userverify? "Phone no and Password wrong or somethin wrong" : "" }</FormHelperText>
            </FormControl>
        </div>   
        <div className="t_c_div_login">
          <div className="frgot_pwd_div">
            <p className="fgot_pwd">Forget Password?</p>
          </div>     
        </div>
    </div>
    <div className="btn_div"  onClick={submit} >
        <Button variant="contained" >Login</Button>
      </div>       
    <div>
      <p className="or_section">or</p>
    </div>        
    <div>
      <div className="google_singup_img_div">
        <div className="google_singup_img" alt="" onClick={google_auth}>
          <SocialIcon url="https://www.google.co.in/" className="google_singup_img_icon"/> 
          <p  className="btn_info">Continue with Google</p> 
        </div>       
        <div className="google_singup_img" alt="" >
            <SocialIcon url="https://www.facebook.com/" className="google_singup_img_icon"/>
            <p className="btn_info">Continue with Faceboox</p>
        </div>
      </div>         
    </div>
    <div className="login_part_login_pge">
      <p className="sign_info">New to Education?</p>
      <Link to="/Signup">  <p className="login_link">Create Account</p></Link>
    </div>
  </div>
</>
)}
