    var form      = document.getElementById("form");
    var firstName = document.getElementById("fname");
    var lastName  = document.getElementById("lname");
    var email     = document.getElementById("email");
    var phone     = document.getElementById("phone");
    var input     = document.getElementsByTagName("input")


  function validate(){

        if(fname.value.trim()=="" || lname.value.trim()==""){
            alert("Value can't be blank");
            return false;
        }
       
        else{
            alert("SUbmite succsecful");
            true;

        }

        var regx = /^([a-z 0-9\.-])+@([a-z0-9]+).([a-z]{2,8})?$/;
        if(regx.test(email)){
            document.getElementById("email").innerHTML="valid";
        }
        else{
            document.getElementById("email").innerHTML="invalid";
        }

    }
 