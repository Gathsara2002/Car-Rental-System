initUi();
loadDriverIds();
loadAllRents();

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
    loadAllRents();
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
        url: BaseUrl + 'driver/availableDrivers',
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


function loadAllRents() {
    $("#tblRent").empty();
    $.ajax({
        url: BaseUrl + "rent",
        method: "get",
        dataType: "json",
        contentType: "application/json",
        success: function (resp) {
            let reqs = resp.data;
            console.log(reqs);
            let tRow;
            for (let i in reqs) {
                let req = reqs[i];
                let rentID = req.rentID;
                let driverID = $("#driverId").val();
                let cusId = req.customer.cusId;
                let date = req.requestDate;
                let pickUpTime = req.pickUpTime;
                let pickUpDate = req.pickUpDate;
                let returnDate = req.returnDate;
                tRow = `<tr><td>${rentID}</td><td>${cusId}</td><td>${driverID}</td><td>${pickUpDate}</td><td>${pickUpTime}</td>
                            <td>${returnDate}</td><td>${date}</td></tr>`

            }

            $("#tblRent").append(tRow);
        },
        error: function (error) {
            errorAlert(JSON.parse(error.responseText).message);
        }
    });
}

/*load pending rents*/
function loadPendingRents() {
    $.ajax({
        url: BaseUrl + "rent/pending",
        method: "get",
        dataType: "json",
        contentType: "application/json",
        success: function (resp) {
            let reqs = resp.data;
            console.log(reqs);
            for (let i in reqs) {
                let req = reqs[i];
                let rentID = req.rentID;
                let driverID = req.rentDetails.driverID;
                let cusId = req.customer.cusId;
                let status = req.status;



            }
        },
        error: function (error) {
            errorAlert(JSON.parse(error.responseText).message);
        }
    });
}

/*accept request*/
$("#btnAccept").click(function () {

});

/*decline request*/
$("#btnReject").click(function () {
    let val = $("#requestRentId").val();

    $.ajax({
        url: BaseUrl + 'rent?rentId=' + val,
        method: "delete",
        success: function (resp) {
            successAlert(resp.message);
        },
        error: function (error) {
            errorAlert(JSON.parse(error.responseText).message);
        }
    });
});


