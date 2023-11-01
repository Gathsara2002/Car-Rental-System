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
                            <tr><td>${dailyRate}</td><td>${monthlyRate}</td><td>${priceExtraKM}</td><td>${freeMileage}
                            </td><td>${noOfPassengers}</td><td>${registrationNumber}</td><td>${color}</td><td>${vehicleAvailability}</td></tr>`;
                $("#tblCar").append(row);
            }
            bindTrEvents();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}
