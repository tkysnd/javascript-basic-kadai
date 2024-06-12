const btn = document.getElementById('btn');

const text = document.getElementById('text');

btn.addEventListener('click', () => {

    setTimeout(() => {

        // console.log('clicked');

        text.textContent = 'ボタンをクリックしました';

    }, 2000)

});