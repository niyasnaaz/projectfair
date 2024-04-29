import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { addProjectsAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import { AddProjectResponseContext } from './context/ContextShare';


function Addprojects() {
    const {addProjectResponse, setAddProjectResponse} = useContext(AddProjectResponseContext)

    const [token,setToken]=useState()
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setToken(sessionStorage.getItem("token"))
        }else{
            setToken("")
        }
    })

    const [projectDetails,setProjectDetails]=useState({
        title:"",
        languages:"",
        github:"",
        website:"",
        overview:"",
        projectImage:""
    })

    const [preview,setPreview]=useState("")

    useEffect(()=>{
        if(projectDetails.projectImage){
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    },[projectDetails.projectImage])
    

    const [show, setShow] = useState(false);

    const handleClose = () => {
    setShow(false);
    setProjectDetails({
        title:"",
        languages:"",
        github:"",
        website:"",
        overview:"",
        projectImage:""
    })
    setPreview("")
}


    const handleShow = () => setShow(true);

   const handleAdd = async (e)=>{
    e.preventDefault()
    const {title,languages,github,website,overview,projectImage} = projectDetails
    if(!title || !languages || !github || !website || !overview || !projectImage){
        toast.warning("Please Fill Missing Fields")
    }else{
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("github",github)
        reqBody.append("website",website)
        reqBody.append("overview",overview)
        reqBody.append("projectImage",projectImage)

        if(token){
            const reqHeader ={
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
            }

            const result = await addProjectsAPI(reqBody,reqHeader)
            if(result.status===200){
                console.log(result.data);
                handleClose()
                setAddProjectResponse(result.data)
                toast.success("Projects Added")
            }else{
                console.log(result);
                console.log(result.response.data);
            }
        }
    }
   }
    return (
        <div>
            <Button variant="danger" className='fw-bold' onClick={handleShow}>
                Add Projects
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Project Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6">
                            <label>
                                <input type="file" style={{ display: "none" }} onChange={e=>setProjectDetails
                                    ({...projectDetails,projectImage:e.target.files[0]})}/>
                                <img 
                                width={'300px'} className='rounded circle' 
                                src={preview?preview:"https://cdn4.iconfinder.com/data/icons/file-format/111/jpg_jpeg-1024.png" }
                                alt="profile img" />
                            </label>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title}
                                onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Language Used' value={projectDetails.languages}
                                onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Github' value={projectDetails.github}
                                onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website}
                                onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview}
                                onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className='fw-bold' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" className='fw-bold' onClick={handleAdd}>Add</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-center"
        theme='colored'
        autoClose={2000} />
        </div>
    )
}

export default Addprojects