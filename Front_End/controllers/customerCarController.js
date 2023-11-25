loadAllCars();

/*load cars to customer dashboard*/
function loadAllCars() {

    $.ajax({
        url: BaseUrl + 'car',
        dataType: "json",
        async: false,
        success: function (response) {

            /*before append remove existing elements*/
            $("#allCars").empty();

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

                /*set car detail*/
                $("#allCars").append(
                    ` <div class="col position-relative mt-5"  style="border: 1px solid black;">
                    <div class="carBrand">${brand}</div>
                    <div class="carImages d-flex mt-3 mb-3 justify-content-between">
                        <div class="img1" style="background-image: url(../${car.frontView})"></div>
                        <div class="img2" style="background-image: url(../${car.backView})"></div>
                        <div class="img3" style="background-image: url(../${car.interior})"></div>
                        <div class="img4" style="background-image: url(../${car.sideView})"></div>

                    </div>
                    <div class="carDetails">
                        <div class="container text-start mt-3 mb-3">
                            <div class="row row-cols-3">
                                <div class="col d-flex  mt-2 mb-2 ">
                                    <div>Car Id :</div>
                                    <div class="carId">${id}</div>
                                </div>
                                <div class="col mt-2 mb-2 ">Color : ${color}</div>
                                <div class="col mt-2 mb-2 ">Type : ${type}</div>
                                <div class="col mt-2 mb-2 ">Fuel Type : ${fuelType}</div>
                                <div class="col mt-2 mb-2 ">Daily Price : ${dailyRate}</div>
                                <div class="col mt-2 mb-2 ">Monthly Price : ${monthlyRate}</div>
                                <div class="col mt-2 mb-2 ">Price per Extra Km : ${priceExtraKM}</div>
                                <div class="col mt-2 mb-2 ">Free Mileage : ${freeMileage}</div>
                                <div class="col mt-2 mb-2 ">Passenger Count : ${noOfPassengers}</div>
                                <div class="col mt-2 mb-2 ">Reg No : ${registrationNumber}</div>
                                <div class="col mt-2 mb-2 ">Transmission Type : ${transmissionType}</div>
                                <div class="col mt-2 mb-2 ">Availability : ${vehicleAvailability}</div>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 25px;">
                        <button class="rentButton" data-carID="${id}"> Rent Car</button>
                    </div>
                </div>`
                );

                /*set car images*/

                $(".img1").css({
                    /*'background': `url("../${car.frontView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img2").css({
                    /*'background': `url("../${car.backView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img3").css({
                    /* 'background': `url("../${car.interior}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img4").css({
                    /*'background': `url("../${car.sideView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                rentFormDisplayAndExit();
                getCarIdFromCustomAttribute();

            }
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });

}

/*search car by transmission type*/
function filterCarsByTransmissionType(transmission) {
    $.ajax({
        url: BaseUrl + 'car/search?transmission=' + transmission,
        dataType: "json",
        success: function (response) {

            /*before append remove existing elements*/
            $("#allCars").empty();

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

                /*set car detail*/
                $("#allCars").append(
                    ` <div class="col position-relative mt-5"  style="border: 1px solid black;">
                    <div class="carBrand">${brand}</div>
                    <div class="carImages d-flex mt-3 mb-3 justify-content-between">
                        <div class="img1" style="background-image: url(../${car.frontView})"></div>
                        <div class="img2" style="background-image: url(../${car.backView})"></div>
                        <div class="img3" style="background-image: url(../${car.interior})"></div>
                        <div class="img4" style="background-image: url(../${car.sideView})"></div>

                    </div>
                    <div class="carDetails">
                        <div class="container text-start mt-3 mb-3">
                            <div class="row row-cols-3">
                                <div class="col d-flex  mt-2 mb-2 ">
                                    <div>Car Id :</div>
                                    <div class="carId">${id}</div>
                                </div>
                                <div class="col mt-2 mb-2 ">Color : ${color}</div>
                                <div class="col mt-2 mb-2 ">Type : ${type}</div>
                                <div class="col mt-2 mb-2 ">Fuel Type : ${fuelType}</div>
                                <div class="col mt-2 mb-2 ">Daily Price : ${dailyRate}</div>
                                <div class="col mt-2 mb-2 ">Monthly Price : ${monthlyRate}</div>
                                <div class="col mt-2 mb-2 ">Price per Extra Km : ${priceExtraKM}</div>
                                <div class="col mt-2 mb-2 ">Free Mileage : ${freeMileage}</div>
                                <div class="col mt-2 mb-2 ">Passenger Count : ${noOfPassengers}</div>
                                <div class="col mt-2 mb-2 ">Reg No : ${registrationNumber}</div>
                                <div class="col mt-2 mb-2 ">Transmission Type : ${transmissionType}</div>
                                <div class="col mt-2 mb-2 ">Availability : ${vehicleAvailability}</div>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 25px;">
                        <button class="rentButton" data-carID="${id}"> Rent Car</button>
                    </div>
                </div>`
                );

                /*set car images*/

                $(".img1").css({
                    /*'background': `url("../${car.frontView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img2").css({
                    /*'background': `url("../${car.backView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img3").css({
                    /* 'background': `url("../${car.interior}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img4").css({
                    /*'background': `url("../${car.sideView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                rentFormDisplayAndExit();
                getCarIdFromCustomAttribute();

            }
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*search car by vehicle type*/
function filterCarsByVehicleType(type) {
    $.ajax({
        url: BaseUrl + 'car/search/type?type=' + type,
        dataType: "json",
        success: function (response) {

            /*before append remove existing elements*/
            $("#allCars").empty();

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

                /*set car detail*/
                $("#allCars").append(
                    ` <div class="col position-relative mt-5"  style="border: 1px solid black;">
                    <div class="carBrand">${brand}</div>
                    <div class="carImages d-flex mt-3 mb-3 justify-content-between">
                        <div class="img1" style="background-image: url(../${car.frontView})"></div>
                        <div class="img2" style="background-image: url(../${car.backView})"></div>
                        <div class="img3" style="background-image: url(../${car.interior})"></div>
                        <div class="img4" style="background-image: url(../${car.sideView})"></div>

                    </div>
                    <div class="carDetails">
                        <div class="container text-start mt-3 mb-3">
                            <div class="row row-cols-3">
                                <div class="col d-flex  mt-2 mb-2 ">
                                    <div>Car Id :</div>
                                    <div class="carId">${id}</div>
                                </div>
                                <div class="col mt-2 mb-2 ">Color : ${color}</div>
                                <div class="col mt-2 mb-2 ">Type : ${type}</div>
                                <div class="col mt-2 mb-2 ">Fuel Type : ${fuelType}</div>
                                <div class="col mt-2 mb-2 ">Daily Price : ${dailyRate}</div>
                                <div class="col mt-2 mb-2 ">Monthly Price : ${monthlyRate}</div>
                                <div class="col mt-2 mb-2 ">Price per Extra Km : ${priceExtraKM}</div>
                                <div class="col mt-2 mb-2 ">Free Mileage : ${freeMileage}</div>
                                <div class="col mt-2 mb-2 ">Passenger Count : ${noOfPassengers}</div>
                                <div class="col mt-2 mb-2 ">Reg No : ${registrationNumber}</div>
                                <div class="col mt-2 mb-2 ">Transmission Type : ${transmissionType}</div>
                                <div class="col mt-2 mb-2 ">Availability : ${vehicleAvailability}</div>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 25px;">
                        <button class="rentButton"> Rent Car</button>
                    </div>
                </div>`
                );

                /*set car images*/

                $(".img1").css({
                    /*'background': `url("../${car.frontView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img2").css({
                    /*'background': `url("../${car.backView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img3").css({
                    /* 'background': `url("../${car.interior}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img4").css({
                    /*'background': `url("../${car.sideView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                rentFormDisplayAndExit();
                getCarIdFromCustomAttribute();
            }
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*search car by vehicle type*/
function filterCarsByFuelType(fuel) {
    $.ajax({
        url: BaseUrl + 'car/search/fuel?fuelType=' + fuel,
        dataType: "json",
        success: function (response) {

            /*before append remove existing elements*/
            $("#allCars").empty();

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

                /*set car detail*/
                $("#allCars").append(
                    ` <div class="col position-relative mt-5"  style="border: 1px solid black;">
                    <div class="carBrand">${brand}</div>
                    <div class="carImages d-flex mt-3 mb-3 justify-content-between">
                        <div class="img1" style="background-image: url(../${car.frontView})"></div>
                        <div class="img2" style="background-image: url(../${car.backView})"></div>
                        <div class="img3" style="background-image: url(../${car.interior})"></div>
                        <div class="img4" style="background-image: url(../${car.sideView})"></div>

                    </div>
                    <div class="carDetails">
                        <div class="container text-start mt-3 mb-3">
                            <div class="row row-cols-3">
                                <div class="col d-flex  mt-2 mb-2 ">
                                    <div>Car Id :</div>
                                    <div class="carId">${id}</div>
                                </div>
                                <div class="col mt-2 mb-2 ">Color : ${color}</div>
                                <div class="col mt-2 mb-2 ">Type : ${type}</div>
                                <div class="col mt-2 mb-2 ">Fuel Type : ${fuelType}</div>
                                <div class="col mt-2 mb-2 ">Daily Price : ${dailyRate}</div>
                                <div class="col mt-2 mb-2 ">Monthly Price : ${monthlyRate}</div>
                                <div class="col mt-2 mb-2 ">Price per Extra Km : ${priceExtraKM}</div>
                                <div class="col mt-2 mb-2 ">Free Mileage : ${freeMileage}</div>
                                <div class="col mt-2 mb-2 ">Passenger Count : ${noOfPassengers}</div>
                                <div class="col mt-2 mb-2 ">Reg No : ${registrationNumber}</div>
                                <div class="col mt-2 mb-2 ">Transmission Type : ${transmissionType}</div>
                                <div class="col mt-2 mb-2 ">Availability : ${vehicleAvailability}</div>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 25px;">
                        <button class="rentButton"> Rent Car</button>
                    </div>
                </div>`
                );

                /*set car images*/

                $(".img1").css({
                    /*'background': `url("../${car.frontView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img2").css({
                    /*'background': `url("../${car.backView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img3").css({
                    /* 'background': `url("../${car.interior}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img4").css({
                    /*'background': `url("../${car.sideView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                rentFormDisplayAndExit();
                getCarIdFromCustomAttribute();

            }
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*search car by vehicle brand*/
function filterCarsByBrand(brand) {
    $.ajax({
        url: BaseUrl + 'car/search/brand?brand=' + brand,
        dataType: "json",
        success: function (response) {

            /*before append remove existing elements*/
            $("#allCars").empty();

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

                /*set car detail*/
                $("#allCars").append(
                    ` <div class="col position-relative mt-5"  style="border: 1px solid black;">
                    <div class="carBrand">${brand}</div>
                    <div class="carImages d-flex mt-3 mb-3 justify-content-between">
                        <div class="img1" style="background-image: url(../${car.frontView})"></div>
                        <div class="img2" style="background-image: url(../${car.backView})"></div>
                        <div class="img3" style="background-image: url(../${car.interior})"></div>
                        <div class="img4" style="background-image: url(../${car.sideView})"></div>

                    </div>
                    <div class="carDetails">
                        <div class="container text-start mt-3 mb-3">
                            <div class="row row-cols-3">
                                <div class="col d-flex  mt-2 mb-2 ">
                                    <div>Car Id :</div>
                                    <div class="carId">${id}</div>
                                </div>
                                <div class="col mt-2 mb-2 ">Color : ${color}</div>
                                <div class="col mt-2 mb-2 ">Type : ${type}</div>
                                <div class="col mt-2 mb-2 ">Fuel Type : ${fuelType}</div>
                                <div class="col mt-2 mb-2 ">Daily Price : ${dailyRate}</div>
                                <div class="col mt-2 mb-2 ">Monthly Price : ${monthlyRate}</div>
                                <div class="col mt-2 mb-2 ">Price per Extra Km : ${priceExtraKM}</div>
                                <div class="col mt-2 mb-2 ">Free Mileage : ${freeMileage}</div>
                                <div class="col mt-2 mb-2 ">Passenger Count : ${noOfPassengers}</div>
                                <div class="col mt-2 mb-2 ">Reg No : ${registrationNumber}</div>
                                <div class="col mt-2 mb-2 ">Transmission Type : ${transmissionType}</div>
                                <div class="col mt-2 mb-2 ">Availability : ${vehicleAvailability}</div>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 25px;">
                        <button class="rentButton"> Rent Car</button>
                    </div>
                </div>`
                );

                /*set car images*/

                $(".img1").css({
                    /*'background': `url("../${car.frontView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img2").css({
                    /*'background': `url("../${car.backView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img3").css({
                    /* 'background': `url("../${car.interior}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                $(".img4").css({
                    /*'background': `url("../${car.sideView}")`,*/
                    'background-size': "contain",
                    ' background-position': "center",
                    'background-repeat': " no-repeat "
                });

                rentFormDisplayAndExit();
                getCarIdFromCustomAttribute();

            }
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}


/*cars search events*/
/*all cars*/
$("#btnCar1").click(function () {
    loadAllCars();
});

/*filter by transmission*/
$("#btnCar2").click(function () {
    let transmission = "MANUAL";
    filterCarsByTransmissionType(transmission);
});

$("#btnCar3").click(function () {
    let transmission = "AUTO";
    filterCarsByTransmissionType(transmission);
});

/*filter by vehicle type*/
$("#btnCar4").click(function () {
    let type = "GENERAL";
    filterCarsByVehicleType(type);
});

$("#btnCar5").click(function () {
    let type = "LUXURY";
    filterCarsByVehicleType(type);
});

$("#btnCar6").click(function () {
    let type = "PREMIUM";
    filterCarsByVehicleType(type);
});

/*filter by fuel type*/
$("#btnCar7").click(function () {
    let fuel = "PETROL";
    filterCarsByFuelType(fuel);
});

$("#btnCar8").click(function () {
    let fuel = "DIESEL";
    filterCarsByFuelType(fuel);
});

/*search by brand*/
$("#btnSearchCars").click(function () {
    let brand = $("#txtCarBrand").val();
    filterCarsByBrand(brand);
});

/*btn rent car action*/
function rentFormDisplayAndExit() {
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
}

function getCarIdFromCustomAttribute() {
    $('.rentButton').click((event) => {
        let id = $(event.target).attr('data-carID');
        console.log(id);
        $("#carId").val(id);
    });
}

