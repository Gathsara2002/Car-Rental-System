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
    $("#manageCustomer").css('display', 'none');
    $("#manageDriver").css('display', 'none');
    $("#manageCars").css('display', 'none');
}

function initUi() {
    clearDashboard();
    $("#dashboard").css('display', 'block');
}