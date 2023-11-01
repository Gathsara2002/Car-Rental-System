initUi();

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
});

$("#btn-car").click(function () {
    clearDashboard();
    $("#rentCar").css('display', 'block');
});

$("#btn-logOut").click(function () {
    window.location.href = '../pages/login.html';
});
