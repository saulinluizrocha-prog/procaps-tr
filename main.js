$(document).ready(function () {
    // $(function () {
    //     var t = "countdownResetPoplavok",
    //         e = "countdownTimePoplavok",
    //         o = (new Date).getTime(),
    //         n = localStorage.getItem(t);
    //     if (null == n) localStorage.setItem(t, o);
    //     else if (246e4 < o - n) {
    //         var a = (new Date).getTime() + 24e5;
    //         localStorage.setItem(e, a), localStorage.setItem(t, o)
    //     }
    //     if (localStorage.getItem(e)) a = localStorage.getItem(e);
    //     else a = (new Date).getTime() + 24e5;
    //     $(".countdown").countdown(a, function (t) {
    //         $(this).html(t.strftime('<div class="countdown__item hour">%H</div><div class="countdown__item minute">%M</div><div class="countdown__item second">%S</div>'))
    //     }).on("update.countdown", function (t) {
    //         a = t.finalDate.getTime(), localStorage.setItem(e, a)
    //     }).on("finish.countdown", function (t) {
    //         $(".countdown").countdown("stop")
    //     })
    // }), 
    $(".zak__btn").click(function () {
        var t = $(this).attr("href"),
            e = $(t).offset().top;
        return jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: e
        }, 1e3), !1
    }), $(function () {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            nav: !0,
            margin: 15
        }), $(".owl-prev").empty(), $(".owl-next").empty()
    }), $(function () {
        var t = $("[data-gif]");
        $.each(t, function (t, e) {
            var o = $(e).data("gif");
            $(e).attr("src", o)
        })
    })
});