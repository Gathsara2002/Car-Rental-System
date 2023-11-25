setDate();
generateRentId();
loadDriverIds();

/*store  detail*/
let customerDetail;
let carDetail;

/*set date */
function setDate() {
    let currentDateTime = new Date();
    let year = currentDateTime.getFullYear();
    let month = currentDateTime.getMonth() + 1; // Months are 0-based (0 = January)
    let day = currentDateTime.getDate();

    $("#clock").text(year + "-" + month + "-" + day);
}

/*set rent id*/
function generateRentId() {
    $.ajax({
        url: BaseUrl + "/rent/newId",
        method: "get",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let newId = resp.data;
            console.log(newId);
            if (newId == null) {
                $("#rentId").val("RNT-001");
            } else {
                let tempId = parseInt(newId.split("-")[1]);
                tempId = tempId + 1;
                $("#rentId").val("RNT-00" + tempId);
            }
        },
        error: function (error) {
            console.log(error.message);
        }
    });
}

/*set customer id*/
function getCustomerDetail() {
    let id = $(".admin_name").text();
    $.ajax({
        url: BaseUrl + "customer?cusId=" + id,
        method: "get",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            customerDetail = resp.data;
            console.log(customerDetail);
        },
        error: function (error) {
            console.log(error.message)
        }
    });
}

/*get car detail*/
function getCarDetail(id) {
    $.ajax({
        url: BaseUrl + "car?carId=" + id,
        method: "get",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            carDetail = resp.data;
            console.log(carDetail);
        },
        error: function (error) {
            console.log(error.message)
        }
    });
}

/*load all drivers ids*/
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
                $("#driverID").append(`<option value="${dId}"> ${dId} </option>`);
            }
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*send rent */
$("#btnRentReq").click(function () {

    let rentDetailsArr = [];

    let customerOb = customerDetail;
    let cusId = customerDetail.cusId;
    let rentId = $("#rentId").val();
    let carId = $("#carId").val();
    let pickingUpDate = $("#pickUpDate").val();
    let pickingUpTime = $("#pickUpTime").val();
    let returningDate = $("#returnUpDate").val();
    let date = $("#clock").text();
    let driverId = $("#driverID").val();
    let status = "Pending";

    let rentDetailsOb = {
        carID: carId,
        rentID: rentId,
        driverID: driverId
    }

    rentDetailsArr.push(rentDetailsOb);

    let rentOb = {
        rentID: rentId,
        pickUpDate: pickingUpDate,
        pickUpTime: pickingUpTime,
        returnDate: returningDate,
        requestDate: date,
        status: status,
        customer: {cusId: cusId},
        rentDetails: rentDetailsArr
    }
    console.log(rentOb);

    $.ajax({
        url: BaseUrl + "rent",
        method: "post",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(rentOb),
        success: function (resp) {
            successAlert(resp.message);
            generateRentId();
            closeRentForm();
        },
        error: function (error) {
            errorAlert(JSON.parse(error.responseText).message);
        }
    });
});

function closeRentForm() {
    let form = document.getElementsByClassName("rentForm");
    for (let i = 0; i < form.length; i++) {
        form[i].classList.remove("open-popup");
        $("#carSection").css('opacity', '100%');
    }
}



