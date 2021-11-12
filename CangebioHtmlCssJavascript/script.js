
let btnSubmit = document.getElementById("submit");

function changeBio() {
    
    //get data from input

    const getName = document.getElementById("nama").value;
    const getNotelp = document.getElementById("notelp").value;
    const getEmail = document.getElementById("email").value;
    const getReligin = document.getElementById("religion").value;
    const getAddress = document.getElementById("address").value;
    const getSumarry = document.getElementById("sumarry").value;

    // show input to html

    document.getElementById("showName").innerText = getName;
    document.getElementById("showPhoneNumber").innerText = getNotelp;
    document.getElementById("showEmail").innerText = getEmail;
    document.getElementById("showRegion").innerText = getReligin;
    document.getElementById("showAddress").innerText = getAddress;
    document.getElementById("showSummary").innerText = getSumarry;

}


btnSubmit.addEventListener("click", (e) => {
    e.preventDevault();
    changeBio();
});

