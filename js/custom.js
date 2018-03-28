//$(document).ready(function () {
//    $('.extand').magnificPopup({
//        type: 'image'
//    });
//});

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true,
    });
});
