import { uploadPhoto ,createUser } from "./utils.js";

function handleProfileSignUp(){
    return Promise.all([uploadPhoto(), createUser())]
    .then()
}