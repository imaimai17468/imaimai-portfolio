(function(){
    const outputElement = document.querySelectorAll('.options');

    for(let i = 0; i < outputElement.length; i++) {
        let insertElement = '';
        insertElement += `<p>※以下のボタンが反応しない場合リロードしてみてください</p>`
        insertElement += `<p>必修科目のチェックを <input type="button" value="入れる" onclick="required_checked(true, ${i});"> <input type="button" value="外す" onclick="required_checked(false, ${i});"></p>`;
        insertElement += `<p>選択科目のチェックを <input type="button" value="入れる" onclick="elective_checked(true, ${i});"> <input type="button" value="外す" onclick="elective_checked(false, ${i});"></p>`;
        insertElement += `<p>一般科目(必修のみ)のチェックを <input type="button" value="入れる" onclick="normal_checked(true, ${i});"> <input type="button" value="外す" onclick="normal_checked(false, ${i});"></p>`;
        insertElement += `<p>専門科目(必修のみ)のチェックを <input type="button" value="入れる" onclick="special_checked(true, ${i});"> <input type="button" value="外す" onclick="special_checked(false, ${i});"></p>`;
        insertElement += `<p>全ての授業のチェックを <input type="button" value="入れる" onclick="all_checked(true, ${i});"> <input type="button" value="外す" onclick="all_checked(false, ${i});"></button></p>`;

        outputElement[i].innerHTML = insertElement;
    }
})();