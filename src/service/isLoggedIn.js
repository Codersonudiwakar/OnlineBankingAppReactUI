export const isLoggedIn=()=>{
    let login=localStorage.getItem('token');
    if (login!=null) {
        return true; 
    }
    else{
        return false;
    }
}