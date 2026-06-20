document.addEventListener('DOMContentLoaded', function () {
    const namesArray = [
        { name: 'Ayşe', gender: 'f' },
        { name: 'Fatma', gender: 'f' },
        { name: 'Elif', gender: 'f' },
        { name: 'Zeynep', gender: 'f' },
        { name: 'Esra', gender: 'f' },
        { name: 'Mehmet', gender: 'm' },
        { name: 'Mustafa', gender: 'm' },
        { name: 'Emir', gender: 'm' },
        { name: 'Burak', gender: 'm' },
        { name: 'Onur', gender: 'm' }
    ];
    const cityArray = ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya', 'Adana'];
    const alert = document.querySelector('.alert');
    const alertName = alert.querySelector('.alert__name');
    const alertCity = alert.querySelector('.alert__city');
    const alertCount = alert.querySelector('.alert__count');
    const alertVerb = alert.querySelector('.alert__verb');
    const clsAlertShow = 'alert--show';
    const maleNamePercentage = 20;
    let usedNames = [];
    let usedCities = [];
    let alertInterval = null;

    alertInterval = setInterval(intervalHandler, getRandom(26000, 34000));

    function intervalHandler() {
        if (alert.classList.contains(clsAlertShow)) {
            clearInterval(alertInterval);
            alertInterval = setInterval(intervalHandler, getRandom(26000, 34000));
            return;
        }
        createAlertMessage();
        alertShow();
        setTimeout(function () {
            alertHidden();
        }, 10000);
    }

    function getCityWithCorrectEnding(city) {
        let correctedCity = city;
        switch (city) {
            case 'Istanbul':
                correctedCity = "Istanbul'dan";
                break;
            case 'Ankara':
                correctedCity = "Ankara'dan";
                break;
            case 'Antalya':
                correctedCity = "Izmir'den";
                break;
            case 'Adana':
                correctedCity = "Bursa'dan";
                break;
            case 'Bursa':
                correctedCity = "Antalya'dan";
                break;
            case 'Izmir':
                correctedCity = "Adana'dan";
                break;
            default:
                break;
        }
        return correctedCity;
    }


    function createAlertMessage() {
        let name = getUniqueName();
        let city = getUniqueCity();
        let correctedCity = getCityWithCorrectEnding(city);
        let count = getRandom(2, 4);
        let verb = name.gender === 'm' ? 'sipariş etti' : 'sipariş etti';
        alertName.textContent = name.name;
        alertCity.textContent = correctedCity;
        alertCount.textContent = count;
        alertVerb.textContent = verb;
    }

    function alertShow() {
        alert.classList.add(clsAlertShow);
    }

    function alertHidden() {
        alert.classList.remove(clsAlertShow);
    }

    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getUniqueName() {
        if (usedNames.length === namesArray.length) {
            usedNames = [];
        }
        let gender = getNextGender();
        let filteredNames = namesArray.filter(item => item.gender === gender && !usedNames.includes(item));

        if (filteredNames.length === 0) {
            filteredNames = namesArray.filter(item => item.gender === gender);
        }

        let name = filteredNames[getRandom(0, filteredNames.length - 1)];
        if (name) {
            usedNames.push(name);
        }
        return name;
    }

    function getUniqueCity() {
        if (usedCities.length === cityArray.length) {
            usedCities = [];
        }
        let city = '';
        do {
            city = cityArray[getRandom(0, cityArray.length - 1)];
        } while (usedCities.includes(city));
        usedCities.push(city);
        return city;
    }

    function getNextGender() {
        if (usedNames.length === 0) {
            return 'f';
        }

        const totalCount = usedNames.length;
        const maleCount = usedNames.filter(item => item.gender === 'm').length;
        const malePercentage = (maleCount / totalCount) * 100;

        if (malePercentage < maleNamePercentage) {
            return 'm';
        } else {
            return 'f';
        }
    }
}); 