function getInputId(Id) {
  const inputFild = document.getElementById(Id);
  const inputValue = inputFild.value;
  inputFild.value = "";
  return inputValue;
}
const submit = () => {
  const blank=document.getElementById("blank")
  const email = getInputId("emailarea");
  const text = getInputId("textarea");
  if (email && text) {
    blank.classList.add("d-none")
  }
  // console.log(email, text)
// simple local store
display(email,text)

}

 function display(email,text) {
   // display
   const mainUl = document.getElementById("main-ul");
   const li = document.createElement("li");
   li.innerHTML = `${email}<br> text: ${text}`
   mainUl.appendChild(li)
 }