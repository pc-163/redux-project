import React from 'react'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Header = () => {
  return (
    <>
    
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '280px',  height: '100vh' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width= '40' height= '32'></svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Home
            </a>
          </li>
          <li>
            <a className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Orders
            </a>
          </li>
          <li>
            <a className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Products
            </a>
          </li>
          <li>
            <a className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" width= '32' height= '32' className="rounded-circle me-2" />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" >New project...</a></li>
            <li><a className="dropdown-item" >Settings</a></li>
            <li><a className="dropdown-item" >Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" >Sign out</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header