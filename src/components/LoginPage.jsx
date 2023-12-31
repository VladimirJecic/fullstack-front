import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LoginPage = ({addToken}) => {
     const [userData,setUserData] = useState({
        email: "",
        password: ""
     });
     let navigate = useNavigate();
     function handleInput(e){
        // console.log(e);
        let newUserData = userData;
        newUserData[e.target.name] = e.target.value;
        setUserData(newUserData);
     }
     function handleLogin(e){
        e.preventDefault();
        axios.post("/api/login",userData).
        then((res)=>{
            console.log(res.data);
            if(res.data.success === true){
                //postavlja se token
                window.sessionStorage.setItem("auth_token",res.data.access_token);
                addToken(res.data.access_token);
                navigate("/")
            }else{
                //u slucaju pogresnih kredencijala
            }
        }).catch((e) => {
            console.log(e);
        });
     }
    return (
      <section
        className="vh-100"
        style={{
          paddingTop: 4.5 + "rem",
        }}
      >
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleLogin}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    name="email"
                    onInput={handleInput}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
  
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                    onInput={handleInput}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
  
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{
                      paddingLeft: 2.5 + "rem",
                      paddingRight: 2.5 + "rem",
                    }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default LoginPage;