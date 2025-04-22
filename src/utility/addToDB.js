//get from localstorage 
const getStoredBook = () =>{
    const storeSTR = localStorage.getItem("readList");

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
    const storeBook = getStoredBook();
    if (!storeBook.includes(id)) {
        storeBook.push(id);
        localStorage.setItem("readList", JSON.stringify(storeBook));
    }
};


export {addToStoreDB, getStoredBook}