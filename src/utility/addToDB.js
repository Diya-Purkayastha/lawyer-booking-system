//get from localstorage 
const getStoredBook = () =>{
    const storedBookSTR = localStorage.getItem("readList");

    if(storedBookSTR){
        const storeBook = JSON.parse(storedBookSTR)
        return storeBook;
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