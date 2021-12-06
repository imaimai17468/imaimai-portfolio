const outputElement_m = document.getElementById('output_csv_m');
const outputElement_e = document.getElementById('output_csv_e');
const outputElement_d = document.getElementById('output_csv_d');
const outputElement_j = document.getElementById('output_csv_j');
const outputElement_c = document.getElementById('output_csv_c');

const department = ['m ', 'e ', 'd ', 'j ', 'c '];
let department_count = 0;

function getCsvData(dataPath, outputElement) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', (event) => {
        const response = event.target.responseText;
        convertArray(response, outputElement);
    });
    request.open('GET', dataPath, true);
    request.send();
}

function convertArray(data, outputElement) {
    const dataArray = [];
    const dataString = data.split('\n');
    for (let i = 0; i < dataString.length; i++) {
        dataArray[i] = dataString[i].split(',');
    }
    dataArray.pop();
    let insertElement = '';
    let rowcnt = 0;
    let colcnt = 0;
    dataArray.forEach((element) => {
        insertElement += '<tr>';
        element.forEach((childElement, index, array) => {
            if(rowcnt === 0) {
                insertElement += `<th>${childElement}</th>`
            }else if(colcnt === 0) {
                let add_class = department[department_count];
                if(array[index + 1] === '一般') add_class += 'normal ';
                else add_class += 'special ';
                if(array[index + 2] === '必修') add_class += 'required';
                else if(array[index + 2] === '選択') add_class += 'elective';
                else if(array[index + 2] === '必修（留学生）') add_class += 'international';
                else add_class += 'other';
                insertElement += `<td><label><input type="checkbox" class="${add_class}">${childElement}</label></td>`
            }else if(colcnt === 3) {
                insertElement += `<td class="credit">${childElement}</td>`
            }else{
                insertElement += `<td>${childElement}</td>`
            }
            colcnt++;
        });
        insertElement += '</tr>';
        rowcnt++;
        colcnt = 0;
    });
    department_count++;
    outputElement.innerHTML = insertElement;
}

getCsvData('./js/11.csv', outputElement_m);
getCsvData('./js/12.csv', outputElement_e);
getCsvData('./js/13.csv', outputElement_d);
getCsvData('./js/14.csv', outputElement_j);
getCsvData('./js/15.csv', outputElement_c);