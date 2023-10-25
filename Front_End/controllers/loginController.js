let userName;
let passWord;
let role;

$("#btnLogin").click(function () {

    userName = $("#username").val();
    passWord = $("#password").val();
    role = $("#role_Type").val();
    checkUser();
    clearAll();

});


function checkUser() {

    /*get all users*/

    /*check user*/
}

function clearAll() {
    $("#username").val("");
    $("#password").val("");
    $("#role_Type").val("");
}