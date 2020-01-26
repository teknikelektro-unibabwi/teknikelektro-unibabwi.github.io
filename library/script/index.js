function customAlert(message) {
    var dialog = bootbox.alert({
        message: message,
        backdrop: true,
        closeButton: false
    });
    setTimeout(function() {
        dialog.modal('hide');
    }, 2500);
}
$('#button-info').click(function() {
	customAlert('&copy;2020 - Teknik Elektro Uniba-BWI')
})