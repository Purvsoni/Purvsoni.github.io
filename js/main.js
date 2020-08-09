
        function validateform()
        {
            var name=document.form.username.value;
            var email=document.form.email.value;
            var pass=document.form.psw.value;
            var confirm=document.form.conpsw.value;
            if(name==null || name=="")
            {
                alert("UserName is Required");
            }
            
            else if(email==null || email=="")
            {
                alert("Email cannot be blank");

            }
            
            else if(pass==null || pass=="")
            {
                alert("password cannot be blank");


            }
         
            else if(confirm==null || confirm=="")
            {
                alert("Confirm Your Password");

            }

            else if(confirm!=pass)
            {
                alert("Password and confirm password donot match");
            }
            else    
            {
                alert("Form has been submitted succesfully")
            }
        }
        var myInput = document.getElementById("psw");
        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var length = document.getElementById("length");
    
        
        myInput.onfocus = function() {
          document.getElementById("message").style.display = "block";
        }
        
   
        myInput.onblur = function() {
          document.getElementById("message").style.display = "none";
        }
        
        
        myInput.onkeyup = function() {
     
          var lowerCaseLetters = /[a-z]/g;
          if(myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
          } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }
        
          var upperCaseLetters = /[A-Z]/g;
          if(myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
          } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
          }
        
          var numbers = /[0-9]/g;
          if(myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
          } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
          }
        
          
          if(myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
          } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
          }
        }
    
function validate()
{
    var name=document.form.username.value;
    var pass=document.form.psw.value;
    if(name=="purv" && pass=="purv")
    {
        alert("Logged in successfully");
    }
    else{
        alert("username or password is incorrect");
    }
}