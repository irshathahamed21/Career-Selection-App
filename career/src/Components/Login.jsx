import React from "react";
import {TextField,Button,OutlinedInput,InputLabel,InputAdornment,MenuItem,Select,IconButton,FormControl} from "@mui/material"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { SocialIcon } from 'react-social-icons';

import "./Singup.css"
export default function Signup(){
  const [age, setAge] = React.useState('');

  const handleChange_option = (event) => {
    setAge(event.target.value);
  };
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    return (
        <>
       

        <div className="Container_mobile">
            <div>navbar</div>
            <div className="title_parent_div">
                <div className="title_div">
                <img className="title_vector" src="images/Vector.png" alt="" />
                </div> 
                <div className="title_txt_login">
                {/* <img className="sign_title_sd_img" src="Images/Rectangle_title.png" alt="" /> */}
                <p className="login_title_wlcm">Welcome Back</p>
                <p className="sign_title">Login to Education</p>
                </div>
            </div>
        <div className="inpt_feilds">
      
        <div className="inpt_padding">
            <TextField id="outlined-basic" label="Phone No " variant="outlined" className="name_inpt" size="small"/>
        </div>
      
             
      
        <div className="inpt_padding">
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" size="small" >Password</InputLabel>
          <OutlinedInput size="small"
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          />
          </FormControl>
        </div>
        
      
     
           
            <div className="t_c_div_login">
                <div className="frgot_pwd_div">
                <p className="fgot_pwd">Forget Password?</p>
                </div>
            </div>
           

            </div>
            <div className="btn_div">
            <Button variant="contained" >Login</Button>
            </div>
            <div >
              <p className="or_section">or</p>
            </div>
            <div>
              <div className="google_singup_img_div">
              <div className="google_singup_img" alt="" >
              <SocialIcon url="https://www.google.co.in/" className="google_singup_img_icon"/> 
              <p  className="btn_info">Continue with Faceboox</p> </div>

              
              <div className="google_singup_img" alt="" >
              <SocialIcon url="https://www.facebook.com/" className="google_singup_img_icon"/>
              <p className="btn_info">Continue with Faceboox</p>
              </div>
             </div>
            
            </div>
          
              <div className="login_part_login_pge"><p className="sign_info">New to Education?</p><p className="login_link">Create Account</p></div>
           

        </div>

        </>
    )
}