getAllDrivers();
bindTrEventsToDriver();
newDriverId();

/*save driver*/
function saveDriver() {
    let formData = $("#driverForm").serialize();
    console.log(formData);
    $.ajax({
        url: BaseUrl + "driver",
        method: "post",
        data: formData,
        success: function (resp) {
            successAlert(resp.message);
            getAllDrivers();
            newDriverId();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*getAllDrivers*/
function getAllDrivers() {

    $("#tblDriver").empty();

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
                let id = dr.userId;
                let name = dr.name;
                let address = dr.address;
                let contact = dr.contact;
                let license = dr.licenseNo;
                let availability = dr.availability;
                let userName = dr.loginDTO.userName;
                let passWord = dr.loginDTO.passWord;
                let row = `<tr><td>${id}</td><td>${name}</td><td>${contact}</td><td>${address}</td><td>${license}</td>
                            <td>${availability}</td><td>${userName}</td><td>${passWord}</td></tr>`;

                $("#tblDriver").append(row);
            }
            bindTrEventsToDriver();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*bind event to table*/
function bindTrEventsToDriver() {
    $('#tblDriver>tr').click(function () {
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let contact = $(this).children().eq(2).text();
        let address = $(this).children().eq(3).text();
        let license = $(this).children().eq(4).text();
        let availability = $(this).children().eq(5).text();
        let userName = $(this).children().eq(6).text();
        let password = $(this).children().eq(7).text();

        //set values to text field
        $("#user_Id").val(id);
        $("#fullName").val(name);
        $("#contact_No").val(contact);
        $("#address").val(address);
        $("#license_No").val(license);
        $("#driverAvailability").val(availability);
        $("#user_Name").val(userName);
        $("#password").val(password);
    })
}

/*delete driver*/
function deleteDriver(id) {
    $.ajax({
        url: BaseUrl + 'driver?dId=' + id,
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

/*updated driver*/
function updatedDriver() {
    /*let id = $("#user_Id").val();
    let name = $("#fullName").val();
    let address = $("#address").val();
    let contact = $("#contact_No").val();
    let license = $("#license_No").val();
    let availability = $("#driverAvailability").val();
    let uName = $("#user_Name").val();
    let pass = $("#password").val();
    let role = $("#role_Type").val();

    let driver = {
        userId: id,
        name: name,
        contact: contact,
        address: address,
        licenseNo: license,
        availability: availability,
        loginDT0: {
            userId: "DRI-001",
            userName: uName,
            passWord: pass,
            role: role
        }
    };


    console.log(driver)

    $.ajax({
        url: BaseUrl + "driver",
        method: 'put',
        dataType: "json",
        data: JSON.stringify(driver),
        contentType: "application/json",
        success: function (resp) {
            alert(resp.message);
            getAllDrivers();
        },
        error: function (error) {
            alert(error.message);
        }
    });*/
    let formData = $("#driverForm").serialize();
    console.log(formData);
    $.ajax({
        url: BaseUrl + "driver/update",
        method: "post",
        data: formData,
        success: function (resp) {
            successAlert(resp.message);
            getAllDrivers();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*search driver*/
function searchDriver(id) {
    let driver;

    $.ajax({
        url: BaseUrl + 'driver?dId' + id,
        dataType: "json",
        async: false,
        success: function (response) {
            driver = response.data
        },
        error: function (error) {
            alert(error.message);
        }
    });
    return driver;
}

/*add button event*/
$("#btnAddDriver").click(function () {
    saveDriver();
    clearInputFields();
});

/*delete button event*/
$("#btnDeleteDriver").click(function () {
    let id = $("#user_Id").val();
    deleteDriver(id);
    clearInputFields();
});

//update driver
$("#btnUpdateDriver").click(function () {
    updatedDriver();
    clearInputFields();
});

/*clear input fields*/
function clearInputFields() {
    $("#fullName").val("");
    $("#contact_No").val("");
    $("#address").val("");
    $("#license_No").val("");
    $("#user_Name").val("");
    $("#password").val("");
}

/*generate new driver id*/
function newDriverId() {
    $.ajax({
        url: BaseUrl + "/driver/newId",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let newId = resp.data;
            console.log(newId);
            if (newId == null) {
                $("#user_Id").val("DRI-001");
                $("#user_Id").attr('placeholder', "DRI-001");
            } else {
                let tempId = parseInt(newId.split("-")[1]);
                tempId = tempId + 1;
                $("#user_Id").val("DRI-00" + tempId);
                $("#user_Id").attr('placeholder', "DRI-00" + tempId);
            }
        },
        error: function (error) {
            console.log(error.message);
        }
    });
}

/*get user id from url*/
function getIdFromUrl() {
    let currentUrl = window.location.href;
    let split = currentUrl.split('=');
    let id = split[1];
    return id;
}





