getAllCustomers();
bindTrEventsToCustomer();
newCustomerId();
loadAllCars();

/*to store values temporary*/
let cusId;

/*Register Customer*/
$("#btnCusRegister").click(function () {

    let formData = new FormData($("#customerRegForm")[0]);
    console.log(formData);

    $.ajax({
        url: BaseUrl + "customer",
        method: "POST",
        data: formData,
        async: true,
        contentType: false,
        processData: false,
        success: function (resp) {
            successAlert(resp.message);
            newCustomerId();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
});

/*delete customer*/
function deleteCustomer() {
    $.ajax({
        url: BaseUrl + 'customer?cusId=' + cusId,
        method: 'delete',
        success: function (resp) {
            successAlert(resp.message);
            getAllCustomers();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*updated customer*/
function updatedCustomer() {

    let formData = new FormData($("#customerDetailsForm")[0]);
    console.log(formData);

    $.ajax({
        url: BaseUrl + "customer/update",
        method: 'post',
        data: formData,
        contentType: false,
        processData: false,
        async: false,
        success: function (resp) {
            successAlert(resp.message);
            getAllCustomers();
            loadProfile();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*bind event to table*/
function bindTrEventsToCustomer() {
    $('#tblCustomer>tr').click(function () {
        console.log("hi");
        let id = $(this).children().eq(0).text();
        console.log(id);
        cusId = id;
    });
}

/*getAllCustomer*/
function getAllCustomers() {

    $("#tblCustomer").empty();

    $.ajax({
        url: BaseUrl + 'customer',
        dataType: "json",
        method: "get",
        success: function (response) {
            let customers = response.data;
            console.log(customers);
            for (let i in customers) {
                let cus = customers[i];
                console.log(cus);
                let id = cus.cusId;
                let name = cus.name;
                let address = cus.address;
                let contact = cus.contact;
                let email = cus.email;
                let nic = cus.nic;
                let license = cus.license;
                let userName = cus.login.userName;
                let passWord = cus.login.passWord;
                let row = `<tr><td>${id}</td><td>${name}</td><td>${address}</td><td>${contact}</td><td>${email}</td>
                            <td>${nic}</td><td>${license}</td> <td>${userName}</td><td>${passWord}</td></tr>`;
                $("#tblCustomer").append(row);
            }
            bindTrEventsToCustomer();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*generate new customer id*/
function newCustomerId() {
    $.ajax({
        url: BaseUrl + "/customer/newId",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let newId = resp.data;
            console.log(newId);
            if (newId == null) {
                $("#cusId").val("COO-001");
                $("#cusId").attr('placeholder', "COO-001");
                $("#userId").val("COO-001");
                $("#userId").attr('placeholder', "COO-001");
            } else {
                let tempId = parseInt(newId.split("-")[1]);
                tempId = tempId + 1;
                $("#cusId").val("COO-00" + tempId);
                $("#cusId").attr('placeholder', "COO-00" + tempId);
                $("#userId").val("COO-00" + tempId);
                $("#userId").attr('placeholder', "COO-00" + tempId);
            }
        },
        error: function (error) {
            console.log(error.message);
        }
    });
}

$("#btnDeleteCustomer").click(function () {
    deleteCustomer();
});

/*get user id from url*/
function getIdFromUrl() {
    let currentUrl = window.location.href;
    let split = currentUrl.split('=');
    let id = split[1];
    console.log("cus id : " + id);
    return id;
}

/*load profile data*/
function loadProfile() {
    let id = getIdFromUrl();
    console.log(id);
    $.ajax({
        url: BaseUrl + "customer?cusId=" + id,
        method: "get",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let customer = resp.data;
            console.log(customer);

            //set values to profile
            $("#userCusId").val(customer.login.userId);
            $("#customerId").val(customer.cusId);
            $("#name").val(customer.name);
            $("#contact").val(customer.contact);
            $("#address").val(customer.address);
            $("#email").val(customer.email);
            $("#nic").val(customer.nic);
            $("#license").val(customer.license);
            $("#userName").val(customer.login.userName);
            $("#passWord").val(customer.login.passWord);

            //set images

            console.log(customer.nic_Img);
            console.log(customer.license_Img);

            console.log(`url("../${customer.nic_Img}")`);


            $("#photoImg1").css({
                'background': `url("../${customer.nic_Img}")`, 'background-size': "contain",
                ' background-position': "center", 'background-repeat': " no-repeat ", 'border': "1px solid black"
            });

            $("#photoImg2").css({
                'background': `url("../${customer.license_Img}")`, 'background-size': "contain",
                ' background-position': "center", 'background-repeat': " no-repeat ", 'border': "1px solid black"
            });


        },
        error: function (error) {
            console.log(error.message)
        }
    });
}

$("#btnUpdateCustomer").click(function () {
    updatedCustomer();
});

/*set customer id*/
function setCustomerIdVisible() {
    let i = getIdFromUrl();
    $(".admin_name").text(i);
}

/*load cars to customer dashboard*/
function loadAllCars() {

    $.ajax({
        url: BaseUrl + 'car',
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


