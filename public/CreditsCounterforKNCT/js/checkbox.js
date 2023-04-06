function all_checked(condition, department){
    let department_list = [".m", ".e", ".d", ".j", ".c"];
    let all_list = document.querySelectorAll(department_list[department]);
    for(let i in all_list){
        all_list[i].checked = condition;
    }
}

function normal_checked(condition, department){
    let department_list = [".m", ".e", ".d", ".j", ".c"];
    let all_list = document.querySelectorAll(".normal.required" + department_list[department]);
    for(let i in all_list){
        all_list[i].checked = condition;
    }
}

function special_checked(condition, department){
    let department_list = [".m", ".e", ".d", ".j", ".c"];
    let all_list = document.querySelectorAll(".special.required" + department_list[department]);
    for(let i in all_list){
        all_list[i].checked = condition;
    }
}

function required_checked(condition, department){
    let department_list = [".m", ".e", ".d", ".j", ".c"];
    let all_list = document.querySelectorAll(".required" + department_list[department]);
    for(let i in all_list){
        all_list[i].checked = condition;
    }
}

function elective_checked(condition, department){
    let department_list = [".m", ".e", ".d", ".j", ".c"];
    let all_list = document.querySelectorAll(".elective" + department_list[department]);
    for(let i in all_list){
        all_list[i].checked = condition;
    }
}