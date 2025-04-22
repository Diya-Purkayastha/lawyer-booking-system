//get from localstorage 
const getStoredBook = () =>{
    const storeSTR = localStorage.getItem("AppointmentList");

    if(storeSTR){
        const storeAppointment = JSON.parse(storeSTR)
        return storeAppointment;
    }
    else{
        return [];
    }
}

//add to DB
const addToStoreDB = (id) => {
    const storeAppointmentList = getStoredBook();
    if (!storeAppointmentList.includes(id)) {
        storeAppointmentList.push(id);
        localStorage.setItem("AppointmentList", JSON.stringify(storeAppointmentList));
    }
};


export {addToStoreDB, getStoredBook}