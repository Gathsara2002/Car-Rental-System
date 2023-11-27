loadDriverIds();
loadAllRents();
loadPendingRents();

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
                $("#driverId").append(`<option value="${dId}"> ${dId} </option>`);
            }
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*load all rent requests to tables*/
function loadAllRents() {
    $("#tblRent").empty();
    $.ajax({
        url: BaseUrl + "rent",
        method: "get",
        dataType: "json",
        contentType: "application/json",
        success: function (resp) {
            let reqs = resp.data;
            console.log(reqs);
            let tRow;
            for (let i in reqs) {
                let req = reqs[i];
                let rentID = req.rentID;
                let driverID = req.rentDetails[0].driverID;
                let cusId = req.customer.cusId;
                let date = req.requestDate;
                let pickUpTime = req.pickUpTime;
                let pickUpDate = req.pickUpDate;
                let returnDate = req.returnDate;
                let status = req.status;
                tRow = `<tr><td>${rentID}</td><td>${cusId}</td><td>${driverID}</td><td>${pickUpDate}</td><td>${pickUpTime}</td>
                            <td>${returnDate}</td><td>${date}</td><td>${status}</td></tr>`

            }

            $("#tblRent").append(tRow);
        },
        error: function (error) {
            errorAlert(JSON.parse(error.responseText).message);
        }
    });
}

/*load pending rents*/
function loadPendingRents() {
    $.ajax({
        url: BaseUrl + "rent/request/pending",
        method: "get",
        dataType: "json",
        contentType: "application/json",
        success: function (resp) {
            let reqs = resp.data;
            console.log(reqs);
            for (let i in reqs) {
                let req = reqs[i];
                let rentID = req.rentID;
                let driverID = req.rentDetails[0].driverID;
                let cusId = req.customer.cusId;
                let status = req.status;

                $("#requestRentId").val(rentID);
                $("#cusID").val(cusId);
                $("#status").val(status);
                $("#driverId").append()

            }
        },
        error: function (error) {
            errorAlert(JSON.parse(error.responseText).message);
        }
    });
}

/*accept request*/
$("#btnAccept").click(function () {

});

/*decline request*/
$("#btnReject").click(function () {
    let val = $("#requestRentId").val();

    $.ajax({
        url: BaseUrl + 'rent?rentId=' + val,
        method: "delete",
        success: function (resp) {
            successAlert(resp.message);
            loadAllRents();
            loadPendingRents();
        },
        error: function (error) {
            errorAlert(JSON.parse(error.responseText).message);
        }
    });
});