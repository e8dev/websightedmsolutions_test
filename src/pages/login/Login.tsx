import {FC, useState, useContext} from "react";
import axios from "axios";
import {IUser, IAxiosUserResponse} from "../../interfaces/interfaces";
import { AuthContext } from '../../Auth';



export const Login: FC = () => {

  // @ts-ignore
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loginError, setLoginError] = useState(false);
  const [loginErrorText, setLoginErrorText] = useState("");

  function validatePassword(password: string) {
    // Check for minimum length of 8 characters
    if (password.length < 8) {
      return {success:false, msg:"minimum length of 8 characters"};
    }
  
    // Check for at least 1 uppercase letter
    if (!/[A-Z]/.test(password)) {
      return {success:false, msg:"at least 1 uppercase letter"};
    }
  
    // Check for at least 1 lowercase letter
    if (!/[a-z]/.test(password)) {
      return {success:false, msg:"at least 1 lowercase letter"};
    }
  
    // Check for at least 1 special character
    if (!/[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]/.test(password)) {
      return {success:false, msg:"at least 1 special character"};
    }
  
    // All validation passed
    return {success:true, msg:""};
  }

  async function login(){

    let checkPassword = validatePassword(loginPassword);

    console.log("test",checkPassword);

    if(checkPassword.success === false){
      setLoginErrorText("Password should contain " + checkPassword.msg);
      setLoginError(true);
      return;
    }

    let postData = {email: loginEmail, password: loginPassword};
    setLoginError(false);

    try {

      //this is real case
      //const response:IAxiosResponse = await axios.post("/login", postData);

      //this is simulated
      let response:IAxiosUserResponse = {
        success: false,
        data: {id:0,email:"",role:0},
        message: "error"
      }
      if(loginEmail == "editor@mail.com"){
        response = {
          success: true,
          data: {
            id: 1,
            email: "editor@mail.com",
            role: 1
          },
          message: "data sucessfully retrieved"
        }
      }
      if(loginEmail == "viewer@mail.com"){
        response = {
          success: true,
          data: {
            id: 1,
            email: "viewer@mail.com",
            role: 2
          },
          message: "data sucessfully retrieved"
        }
      }
      

      if(response.success && response.success == true){
        setIsAuthenticated(true);
        setUser(response.data);
      }else{
        setIsAuthenticated(false);
        setLoginError(true);
        setLoginErrorText("Please re-check your credentials")
      }

    }catch (e) {
      alert(e)
    }


  }

  return (
    <div className={'card bg rounded h-full'}>
      <div className="card-body">
        <h1 className={'text-center mt-12 mb-20'}>Welcome</h1>
  
        <div className="login-form">
          <p className={'text-center text-muted'}>(USE viewer@mail.com or editor@mail.com)</p>
          {loginError ? (<p className={'text-center errors'}>{loginErrorText}</p>) : null }
          <input placeholder={'Email'} type="text" className={'form-control form-control-sm my-2'} onChange={(e) => setLoginEmail(e.target.value)}/>
          <input placeholder={'Password'} type="text" className={'form-control form-control-sm my-2'} onChange={(e) => setLoginPassword(e.target.value)} />
          <button
            className={'btn btn-sm btn-primary'}
            style={{width: '100%'}}
            onClick={()=> {login()}}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}