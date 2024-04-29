import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import home_logo from '../assets/home_logo.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectsAPI } from '../services/allAPI'

function Home() {

    const [homeProjects, setHomeProjects] = useState([])

    const [loggedin, setLoggediin] = useState(false)

    const getHomeProjects = async () => {
        const result = await homeProjectsAPI()
        if (result.status === 200) {
            setHomeProjects(result.data)
        } else {
            console.log(result);
            console.log(result.response);
        }
    }
    // console.log(homeProjects);

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setLoggediin(true)
        } else {
            setLoggediin(false)
        }

        // api call
        getHomeProjects()

    }, [])
    return (
        <div className='container-fluid rounded bg-light'>
            <Row className='align-items-center p-5'>
                <Col sm={12} md={6}>
                    <h1 style={{ fontSize: "80px" }} className='fw-bolder text-dark'><i class="fa-solid fa-laptop-code text-danger"></i> Project-Fare</h1>
                    <p className='align-items-justify'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti saepe reiciendis sed harum consequatur sapiente temporibus tenetur quidem vitae blanditiis magni, ab provident est eum accusantium exercitationem officiis quis debitis.
                        Voluptas a suscipit eos saepe enim architecto, repellat, sunt quam, voluptates id cum dignissimos amet fugit earum! Voluptatibus corporis a saepe consectetur doloremque libero! Sequi beatae dolores quibusdam hic deserunt?</p>
                    {loggedin ?
                        <Link to={'/dashboard'} className='btn btn-danger fw-bolder'>Manage Your Projects<i class="fa-solid fa-arrow-right-long text-light ms-1"></i></Link> :
                        <Link to={'/login'} className='btn btn-danger fw-bolder'>Start To Explore <i class="fa-solid fa-arrow-right-long text-light ms-1"></i></Link>}

                </Col>
                <Col sm={12} md={6}>
                    <img width={'500px'} src={home_logo} alt="no image" />
                </Col>

                <div className='all-projects mt-5'>
                    <h1 className='text-center'>Explore Your Projects</h1>
                    <marquee scrollAmount={20}>
                        <Row>

                            {homeProjects?.length > 0 ? homeProjects.map(project=> (
                                <Col sm={12} md={6} lg={4}>

                                    <ProjectCard project={project}/>

                                </Col>
                            )) : null
                            }

                        </Row>
                    </marquee>
                    <div className='text-center'><Link to={'/project'}>View More Projects</Link></div>
                </div>
            </Row>
        </div>
    )
}

export default Home