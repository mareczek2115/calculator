const board = document.getElementById('board');

let accumulator = 0;
let numbersAndMathOperations = [];

$(document).ready(function(){
    $('#clear').on('click', function(){
        $('#board').html('');
        accumulator = 0;
        numbersAndMathOperations = [];
    });
});

number = id => {
    const number = parseInt(id);
    if (accumulator > 0) {
        accumulator = accumulator * 10 + number;
    } else {
        accumulator = id;
    }
    board.innerHTML = accumulator;
};

mathOperation = id => {
    numbersAndMathOperations.push(accumulator, id.toString());
    accumulator = 0;
    document.getElementById('board').innerHTML = '';
};

result = () => {
    if (numbersAndMathOperations < 3) {
        alert('You are doing something wrong!');
    } else {
        numbersAndMathOperations.push(accumulator);
        while (numbersAndMathOperations.length != 1) {
            if (numbersAndMathOperations.includes('multiply' || 'divide')) {
                numbersAndMathOperations.forEach((element, index) => {
                    if(element == 'multiply'){
                        numbersAndMathOperations[index - 1] = numbersAndMathOperations[index - 1] * numbersAndMathOperations[index + 1];
                        numbersAndMathOperations.splice(index, 2);
                    }
                    else if(element == 'divide'){
                        numbersAndMathOperations[index - 1] = numbersAndMathOperations[index - 1] / numbersAndMathOperations[index + 1];
                        numbersAndMathOperations.splice(index, 2);
                    }
                });
            } else if(numbersAndMathOperations.length != 1) {
                numbersAndMathOperations.forEach((element, index) => {
                    if(element == 'substract'){
                        numbersAndMathOperations[index - 1] = numbersAndMathOperations[index - 1] - numbersAndMathOperations[index + 1];
                        numbersAndMathOperations.splice(index, 2);
                    }
                    else if(element == 'add'){
                        numbersAndMathOperations[index - 1] = numbersAndMathOperations[index - 1] + numbersAndMathOperations[index + 1];
                        numbersAndMathOperations.splice(index, 2);
                    }
                });
            }
        }
        const [ result ] = numbersAndMathOperations;
        numbersAndMathOperations = [];
        accumulator = result;
        board.innerHTML = result;
    }
};