console.log("script js is loaded");
function login(){
    console.log("inside the login function");
    document.getElementById("login").textContent = "Pavan";
    document.getElementById("signup").style.display = "none";
}
(function(){
    console.log("inside the IFI");

});