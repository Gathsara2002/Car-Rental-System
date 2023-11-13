getAllCars();
bindTrEventsToCars();
newCarId();

/*save car*/
function saveCar() {
    let formData = new FormData($("#carForm")[0]);
    console.log(formData);

    $.ajax({
        url: BaseUrl + "car",
        method: "post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (resp) {
            successAlert(resp.message);
            getAllCars();
            bindTrEventsToCars();
            clearInputFields();
            newCarId();
            loadAllCars();
        },
        error: function (error) {
            errorAlert(JSON.parse(error.responseText).message);
            clearInputFields();
            newCarId();
        }
    });
}

/*delete car*/
function deleteCar(carId) {
    $.ajax({
        url: BaseUrl + 'car?carId=' + carId,
        method: 'delete',
        success: function (resp) {
            successAlert(resp.message);
            getAllCars();
            bindTrEventsToCars();
            clearInputFields();
            newCarId();
            loadAllCars();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*updated car*/
function updatedCar() {

    let formData = new FormData($("#carForm")[0]);
    console.log(formData);

    $.ajax({
        url: BaseUrl + "car/update",
        method: "post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (resp) {
            successAlert(resp.message);
            getAllCars();
            clearInputFields();
            newCarId();
            loadAllCars();
        },
        error: function (error) {
            errorAlert(error.message);
            clearInputFields();
            newCarId();
        }
    });
}

/*get all cars*/
function getAllCars() {

    $("#tblCar").empty();

    $.ajax({
        url: BaseUrl + 'car',
        dataType: "json",
        success: function (response) {
            let cars = response.data;
            for (let i in cars) {
                let car = cars[i];
                let id = car.carId;
                let brand = car.brand;
                let type = car.type;
                let transmissionType = car.transmissionType;
                let noOfPassengers = car.noOfPassengers;
                let fuelType = car.fuelType;
                let dailyRate = car.dailyRate;
                let monthlyRate = car.monthlyRate;
                let priceExtraKM = car.extraKmPrice;
                let freeMileage = car.freeMileage;
                let registrationNumber = car.regNo;
                let color = car.color;
                let vehicleAvailability = car.availability;
                let row = `<tr><td>${id}</td><td>${brand}</td><td>${type}</td><td>${transmissionType}</td><td>${noOfPassengers}</td>
                            <td>${fuelType}</td><td>${dailyRate}</td><td>${monthlyRate}</td><td>${priceExtraKM}</td><td>${freeMileage}</td>
                            <td>${registrationNumber}</td><td>${color}</td><td>${vehicleAvailability}</td></tr>`;
                $("#tblCar").append(row);
            }
            bindTrEventsToCars();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*bind event to table*/
function bindTrEventsToCars() {
    $('#tblCar>tr').click(function () {
        let id = $(this).children().eq(0).text();
        let brand = $(this).children().eq(1).text();
        let type = $(this).children().eq(2).text();
        let transmission = $(this).children().eq(3).text();
        let passenger = $(this).children().eq(4).text();
        let fuel = $(this).children().eq(5).text();
        let dailyRate = $(this).children().eq(6).text();
        let monthlyRate = $(this).children().eq(7).text();
        let priceExtra = $(this).children().eq(8).text();
        let freeMileage = $(this).children().eq(9).text();
        let regNo = $(this).children().eq(10).text();
        let color = $(this).children().eq(11).text();
        let avb = $(this).children().eq(12).text();

        //set values
        $("#car_Id").val(id);
        $("#name").val(brand);
        $("#type").val(type);
        $("#transmission_Type").val(transmission);
        $("#number_Of_Passengers").val(passenger);
        $("#fuel_Type").val(fuel);
        $("#daily_Rate").val(dailyRate);
        $("#monthly_Rate").val(monthlyRate);
        $("#price_Extra_KM").val(priceExtra);
        $("#registration_Number").val(freeMileage);
        $("#free_Mileage").val(regNo);
        $("#color").val(color);
        $("#vehicleAvailability").val(avb);

    });
}

/*generate new car id*/
function newCarId() {
    $.ajax({
        url: BaseUrl + "/car/newId",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let newId = resp.data;
            console.log(newId);
            if (newId == null) {
                $("#car_Id").val("CAR-001");
                $("#car_Id").attr('placeholder', "CAR-001");
            } else {
                let tempId = parseInt(newId.split("-")[1]);
                tempId = tempId + 1;
                $("#car_Id").val("CAR-00" + tempId);
                $("#car_Id").attr('placeholder', "CAR-00" + tempId);
            }
        },
        error: function (error) {
            console.log(error.message);
        }
    });
}

/*button events*/
$("#btn-addCar").click(function () {
    saveCar();
});

$("#btn-deleteCar").click(function () {
    let carId = $("#car_Id").val();
    deleteCar(carId);
});

$("#btn-updateCar").click(function () {
    updatedCar();
});

/*clear input fields*/
function clearInputFields() {
    $("#car_Id").val("");
    $("#name").val("");
    $("#type").val("");
    $("#transmission_Type").val("");
    $("#number_Of_Passengers").val("");
    $("#fuel_Type").val("");
    $("#daily_Rate").val("");
    $("#monthly_Rate").val("");
    $("#price_Extra_KM").val("");
    $("#registration_Number").val("");
    $("#free_Mileage").val("");
    $("#color").val("");
    $("#vehicleAvailability").val("");
}




