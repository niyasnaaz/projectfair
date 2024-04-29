import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Myprojects from '../components/Myprojects'
import Profile from '../components/Profile'

function Dashboard() {

  const [username,setUsername]=useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  })
  return (
    <>
      <Header insideDashboard/>
      <Row style={{marginTop:"100px"}}>
        <Col sm={12} md={8}>
          <h2>Welcome <span className='text-danger'>{username}</span></h2>

          {/* Myprojects */}

          <Myprojects />

        </Col>

        <Col sm={12} md={4}>

          {/* Profile */}

          <Profile/>

        </Col>

      </Row>
    </>
  )
}

export default Dashboard