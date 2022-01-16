(function(){
    const department = ['m ', 'e ', 'd ', 'j ', 'c '];
    const department_ = ['m_', 'e_', 'd_', 'j_', 'c_'];
    let department_count = 0;

    let classname = '.tokubetu_m,.tokubetu_e,.tokubetu_d,.tokubetu_j,.tokubetu_c';
    const outputElement = document.querySelectorAll(classname);

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
        for(let i = 0; i < outputElement.length; i++) {
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
            insertElement += `<summary>一般 (全学科共通)</summary>`;
            insertElement += `<table>`;
            dataArray.forEach((element) => {
                insertElement += '<tr>';
                element.forEach((childElement, index, array) => {
                    if(rowcnt === 0) {
                        insertElement += `<th>${childElement}</th>`
                    }else if(colcnt === 0) {
                        let add_class = department[department_count] + "tokubetu";
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
            outputElement[i].innerHTML = insertElement;
        }
    }

    getCsvData('./js/tokubetu.csv', outputElement);
})();