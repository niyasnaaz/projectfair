import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>

<MDBFooter bgColor='dark' className='text-center text-lg-start text-muted '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='ms-5 text-light'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fs-5 fw-bold mb-4'>
              <i class="fa-solid fa-laptop-code me-2 text-light fs-3"></i>
                <span className='text-danger'>Project Fare</span>
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-danger'>Links</h6>
              <p>
                
                <Link to={'/'} className='text-light' style={{textDecoration:'none'}}>
                Landing Page
                </Link>
              </p>
              <p>
              <Link to={'/home'} className='text-light' style={{textDecoration:'none'}}>
                Home Page
                </Link>
              </p>
              <p>
              <Link to={'/watchhistory'} className='text-light' style={{textDecoration:'none'}}>
               Watch History
                </Link>
              </p>
             
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-danger'>Guides</h6>
              <p>
                <a href='#!' className='text-light' style={{textDecoration:'none'}}>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'  style={{textDecoration:'none'}}>
                  React Bootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'  style={{textDecoration:'none'}}>
                  Bootswatch
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-light'>
              <h6 className='text-uppercase fw-bold mb-4 text-danger'>Contact Us</h6>
              <p>
                <MDBIcon icon="home" className="me-2 text-light" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3 text-light" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3 text-light" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3 text-light" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-light'>
        © 2024 Copyright : 
        <a className='fw-bold text-danger ms-2' href='https://mdbootstrap.com/' style={{textDecoration:'none'}}>
         Project Fare. Build With React
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer