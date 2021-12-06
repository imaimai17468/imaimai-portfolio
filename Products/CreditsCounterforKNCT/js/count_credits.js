function credit_click(department){
    let department_list = [".m", ".e", ".d", ".j", ".c"];
    let department_list_ = ["m", "e", "d", "j", "c"];
    let all_list = document.querySelectorAll(department_list[department]);
    let credit_list = document.getElementsByClassName("credit");
    let all_credit = document.getElementById("credit_count_" + department_list_[department]);

    let credit_count = 0;
    for(let i = 0; i < all_list.length; i++){
        if(all_list[i].checked){
            console.log(credit_list[i].innerHTML)
            let credit_value = parseInt(credit_list[i].innerHTML);
            credit_count += credit_value;
        }
    }

    all_credit.innerText = String(credit_count);
    console.log(credit_count);
}