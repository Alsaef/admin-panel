function Admin() {
    const email = getInputId("emailControle");
    const password = getInputId("passwordControle");
    const mainDisplay=document.getElementById("hide-show")
    const display = document.getElementById("deshbord-Id");
    const incurrect=document.getElementById('incurrect');
    // console.log(email, password);
    if (email === "saef.ratul@gmail.com" && password === "ratul123") {
        display.classList.remove("d-none");
        mainDisplay.classList.add("d-none")
    }
    else {
        incurrect.innerText="Try Again !!";
        incurrect.style.padding="5px";
        incurrect.style.color="red";
        incurrect.style.fontWeight="boold"
    }
}