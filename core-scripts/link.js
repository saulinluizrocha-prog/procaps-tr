const scrollToForm = function (e) {
    e.preventDefault();
    let form = document.getElementsByClassName('scroll-to-class')[0];
    form.scrollIntoView(true);
}

let allAtags = document.getElementsByTagName('a')

for (let i = 0; i < allAtags.length; i++) {
    let stop = false;
    for (let j = 0; j < allAtags[i].classList.length; j++) {
        if(allAtags[i].classList[j] == 'stop-scroll'){
            stop = true;
        }
    }

    // Stop stuff
    if (!stop) {
        allAtags[i].onclick = scrollToForm
    }
} 