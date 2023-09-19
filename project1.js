document.getElementById("bmiForm").addEventListener('submit',function(e){
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightfeet = parseInt(document.getElementById('height-feet').value);
    const heightinches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(gender && age && heightfeet && heightinches && weight){
        const heightinmetres = ((heightfeet*12)+heightinches)*0.0254;
        const bmi = weight/(heightinmetres*heightinmetres);
        const results = document.getElementById('result');

        let category='';

        if(bmi <18.5){
            category='UnderWeight';
        }
        else if(bmi>=18.5 && bmi<=24.5){
            category='Normal Weight';
        }
        else if(bmi >= 24.5 && bmi <= 29.9){
            category= 'OverWeight' ;
        }
        else{
            category='obese'
        }

        let resultmessage = 'Your BMI:'+ bmi.toFixed(2) + '<br>';
        resultmessage += 'Category:'+ category;
        results.innerHTML= resultmessage;

    }
});