initUi();

let b = true;

/*sidebar operation*/
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

/*startup view*/
function clearDashboard() {
    $("#dashboard").css('display', 'none');
    $("#manageProfile").css('display', 'none');
    $("#rentCar").css('display', 'none');
}

function initUi() {
    clearDashboard();
    $("#dashboard").css('display', 'block');
}

/*change ui when button clicked*/
$("#btn-dashboard").click(function () {
    initUi();
});

$("#btn-customer").click(function () {
    clearDashboard();
    $("#manageProfile").css('display', 'block');
    loadProfile();

    /*execute only once*/
    if (b) {
        setCustomerIdVisible();
        b = false;
    }

});

$("#btn-car").click(function () {
    clearDashboard();
    $("#rentCar").css('display', 'block');
});

$("#btn-logOut").click(function () {
    window.location.href = '../pages/login.html';
});

/*btn rent car action*/
$(".rentButton").click(function () {
    let form = document.getElementsByClassName("rentForm");
    for (let i = 0; i < form.length; i++) {
        form[i].classList.add("open-popup");
        $("#carSection").css('opacity', '30%');
    }
});

$("#btnClose").click(function () {
    let form = document.getElementsByClassName("rentForm");
    for (let i = 0; i < form.length; i++) {
        form[i].classList.remove("open-popup");
        $("#carSection").css('opacity', '100%');
    }
});