let userName;
let passWord;
let role;
let user;

$("#btnLogin").click(function () {

    userName = $("#username").val();
    passWord = $("#password").val();
    role = $("#role_Type").val();

    let isUserChecked = checkUser();
    if (isUserChecked) {
        console.log("user is reg");

        /*navigate to dashboard*/
        if (role === "ADMIN") {
            window.location.href='../pages/adminDashboard.html';

        } else if (role === "REGISTERED_USER") {

        } else if (role === "DRIVER") {

        }

    } else {
        console.log("user is not reg");
    }

    clearAll();
});


function checkUser() {

    /*get all users*/
    $.ajax({
        url: BaseUrl + "login",
        dataType: "json",
        async: false,
        success: function (resp) {
            user = resp.data;
        },
        error: function (error) {
            alert(error.responseJSON.message)
        }
    });

    /*check user*/
    for (let i in user) {
        let u = user[i];
        console.log(u)
        let passWord1 = u.passWord;
        let userName1 = u.userName;
        let role1 = u.role;

        if (userName === userName1 && passWord === passWord1 && role === role1) {
            return true;
        }
    }
    return false;
}

function clearAll() {
    $("#username").val("");
    $("#password").val("");
    $("#role_Type").val("Choose Role");
}