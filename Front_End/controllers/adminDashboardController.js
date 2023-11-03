initUi();
loadDriverIds();

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
    $("#manageRent").css('display', 'none');
    $("#managePayment").css('display', 'none');
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
    $("#manageCustomer").css('display', 'block');
});

$("#btn-car").click(function () {
    clearDashboard();
    $("#manageCars").css('display', 'block');
});

$("#btn-driver").click(function () {
    clearDashboard();
    $("#manageDriver").css('display', 'block');
});

$("#btn-request").click(function () {
    clearDashboard();
    $("#manageRent").css('display', 'block');
    //displayRentRequest();
});

$("#btn-payment").click(function () {
    clearDashboard();
    $("#managePayment").css('display', 'block');
});

$("#btn-logOut").click(function () {
    window.location.href = '../pages/login.html';
});

function loadDriverIds() {
    $.ajax({
        url: BaseUrl + 'driver',
        dataType: "json",
        method: "get",
        success: function (response) {
            console.log(response);
            let drivers = response.data;
            console.log(drivers);
            for (let i in drivers) {
                let dr = drivers[i];
                let dId = dr.userId;
                $("#driverId").append(`<option value="${dId}"> ${dId} </option>`);
            }
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*set rent request to admin*/
function displayRentRequest() {
    let element = RentArray[0];
    $("#requestRentId").val(element.rentID);
    $("#driverId").val(element.rentDetails.driverID);
    $("#cusID").val(element.customer.cusId);
    $("#date").val(element.requestDate);
}
