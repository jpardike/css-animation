console.log('What hump?');

document.getElementById('start')
    .addEventListener('click', function (event) {
        // console.log('click');
        document.querySelector('.target')
            .classList.toggle('flip');
    });