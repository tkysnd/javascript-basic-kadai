let score = 0;

let untyped = '';

const undtypedField = document.getElementById('untyped');

let typed = '';

const typedField = document.getElementById('typed');

const wrap = document.getElementById('wrap');

const start = document.getElementById('start');

const count = document.getElementById('count');

const numTyped = document.getElementById('numTyped');

 

const textLists = [

    'Hello World','This is my App','How are you?',

    'Today is sunny','I love JavaScript!','Good morning',

    'I am Japanese','Let it be','Samurai',

    'Typing Game','Information Technology',

    'I want to be a programmer','What day is today?',

    'I want to build a web app','Nice to meet you',

    'Chrome Firefox Edge Safari','machine learning',

    'Brendan Eich','John Resig','React Vue Angular',

    'Netscape Communications','undefined null NaN',

    'Thank you very much','Google Apple Facebook Amazon',

    'ECMAScript','console.log','for while if switch',

    'var let const','Windows Mac Linux iOS Android',

    'programming'

];

const rankCheck = score =>{

    let text = '';

    if (score<100){

        text=`あなたのランクはCです。\nBランクまであと${100-score}文字です。`;

    }else if(score<200){

        text=`あなたのランクはBです。\nAランクまであと${200-score}文字です。`;

    }else if(score<300){

        text=`あなたのランクはAです。\nSランクまであと${300-score}文字です。`;

    }else{

        text=`あなたのランクはSです。\nおめでとうございます。`;

    }

    return `${score}文字打てました。\n${text}\n 【OK】リトライ / 【キャンセル】終了`;

};

const gameOver =id=>{

    clearInterval(id);

    const result = confirm(rankCheck(score));

    if (result) {

        window.location.reload();

    }

};

const timer =()=>{

    let time=count.textContent;

    const id = setInterval(()=>{

        time--;

        count.textContent=time;

        if (time<=0){

            console.log('TIME UP!!');

            typedField.textContent='';

            undtypedField.textContent='TIME UP!!';

            setTimeout(() => {

                gameOver(id);

            }, 10);

        }

    }, 1000);

};

 

const createText =()=>{

    typed = "";

    typedField.textContent=typed;

    let rand=Math.floor(Math.random()*textLists.length);

    untyped = textLists[rand];

    undtypedField.textContent=untyped;

};

const keyPress = e =>{

    if (e.key!==untyped.substring(0,1)){

        wrap.classList.add('mistyped');

        setTimeout(()=>{

            wrap.classList.remove('mistyped');

        }, 100);

        return;

    }

        typed+=untyped.substring(0,1);

        untyped = untyped.substring(1);

        typedField.textContent=typed;

        undtypedField.textContent=untyped;

        wrap.classList.remove('mistyped');

        score++;

        numTyped.textContent=score;

    if (untyped===''){

        createText();

    }

};

 

start.addEventListener('click', ()=>{

    timer();

    createText();

    score = 0;

    start.style.display='none';

    document.addEventListener('keypress', keyPress)

})

undtypedField.textContent='press Start to start game';

