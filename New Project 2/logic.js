const form = document.querySelector('form');

form.addEventListener('submit' ,function(e){
    // prevent the default submission of the submit button
    e.preventDefault();

    // take height and weight 

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please provide a valid HEIGHT`;
    }
    if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please provide a valid WEIGHT`;
    }

    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `<span>You are under weight | BMI : ${bmi}</span></br>`;
        }
        else if (bmi > 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span>You have normal weight | BMI : ${bmi}</span></br>`;
        }
        else{
            result.innerHTML = `<span>You are above normal weight | BMI : ${bmi}</span></br>`;
        }
    }

})
