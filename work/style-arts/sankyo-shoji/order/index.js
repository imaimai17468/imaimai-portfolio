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
    
    let now = new Date();
    let Year = now.getFullYear();
    let Month = now.getMonth()+1;
    let Date1 = now.getDate();
    let Hour = now.getHours();
    let Min = now.getMinutes();
    
    let msg
    let item_name = {};
    let num = {};
    let num_buff = {};
    let unit = {};
    let unit_buff = {};
    let date = {};
    let date_buff = {};
    let file = {};
    let file_buff = {};
    let order_name = {};
    let note = {};


    item_name[0] = $('input[name="item_name"]').val();
    note[0] = document.getElementById("note").value;
    order_name[0] = document.getElementById("order_name").value;

    //個数について
    if($('input[name="item_number"]:checked').val()== 0){
        num[0] = $('input[name="item_number_text"]').val();
    }
    else if($('input[name="item_number"]:checked').val()== 1){
        num[0] = "1";
    }

    //単位について
    if($('input[name="unit"]:checked').val()== 0){
        unit[0] = "個/枚";
    }
    else if($('input[name="unit"]:checked').val()== 1){
        unit[0] = "箱/式";
    }
    else if($('input[name="unit"]:checked').val()== 2){
        unit[0] = "その他";
    }

    //納期について
    if($('input[name="deadline"]:checked').val()== 0){
        date[0] = "次回訪問日（10日以内）";
    }
    else if($('input[name="deadline"]:checked').val()== 1){
        date[0] = document.getElementById("deadline_text_until_0").value + "までに";;
    }
    else if($('input[name="deadline"]:checked').val()== 2){
        date[0] = document.getElementById("deadline_text_direct_0").value + "（直送）";
    }
    
    //画像について
    if(i > 1 || $('input[name="file"]:checked').val()== 0){
        file[0] = "なし";
    }
    else{
        file[0] = "あり";
    }
    
    for(let j=1; j<i; j++){

        item_name[j] = clone_element[j].querySelector("#item_name").value;
        note[j] = clone_element[j].querySelector("#note").value;
        num_buff[j] =  clone_element[j].querySelector('input[name="item_number"]:checked').value;
        unit_buff[j] = clone_element[j].querySelector('input[name="unit"]:checked').value
        date_buff[j] = clone_element[j].querySelector('input[name="deadline"]:checked').value;
        order_name[j] = clone_element[j].querySelector("#order_name").value;

        // 数量について
        if(num_buff[j] == 0){
            num[j] = clone_element[j].querySelector("#item_number_text").value;
        }
        else if(num_buff[j] == 1){
            num[j] = "1";
        }

        // 単位について
        if(unit_buff[j] == 0){
            unit[j] = "個/枚";
        }
        else if(unit_buff[j] == 1){
            unit[j] = "箱/式";
        }
        else if(unit_buff[j] == 2){
            unit[j] = "その他";
        }
    
        //納期について
        if(date_buff[j] == 0){
            date[j] = "次回訪問日（10日以内）";
        }
        else if(date_buff[j] == 1){
            date[j] = clone_element[j].querySelector(`#deadline_text_until_${j}`).value + "までに";
        }
        else if(date_buff[j] == 2){
            date[j] = clone_element[j].querySelector(`#deadline_text_direct_${j}`).value + "（直送）";
        }

        //画像について
        file[j] = 'なし';

    }

    for(let k=0; k<i; k++){
        // 数量・単位・納期のどれかが空なら送信できないようにする
        if(item_name[k] == '' || num[k] == '' || unit[k] == '' || date[k] == '') return false;
    }

    document.getElementById(`sub`).remove();
    if(i < 3) document.getElementById(`add`).remove();
    let doPostMessage = document.getElementById('dopost');
    doPostMessage.innerHTML = '送信中です';
    
    for(let k=0; k<i; k++){
        msg = `【注文内容】\n注文日時：${Year}年${Month}月${Date1}日${Hour}時${Min}分\n 商品名：${item_name[k]}\n 個数：${num[k]}\n 単位：${unit[k]}\n 納期：${date[k]}\n 画像：${file[k]}\n 納品先名：${order_name[k]}\n 備考：${note[k]}`;

        console.log(msg);
        sendText(msg);
        console.log('送信完了');
        
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
    document.getElementById(`dopost`).remove();

    // 商品 3 で追加の注文ボタンを消す
    if(i == 2) document.getElementById(`add`).remove();

    i++;

    var new_element = document.createElement('p');
    new_element.textContent = `商品${i}`;
    new_element.className = "ttt";

    content_area.after(new_element);

    // 商品の数によってidとnameを変更する
    var new_deadline_until_text = document.querySelector(`#form_${i-1} #deadline_text_until_${i-2}`);
    new_deadline_until_text.setAttribute('id', `deadline_text_until_${i-1}`);
    new_deadline_until_text.setAttribute('name', `deadline_text_until_${i-1}`);
    var new_deadline_direct_text = document.querySelector(`#form_${i-1} #deadline_text_direct_${i-2}`);
    new_deadline_direct_text.setAttribute('id', `deadline_text_direct_${i-1}`);
    new_deadline_direct_text.setAttribute('name', `deadline_text_direct_${i-1}`);

    // 前の個数、単位、納期の値をコピーする

    // 個数をコピー
    if($(`#form_${i-2}`).find('input[name="item_number"]:checked').val() == 0){
        var old_val = $(`#form_${i-2}`).find('input[name="item_number_text"]').val();
        $(`#form_${i-1}`).find('input[name="item_number_text"]').prop('value', old_val);
    }
    else if($(`#form_${i-2}`).find(`input[name="item_number"]:checked`).val() == 1){
        $(`#form_${i-1}`).find('input[name="item_number"]').val(1).prop('checked', true);
    }

    // 単位をコピー
    if($(`#form_${i-2}`).find(`input[name="unit"]:checked`).val() == 1){
        $(`#form_${i-1}`).find(`input[name="unit"]`).each(function () {
            if($(this).val() == 1){
                $(this).prop('checked', true);
            }
        })
    }else if($(`#form_${i-2}`).find(`input[name="unit"]:checked`).val() == 2){
        $(`#form_${i-1}`).find(`input[name="unit"]`).each(function () {
            if($(this).val() == 2){
                $(this).prop('checked', true);
            }
        })
    }

    // 納期をコピー
    // 個数をコピー
    if($(`#form_${i-2}`).find('input[name="deadline"]:checked').val() == 1){
        var old_val = $(`#form_${i-2}`).find(`input[name="deadline_text_until_${i-2}"]`).val();
        $(`#form_${i-1}`).find(`input[name="deadline_text_until_${i-1}"]`).prop('value', old_val);
        $(`#form_${i-1}`).find(`input[name="deadline"]`).each(function () {
            if($(this).val() == 1){
                $(this).prop('checked', true);
            }
        })
    }
    else if($(`#form_${i-2}`).find(`input[name="deadline"]:checked`).val() == 2){
        var old_val = $(`#form_${i-2}`).find(`input[name="deadline_text_direct_${i-2}"]`).val();
        $(`#form_${i-1}`).find(`input[name="deadline_text_direct_${i-1}"]`).prop('value', old_val);
        $(`#form_${i-1}`).find(`input[name="deadline"]`).each(function () {
            if($(this).val() == 2){
                $(this).prop('checked', true);
            }
        })
    }
}

// オブジェクトが空かどうか
function isEmpty(obj){
    return !Object.keys(obj).length;
}

function showButtonHandler(){
    if($('input[name="file"]:checked').val() == 1){
        document.getElementById(`add`).style.display = "none";
    }else{
        document.getElementById(`add`).style.display = "";
    }
}