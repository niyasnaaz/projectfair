

const { BASE_URL } = require("./baseurl");
const { commonAPI } = require("./commonAPI");

// register

export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

// add Projects

export const addProjectsAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/projects/add`,reqBody,reqHeader)
}

// getHomeProjects

export const homeProjectsAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/homeProjects`,"","")
}

// getAllProjects

export const allProjectsAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all?search=${searchKey}`,"",reqHeader)
}

// getAllProjects

export const userProjectsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/allProjects`,"",reqHeader)
}

// edit project

export const editProjectsAPI = async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/projects/edit/${projectId}`,reqBody,reqHeader)
}

// delete project
export const deleteProjectsAPI = async(projectId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/projects/remove/${projectId}`,{},reqHeader)
}


