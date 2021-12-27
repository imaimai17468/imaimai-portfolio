function credit_click(department){
    let department_list = [".m", ".e", ".d", ".j", ".c"];
    let department_list_ = ["m", "e", "d", "j", "c"];
    let all_list = document.querySelectorAll(department_list[department]);
    let credit_list = document.getElementsByClassName(department_list_[department] + "_credit");
    let all_credit = document.getElementById("credit_count_" + department_list_[department]);
    let detail_credit = document.getElementById("credit_detail_" + department_list_[department]);
    let required_credit = document.getElementById("credit_required_" + department_list_[department]);
    let tokubetu_credit = document.getElementById("credit_tokubetu_" + department_list_[department]);
    let credit_countdown = document.getElementById("credit_countdown_" + department_list_[department]);
    let ippan_countdown = document.getElementById("ippan_countdown_" + department_list_[department]);
    let senmon_countdown = document.getElementById("senmon_countdown_" + department_list_[department]);

    let credit_count = 0;
    let ippan = 0, senmon = 0, required = 0;
    let tokubetu = 0;
    for(let i = 0; i < all_list.length; i++){
        if(all_list[i].checked && !(all_list[i].classList.contains("tokubetu") || all_list[i].classList.contains("sikaku"))){
            let credit_value = parseInt(credit_list[i].innerHTML);
            credit_count += credit_value;
        }

        if(all_list[i].classList.contains("normal") && all_list[i].checked){
            ippan += parseInt(credit_list[i].innerHTML);
        }
            
        if(all_list[i].classList.contains("special") && all_list[i].checked){
            senmon += parseInt(credit_list[i].innerHTML);
        }
        
        if(all_list[i].classList.contains("required") && all_list[i].checked){
            required += parseInt(credit_list[i].innerHTML);
        }

        if((all_list[i].classList.contains("tokubetu") || all_list[i].classList.contains("sikaku")) && all_list[i].checked){
            tokubetu += parseInt(credit_list[i].innerHTML);
        }
    }
    tokubetu = Math.min(10, tokubetu);

    credit_count += tokubetu;
    all_credit.innerText = String(credit_count);
    detail_credit.innerText = "一般 : " + String(ippan) + " 単位 / 専門 : " + String(senmon) + " 単位";
    tokubetu_credit.innerText = "特別学修 : " + String(tokubetu) + " 単位";
    required_credit.innerText = "必修 : " + String(required) + " 単位";
    

    if(167 - credit_count < 0){
        credit_countdown.innerText = "[全体] 167 単位から " + String(credit_count - 167)  + "単位余分に取得";
    }else{
        credit_countdown.innerText = "[全体] 167 単位まで残り "  + String(167 - credit_count) + " 単位";
    }

    if(75 - ippan < 0){
        ippan_countdown.innerText = "[一般] 75 単位から " + String(ippan - 75)  + "単位余分に取得";
    }else{
        ippan_countdown.innerText = "[一般] 75 単位まで残り "  + String(75 - ippan) + " 単位";
    }

    if(82 - senmon < 0){
        senmon_countdown.innerText = "[専門] 82 単位から " + String(senmon - 82)  + "単位余分に取得";
    }else{
        senmon_countdown.innerText = "[専門] 82 単位まで残り "  + String(82 - senmon) + " 単位";
    }
}