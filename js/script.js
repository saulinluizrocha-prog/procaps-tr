setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function() {
    $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});
const OFFER = "Procaps";
let now = new Date,
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;
    const massange = [{
        m: "Resmi çevrimiçi sohbetime hoş geldiniz! Ben bir ürolog doktorum, Hakan Aslan. Burada yüzlerce erkeğin prostat sağlığına kavuşmasına yardımcı olan ücretsiz teşhis hizmetleri ve kişisel danışmanlık hizmeti veriyorum."
    }, {
        m: "Buraya çok hassas bir sorun nedeniyle, prostatınızla ilgili endişe verici semptomlar nedeniyle geldiniz. Neyse ki bir uzmanla konuşuyorsunuz,böylece nitelikli yardım alacağınızdan ve bilgilerinizin tamamen gizli kalacağından emin olabilirsiniz."
    }, {
        m: "Kişisel öneriler almak için birkaç soruyu yanıtlayın."
    }, {
        m: '<p class="quest">Kaç yaşındasınız? </p>'
    }, {
        m: '<p class="quest">Sizin için en belirgin semptomlar hangileri?</p>'
    }, {
        m: '<p class="quest">Ne zamandır bu sorunları yaşıyorsunuz?</p>'
    }, {
        m: '<p class="quest">Bunun için hiç tedavi gördünüz mü? </p>'
    }, {
        m: '<p class="quest">Ailenizde, özellikle babanızda veya erkek kardeşinizde herhangi bir prostat kanseri vakası oldu mu?</p>'
    }, {
        m: '<p class="quest">Yeterli fiziksel aktiviteniz var mı?</p>'
    },  {
        m:  "Cevaplarınız için teşekkür ederim. Boş yere sizi rahatlatmayacağım durumunuzun ciddi sistemik sonuçları var. Bu durumda klasik tedavi yöntemleri konusunda uzman olmayan sıradan doktorlardan yardım aramanın bir anlamı yok."
    }, {
        m: "Prostat hastalığının dikkat ve bakım gerektiren bir durum olduğunu anlamalısınız. Belirtileriniz hakkında konuşmaktan veya tıbbi yardım almaktan utanmamalısınız. Yaygın bir hastalıktır ve biz bununla başa çıkmanıza yardımcı olmak için buradayız."
    }, {
        m: "Hastalık, yavaş hareket eden bir bomba gibi yavaş yavaş gelişebilir bu bombanın hemen patlaması gerekmez, ancak er ya da geç patlama olasılığı %100'dür."
    }, {
        m: "Yakın zamana kadar prostat sorunlarının etkili bir tedavisi yoktu. Bir erkeğe prostat hastalığı teşhisi konduğunda, geleneksel tıbbın sunabileceği tek şey belirtileri hafifleten ancak nedeni ortadan kaldıramayan haplardı. Ancak bazıları istenmeyen sonuçlara neden olabiliyordu. yan etkiler, etkiler veya ayrıca vücuttaki diğer sistemlere baskı yapar."
    }, {
        m: "Davanızın karmaşıklığı ve onu hızlı bir şekilde çözmenin önemi göz önüne alındığında, size eczane raflarında bulabileceğiniz hiçbir işe yaramaz hap sunmayacağım. Bunların hiçbiri size gerçekten yardımcı olamaz."
    }, {
        m: "Size önerebileceğim en etkili çözüm " + OFFER + "'dır. Bu ilaç doğrudan prostata etki ederek inflamasyonun azaltılmasına ve işleyişinin iyileştirilmesine yardımcı olur. " + OFFER + ", prostat hastalığının semptomlarının daha kısa sürede hafifletilmesine yardımcı olabilir. 2 haftadan fazla."
    }, {
        m: OFFER + "Ülkemiz dışında Avrupa, ABD, İsrail ve daha birçok ülkede başarıyla kullanılan eşsiz bir ilaçtır."
    }, {
        m: 'Ürünün avantajları aşağıdaki gibidir: <br><br> <img src="./img/Procaps.png" class="product-img" style="width: 100%; max-width: 240px;"> '
    }, {
        m: "İleri ve ciddi vakalarda bile prostat fonksiyonunun onarılmasına ve her yaşta işleyişinin iyileştirilmesine yardımcı oluyor. Ve en önemlisi, hem kliniklerde hem de evde tedavi amaçlı kullanılabiliyor."
    }, {
        m: "Benzersizliği, prostat hastalığının semptomlarıyla mücadele etmek için özel olarak geliştirilen birçok aktif bileşeni bir araya getiren yenilikçi formülde yatmaktadır. Bu bileşenler sinerjik olarak çalışır ve karmaşık ve etkili bir tedavi sağlar. Geçen yıl yapılan klinik araştırmalar, sizinki gibi ciddi vakaların bile tedavi edilebileceğini gösteriyor. sadece bir kursla tedavi edilebilir " + OFFER + "."
    }, {
        m: OFFER + " kullanan erkeklerin %94,9'u, ilacın prostat iltihabı semptomlarını azalttığını ve ürogenital sistemin işleyişini iyileştirdiğini ilk kullanımdan itibaren doğruladı."
    }, {
        m: "Benim de sana güzel haberlerim var. İnternetten teşhis konuldu ve sen benim 2000'inci hastamsın."
    }, {
        m: OFFER + "yı indirimli sipariş edip sadece " + new_price + " karşılığında alma fırsatına sahip olacaksınız! Promosyon setlerin miktarı sınırlıdır, bu yüzden en kısa zamanda  ipariş vermenizi tavsiye ederim."
    }];
    
    

var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    speedtext = 15,
    process = !0;

function app() {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2),
        t = ("0" + e.getHours()).slice(-2) + ":" + s;
    if ($(".chat").height() + 100 > $(".content").height()) {
        $("#scroll_id").removeClass("hide");
        var n = $(".inp").val();
        $(".inp").val(++n)
    }
    const c = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + t + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
    $(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
    var s = new Date,
        t = ("0" + s.getMinutes()).slice(-2);
    let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' + (("0" + s.getHours()).slice(-2) + ":" + t) + '</p><p class="text" class="users_mass">' + e + "</p></div></div></div>";
    $(".chat-content-list").append(n), $(".content").animate({
        scrollTop: $(".chat-content-list").height()
    }, 700), $("#scroll_id").addClass("hide")
}




function question1() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">20 yıldan az</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">21-30 yaşında</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">31-40 yaşında</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">40 yıldan fazla</span></div></div>')
}

function choise1() {
    $(".question1M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("20 yıldan az"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("21-30 yaşında"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("31-40 yaşında"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("40 yıldan fazla"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question2() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">İdrar yapma zorluğu</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">Erektil disfonksiyon</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">İdrar yaparken ağrı veya yanma</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">Pelviste, prostatta veya sırtın alt kısmında ağrı</span></div></div>')
}

function choise2() {
    $(".question2M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("İdrar yapma zorluğu"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Erektil disfonksiyon"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("İdrar yaparken ağrı veya yanma"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Pelviste, prostatta veya sırtın alt kısmında ağrı"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question3() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Bir yıldan daha az</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">1-3 yıl</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">3 yıldan fazla</span></div></div>')
}

function choise3() {
    $(".question3M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Bir yıldan daha az"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("1-3 yıl"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("3 yıldan fazla"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question4() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">evet</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">hayır</span></div></div>')
}

function choise4() {
    $(".question4M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("evet"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("hayır"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question5() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">evet</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">hayır</span></div></div>')
}

function choise5() {
    $(".question5M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("evet"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("hayır"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question6() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">evet</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">hayır</span></div></div>')
}

function choise6() {
    $(".question6M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("evet"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("hayır"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}


function displayQuestionAndChoice(questionNumber) {
    if (lengt_num_mas === questionNumber && length_mass === massange[lengt_num_mas].m.length - 1) {
        window[`question${questionNumber + 1}`]();
        process = !1;
        window[`choise${questionNumber + 1}`]();
        $("#scroll_id").addClass("hide-q");
        $(".content").animate({ scrollTop: $(".chat").height() }, 700, function() {
            $("#scroll_id").removeClass("hide-q");
        });
    }
}

// Функция для сохранения состояния пользователя
function saveUserState(state) {
    localStorage.setItem("userState", JSON.stringify(state));
}

// Функция для получения состояния пользователя
function getUserState() {
    const state = localStorage.getItem("userState");
    if (state) {
        return JSON.parse(state);
    }
    return null;
}


setTimeout(() => {
    // const savedUserState = getUserState();
    // if (savedUserState) {
    //     lengt_num_mas = savedUserState.lengt_num_mas;
    //     mass_id = savedUserState.mass_id;
    //     length_mass = savedUserState.length_mass;
    //     text = savedUserState.text;
    // }

    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2);
    const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
    $(".chat-content-list").append(t), $("#scroll_id").click(function(e) {
        $(this).removeClass("hide-q"), $(".content").animate({
            scrollTop: $(".chat").height()
        }, 700)
    });
    const n = setInterval(function() {
        if (1 == process)
            if (lengt_num_mas != massange.length) {
                if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                    lengt_num_mas++, mass_id++, length_mass = 0, text = "", app();

                    // Сохраняем состояние пользователя
                    saveUserState({
                        lengt_num_mas: lengt_num_mas,
                        mass_id: mass_id,
                        length_mass: length_mass,
                        text: text
                    });
                }
            } else clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show")
    }, speedtext)
}, 1e3), $(".content").scroll(function() {
    "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
});
var $marker = $("#down-box");
$(".content").scroll(function() {
    $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
});
 