const users = JSON.parse(localStorage.getItem('Users')) || [];
var testObject ={
    name: document.getElementById("username2"),
    passCode: document.getElementById("password2")
    }

const objJSON = {
        us1 :"Admin",
        pas1 : "admin123" 
}

function myFunction() {
    
    
    var retrievedObject = JSON.parse(localStorage.getItem('testObject'));

    if (retrievedObject == "" || retrievedObject == null || retrievedObject == 0 || retrievedObject == undefined){
        
        
        }
    else
        window.location.href="LandingPage(user).html";
}
   //Registration form submit
    function store(){
        
        var userData = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            profile: "User"
        }

        users.push(userData);
        localStorage.setItem('Users', JSON.stringify(users));
        alert("User/Admin succesfully added to local storage");
        window.location.href="https://login124.netlify.app/index.html";
    }

    function storeAdmin(){
        
        var userData = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            profile: document.getElementById("profile").value
        }

        users.push(userData);
        localStorage.setItem('Users', JSON.stringify(users));
        alert("User/Admin succesfully added to local storage");
        location.reload();
    }

   //Login Credentials Check
    function fetch(){
        const users = JSON.parse(localStorage.getItem('Users')) || [];
        const User = document.getElementById("username2").value;
        const Pass = document.getElementById("password2").value;
        var u = objJSON.us1;
        var p = objJSON.pas1;
        
        for (var i = 0; i < users.length; i++) {     
            var storedUserName = users[i].username;
            var storedPassWord = users[i].password;
            var storedProfile = users[i].profile;
                //User profile
                if (User == storedUserName && Pass == storedPassWord && storedProfile != "Admin"){
                    alert("User");
                    var testObject ={
                        name: document.getElementById("username2").value,
                        passCode: document.getElementById("password2").value
                    }
                    localStorage.setItem('testObject', JSON.stringify(testObject));  
                    
                    window.location.href="LandingPage(user).html";
                    return;
                    
                }
                //Admin profile
                else if (storedProfile == "Admin" && User == storedPassWord && Pass == storedUserName){
                    alert("Admin");
                    
                    var testObject ={
                        name: document.getElementById("username2").value,
                        passCode: document.getElementById("password2").value
                    }
                    localStorage.setItem('testObject', JSON.stringify(testObject));  
                    window.location.href = "Admin-Page.html"; 
                            return;
                }
                //Super Admin
                else if (User === u && Pass ===p){
                    alert("Super Admin");
                    window.location.href = "SuperAdmin.html";
                    return;
                }
            }
        alert('Invalid Username or Password! Please try again.');
        location.reload();
        }
      
        //onload redirect


    //User Page
    function dispValue() {
        var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
        var u = retrievedObject.name;
        if (u != "" || u != null || u != 0 || u != undefined){
            
            document.getElementById("call1").innerHTML = u;
            
        }
        else{
            window.location.href="index.html";
        }
        
       
    }

    //Admin Page
    function dispadmin(){
        var u = objJSON.us1;
        
        if (u == null || u == ""){
            window.location.href="index.html";
        }
        else{
            document.getElementById("cal1").innerHTML = u;
        }
        
        
    }
    function logOut(){
        localStorage.removeItem("testObject");
       
        alert("You have successfully logged out")
        window.location.href ="index.html";
    }

// Replace credentials on Array   
function editCheck(){
    const users = JSON.parse(localStorage.getItem('Users')) || [];
    const User = document.getElementById("user3").value;
    const Pass = document.getElementById("pass3").value;

    
    for (var i = 0; i < users.length; i++) {     
        var storedUserName = users[i].username;
        var storedPassWord = users[i].password;
        var storedProfile = users[i].profile;
            
            if (User === storedUserName && Pass === storedPassWord){
                users[i].username = document.getElementById("user1").value;
                users[i].password = document.getElementById("pass1").value;
              
                var userData = {
                    username: users[i].username,
                    password: users[i].password,
                    profile: "User"
                }

                
                localStorage.setItem('Users', JSON.stringify(users));
                alert("User/Admin succesfully added to local storage");
                location.reload();
               
}
    }
}


