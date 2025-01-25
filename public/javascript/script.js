let profile = document.querySelector('.profile');
let modalProfile = document.querySelector('.modal-profile');
let info = document.querySelector('.info');
let modalInfo = document.querySelector('.modal-info');
let chevronProfile = document.querySelector('.profile i');
let chevronInfo = document.querySelector('.info i');

// membuat interaktif saat profile diklik...
profile.addEventListener('click', function (e) {
    e.preventDefault()
    modalProfile.classList.toggle('show');
    if (chevronProfile.style.transform === '') {
        chevronProfile.style.transform = 'rotate(180deg)';
    } else {
        chevronProfile.style.transform = '';
    }
    chevronProfile.style.transition = '0.2s'
})

// membuat interaktif saat info diklik...
info.addEventListener('click', function (e) {
    e.preventDefault()
    modalInfo.classList.toggle('show');
    if (chevronInfo.style.transform === '') {
        chevronInfo.style.transform = 'rotate(180deg)';
    } else {
        chevronInfo.style.transform = '';
    }
    chevronInfo.style.transition = '0.2s'
})

// ketika selain target diklik...
document.addEventListener('click', function (e) {
    if (!info.contains(e.target) && !modalInfo.contains(e.target)) {
        modalInfo.classList.remove('show')
        chevronInfo.style.transform = '';
    }

    if (!profile.contains(e.target) && !modalProfile.contains(e.target)) {
        modalProfile.classList.remove('show')
        chevronProfile.style.transform = '';
    }
})

// navbar mobile interaktif ....
let nav = document.querySelectorAll('.nav-mobile i');
let set = document.querySelectorAll('.nav-mobile span');
let navInfo = document.querySelector('.nav-info');
let navProfile = document.querySelector('.nav-profile');

nav.forEach((item, index) => {
    item.addEventListener('mouseenter', (e) => {
        set[index].classList.add('show')
    })

    item.addEventListener('mouseleave', (e) => {
        set[index].classList.remove('show')
    })
})

navInfo.addEventListener('click', function (e) {
    e.preventDefault();
    modalInfo.classList.toggle('nav-show');
})

navProfile.addEventListener('click', function (e) {
    e.preventDefault();
    modalProfile.classList.toggle('nav-show');
})

// ketika selain target diklik...
document.addEventListener('click', function (e) {
    if (!navInfo.contains(e.target) && !modalInfo.contains(e.target)) {
        modalInfo.classList.remove('nav-show')
    }

    if (!navProfile.contains(e.target) && !modalProfile.contains(e.target)) {
        modalProfile.classList.remove('nav-show')
    }
})

