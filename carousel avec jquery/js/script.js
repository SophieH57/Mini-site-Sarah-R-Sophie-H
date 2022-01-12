

$(function () {
    setInterval(function () {
        $(".images").animate({ marginLeft: 0 }, 4000, function () {
            $(this).css({ marginLeft: 0 }).find("img:last").after($(this).find("img:first"));
        })

    }, 3000);
});



