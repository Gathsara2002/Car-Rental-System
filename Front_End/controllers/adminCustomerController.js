getAllCustomers();
bindTrEventsToCustomer();

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

/*bind event to table*/
function bindTrEventsToCustomer() {
    $('#tblCustomer>tr').click(function () {
        console.log("hi");
        let id = $(this).children().eq(0).text();
        console.log(id);
        cusId = id;
    });
}

$("#btnDeleteCustomer").click(function () {
    deleteCustomer();
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