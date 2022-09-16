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
    console.log("送信完了");
    let now = new Date();
    let Year = now.getFullYear();
    let Month = now.getMonth()+1;
    let Date1 = now.getDate();
    let Hour = now.getHours();
    let Min = now.getMinutes();
    //let Sec = now.getSeconds();
    
    let msg
    let item_name = {};
    let num = {};
    let num_buff = {};
    let unit = {};
    let unit_buff = {};
    let date = {};
    let date_buff = {};
    let note = {};


    item_name[0] = $('input[name="item_name"]').val();
    note[0] = document.getElementById("note").value;
    console.log($('input[name="item_number_text"]').val());

    //個数について
    if($('input[name="item_number"]:checked').val()== 0){
        num[0] = $('input[name="item_number_text"]').val();
    }
    else if($('input[name="item_number"]:checked').val()== 1){
        num[0] = "1（最小個数）";
    }
    console.log(num[0]);

    //単位について
    if($('input[name="unit"]:checked').val()== 0){
        unit[0] = "個";
    }
    else if($('input[name="unit"]:checked').val()== 1){
        unit[0] = "箱";
    }
    else if($('input[name="unit"]:checked').val()== 2){
        unit[0] = "枚";
    }
    else if($('input[name="unit"]:checked').val()== 3){
        unit[0] = "式";
    }
    else if($('input[name="unit"]:checked').val()== 4){
        unit[0] = $('input[name="unit_text"]').val();
    }

    //納期について
    if($('input[name="deadline"]:checked').val()== 0){
        date[0] = "次回訪問日（10日以内）";
    }
    else if($('input[name="deadline"]:checked').val()== 1){
        date[0] = $('input[name="deadline_text"]').val();
    }
    
    
    for(let j=1; j<i; j++){

        item_name[j] = clone_element[j].querySelector("#item_name").value;
        note[j] = clone_element[j].querySelector("#note").value;
        num_buff[j] =  clone_element[j].querySelector('input[name="item_number"]:checked').value;
        unit_buff[j] = clone_element[j].querySelector('input[name="unit"]:checked').value
        date_buff[j] = clone_element[j].querySelector('input[name="deadline"]:checked').value;

        // 数量について
        if(num_buff[j] == 0){
            num[j] = clone_element[j].querySelector("#item_number_text").value;
        }
        else if(num_buff[j] == 1){
            num[j] = "1（最小個数）";
        }

        // 単位について
        if(unit_buff[j] == 0){
            unit[j] = "個";
        }
        else if(unit_buff[j] == 1){
            unit[j] = "箱";
        }
        else if(unit_buff[j] == 2){
            unit[j] = "枚";
        }
        else if(unit_buff[j] == 3){
            unit[j] = "式";
        }
        else if(unit_buff[j] == 4){
            unit[j] = clone_element[j].querySelector("#unit_text").value;
        }
    
        //納期について
        if(date_buff[j] == 0){
            date[j] = "次回訪問日（10日以内）";
        }
        else if(date_buff[j] == 1){
            date[j] = clone_element[j].querySelector("#deadline_text").value ;
        }

    }
        
    // console.log(i);
    for(let k=0; k<i; k++){
        msg = `【注文内容】\n注文日時：${Year}年${Month}月${Date1}日${Hour}時${Min}分\n 商品名：${item_name[k]}\n 個数：${num[k]}\n 単位：${unit[k]}\n 納期：${date[k]}\n 備考：${note[k]}`;
        console.log(msg);
        sendText(msg);
        // syncDelay(5000);
        //setTimeout(sendText(msg), 1000);
    }
    return false;
 
}

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

let i = 1;
let clone_element = {};

function addForm() {
    // 複製するHTML要素を取得
    var content_area = document.getElementById(`form_${i-1}`);
    
    if(i >= 3){
        // var over_text = document.createElement('p');
        // over_text.textContent = `一度に3個以上の注文はできません`;
        // content_area.after(over_text);
        return;
    }

    // 複製
    clone_element[i] = content_area.cloneNode(true);
   
    // 複製した要素の属性を編集
    clone_element[i].id = `form_${i}`;

    // 複製したHTML要素をページに挿入
    content_area.after(clone_element[i]);

    // 複製後にフォームをクリア
    clone_element[i].reset();

    //clone_element[j].querySelector("#sub").remove();
    document.getElementById(`sub`).remove();
    document.getElementById(`add`).remove();

    //clone_element[i].querySelector("#num0").onclick = `date_flg0_${i}(this.checked);`

    i++;

    var new_element = document.createElement('p');
    new_element.textContent = `商品${i}`;
    new_element.className = "ttt";

    content_area.after(new_element);

    var new_deadline_text = document.querySelector(`#form_${i-1} div p span`);
    // console.log(new_deadline_text);
    new_deadline_text.setAttribute('id', `deadline_text_${i-1}`);
    new_deadline_text.setAttribute('name', `deadline_text_${i-1}`);
    new_deadline_text.innerHTML = ` / `

    var new_deadline = document.querySelector(`#form_${i-1} input[type='date'][name='deadline']`);
    console.log(new_deadline);
    new_deadline.setAttribute('onchange', `date_flg2(${i-1});`)
}

function date_flg2(index){
    var date = document.querySelector(`#form_${index} input[type='date'][name='deadline']`);
    console.log("change " + index);
    document.querySelector(`#deadline_text_${index}`).innerHTML = date.value;
}


/*
//clone_element[j].querySelector('input[name="num"]:checked').value

//「数値入力」以外のラジオボタンが選択されているときは数値入力をdisableに
function num_flg0(ischecked){
    if(ischecked == true){
        clone_element[i].querySelector("#input_num").disabled = true;
        //document.getElementById(`input_num`).disabled = true;
    }
}

function num_flg1(ischecked){
    if(ischecked == true){
        clone_element[i].querySelector("#input_num").disabled = true;
    }
}

function num_flg2(ischecked){
    if(ischecked == true){
        clone_element[i].querySelector("#input_num").disabled = false;
    } else {
        clone_element[i].querySelector("#input_num").disabled = true;
    }
}

//「日付入力」以外のラジオボタンが選択されているときは日付入力をdisableに
function date_flg0(ischecked){
    if(ischecked == true){
        document.getElementById("input_date").disabled = true;
    }
}

function date_flg1(ischecked){
    if(ischecked == true){
        document.getElementById("input_date").disabled = true;
    }
}

function date_flg2(ischecked){
    if(ischecked == true){
        document.getElementById("input_date").disabled = false;
    } else {
        document.getElementById("input_date").disabled = true;
    }
}
*/