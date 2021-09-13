function validate() {
    var name= document.getElementById("name").value;
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    var email= document.getElementById("email").value;
    var phone= document.getElementById("message").value;
    var university= document.getElementById("university").value;
    var city= document.getElementById("city").value;

    error_message.style.padding = "10px";

    var text;

   if(name.length < 5){
        text="Please Enter valid Name";
        error_message.innerHTML=text;
        return false;
    } 

    if(username.length<6){
        text="Username must be greater than 5 characters";
        error_message.innerHTML=text;
        return false;
    }

    if(password.length < 8 ){
        text="Password should be atleast 8 characters";
        error_message.innerHTML=text;
        return false;
    } 
    if(password != retype){
        text="Your password didn't match";
        error_message.innerHTML=text;
        return false;
    } 

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    } 

    if(phone.length < 10){
        text = "Please Enter a valid number";
        error_message.innerHTML = text;
        return false;
    }

      alert("Form Submitted Successfully!");
      return true; 
}