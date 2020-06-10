function check(val, re) {
    if(re.test(val)) {
        return true;
    }
    else {
        return false;
    }
}

function check_id(id) {
    var isID = /^[a-zA-Z0-9]{8,12}$/;
    if (!check(id, isID)) {
        document.getElementsByClassName("text_check")[0].innerHTML = "아이디는 8~12자의 영어(대 or 소문자), 숫자 조합이어야 합니다.";
    }
    else {
        document.getElementsByClassName("text_check")[0].innerHTML = "사용 가능한 아이디입니다. 중복 확인 버튼을 눌러주세요.";
    }
    if (id === "") {
        document.getElementsByClassName("text_check")[0].innerHTML = "필수 항목입니다.";
    }
}

function check_pw(pw) {
    var isPw1 = /[a-zA-Z0-9]/; 
    var isPw2 = /[~!@#$%^&*()_+|<>?:{}]/;

    if (!check(pw, isPw1) || !check(pw, isPw2) || pw.length<8 || pw.length>15) {
        document.getElementsByClassName("text_check")[1].innerHTML = "비밀번호는 8~14자의 영어(대 or 소문자), 숫자, 특수문자 조합이어야 합니다.";
    }
    else {
        document.getElementsByClassName("text_check")[1].innerHTML = "";
    }
    if (pw === "") {
        document.getElementsByClassName("text_check")[1].innerHTML = "필수 항목입니다.";
    }
}

function isOverlap(val) {
    var pw = document.getElementsByClassName("input_password")[0].value;

    if (pw === val) {
        document.getElementsByClassName("text_check")[2].innerHTML = "비밀번호가 일치합니다.";
        document.getElementsByClassName("text_check")[2].style.color = "blue";
    }
    else {
        document.getElementsByClassName("text_check")[2].style.color = "red";
        document.getElementsByClassName("text_check")[2].innerHTML = "비밀번호가 일치하지 않습니다.";
    }

    if (val === "") {
        document.getElementsByClassName("text_check")[2].style.color = "red";
        document.getElementsByClassName("text_check")[2].innerHTML = "필수 항목입니다.";
    }
}

function checkName(name) {
    if (name === "") {
        document.getElementsByClassName("text_check")[3].innerHTML = "필수 항목입니다.";
    }
    else {
        document.getElementsByClassName("text_check")[3].innerHTML = "";
    }
}

function checkBirth(year) {
    var is_year = /[0-9]/;
    if (year==="" || !check(year, is_year) || year.length!==4) {
        document.getElementsByClassName("text_check")[4].innerHTML = "태어난 해 4자리 숫자를 정확히 입력해주세요.";
    }
    else {
        document.getElementsByClassName("text_check")[4].innerHTML = "태어난 월을 선택해주세요.";
    }
}

function checkMonth(month) {
    if (month === "월") {
        document.getElementsByClassName("text_check")[4].innerHTML = "태어난 월을 선택해주세요.";
    }
    else {
        document.getElementsByClassName("text_check")[4].innerHTML = "태어난 정확한 일(2자리)을 입력해주세요.";
    }
}

function checkDay(day) {
    var month = document.getElementsByClassName("birth_month")[0].value;
    var year = document.getElementsByClassName("birth_year")[0].value;
    year = parseInt(year);
    day = parseInt(day);
    month = parseInt(month);
    end_day = new Date(year, month, 0).getDate()

    if (day > end_day) {
        document.getElementsByClassName("text_check")[4].innerHTML = "생년월일을 다시 한 번 확인해주세요.";
    }
    else {
        document.getElementsByClassName("text_check")[4].innerHTML = "";
    }
}

function checkPhone(phone) {
    var isPhone = /^\d{3}\d{3,4}\d{4}$/;

    if (!isPhone.test(phone)) {
        document.getElementsByClassName("text_check")[5].innerHTML = "핸드폰 번호를 다시 한 번 확인해주세요";
    }
    else {
        document.getElementsByClassName("text_check")[5].innerHTML = "";
    }

    if (phone.includes("-")==true) {
        document.getElementsByClassName("text_check")[5].innerHTML = "-를 제외해주세요.";
    }
    else {
        document.getElementsByClassName("text_check")[5].innerHTML = "";
    }
}

function joinConfirm() {
    alert("회원가입이 완료되었습니다.")
}