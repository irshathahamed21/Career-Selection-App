import React from "react";
import {TextField,Button,OutlinedInput,InputLabel,InputAdornment,MenuItem,Select,IconButton,FormControl} from "@mui/material"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { SocialIcon } from 'react-social-icons';
import "./Singup.css"
export default function Signup(){
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
            <TextField value={name} onChange={(e)=>{setName(e.target.value);console.log(name)}} id="outlined-basic" label="Full Name" variant="outlined" className="name_inpt" size="small"/>
          </div>
          <div className="inpt_padding">
            <TextField  value={phoneno} onChange={(e)=>{setPhoneno(e.target.value);console.log(phoneno)}}  id="outlined-basic" label="Phone No " variant="outlined" className="name_inpt" size="small"/>
          </div>
          <div className="inpt_padding">
            <TextField value={email} onChange={(e)=>{setEmail(e.target.value);console.log(email)}} id="outlined-basic" label="Email" variant="outlined"className="name_inpt" size="small"/>
          </div>
             
          <div className="inpt_padding">
            <FormControl sx={{ m: 1, minWidth: 120 }} className="name_inpt">
              <InputLabel id="demo-simple-select-helper-label" size="small">Education</InputLabel>
              <Select size="small"
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={education}
                label="Education"
                onChange={handleChange_option}>
                  <MenuItem value={""} size="small">
                    <em>Select Education</em>
                  </MenuItem>
                    <MenuItem size="small" value={10}>Class 8-9</MenuItem>
                    <MenuItem size="small" value={20}>Class 10-12</MenuItem>
                    <MenuItem size="small" value={30}>Graduate</MenuItem>
                  <MenuItem size="small" value={"others"}>
                    <em>Other</em>
                  </MenuItem>
              </Select>
            </FormControl>
          </div>
           {/* pwd1 */}
          <div className="inpt_padding">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
              <InputLabel htmlFor="outlined-adornment-password" size="small" >Password</InputLabel>
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
                label="Password"
              />
            </FormControl>
          </div>
          {/* pwd2 */}
          <div className="inpt_padding">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
              <InputLabel htmlFor="outlined-adornment-password" size="small" className="cnfm_pwd" >Confirm Password</InputLabel>
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
                label="Password"
              />
            </FormControl>
          </div>
          <div className="t_c_div">
              <div className="ckbx_div">
                <input type="checkbox" name="" id="" />
              </div> 
              <div >
                <p className="t_c_condtion">By Signing up, you confirm you accept our </p>
                <p className="t_and_c">Terms of use</p>
              </div>
          </div>
           

      </div>
          <div className="btn_div">
            <Button variant="contained" >Sign Up</Button>
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
          <p className="login_link">Log in</p>
        </div>
  </div>
</>
)}