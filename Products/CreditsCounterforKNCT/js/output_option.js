const outputElement = document.querySelectorAll('.options');

console.log(outputElement);

for(let i = 0; i < outputElement.length; i++) {
    let insertElement = '';
    insertElement += `<p>必修科目のチェックを <input type="button" value="入れる" onclick="required_checked(true, ${i});"> <input type="button" value="外す" onclick="required_checked(false, ${i});"></p>`;
    insertElement += `<p>一般科目のチェックを <input type="button" value="入れる" onclick="normal_checked(true, ${i});"> <input type="button" value="外す" onclick="normal_checked(false, ${i});"></p>`;
    insertElement += `<p>専門科目のチェックを <input type="button" value="入れる" onclick="special_checked(true, ${i});"> <input type="button" value="外す" onclick="special_checked(false, ${i});"></p>`;
    insertElement += `<p>全ての授業のチェックを <input type="button" value="入れる" onclick="all_checked(true, ${i});"> <input type="button" value="外す" onclick="all_checked(false, ${i});"></button></p>`;

    console.log(insertElement);

    outputElement[i].innerHTML = insertElement;
}