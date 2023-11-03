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

    $("#clock").text(month + "/" + day + "/" + year);
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
                $("#driverID").append(`<option value="${dId}"> ${dId} </option>`);
            }
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*send rent info rent array*/
function pushToRentArray() {

    let customerOb = customerDetail;
    let rentId = $("#rentId").val();
    let carId = carDetail.carID;
    let pickingUpDate = $("#pickUpDate");
    let pickingUpTime = $("#pickUpTime");
    let returningDate = $("#returnUpDate");
    let date = $("#clock").val();
    let driverId = $("#driverID");

    let rentDetailsOb = {
        carID: carId,
        rentID: rentId,
        driverID: driverId
    }

    let rentOb = {
        rentID: rentId,
        pickUpDate: pickingUpDate,
        pickUpTime: pickingUpTime,
        returnDate: returningDate,
        requestDate: date,
        customer: customerOb,
        rentDetails: rentDetailsOb
    }

    console.log(rentOb);
    RentArray.push(rentOb);
}

$("#rentCard1 .rentButton").click(function () {
    let val = $("#rentCard1 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard2 .rentButton").click(function () {
    let val = $("#rentCard2 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard3 .rentButton").click(function () {
    let val = $("#rentCard3 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard4 .rentButton").click(function () {
    let val = $("#rentCard4 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard5 .rentButton").click(function () {
    let val = $("#rentCard5 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard6 .rentButton").click(function () {
    let val = $("#rentCard6 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard7 .rentButton").click(function () {
    let val = $("#rentCard7 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard8 .rentButton").click(function () {
    let val = $("#rentCard8 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard9 .rentButton").click(function () {
    let val = $("#rentCard9 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard10 .rentButton").click(function () {
    let val = $("#rentCard10 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard11 .rentButton").click(function () {
    let val = $("#rentCard11 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#rentCard12 .rentButton").click(function () {
    let val = $("#rentCard12 .carId").text();
    console.log(val);
    $("#carId").val(val);
    getCarDetail(val);
});

$("#btnRentReq").click(function () {
    pushToRentArray();
});