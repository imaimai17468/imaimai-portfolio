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
    let date = {};
    let date_buff = {};
    let note = {};


    item_name[0] = $('input[name="item_name"]').val();
    note[0] = document.getElementById("note").value;

    //個数について
    if($('input[name="num"]:checked').val()== 0){
        num[0] = "いつもの個数";
    }
    else if($('input[name="num"]:checked').val()== 1){
        num[0] = "最小ロット";
    }else{
        num[0] = $('input[name="input_num"]').val();
    }

    //納期について
    if($('input[name="date"]:checked').val()== 0){
        date[0] = "急ぐ";
    }
    else if($('input[name="date"]:checked').val()== 1){
        date[0] = "急がない";
    }else{
        date[0] = $('input[name="input_date"]').val();
    }
    
    
    for(let j=1; j<i; j++){

        item_name[j] = clone_element[j].querySelector("#item_name").value;
        note[j] = clone_element[j].querySelector("#note").value;
        num_buff[j] =  clone_element[j].querySelector('input[name="num"]:checked').value;
        date_buff[j] = clone_element[j].querySelector('input[name="date"]:checked').value;

        if(num_buff[j] == 0){
            num[j] = "いつもの個数";
        }
        else if(num_buff[j] == 1){
            num[j] = "最小ロット";
        }else{
            num[j] = clone_element[j].querySelector("#input_num").value;
        }
    
        //納期について
        if(date_buff[j] == 0){
            date[j] = "急ぐ";
        }
        else if(date_buff[j] == 1){
            date[j] = "急がない";
        }else{
            date[j] = clone_element[j].querySelector("#input_date").value ;
        }

    }
        
    console.log(i);
    for(let k=0; k<i; k++){
        msg = `【注文内容】\n注文日時：${Year}年${Month}月${Date1}日${Hour}時${Min}分\n 商品名：${item_name[k]}\n 個数：${num[k]}\n 納期：${date[k]}\n 備考：${note[k]}`;
        console.log(msg);
        syncDelay(5000);
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
    
}

let date = document.querySelector(`input[type='date'][name='input_date']`);
date.addEventListener(`change`, () => {
    console.log("change");
    document.querySelector(`#specify_date`).innerHTML = date.value;
});

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