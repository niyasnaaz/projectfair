import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div className='card shadow p-5 mt-5 me-2'>
      <div className="d-flex justify-content-between">
        <h1>profile</h1>
        <button onClick={() => setOpen(!open)} className='btn btn-outline-danger'><i class="fa-solid fa-chevron-down"></i></button>

      </div>
      <Collapse in={open}>
      <div className="row justify-content-center mt-3">
        {/* Upload profile picture */}
        <label>
          <input type="file" style={{display:"none"}}/>
          <img width={'200px'} height={'200px'} className='rounded circle' src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png" alt="profile img" />
        </label>
        <div className="mt-3">
          <input type="text" className='form-control' placeholder='Github'/>
          <input type="text" className='form-control' placeholder='Linkedin'/>
        </div>
        <div className="mt-3 text-align-center d-grid">
          <button className='btn btn-danger d-grid fw-bold'>Update</button>
        </div>
      </div>
      </Collapse>
    </div>
  )
}

export default Profile