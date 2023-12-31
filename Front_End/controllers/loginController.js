let userName;
let passWord;
let role;
let user_Id;
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
            window.location.href = '../pages/adminDashboard.html';

        } else if (role === "REGISTERED_USER") {
            window.location.href = '../pages/customerDashboard.html?userId=' + user_Id;

        } else if (role === "DRIVER") {
            window.location.href = '../pages/driverDashboard.html?userId=' + user_Id;
        }

    } else {
        errorAlert("User is not registered");
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
            errorAlert(error.message);
        }
    });

    /*check user*/
    for (let i in user) {
        let u = user[i];
        console.log(u)
        let passWord1 = u.passWord;
        let userName1 = u.userName;
        let role1 = u.role;

        if ((userName === userName1) && (passWord === passWord1) && (role === role1)) {
            user_Id = u.userId;
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

/*function search user*/
function searchUser(id) {
    let userData = null;

    $.ajax({
        url: BaseUrl + "login?uId=" + id,
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp.data);
            userData = resp.data;
            return userData;
        },
        error: function (error) {
            console.log(error.message)
        }
    });
}

/*generate new user id*/
function newUserId() {
    $.ajax({
        url: BaseUrl + "/login/newId",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let newId = resp.data;
            console.log(newId);
            if (newId == null) {
                $("#").val("UOO-001");
                $("#").attr('placeholder', "COO-001");
            } else {
                let tempId = parseInt(newId.split("-")[1]);
                tempId = tempId + 1;
                $("#").val("UOO-00" + tempId);
                $("#").attr('placeholder', "UOO-00" + tempId);
            }
        },
        error: function (error) {
            console.log(error.message);
        }
    });
}
