import { signOut } from "firebase/auth";
import React from "react";
import swal from "sweetalert";
import logo from '../../assets/images/admin_avatar2.png'
import { auth } from "../../config/firebase-config";
import './style.css'

export default function AdminNav(prop) {
  let {adminAuthCheck} = prop
  // logout
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        adminAuthCheck(false)
        swal("SignOut", "SignOut Successful", "success")
      })
      .catch((error) => {
        alert("Error in SignOut" + error);
      })}
  return (
    <div className="container admin_nav_cont1">
      <nav className="navbar navbar-expand-lg bg-body-tertiary admin_nav_cont2">
        <div className="container-fluid admin_nav">
          <img className="app_logo admin_logo" src={logo} alt="logo" />

          <span style={{color:'white'}}>Admin</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContents"
            aria-controls="navbarSupportedContents"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContents">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item admin_nav_links">
                <a className="nav-link admin_nav_links" aria-current="page" href="#">
                  Add Items
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link admin_nav_links" href="#">
                  Orders 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link admin_nav_links">Account</a>
              </li>
            </ul>
            <div className="d-flex">
              <button
                className="btn btn-danger signOutBtn"
                onClick={() => {signOutUser()}}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
