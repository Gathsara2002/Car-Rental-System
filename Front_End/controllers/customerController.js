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






