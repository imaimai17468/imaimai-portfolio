/*
$(function () {
    // カレンダー
    $(function () {
        $('input[name="input_date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
});
*/

function subForm() {
    console.log("push submit");
    
    let now = new Date();
    let Year = now.getFullYear();
    let Month = now.getMonth()+1;
    let Date1 = now.getDate();
    let Hour = now.getHours();
    let Min = now.getMinutes();
    
    let msg
    let machine_name = {};
    let machine_model = {};
    let serial_number = {};
    let sympromps = {};
    let sympromps_name = {};
    let sympromps_count = {};
    let machine_image = {};
    let remarks = {};
    let sympromps_buff = {};


    // 機械名について
    machine_name[0] = $('input[name="machine_name"]').val();
    // 機種について
    machine_model[0] = $('input[name="machine_model"]').val();
    // 製造番号について
    serial_number[0] = $('input[name="serial_number"]').val();
    // 備考について
    remarks[0] = document.getElementById("remarks").value;

    // 修理内容について
    if($('input[name="symptoms"]:checked').val()== 0){
        sympromps[0] = $('textarea[name="symptoms"]').val();
    }
    else if($('input[name="symptoms"]:checked').val()== 1){
        sympromps[0] = "納品のみ";
        sympromps_name[0] = $('input[name="symptoms_name"]').val();
        sympromps_count[0] = $('input[name="symptoms_number"]').val();
    }
    
    //画像について
    if(i > 1 || $('input[name="machine_image"]:checked').val()== 0){
        machine_image[0] = "なし";
    }
    else{
        machine_image[0] = "あり";
    }
    
    for(let j=1; j<i; j++){
        // 機械名について
        machine_name[j] = clone_element[j].querySelector("#machine_name").value;
        // 機種について
        machine_model[j] = clone_element[j].querySelector("#machine_model").value;
        // 製造番号について
        serial_number[j] = clone_element[j].querySelector("#serial_number").value;
        // 備考について
        remarks[j] = clone_element[j].querySelector("#remarks").value;

        // 修理内容について
        sympromps_buff[j] = clone_element[j].querySelector('input[name="symptoms"]:checked').value;
        if(sympromps_buff[j] == 0){
            sympromps[j] = clone_element[j].querySelector('textarea[name="symptoms"]').value;
        }else{
            sympromps[j] = "納品のみ";
            sympromps_name[j] = clone_element[j].querySelector('input[name="symptoms_name"]').value;
            sympromps_count[j] = clone_element[j].querySelector('input[name="symptoms_number"]').value;
        }

        // 画像について
        // 複数県注文するときは画像なしにする
        machine_image[j] = "なし";


    }

    for(let k=0; k<i; k++){
        // 数量・単位・納期のどれかが空なら送信できないようにする
        if(sympromps[k] == '' || sympromps[k] == '  個' ) return false;
    }

    document.getElementById(`sub`).remove();
    if(i < 3)document.getElementById(`add`).remove();
    let doPostMessage = document.getElementById('dopost');
    doPostMessage.innerHTML = '送信中です';
    
    for(let k=0; k<i; k++){
        let sympromps_text;
        if(sympromps[k] == '納品のみ'){
            sympromps_text =`${sympromps[k]}\n 商品名：${sympromps_name[k]}\n 個数：${sympromps_count[k]}`;
        }else{
            sympromps_text = sympromps[k];
        }

        msg = `【修理依頼内容】\n注文日時：${Year}年${Month}月${Date1}日${Hour}時${Min}分\n 機械名：${machine_name[k]}\n 機種：${machine_model[k]}\n 製造番号：${serial_number[k]}\n 修理内容・症状：${sympromps_text}\n 画像：${machine_image[k]}\n 備考：${remarks[k]}`;
        
        console.log(msg);
        sendText(msg);
    }
    return false;
 
}


let i = 1;
let clone_element = {};
function addForm() {
    if(i >= 3) return;

    // 商品が追加された時点で画像欄を消しておく
    if(i == 1) document.getElementById(`picture`).remove();

    // 複製するHTML要素を取得
    var content_area = document.getElementById(`form_${i-1}`);

    // 複製
    clone_element[i] = content_area.cloneNode(true);
   
    // 複製した要素の属性を編集
    clone_element[i].id = `form_${i}`;

    // 複製したHTML要素をページに挿入
    content_area.after(clone_element[i]);

    // 複製後にフォームをクリア
    clone_element[i].reset();

    document.getElementById(`sub`).remove();
    document.getElementById(`add`).remove();

    // 商品 3 で追加の注文ボタンを消す
    if(i == 2) document.getElementById(`add`).remove();


    i++;

    var new_element = document.createElement('p');
    new_element.textContent = `商品${i}`;
    new_element.className = "ttt";

    content_area.after(new_element);
}

function showButtonHandler(){
    if($('input[name="machine_image"]:checked').val() == 1){
        document.getElementById(`add`).style.display = "none";
    }else{
        document.getElementById(`add`).style.display = "";
    }
}