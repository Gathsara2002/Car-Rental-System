getAllCustomers();
bindTrEvents();
newUserId();
newCustomerId();
loadProfile();

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
            newUserId();
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
            successAlert(resp.message);
            getAllCustomers();
        },
        error: function (error) {
            errorAlert(error.message);
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
        method:"get",
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
            bindTrEvents();
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}

/*generate new user id*/
function newUserId() {
    $.ajax({
        url: BaseUrl + "/login/newId",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let newId = resp.data;
            console.log(newId);
            let tempId = parseInt(newId.split("-")[1]);
            tempId = tempId + 1;
            $("#userId").val("UOO-00" + tempId);
            $("#userId").attr('placeholder', "UOO-00" + tempId);
        },
        error: function (error) {
            console.log(error.message);
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
            } else {
                let tempId = parseInt(newId.split("-")[1]);
                tempId = tempId + 1;
                $("#cusId").val("COO-00" + tempId);
                $("#cusId").attr('placeholder', "COO-00" + tempId);
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
    return id;
}

/*load profile data*/
function loadProfile() {
    let id = getIdFromUrl();
    $.ajax({
        url: BaseUrl + "customer?cusId=" + id,
        method: "get",
        dataType: "json",
        success: function (resp) {
            let customer = resp.data;
            let user = searchUser(customer.loginDTO.userId);

            //set values to profile
            $("#userId").val(user.userId);
            $("#cusId").val(customer.cusId);
            $("#name").val(customer.name);
            $("#contact").val(customer.contact);
            $("#address").val(customer.address);
            $("#email").val(customer.email);
            $("#nic").val(customer.nic);
            $("#license").val(customer.license);
            $("#userName").val(user.userName);
            $("#passWord").val(user.passWord);

        },
        error: function (error) {
            console.log(error.message)
        }
    });
}

$("#btnUpdateCustomer").click(function () {
    updatedCustomer();
});

