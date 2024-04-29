import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectsAPI } from '../services/allAPI'

function Project() {
  
  const [searchKey,setSearchKey]=useState("")
  const [allProjects, setAllProjects] = useState([])
  

  const getAllProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await allProjectsAPI(searchKey,reqHeader)
      if (result.status === 200) {
        setAllProjects(result.data)
      } else {
        console.log(result);
      }
    }
  }
  console.log(allProjects);
  useEffect(() => {
    getAllProjects()
  }, [searchKey])

  return (
    <>
      <Header />
      <div style={{ marginTop: '100px' }} className="projects">
        <h1 className='text-center mb-5'>All Projects</h1>
        <div className='d-flex justify-content-center w-100'>
          <div className='d-flex border w-50 rounded mb-3'>
            <input type="text" className='form-control' placeholder='Search Projects By Technologies' onChange={e=>setSearchKey(e.target.value)}/>
            <i style={{ marginLeft: "-50px" }} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
      </div>

      <div>
        <Row>
          {allProjects?.length > 0 ? allProjects?.map(project => (
            <Col className='d-flex justify-content-center mt-4 mb-4' sm={12} md={6} lg={4}>
              <ProjectCard project={project}/>
            </Col>
          )) : <h3 className='text-danger text-center fw-bold m-5'>Please Login</h3>
          }
        </Row>
      </div>
    </>
  )
}

export default Project