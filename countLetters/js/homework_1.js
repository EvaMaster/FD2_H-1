let vowelsText = document.querySelector('.vowels__area'),
    vowelsBtn = document.querySelector('.vowels__button'),
    vowelsResultParent = document.querySelector('.vowels-result'),
    vowelsResult = document.querySelector('.vowels-result__output');
const vowelsArr = ['а', 'о', 'э', 'и', 'у', 'ы', 'е', 'ё', 'ю', 'я'];

vowelsBtn.addEventListener('click',()=>{
    function words() {
        let userText = vowelsText.value,
            countLetter = userText.length;
        if(countLetter == 0){
            return 'Вы не ввели текст';
        }
        let result = [...userText].reduce((a, b) => a + vowelsArr.includes(b), 0);
        return result;
        }
    vowelsResult.innerText = words();
});

function countLetters(collection, line, type){
    let characterSet = collection,
        lettersFilter = line.replace(/ /g, ''),
        typeOutput = type,
        lettersLine = lettersFilter.split(''),
        span = document.createElement('span');
        
    if(typeOutput == 'console'){
        console.log('В коллекции символов:' + characterSet.length + ' '+ ' ' + 'В строке символов:' + lettersLine.length);
    }
    else if(typeOutput == 'alert'){
        alert('В коллекции символов:' + characterSet.length + ' '+ ' ' + 'В строке символов:' + lettersLine.length);
    }
    else{
        span.innerText = 'В коллекции символов:' + characterSet.length + ' '+ ' ' + 'В строке символов:' + lettersLine.length;
        vowelsResultParent.appendChild(span);
    };
};
//countLetters(['a', 's', 'd'], 'hello world', 'dom');




