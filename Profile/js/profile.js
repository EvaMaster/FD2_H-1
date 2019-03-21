let name       = document.querySelector('.profile__name'),
    surname    = document.querySelector('.profile__surname'),
    patronymic = document.querySelector('.profile__patronymic'),
    age        = document.querySelector('.profile__age'),
    male       = document.getElementById('gender__male'),
    famele     = document.getElementById('gender__famele'),
    btn        = document.querySelector('.profile__button'),
    form       = document.querySelector('.personal-data'),
    result     = document.querySelector('.result'),
    resultItem = document.getElementsByClassName('result_text'),
    gender     = document.getElementsByName('gender');


btn.addEventListener('click', ()=>{
    
    let valName         = name.value,
        valSurname      = surname.value,
        valPatronymic   = patronymic.value,
        valAge          = age.value,
        arrName         = valName.split(''),
        arrSurname      = valSurname.split(''),
        arrPatronymic   = valPatronymic.split(''),
        checkNumber     = /\d/g,
        checkName       = valName.match(checkNumber),
        checkSurname    = valSurname.match(checkNumber),
        checkPatronymic = valPatronymic.match(checkNumber),
        checkAge        = valAge.match(checkNumber);
    
    if(arrName.length!==0 & checkName==null ){
        if(arrSurname.length!==0 & checkSurname==null){
            if(arrPatronymic.length!==0 & checkPatronymic==null){
                if(checkAge !== null){
                    if(male.checked || famele.checked){
                        form.classList.remove('d-flex');
                        form.classList.add('d-none');
                        result.classList.remove('d-none');
                        result.classList.add('d-flex');
                        resultItem[0].innerText = valName;
                        resultItem[1].innerText = valSurname;
                        resultItem[2].innerText = valPatronymic;
                        resultItem[3].innerText = valAge;
                        male.checked ? resultItem[4].innerText = gender[0].value : resultItem[4].innerText = gender[1].value;
                    }
                    else
                        alert('выберете пол');
                }
                else
                    alert('введите правильный возраст');
            }
            else{
                alert('введите правильно отчество');
            }
        }
        else{
            alert("введите правильно фамилию");
        }
    }
    else
        alert("введите правильно имя");
});


