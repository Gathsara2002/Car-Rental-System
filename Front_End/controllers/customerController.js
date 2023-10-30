getAllCustomers();
bindTrEvents();

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
        contentType: false,
        processData: false,
        async: false,
        success: function (resp) {
            alert(resp.responseJSON.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
});

/*delete customer*/
function deleteCustomer() {
    $.ajax({
        url: BaseUrl + 'customer?cusId=' + cusId,
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

/*updated customer*/
function updatedCustomer() {

    let formData = new FormData($("#customerRegForm")[0]);
    console.log(formData);

    $.ajax({
        url: BaseUrl + "customer",
        method: 'put',
        data: formData,
        contentType: false,
        processData: false,
        async: false,
        success: function (resp) {
            alert(resp.responseJSON.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
}

/*bind event to table*/
function bindTrEvents() {
    $('#tblCustomer>tr').click(function () {
        let id = $(this).children().eq(0).text();
        cusId = id;
    })
}

/*getAllCustomer*/
function getAllCustomers() {

    $("#tblCustomer").empty();

    $.ajax({
        url: BaseUrl + 'customer',
        dataType: "json",
        success: function (response) {
            let customers = response.data;
            for (let i in customers) {
                let cus = customers[i];
                let id = cus.id;
                let name = cus.name;
                let address = cus.address;
                let contact = cus.contact;
                let email = cus.email;
                let nic = cus.nic;
                let license = cus.license;
                let row = `<tr><td>${id}</td><td>${name}</td><td>${address}</td><td>${contact}</td><td>${email}</td>
                            <td>${nic}</td><td>${license}</td></tr>`;
                $("#tblCustomer").append(row);
            }
            bindTrEvents();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}