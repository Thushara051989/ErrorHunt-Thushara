var mail=document.getElementById("mail");
var fb=document.getElementById("feedback");

var pw=document.getElementById("pwd");
var fb2=document.getElementById("feedback2");

function validate(){

    var myMail=mail.value;
    var myPwd=pw.value;
    
    var regexMail= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{1,3})([.a-zA-Z]{2,10})$/


    if(regexMail.test(myMail)){
        fb.innerHTML="Valid e-mail id";
        fb.style.color="green";
        fb.style.visibility-"visible";

    
        if(myPwd.trim().length>=8)
        {
            fb2.innerHTML="Valid password";
            fb2.style.color="green";
            fb2.style.visibility-"visible";
            return true;

        }
        else{
            fb2.style.visibility="visible";
            return false;

        }

    }

    else{
        fb.style.visibility="visible";
        return false;
    }




}
