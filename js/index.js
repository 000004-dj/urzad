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


const links = document.querySelectorAll('.category-link');
function handleClick(event) {
    event.preventDefault();

    links.forEach(link => {
        link.classList.remove('is-active');
    });

    event.currentTarget.classList.add('is-active');
}

links.forEach(link => {
    link.addEventListener('click', handleClick);
});






