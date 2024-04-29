
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Form } from "react-bootstrap";
import { loginAPI, registerAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tokenAuthorizationContext } from './context/TokenAuth';
function Auth({ register }) {

  const {isAuthorized,setIsAuthorized}=useContext(tokenAuthorizationContext)
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    username: "", email: "", password: ""
  })

  const isRegisterForm = register ? true : false

  //register
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    // if( !username==="" || !email===""|| !password===""){
    if (!username || !email || !password) {

      toast.warning("All fields are required");
    } else {
      const result = await registerAPI(userData)
      console.log(result);
      if (result.status === 200) {
        console.log(result);
        toast.success(`${ result.data.username } has registered successfully`);
        setUserData({
          username: "", email: "", password: ""
        })
        navigate('/login')
      } else {
        toast.error(result.response.data)
        console.log(result);
      }
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = userData;
    if (!email || !password) {

      toast.warning("All fields are required");
    } else {
      const result = await loginAPI(userData)
      console.log(result);
      if (result.status === 200) {
        console.log(result);
        // Session storage for existing user & token
        sessionStorage.setItem('existingUser', JSON.stringify(result.data.existingUser))
        sessionStorage.setItem('token',result.data.token)
        setIsAuthorized(true)
        
         toast.success(`${result.data.username} has registered successfully`);
        setUserData({
          email: "", password: ""
        })
        navigate('/')
      } else {
        toast.error(result.response.data)
        console.log(result);
      }
    }
  }




  return (
    <>
      <div style={{ width: "100", height: "100vh", marginTop: "100px" }} className='d-flex justify-content-center'>
        <div className="container w-75">
          <Link to={"/"} style={{ textDecoration: "none", color: "blue" }}><i class="fa-solid fa-left-long"></i>Back To Home</Link>
          <div className="card shadow p-5 bg-primary">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src="https://bigredweb.ie/images/Login-rafiki.png" className='rounded-start w-100' alt="" />
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center flex-column">
                  <h1 className='fw-bolder text-light mt-2'><i class="fa-solid fa-list-check"></i>Project Fair</h1>
                  <h5 className='fw-bolder mt-4 pb-3 text-light' >
                    {
                      isRegisterForm ? "Sign Up to Your Account" : "Sign In to Your Account"
                    }

                  </h5>

                  <Form className="text-light w-100">
                    {
                      isRegisterForm &&
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Username" value={userData.username}
                          onChange={e => setUserData({ ...userData, username: e.target.value })} />
                      </Form.Group>

                    }


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" value={userData.email}
                        onChange={e => setUserData({ ...userData, email: e.target.value })} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="password" placeholder="Enter password" value={userData.password}
                        onChange={e => setUserData({ ...userData, password: e.target.value })} />

                    </Form.Group>
                    {
                      isRegisterForm ?
                        <div>
                          <button className='btn btn-light mb-2' onClick={handleRegister}>
                            Register
                          </button>
                          <p>Already an account ?  Click Here to <Link to={'/login'} style={{ textDecoration: "none", color: "blue" }}>Login</Link></p>
                        </div> :
                        <div>
                          <button className='btn btn-light mb-2' onClick={handleLogin}>
                            Login
                          </button>
                          <p>Doesn't have any Account? Click Here to <Link to={'/register'} style={{ textDecoration: "none", color: "red" }}>Register</Link></p>
                        </div>
                    }

                  </Form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center"
        theme='colored'
        autoClose={2000} />
    </>
  )
}

export default Auth
