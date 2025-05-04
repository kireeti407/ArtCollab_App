import auth from "../main.js"
import {createUserWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
window.addEventListener("DOMContentLoaded",()=>{
    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const toggleText = document.getElementById("toggle-text");
    const ls=document.getElementById("l-s")
    const submit =document.getElementById("submit-btn")
    let togg=document.getElementById("toggleF")
    togg.addEventListener("click",()=>{
      window.location.href="./Login.html"
    })
    submitBtn.addEventListener("click",async()=>{
      try{
        let name=document.getElementById("name").value
        let email=document.getElementById("email").value
        let password=document.getElementById("password").value
        if(email.trim() && password.trim()){
          let data={
            name,
            email,
            img:"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
            field:"N/A",
            bio:"N/A",
            skils:"N/A", 
            projects:{}
          }  
          console.log(data)
          let res=await fetch("https://artcollab-app-default-rtdb.asia-southeast1.firebasedatabase.app/Profile.json",{
            method:"POST",
            header:{"content-Type":"application/json"},
            body:JSON.stringify(data)
          })
          let res1=await createUserWithEmailAndPassword(auth,email,password)
          window.location.href="./dashboard.html"
        }
        
      }
      catch(err){
        alert("somthing went wrong")
      }
    })
})