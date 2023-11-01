getAllCars();
bindTrEvents();

/*save car*/
function saveCar() {
    let formData = new FormData($("#carForm")[0]);
    console.log(formData);

    $.ajax({
        url: BaseUrl + "car",
        method: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (resp) {
            successAlert(resp.message);
            getAllCars();
            bindTrEvents();
        },
        error: function (error) {
            errorAlert(error.message);
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
            bindTrEvents();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*updated car*/
function updatedCar() {

    let formData = new FormData($("#customerRegForm")[0]);
    console.log(formData);

    $.ajax({
        url: BaseUrl + "car/update",
        method: 'put',
        data: formData,
        contentType: false,
        processData: false,
        async: false,
        success: function (resp) {
            successAlert(resp.message);
            getAllCars();
            bindTrEvents();
        },
        error: function (error) {
            errorAlert(error.message);
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
                let id = car.car_Id;
                let brand = car.name;
                let type = car.type;
                let transmissionType = car.transmission_Type;
                let noOfPassengers = car.number_Of_Passengers;
                let fuelType = car.fuel_Type;
                let dailyRate = car.daily_Rate;
                let monthlyRate = car.monthly_Rate;
                let priceExtraKM = car.price_Extra_KM;
                let freeMileage = car.free_Mileage;
                let registrationNumber = car.registration_Number;
                let color = car.color;
                let vehicleAvailability = car.vehicleAvailability;
                let row = `<tr><td>${id}</td><td>${brand}</td><td>${type}</td><td>${transmissionType}</td><td>${noOfPassengers}</td>
                            <td>${fuelType}</td><td>${dailyRate}</td><td>${monthlyRate}</td><td>${priceExtraKM}</td><td>${freeMileage}</td>
                            <td>${registrationNumber}</td><td>${color}</td><td>${vehicleAvailability}</td></tr>`;
                $("#tblCar").append(row);
            }
            bindTrEvents();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*bind event to table*/
function bindTrEvents() {
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
    })
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
                $("#cusId").val("CAR-001");
                $("#cusId").attr('placeholder', "CAR-001");
            } else {
                let tempId = parseInt(newId.split("-")[1]);
                tempId = tempId + 1;
                $("#cusId").val("CAR-00" + tempId);
                $("#cusId").attr('placeholder', "CAR-00" + tempId);
            }
        },
        error: function (error) {
            console.log(error.message);
        }
    });
}

