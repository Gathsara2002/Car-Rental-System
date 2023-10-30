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
function deleteCustomer(id) {
    $.ajax({
        url: BaseUrl + 'customer?cusId=' + id,
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