
let targetScore = document.querySelector('.target-score');
let grade = document.querySelector('.grade');
let weight = document.querySelector('.weight');
let resultBtn = document.querySelector('.result-btn');
let showResult = document.querySelector('.show-result');



    resultBtn.addEventListener('click',(e)=>{
        let targetScoreArray = [];
        targetScoreArray = targetScore.children;

        let gradeArray = [];
        gradeArray = grade.children;

        let weightArray = [];
        weightArray = weight.children;
        
        let partPercentageArray = [];
        let overallPercentageArray = [];

        for (let i = 0 ; i < 4 ; i++) {

            console.log((gradeArray[i].value/targetScoreArray[i].value)*100);

            let partPercentge = (gradeArray[i].value/targetScoreArray[i].value)*100;
            partPercentageArray [i] = partPercentge;

        }

        console.log(partPercentageArray);

        for (let i = 0 ; i < 4 ; i++) {

            console.log((partPercentageArray[i] * weightArray[i].value)/100);

            let overallPercentage = (partPercentageArray[i] * weightArray[i].value)/100;
            overallPercentageArray [i] = overallPercentage;

        }
        console.log(overallPercentageArray);

        let percentageSum = 0;

        for (let i = 0; i < overallPercentageArray.length; i++) {
            percentageSum += overallPercentageArray[i] 
            console.log(percentageSum);
            
        }

        showResult.innerHTML = percentageSum;

    })  

