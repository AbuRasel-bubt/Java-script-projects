// triangle 
document.getElementById('btn-triangle').addEventListener('click', function() {
        const title = document.getElementById('title-triangle').innerText;

        const triangleFirstString = document.getElementById('first-inputField').value;
        const triangleFirst = parseFloat(triangleFirstString);

        const triangleSecondString = document.getElementById('second-inputField').value;
        const triangleSecond = parseFloat(triangleSecondString);

        const multiply = 0.5 * triangleFirst * triangleSecond;

        const result = multiply.toFixed(2);

        if (isNaN(result)) {
            alert('please provide a valid number');
        }

        tableData(title, result);
    })
    // rectangle
document.getElementById('btn-rectangle').addEventListener('click', function() {
        const title = document.getElementById('title-rectangle').innerText;

        const rectangleFirstString = document.getElementById('rectangle-input').value;
        const rectangleFirst = parseFloat(rectangleFirstString);

        const rectangleSecondString = document.getElementById('rectanglesecond-input').value;
        const rectangleSecond = parseFloat(rectangleSecondString);

        const multiply = rectangleFirst * rectangleSecond;

        const result = multiply.toFixed(2);

        if (isNaN(result)) {
            alert('please provide a valid number');
        }

        tableData(title, result);
    })
    // Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function() {
    const title = document.getElementById('title-Parallelogram').innerText;

    const parallelogramFirstString = document.getElementById('Parallelogram-input').value;
    const parallelogramFirst = parseFloat(parallelogramFirstString);

    const parallelogramSecondString = document.getElementById('ParallelogramSecond-input').value;
    const parallelogramSecond = parseFloat(parallelogramSecondString);
    const multiply = parallelogramFirst * parallelogramSecond;

    const result = multiply.toFixed(2);

    if (isNaN(result)) {
        alert('please provide a valid number');
    }

    tableData(title, result);
})

//rhombus
document.getElementById('btn-rhombus').addEventListener('click', function() {
        const title = document.getElementById('title-rhombus').innerText;

        const rhombusFirstString = document.getElementById('rhombus-input').value;
        const rhombusFirst = parseFloat(rhombusFirstString);

        const rhombusSecondString = document.getElementById('rhombus-input2').value;
        const rhombusSecond = parseFloat(rhombusSecondString);
        const multiply = 0.5 * rhombusFirst * rhombusSecond;

        const result = multiply.toFixed(2);

        if (isNaN(result)) {
            alert('please provide a valid number');
        }

        tableData(title, result);
    })
    // pentagon
document.getElementById('btn-pentagon').addEventListener('click', function() {
    const title = document.getElementById('title-pentagon').innerText;

    const pentagonFirstString = document.getElementById('pentagon-input').value;
    const pentagonFirst = parseFloat(pentagonFirstString);

    const pentagonSecondString = document.getElementById('pentagon-input2').value;

    const pentagonSecond = parseFloat(pentagonSecondString);
    const multiply = 0.5 * pentagonFirst * pentagonSecond;

    const result = multiply.toFixed(2);

    if (isNaN(result)) {
        alert('please provide a valid number');
    }

    tableData(title, result);
})
document.getElementById('btn-Ellipse').addEventListener('click', function() {
    const title = document.getElementById('title-Ellipse').innerText;

    const pentagonFirstString = document.getElementById('Ellipse-input').value;
    const pentagonFirst = parseFloat(pentagonFirstString);

    const pentagonSecondString = document.getElementById('Ellipse-input2').value;

    const pentagonSecond = parseFloat(pentagonSecondString);
    const multiply = 3.1416 * pentagonFirst * pentagonSecond;

    const result = multiply.toFixed(2);

    if (isNaN(result)) {
        alert('please provide a valid number');
    }

    tableData(title, result);
})








function tableData(title, result) {
    const tableField = document.getElementById('table-field');
    const tr = document.createElement(('tr'));
    tr.innerHTML = `
    <td>${01}</tr>
    <td>${title}</tr>
    <td>${result}</tr>
    
    `;
    tableField.appendChild(tr);
}