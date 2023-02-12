import React from 'react'
import logo from '../../assets/images/Logo.png'
import './navbar.css'
export default function Navbar() {
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
        <button className="btn btn-outline-success" onClick={()=>}>Login</button>
      </div>
    </div>
  </div>
</nav>
</div>
)
  
}
