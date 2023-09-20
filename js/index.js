const cards = document.querySelectorAll('.category__cards__card');

function changeActiveClass (event) {
    cards.forEach(card => {
        card.classList.remove('active-el');
        card.style.backgroundColor = ''; // Сбрасываем фон
    });

    event.currentTarget.classList.add('active-el');
    event.currentTarget.style.backgroundColor = '#D7B436';
}

cards.forEach(card => {
    card.addEventListener('click', changeActiveClass );
});


const imgElement = document.getElementById('search-img');

const inputElement = document.querySelector('.form-control');


function onWriting () {
    if (inputElement.value.trim() === '') {
        imgElement.style.display = 'inline-block';
    } else {
        imgElement.style.display = 'none';
    }
}

inputElement.addEventListener('input', onWriting );

onWriting ();


const languageSpan = document.getElementById('language');

const changeLanguage = () => {
    if (languageSpan.innerText === "PL") {
        languageSpan.innerText = "EN"
    } else {
        languageSpan.innerText = "PL"
    }
}

languageSpan.addEventListener("click", changeLanguage)


