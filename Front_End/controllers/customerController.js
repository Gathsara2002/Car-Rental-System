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
        success: function (resp) {
            //alert(resp.message);
        },
        error: function (error) {
            // alert(error.message);
        }
    });
});
