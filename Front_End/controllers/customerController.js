getAllCustomers();
bindTrEventsToCustomer();
newCustomerId();

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
        url: BaseUrl + "customer?cusId" + id,
        method: "get",
        dataType: "json",
        success: function (resp) {
            let customer = resp.data;
            console.log(customer);

            //set values to profile
            $("#userCusId").val(customer[0].login.userId);
            $("#customerId").val(customer[0].cusId);
            $("#name").val(customer[0].name);
            $("#contact").val(customer[0].contact);
            $("#address").val(customer[0].address);
            $("#email").val(customer[0].email);
            $("#nic").val(customer[0].nic);
            $("#license").val(customer[0].license);
            $("#userName").val(customer[0].login.userName);
            $("#passWord").val(customer[0].login.passWord);

            //set images
            let nicImg = customer[0].nic_Img;
            let licenseImg = customer[0].license_Img;

            $("#photoImg1").css({
                "background": `url(${BaseUrl + nicImg})`,
            });

            $("#photoImg2").css({
                "background": `url(${BaseUrl + licenseImg})`,
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

