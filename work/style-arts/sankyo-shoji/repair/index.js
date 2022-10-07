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
    //let Sec = now.getSeconds();
    
    let msg
    let machine_name = {};
    let machine_model = {};
    let serial_number = {};
    let sympromps = {};
    let sympromps_name = {};
    let sympromps_count = {};
    let machine_image = {};
    let remarks = {};

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
    if($('input[name="machine_image"]:checked').val()== 0){
        machine_image[0] = "なし";
    }
    else{
        machine_image[0] = "あり";
    }
    
    for(let j=1; j<i; j++){

        item_name[j] = clone_element[j].querySelector("#item_name").value;
        note[j] = clone_element[j].querySelector("#note").value;

        // 機械名について
        machine_name[j] = clone_element[j].querySelector("#machine_name").value;
        // 機種について
        machine_model[j] = clone_element[j].querySelector("#machine_model").value;
        // 製造番号について
        serial_number[j] = clone_element[j].querySelector("#serial_number").value;
        // 備考について
        remarks[j] = clone_element[j].querySelector("#remarks").value;

        
        sympromps_buff[j] = clone_element[j].querySelector('input[name="symptoms"]:checked').value;
        machine_image_buff[j] =clone_element[j].querySelector('input[name="machine_image"]:checked').value;

        // 修理内容について
        if(sympromps_buff[j] == 0){
            sympromps[j] = clone_element[j].querySelector('extarea[name="symptoms"]').value;
        }else{
            sympromps[j] = "納品のみ";
            sympromps_name[j] = clone_element[j].querySelector('input[name="symptoms_name"]').value;
            sympromps_count[j] = clone_element[j].querySelector('input[name="symptoms_number"]').value;
        }

        //画像について
        if(machine_image_buff[j] == 0){
            machine_image[j] = "なし";
        }
        else if(machine_image_buff[j] == 1){
            machine_image[j] = "あり";
        }

    }

    for(let k=0; k<i; k++){
        // 数量・単位・納期のどれかが空なら送信できないようにする
        if(sympromps[k] == '' || sympromps[k] == '  個' ) return false;
    }

    document.getElementById(`sub`).remove();
    // document.getElementById(`add`).remove();
    let doPostMessage = document.getElementById('dopost');
    doPostMessage.innerHTML = '送信中です';
    
    for(let k=0; k<i; k++){
        let sympromps_text;
        if(sympromps[k] == '納品のみ'){
            sympromps_text =`${sympromps[k]}\n 商品名：${sympromps_name[k]}\n 個数：${sympromps_count[k]}`;
        }else{
            sympromps_text = sympromps[k];
        }

        msg = `【注文内容】\n注文日時：${Year}年${Month}月${Date1}日${Hour}時${Min}分\n 機械名：${machine_name[k]}\n 機種：${machine_model[k]}\n 製造番号：${serial_number[k]}\n 修理内容・症状：${sympromps_text}\n 画像：${machine_image[k]}\n 備考：${remarks[k]}`;
        
        console.log(msg);
        sendText(msg);
    }
    return false;
 
}

// 修理フォームを追加したい場合は以下のコードを修理フォーム用に修正
let i = 1;
let clone_element = {};
// function addForm() {
//     if(i >= 3) return;

//     // 複製するHTML要素を取得
//     var content_area = document.getElementById(`form_${i-1}`);

//     // 複製
//     clone_element[i] = content_area.cloneNode(true);
   
//     // 複製した要素の属性を編集
//     clone_element[i].id = `form_${i}`;

//     // 複製したHTML要素をページに挿入
//     content_area.after(clone_element[i]);

//     // 複製後にフォームをクリア
//     clone_element[i].reset();

//     //clone_element[j].querySelector("#sub").remove();
//     document.getElementById(`sub`).remove();
//     // document.getElementById(`add`).remove();

//     // 商品 3 で追加の注文ボタンを消す
//     // if(i == 2) document.getElementById(`add`).remove();

//     //clone_element[i].querySelector("#num0").onclick = `date_flg0_${i}(this.checked);`

//     i++;

//     var new_element = document.createElement('p');
//     new_element.textContent = `商品${i}`;
//     new_element.className = "ttt";

//     content_area.after(new_element);

//     // 商品の数によってidとnameを変更する
//     var new_deadline_text = document.querySelector(`#form_${i-1} div p span`);
//     // console.log(new_deadline_text);
//     new_deadline_text.setAttribute('id', `deadline_text_${i-1}`);
//     new_deadline_text.setAttribute('name', `deadline_text_${i-1}`);
//     new_deadline_text.innerHTML = ` / `

//     // 商品の数によって納期に関する関数の戻り値を変更する
//     var new_deadline = document.querySelector(`#form_${i-1} input[type='date'][name='deadline_text']`);
//     // console.log(new_deadline);
//     new_deadline.setAttribute('onchange', `date_flg2(${i-1});`);

//     // 商品の数によって入力画像に関する関数の戻り値を変更する
//     var new_image = document.querySelector(`#form_${i-1} input[type='file'][name='input_image']`);
//     console.log(new_image);
//     new_image.setAttribute('onchange', `previewFile(${i-1});`);
// }
