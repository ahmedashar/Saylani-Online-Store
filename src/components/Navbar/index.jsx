import React, { useState } from 'react'
import logo from '../../assets/images/Logo.png'
import './navbar.css'

export default function Navbar() {
    const [loginToggle, setLoginToggle] = useState(false)
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
        <h1 className="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Enter Full Name</label>
            <input type="text" class="form-control" id="recipient-name"/>
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
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>{}}>Login</button>
      </div>

      <div className='login_conditions'>
        <p>create account <span className='admin_login_link' onClick={()=>{setLoginToggle(true)}}>sign up</span></p>
      </div>
    </div>
  </div>
</div>
{/* login modal end */}

</div>
)
  
}
