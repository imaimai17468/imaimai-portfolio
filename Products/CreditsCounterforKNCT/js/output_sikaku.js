(function(){
    const outputElement_m = document.getElementById('sikaku_m');
    const outputElement_e = document.getElementById('sikaku_e');
    const outputElement_d = document.getElementById('sikaku_d');
    const outputElement_j = document.getElementById('sikaku_j');
    const outputElement_c = document.getElementById('sikaku_c');

    const department = ['m ', 'e ', 'd ', 'j ', 'c '];
    const department_ = ['m_', 'e_', 'd_', 'j_', 'c_'];
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

        insertElement += `<details>`;
        insertElement += `<summary>専門</summary>`;
        insertElement += `<table>`;
        dataArray.forEach((element) => {
            insertElement += '<tr>';
            element.forEach((childElement, index, array) => {
                if(rowcnt === 0) {
                    insertElement += `<th>${childElement}</th>`
                }else if(colcnt === 0) {
                    let add_class = department[department_count] + "sikaku";
                    insertElement += `<td><label><input type="checkbox" class="${add_class}">${childElement}</label></td>`
                }else if(colcnt === 2) {
                    insertElement += `<td class="${department_[department_count]}credit">${childElement}</td>`
                }else{
                    insertElement += `<td>${childElement}</td>`
                }
                colcnt++;
            });
            insertElement += '</tr>';
            rowcnt++;
            colcnt = 0;
        });
        insertElement += `</table>`;
        insertElement += '</details>';
        department_count++;
        outputElement.innerHTML = insertElement;
    }

    getCsvData('./js/sikaku_m.csv', outputElement_m);
    getCsvData('./js/sikaku_e.csv', outputElement_e);
    getCsvData('./js/sikaku_d.csv', outputElement_d);
    getCsvData('./js/sikaku_j.csv', outputElement_j);
    getCsvData('./js/sikaku_c.csv', outputElement_c);
})();