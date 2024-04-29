import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorizationContext } from './context/TokenAuth'

function Header({insideDashboard}) {
  const  navigate = useNavigate()
  const {isAuthorized,setIsAuthorized}=useContext(tokenAuthorizationContext)

  const handleLogout = ()=>{
    // remove all details from sessionstorage
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    // navigate to landing page
    navigate('/')
  }
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white', fontSize: '30px' }}>
              <span className='text-secondary'><i class="fa-solid fa-laptop-code me-2 text-light"></i></span>
              <span className='text-danger'>Project Fare</span>
            </Link>
          </Navbar.Brand>
          {insideDashboard &&
          <button onClick={handleLogout} className='btn align-items-right border text-danger fw-bold'>Logout</button>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header