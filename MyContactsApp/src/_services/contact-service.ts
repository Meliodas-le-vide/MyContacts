import Axios from "./caller-service";

let getAllContacts = () => {
    return Axios.get('/Contacts?order=desc&orderBy=desc')
}

let getContact = (_id: any) => {
    return Axios.get(`/contacts/${_id}`)
}

let updateContact = (contact: any) => {
    return Axios.get(`/contacts/`+contact._id,contact)
}

let createContact = (contact: any) => {
    return Axios.get(`/contacts/`,contact)
}

let deleteContact = (_id: any) => {
    return Axios.get(`/contacts/${_id}`)
}

export const contactService = {
    getAllContacts,
    getContact,
    updateContact,
    createContact,
    deleteContact
}