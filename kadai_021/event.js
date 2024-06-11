const btn = document.getElementById('btn');

 

btn.addEventListener('click', () => {

    setTimeout(() => {

        // console.log('clicked');

        text.textContent = 'ボタンをクリックしました';

    }, 2000)

});