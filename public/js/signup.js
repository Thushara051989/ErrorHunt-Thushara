var fName=document.getElementById("fname");
var fnamefb=document.getElementById("fnamefeedback");

var lName=document.getElementById("lname");
var lnamefb=document.getElementById("lnamefeedback");

var mail=document.getElementById("email");
var mailfb=document.getElementById("emailfeedback");

var pw=document.getElementById("pwd");
var pwfb=document.getElementById("pwdfeedback");

function validate(){

    var myFname=fName.value;
    var myLname=lName.value;
    var myMail=mail.value;
    var myPwd=pw.value;

    var regFname=/^[a-zA-Z]+$/;
    var regLname=/^[a-zA-Z]+$/;
    
    var regMail= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{1,3})([.a-zA-Z]{2,10})$/;


// if fname valid
if(regFname.test(myFname)){

    fnamefb.innerHTML="Valid First Name";
    fnamefb.style.color="green";
    fnamefb.style.visibility-"visible";

    // if lname valid
    if(regLname.test(myLname)){

        lnamefb.innerHTML="Valid Last Name";
        lnamefb.style.color="green";
        lnamefb.style.visibility-"visible";

        // if mail valid
        if(regMail.test(myMail)){

            mailfb.innerHTML="Valid E-mail Id.";
            mailfb.style.color="green";
            mailfb.style.visibility-"visible";

            // if pwd valid
            if(myPwd.trim().length>=8){

                pwfb.innerHTML="Valid Password";
                pwfb.style.color="green";
                pwfb.style.visibility-"visible";
                return true;

            }

            // if pwd invalid
            else{
                pwfb.style.visibility="visible";
                return false;

            }

        }

        // if mail invalid
        else{
            mailfb.style.visibility="visible";
            return false;

        }

    }

    // if lname invalid
    else{
        lnamefb.style.visibility="visible";
        return false;

    }

}

// if fname invalid
else{
    fnamefb.style.visibility="visible";
    return false;

}


}