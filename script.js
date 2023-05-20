document.getElementById('domainForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let input3 = document.getElementById('input3').value;
    let input4 = document.getElementById('input4').value;

    let options1 = input1.split(',');
    let options2 = input2.split(',');
    let options3 = input3.split(',');
    let options4 = input4.split(',');

    let combinations = generateCombinations(options1, options2, options3, options4);

    displayCombinations(combinations);
    updateCounter(combinations.length);
});

function generateCombinations(options1, options2, options3, options4) {
    let combinations = [];

    for (let i = 0; i < options1.length; i++) {
        for (let j = 0; j < options2.length; j++) {
            for (let k = 0; k < options3.length; k++) {
                for (let l = 0; l < options4.length; l++) {
                    let domain = "www."+ options1[i].trim() + options2[j].trim() + options3[k].trim() + "."+ options4[l].trim();
                    combinations.push(domain);
                }
            }
        }
    }
    return combinations;
}

function displayCombinations(combinations) {
    let domainList = document.getElementById('domainList');
    let items = combinations.length;
    domainList.innerHTML = '';

    combinations.forEach(function(combination) {
        let li = document.createElement('li');
        li.textContent = combination;
        domainList.appendChild(li);
    });
}

function updateCounter(count) {
    let counter = document.getElementById('count');
    counter.textContent = count;
}
