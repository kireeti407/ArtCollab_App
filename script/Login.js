
import auth from "../main.js";
import {signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
window.addEventListener("DOMContentLoaded",()=>{
    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const toggleText = document.getElementById("toggle-text");
    const ls=document.getElementById("l-s")
    const submit =document.getElementById("submit-btn")
    let togg=document.getElementById("toggleF")
    togg.addEventListener("click",()=>{
      window.location.href="./singup.html"
    })
    // ls.addEventListener("click",()=>{
    //   alert("Google login logic goes here (use Firebase or Passport.js)");
    // })
    submit.addEventListener("click",async()=>{
      let email=document.getElementById("email").value
      let password=document.getElementById("password").value
      let type=(submit.innerText=="Login")?"Login":"Rigister";
    })
    submitBtn.addEventListener("click",async()=>{
        try{
          let email=document.getElementById("email").value
          let password=document.getElementById("password").value
          if(email.trim() && password.trim()){
            let res=await signInWithEmailAndPassword(auth,email,password)
            window.location.href="./Dashboard.html"
          }
        }
        catch(err){
          addListener("somthing went wrong")
        }
    })

})

