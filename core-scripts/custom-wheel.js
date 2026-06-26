$(function () {
    var resultWrapper = document.querySelector(".spin-result-wrapper");
    var wheel = document.querySelector(".wheel-img");

    var currentQuantity = 19;
    var syncNameAndQuantityTimerId = false

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function preparePushNote() {
        let lastNames = ['A*****', 'B****', 'C***', 'E****', 'N***', 'M****', 'H****', 'P****']
        let namesBA = [['Amela', 'Nihada', 'Zerina', 'Alma', 'Sanela', 'Emina', 'Zuhra', 'Berina', 'Melisa', 'Meliha', 'Nerina', 'Lejla', 'Iman', 'Almasa'], ['Benjamin', 'Nihad', 'Emin', 'Bilal', 'Nermin', 'Midhat', 'Fahrudin', 'Mehmed', 'Husejn']]
        let namesHR = [['Anita', 'Suzana', 'Valentina', 'SlaÄ‘ana', 'Antea', 'Milena', 'Karolina', 'Mandica', 'Dorotea', 'Martina', 'Karla'], ['Boro', 'Ivan', 'Rade', 'Petar', 'Miroslav', 'Danko', 'Alojz', 'Mate', 'SreÄ‡ko', 'Jadran', 'Mladen']]
        let namesRS = [['BoĹľena', 'Svjetlana', 'Vesna', 'Tanja', 'Vedrana', 'Danka', 'Milena', 'Davorka', 'Biserka', 'AnÄ‘a', 'Vanja'], ['Nikola', 'Damjan', 'Ivica', 'Dragomir', 'Marica', 'MiĹˇa', 'Ratko', 'Dobrilo', 'Borivoje', 'Antonije']]
        let sexIndex = randomIntFromInterval(0, 1)

        let result = ''

        switch (defaultCountry) {
            case 'BA': {
                result = namesBA[sexIndex][randomIntFromInterval(0, namesBA.length - 1)] + ' ' + lastNames[randomIntFromInterval(0, lastNames.length - 1)] + ' '
                result += sexIndex === 1 ? 'je upravo kupio ' : 'je upravo kupila '
                result += pageSettings.product + '!'
            }; break
            case 'HR': {
                result = namesHR[sexIndex][randomIntFromInterval(0, namesHR.length - 1)] + ' ' + lastNames[randomIntFromInterval(0, lastNames.length - 1)] + ' '
                result += sexIndex === 1 ? 'je upravo kupio ' : 'je upravo kupila '
                result += pageSettings.product + '!'
            }; break
            case 'RS': {
                result = namesRS[sexIndex][randomIntFromInterval(0, namesRS.length - 1)] + ' ' + lastNames[randomIntFromInterval(0, lastNames.length - 1)] + ' '
                result += sexIndex === 1 ? 'je upravo kupio ' : 'je upravo kupila '
                result += pageSettings.product + '!'
            }; break
            default: {
                result = null
            }
        }

        return result
    }

    function activatePushNoteSolo() {
        
        let pushNote = preparePushNote()
        if (pushNote) {
            $('.custom-push-note').html(pushNote)
            $('.custom-push-note').addClass('custom-push-note-active')
            setTimeout(function () { $('.custom-push-note').removeClass('custom-push-note-active') }, 3000)
        }

        syncNameAndQuantityTimerId = setTimeout(activatePushNoteSolo, randomIntFromInterval(5, 30) * 1000);
    }

    function activatePushNote() {
        
        let pushNote = preparePushNote()
        if (pushNote) {
            $('.custom-push-note').html(pushNote)
            $('.custom-push-note').addClass('custom-push-note-active')
            setTimeout(function () { $('.custom-push-note').removeClass('custom-push-note-active') }, 3000)
        }
    }

    $('.order_block__quantity-left').html(currentQuantity)
    function decreaseQuantity() {
        currentQuantity -= 1;
        if (currentQuantity > 3) {
            $('.order_block__quantity-left').html(currentQuantity)
            $('.order_block__quantity-left').addClass('order_block__quantity-left-wiggle')

            activatePushNote()

            setTimeout(function () { $('.order_block__quantity-left').removeClass('order_block__quantity-left-wiggle') }, 4000)
            setTimeout(decreaseQuantity, randomIntFromInterval(5, 30) * 1000);
        }
    }

    if (!wheel || wheel.length === 0) setTimeout(decreaseQuantity, randomIntFromInterval(5, 30) * 1000)
    else syncNameAndQuantityTimerId = setTimeout(activatePushNoteSolo, randomIntFromInterval(5, 30) * 1000)


    $('.wheel-cursor').on('click', spin)

    function spin() {
        if (!wheel.classList.contains('rotated')) {
            wheel.classList.add('super-rotation');
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 8000);
            
            if (syncNameAndQuantityTimerId) window.clearTimeout(syncNameAndQuantityTimerId)

            setTimeout(function () {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
                start_timer();
                setTimeout(decreaseQuantity, randomIntFromInterval(5, 30) * 1000)
            }, 8000);
            wheel.classList.add('rotated');
        }
    }

    var closePopup = document.querySelector('.close-popup');
    $('.close-popup, .pop-up-button').click(function (e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut();
    });

    function outputDat(m, fullM) {
        var d = new Date();
        var p = new Date(d.getTime() - m * 86400000);
        var monthA =
            fullM === false ?
                "01,02,03,04,05,06,07,08,09,10,11,12".split(",") :
                "ŃŹĐ˝Đ˛Đ°Ń€ŃŹ,Ń„ĐµĐ˛Ń€Đ°Đ»ŃŹ,ĐĽĐ°Ń€Ń‚Đ°,Đ°ĐżŃ€ĐµĐ»ŃŹ,ĐĽĐ°ŃŹ,Đ¸ŃŽĐ˝ŃŹ,Đ¸ŃŽĐ»ŃŹ,Đ°Đ˛ĐłŃŃŃ‚Đ°,ŃĐµĐ˝Ń‚ŃŹĐ±Ń€ŃŹ,ĐľĐşŃ‚ŃŹĐ±Ń€ŃŹ,Đ˝ĐľŃŹĐ±Ń€ŃŹ,Đ´ĐµĐşĐ°Đ±Ń€ŃŹ".split(
                    ","
                );
        var w = p.getDate();
        var ret =
            fullM === false ?
                p.getDate() + "." + monthA[p.getMonth()] + "." + p.getFullYear() :
                p.getDate() + " " + monthA[p.getMonth()] + " " + p.getFullYear();
        return ret;
    }

    var time = 600;
    var currentTimerTick = 10;
    var intr;

    function start_timer() {
        intr = setInterval(tick, 1000);
    }
    if (!$('.wheel-cursor') || $('.wheel-cursor').length === 0) start_timer()

    function tick() {
        time = time - 1;
        var mins = Math.floor(time / 60);
        if (mins !== currentTimerTick) {
            currentTimerTick = mins;
            $('.order_block__time').addClass('order_block__time-wiggle')
            setTimeout(function () {
                $('.order_block__time').removeClass('order_block__time-wiggle')
            }, 5000)
        }
        var secs = time - mins * 60;
        if (mins == 0 && secs == 0) {
            clearInterval(intr);
        }
        secs = secs >= 10 ? secs : "0" + secs;
        $(".timer-min").html("0" + mins);
        $(".timer-sec").html(secs);

    }

    var option = document.querySelectorAll('.change-package-selector2 option');

    if (option[0])
        option[0].selected = true;


});