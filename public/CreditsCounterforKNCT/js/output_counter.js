(function(){
    const outputElement = document.querySelectorAll('.counter');

    department_list = ["m", "e", "d", "j", "c"];
    for(let i = 0; i < outputElement.length; i++) {
        let insertElement = '';
        insertElement += `<p>現在の合計単位数</p>`;
        insertElement += `<h1 id="credit_count_${department_list[i]}">0</h1>`;
        insertElement += `<p>単位</p>`;
        insertElement += `<p id="credit_detail_${department_list[i]}">一般 : 0 単位 / 専門 : 0 単位</p>`;
        insertElement += `<p id="credit_tokubetu_${department_list[i]}">特別学修 : 0 単位</p>`;
        insertElement += `<p id="credit_required_${department_list[i]}">必修 : 0 単位</p>`;
        insertElement += `<p id="credit_countdown_${department_list[i]}">[全体] 167 単位まで残り 167 単位</p>`;
        insertElement += `<p id="ippan_countdown_${department_list[i]}">[一般] 75 単位まで残り 75 単位</p>`;
        insertElement += `<p id="senmon_countdown_${department_list[i]}">[専門] 82 単位まで残り 82 単位</p>`;
        outputElement[i].innerHTML = insertElement;
    }
})();