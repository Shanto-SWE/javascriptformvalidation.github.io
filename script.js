const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const number=document.getElementById("number");
const password=document.getElementById("password");
const Cpassword=document.getElementById("Cpassword");



const isEmail=(emailVal)=>{
var atsymbol=emailVal.indexOf("@");
if(atsymbol<1) return false;
var dot=emailVal.lastIndexOf(".");
if(dot<atsymbol+4) return false;
if(dot===emailVal.length-1) return false;
return true;
}

const sdata=(srate,count,usernameVal)=>{
if(srate===count){
    alert("Regitrating successfull");
   swal("Welcome!" +usernameVal, "Regitrating successfull", "success");
location.href=`demo.html?username=${usernameVal}`
}else{
    return false;
}
}
const setSuccessmag=(usernameVal)=>{
    const formcontrol=document.getElementsByClassName('form-control');
      var count=formcontrol.length-1;
    for(var i=0;i<formcontrol.length;i++){
        if(formcontrol[i].className==='form-control success'){
               var srate=0+i;
               sdata(srate,count,usernameVal);
            
        }else{
            return true;
        }
    }
}



const validate=()=>{
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const numberVal=number.value.trim();
    const passwordVal=password.value.trim();
    const CpasswordVal=Cpassword.value.trim();
   
    var numberLim=/^(?:\+88|88)?(01[3-9]\d{8})$/;
    // validate
     if(usernameVal=== ""){
         errormag(username,'uername cannot be blank')
     }
     else if(usernameVal.length<=2){
         errormag(username,'username minimum 3 char')
     }
     else{
         successmag(username)
     }
     

    //  emial validate
    if(emailVal=== ""){
        errormag(email,'email cannot be blank')
    }
    else if(!isEmail(emailVal)){
        errormag(email,'email is not valid')
    }
    else{
        successmag(email)
    }
    // number validate


    if(numberVal=== ""){
        errormag(number,'number cannot be blank')
    }
   
    else if(!numberLim.test(numberVal)){
        errormag(number,'number is not valid')
    }
    else{
        successmag(number)
    }

    // Password validate
    if(passwordVal=== ""){
        errormag(password,'password cannot be blank')
    }
    else if(passwordVal.length<=5){
        errormag(password,'password minimun 5 char or latter')
    }
    else{
        successmag(password)
    }

    // Cpassword validate
    if(CpasswordVal=== ""){
        errormag(Cpassword,' Confirm password cannot be blank')
    }
    else if(CpasswordVal!==passwordVal){
        errormag(Cpassword,'password is not machining')
    }
    else{
        successmag(Cpassword)
    }
   setSuccessmag(usernameVal);
 


}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
})

function errormag(input,error){

    const formcontrol=input.parentElement;
    const small=formcontrol.querySelector('small');
    formcontrol.className="form-control error";
    small.innerText=error;

}

function successmag(input){
    const formcontrol=input.parentElement;
    formcontrol.className='form-control success'

}




