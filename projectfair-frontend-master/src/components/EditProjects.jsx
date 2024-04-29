import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseurl';
import { editProjectsAPI } from '../services/allAPI';
import { editProjectResponseContext } from './context/ContextShare';

function EditProjects({ project }) {

    const { editProjectResponse, setEditProjectResponse }
        = useContext(editProjectResponseContext)
    const [projectDetails, setProjectDetails] = useState({
        id: project._id,
        title: project.title,
        languages: project.languages,
        github: project.github,
        website: project.website,
        overview: project.overview,
        projectImage: ""
    })
    const [preview, setPreview] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setProjectDetails({
            id: project._id,
            title: project.title,
            languages: project.languages,
            github: project.github,
            website: project.website,
            overview: project.overview,
            projectImage: ""
        })
        setPreview("")
    }

    const handleShow = () => setShow(true);

    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])

    const handleUpdate = async () => {
        const { id, title, languages, github, website, overview, projectImage } = projectDetails
        if (!title || !languages || !github || !website || !overview) {
            toast.warning("Please Fill Missing Fields")
        } else {
            const reqBody = new FormData()

            reqBody.append("title", title)
            reqBody.append("languages", languages)
            reqBody.append("github", github)
            reqBody.append("website", website)
            reqBody.append("overview", overview)
            preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", project.projectImage)

            const token = sessionStorage.getItem("token")

            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                // api call
                const result = await editProjectsAPI(id, reqBody, reqHeader)
                if (result.status === 200) {
                    handleClose()
                    // pass the response to my projects 
                    setEditProjectResponse(result.data)
                }
                else {
                    console.log(result);
                    alert(result.response.data)
                }

            } else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                // api call
                const result = await editProjectsAPI(id, reqBody, reqHeader)
                if (result.status === 200) {
                    handleClose()
                    // pass the response to my projects
                    setEditProjectResponse(result.data) 
                }
                else {
                    console.log(result);
                    alert(result.response.data)
                }
            }
        }
    }

    return (
        <>
            <button onClick={handleShow} className="btn"><i class="fa-solid fa-pen-to-square"></i></button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6">
                            <label>
                                <input type="file" style={{ display: "none" }} onChange={e => setProjectDetails
                                    ({ ...projectDetails, projectImage: e.target.files[0] })} />
                                <img
                                    width={'300px'} className='rounded circle'
                                    src={preview ? preview : `${BASE_URL}/uploads/${project.projectImage}`}
                                    alt="profile img" />
                            </label>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Project Title' value={projectDetails?.title}
                                    onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Language Used' value={projectDetails?.languages}
                                    onChange={e => setProjectDetails({ ...projectDetails, languages: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Github' value={projectDetails?.github}
                                    onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Website Link' value={projectDetails?.website}
                                    onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Project Overview' value={projectDetails?.overview}
                                    onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className='fw-bold' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" className='fw-bold' onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditProjects