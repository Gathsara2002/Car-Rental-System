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