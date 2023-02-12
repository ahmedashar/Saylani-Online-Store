import React, { useState } from 'react'
import logo from '../../assets/images/Logo.png'
import { firebaseSignIn, firebaseSignUp } from '../../config/firebase-config'
import './navbar.css'

export default function Navbar() {
    const [loginToggle, setLoginToggle] = useState(false)
    // form inputs
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    signUpWithFirebase(){

    }
  return (
    <div className='container'> 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img className='app_logo' src={logo} alt='logo' />

    <h3 className='org_name'>SAYLANI WELFARE</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <div className="d-flex">
        <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={()=>{}}>Sign Up</button>
      </div>
    </div>
  </div>
</nav>

{/* login modal start */}

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
       
        <h1 className="modal-title fs-5" id="exampleModalLabel">{ (loginToggle)? 'Login' : 'SignUp'}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      {(loginToggle)
      ?
      // login
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-email" className="col-form-label">Enter Email</label>
            <input type="text" class="form-control" id="recipient-email"/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Enter Password</label>
            <input className="form-control" id="message-text" type="password" />
          </div>
        </form>
      </div>  
      :
      // signup
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Enter Full Name</label>
            <input onChange={(e) => {
              setName(e.target.value)}} type="text" class="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label for="recipient-phone" className="col-form-label">Contact Number</label>
            <input type="text" class="form-control" id="recipient-phone"/>
          </div>
          <div className="mb-3">
            <label for="recipient-email" className="col-form-label">Enter Email</label>
            <input type="text" class="form-control" id="recipient-email"/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Enter Password</label>
            <input className="form-control" id="message-text" type="password" />
          </div>
        </form>
      </div>
      }
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {(loginToggle)?<button type="button" className="btn btn-primary" onClick={()=>{}}>Login</button>:<button type="button" className="btn btn-primary" onClick={()=>{}}>SignUp</button>}
        
      </div>

      <div className='login_conditions'>
        {(loginToggle)? <p className='admin_login_link' onClick={()=>setLoginToggle(false)}>Create an account? SignUp</p>: <p className='admin_login_link' onClick={()=>setLoginToggle(true)}>Already have an account? Login</p>}
       
      </div>
    </div>
  </div>
</div>
{/* login modal end */}

</div>
)
  
}
