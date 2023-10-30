getAllDrivers();
bindTrEvents();

/*save driver*/
function saveDriver() {
    let formData = $("#driverForm").serialize();

    $.ajax({
        url: BaseUrl + "diver",
        method: "post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (resp) {
            alert(resp.responseJSON.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
}

/*getAllDrivers*/
function getAllDrivers() {

    $("#tblDriver").empty();

    $.ajax({
        url: BaseUrl + 'driver',
        dataType: "json",
        success: function (response) {
            let drivers = response.data;
            for (let i in drivers) {
                let dr = drivers[i];
                let id = dr.userId;
                let name = dr.name;
                let address = dr.address;
                let contact = dr.contact;
                let license = dr.license;
                let availability = dr.availability;
                let userName = dr.userName;
                let passWord = dr.passWord;
                let row = `<tr><td>${id}</td><td>${name}</td><td>${contact}</td><td>${address}</td><td>${license}</td>
                            <td>${availability}</td><td>${userName}</td><td>${passWord}</td></tr>`;

                $("#tblDriver").append(row);
            }
            bindTrEvents();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}

/*bind event to table*/
function bindTrEvents() {
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
            alert(resp.message);
            getAllCustomers();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}

/*updated driver*/
function updatedDriver(id) {

    let driver = searchDriver(id);
    driver.name = $("#fullName").val();
    driver.address = $("#address").val();
    driver.contact = $("#contact_No").val();
    driver.licenseNo = $("#license_No").val();
    driver.availability = $("#driverAvailability").val();
    driver.userName = $("#user_Name").val();
    driver.passWord = $("#password").val();

    $.ajax({
        url: BaseUrl + "driver",
        method: 'put',
        contentType: "application/json",
        data: JSON.stringify(driver),
        success: function (resp) {
            alert(resp.responseJSON.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
}

/*search driver*/
function searchDriver(id) {
    $.ajax({
        url: BaseUrl + 'driver?dId' + id,
        dataType: "json",
        async: false,
        success: function (response) {
            let driver = response.data;
            return driver
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
    return null;
}

/*add button event*/
$("#btnAddDriver").click(function () {
    saveDriver();
    clearInputFields();
    getAllDrivers();
});

/*DELETE button event*/
$("#btnDeleteDriver").click(function () {
    let id = $("#user_Id").val();
    deleteDriver(id);
    clearInputFields();
    getAllDrivers();
});

$("#btnUpdateDriver").click(function () {
    let id = $("#user_Id").val();
    updatedDriver(id);
    clearInputFields();
    getAllDrivers();
});

/*clear input fields*/
function clearInputFields() {
    $("#fullName").val("");
    $("#contact_No").val("");
    $("#address").val("");
    $("#license_No").val("");
    $("#driverAvailability").val("");
    $("#user_Name").val("");
    $("#password").val("");
}




