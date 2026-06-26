$(document).ready(function() {
	// timer
	var [m, s] = ($('#timer').html() ?? '').split(':');
	var second = $('#sec').html() ?? s ?? 60, minute = $('#min').html() ?? m ?? 10;
	setInterval(function() {
			if (second <= 1) {
				second = 60;
				if (minute <= 1) minute = 10;
				m = String(--minute).padStart(2, '0');
				$('#min').html(()=> m);
			}
			s = String(--second).padStart(2, '0');
			$('#sec').html(()=> s);
			$('#timer').html(m + ":" +s);
	}, 1000);

	// dateChange
	var lang = document.documentElement.lang ?? 'default';
	var date1 = new Date(); date1.setDate(date1.getDate() - 6);
	var date2 = new Date(); date2.setDate(date2.getDate());
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	$('.date1').html(date1.toLocaleDateString('default', options));
	$('.date2').html(date2.toLocaleDateString('default', options));
	$('[daysago]').each( function() {
		var date = new Date();
		date.setDate(date.getDate() - $(this).attr('daysago'));
		$(this).html(date.toLocaleDateString(lang, options));
	});
	$('[d]').each( function() {
		var date = new Date();
		date.setDate(date.getDate() + Number($(this).attr('d')));
		$(this).html(date.toLocaleDateString(lang, options));
	});

	// monthChange
	var date1 = new Date();
	var date2 = new Date(date1.getFullYear(), (date1.getMonth()+1)%12, 1);
	var date3 = new Date(date1.getFullYear(), (date1.getMonth()-1)%12, 1);
	$('.month1').html(date1.toLocaleString(lang, { month: 'long' }));
	$('.month2').html(date2.toLocaleString(lang, { month: 'long' }));
	$('.prev_month').html(date3.toLocaleString(lang, { month: 'long' }));
	$('.month').html(date1.toLocaleString(lang, { month: 'long' }));
	$('.month-next').html(date2.toLocaleString(lang, { month: 'long' }));
	$('.month-prev').html(date3.toLocaleString(lang, { month: 'long' }));

	// linksScrollForm
	$('a').click(function(e) {
		if(!$(this).attr('noprevent')) {
			e.preventDefault();
			var form = $("#order-now").length ? $("#order-now") : $("#form-wrap").length ? $("#form-wrap") :  $("#form");
			if(form.length) { $('html, body').animate({ scrollTop: form.offset().top-5 }, 200); }
		}
	});


	var names = {
		"him": ["रवि कुमार","अर्जुन यादव","विशाल मेहता","करण जोशी","जय हांडे","अंकुर सिंघ","अमित राय","दीपक गुप्ता","नवीन यादव","राज शर्मा"],
		"hiw": ["मीरा शर्मा","दिव्या पाटिल","अनुष्का जोशी","रिया मेहता","सोनी हांडे","ईशा सिंघ","अलिया राय","पलक गुप्ता","सुहाना यादव","रोहिणी शर्मा"],
		"esm": ["Santiago Rosales","Mateo Guerrero","Alejandro Castillo","Daniel Montes","Sebastián Morales","Juan Valdez","Diego Cabrera","Nicolás Franco","Lucas Gómez","Andrés Paredes"],
		"esw": ["Sofía Herrera","Valentina Escobar","Isabella Navarro","Camila Ríos","Emma Delgado","Martina Peralta","Lucía Vega","Antonella Mendoza","Victoria Rojas","Natalia Fuentes"],
		"itm": ["Marco Russo","Giovanni Bianco","Luca Esposito","Matteo Romano","Alessandro Ferrari","Davide Conti","Andrea Rossi","Fabio De Luca","Antonio Marino","Francesco Morelli"],
		"itw": ["Sofia Rossi","Giulia Bianchi","Aurora Esposito","Martina Ricci","Francesca Moretti","Sara Conti","Elena Romano","Alice Ferrari","Valentina Marino","Laura De Luca"],
		"dem": ["Maximilian Schmidt","Paul Fischer","Elias Schneider","Leon Wagner","Ben Hoffmann","Luca Keller","Noah Weber","Jonas Vogt","Felix Braun","Lukas Hartmann"],
		"dew": ["Sophia Müller","Emma Becker","Hannah Fischer","Emilia Schneider","Claudia Henning","Peggy Adler-Hoppe","Renata Schütte","Paula Böhme","Isolde Heine","Brigitte Klose"],
		"hum": ["Szűcs Bence","Lukács Áron","Szekeres Szervác","Orbán Balázs","Bálint Kornél","Vincze Hunor","Kozma Albert","Sipos Olivér","Faragó Patrik","Tamás Ernő"],
		"huw": ["Hegedüs Mihályné","Kocsis Gizella","Szekeres Olívia","Balázs Gitta","Pásztor Kristófné","Kelemen Márton","Lukács Fanni","Lengyel Marietta","Fábián Valéria","Szalai Rebeka"],
		"rom": ["Tudor Gheorghiu","Dorel Pana","Toma Florescu","Vasile Cozma","Nichifor Nica","Casian Manolache","Avram Chirila","Stancu Ignat","Albert Simon","Gică Trandafir"],
		"row": ["Veta Miron","Lia Macovei","Gabriela Stefanescu","Ramona Zaharia","Grațiana Radulescu","Nadia Ardelean","Petronela Moise","Tudosia Coman","Marcheta Muresan","Astrid Parvu"],
		"ptm": ["Isaac Ivo Rodrigues Melo","Edgar Mendes Ramos","Afonso Azevedo de Henriques","Bernardo Cláudio","Nuno Márcio Lima","Luís Matheus Coelho","Filipe Araújo Silva","Tomás Silva Faria","Xavier Paulo de Maia","Rafael Gustavo de Antunes"],
		"ptw": ["Madalena Neto Vieira","Teresa Melissa Ribeiro de Freitas","Bruna Ramos Macedo","Jéssica Iris Marques","Andreia Benedita Nunes","Carlota Mota","Viviane Erica Nunes","Érica Campos Nogueira","Mafalda Teixeira","Daniela Ana Soares de Fernandes"],
		"trm": ["Ali Akyüz","Burak Abadan","Ferid Karaböcek","Barlas Akyürek","Ali Solmaz","Canberk Akman","Çağan Bakırcıoğlu","Atakan Eronat","Cem Beşerler","Armağan Denkel"],
		"trw": ["Ada Alnıaçık","Ebru Numanoğlu","Şahnur Tüzün","Şahnur Akyüz","Burcu Koç","Ece Baykam","Şahnur Erçetin","Sinem Ayaydın","Ebru Erginsoy","Rüya Limoncuoğlu"],
		"film": ["Jerrold Bradtke","Elmo Erdman","Alexis Pacoch","Consuelo Ruecker","Ernest Terry","Melvin Huel","Dexter Bogisich","Dwight Runolfsdottir","Coty Emard","Michale Hauck"],
		"filw": ["Gina Tillman","Anjali Marks","Estefania Mante","Lauren Kohler","Rosetta Runolfsdottir","Maiya Willms","Angie Ziemann","Henriette Dickens","Alberta Von","Delpha Greenfelder"],
		"fam": ["دارا فرج","عطا میدری","داتیس قانونی","مهیمن لنکرانی","بهنیا مرتضوی","بختیار واعظ","سامی صفوی","هوشان کریمی","رشید داور","بهامین قهستانی	"],
		"faw": ["آفری منوچهری","نازو حکیمی","راشین توسلی","ملکه جهانی","رودابه پیوندی","مونا توکلیان","نگارین دری","فروغ قهرمانیان","سیما میرباقری","گلشن زرشناس"],
		"arm": ["أحمد مراد","سعيد داود","باسل رافي","اسام كامل","نازك بدواوي","أبو جهاد","فوزي منصور","‏عقيل","‏جازم","‏ميمون"],
		"arw": ["أيات لاري","عائشة","بادية غوزيلا","غرام فيروزة","جوري","‏‏غادة","سليمة يلدوز","حمدان عيسى"],
		"ZAm": ["Mzwandile Zwazwa","Philani Ngwenya","Tommy Lee Sparta","Maxamed Nuur Afaan Cabdulaahi","Dries De Wet","Bullet Manala","Minhajul Hayat","Stivo Mothupi","Nhlanhla Dube","Annetjie Thythus"],
		"ZAw": ["Marilyn Lathwood","Zandy Mayisela","Nokuzola Pinky","Precious Sithole","Lana Nolte","Sussanna Lewies","Clara Dean","Gail Less","Beauty Masuku","Mantsho"],
		"KEm": ["Adams Maina","Semekal Mose","Mwalimu Ngetich","Nako Memei","Jay Jay Okocha","Moiz Peter","Ronald Okoth","Magata Eric","Davido Kamaa","Immanuel Mwanzia"],
		"KEw": ["Florence Wangeci","Elizabeth Biwott","Ivy Njoroge","Elenwa Wairimu Maina","Anchelina Mueni","Cynthia Mudave","Kamammy Terry","Shila Chebet","Bree","Kiongozi Mayamba"],
		"CIm": ["Ïsmãël Fanny","Robert Sode","Mermoz Ndri","Goua Kekre","Koala Inoussa","Kone Nanourou","Blessings Venance","Noel Jordan","Bonkoungou Julliette","Lee Boss Poutine","Medo le Nabab","Sam Sam"],
		"CIw": ["Mirabelle Moyé","Gʀâ Kouakou","Albertine Akpacheme","Tata José","Lou Irié Augustine Irié","Dame N'gbesso","Dorine Amenan","Maman Moïse","Ange Blon","Ornella Affi","Barra Djeneba Soro"],
	};
	var htmlLang = document.documentElement.lang.split('-');
	var lang = htmlLang[0];
	var country = htmlLang[1];
	if(lang == "en" || lang == "fr") { lang = country; }
	if(names[lang+"m"] === undefined) { lang = "es"; }
	for(let i = 1; i <= 10; i++) {
		$('.m'+i).html(names[lang+"m"][i-1]);
		$('.w'+i).html(names[lang+"w"][i-1]);
	}

	if(typeof doc === "undefined") {
		doc = {"hi":"डॉ. अविनाश मिश्रा", "es":"Dr. Hugo López-Gatell"}[lang];
	}
	if(!doc) { doc = "Doctor"; }
	$('.doc').html(doc);
	if(typeof product === "undefined" || !product) { product = "Product"; }
	$('.product').html(product);
	if(typeof currency === "undefined" || !currency) {
		currency = {"IN":"INR", "MX":"\$"}[country];
	}

	$('.currency').html(currency);
	if(typeof priceOld != "undefined") { $('.price-old').html(priceOld); }
	if(typeof priceNew != "undefined") { $('.price-new').html(priceNew); }



});
