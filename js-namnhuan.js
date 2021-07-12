function kiemtra() {
    let a = document.getElementById('input').value;
    let text = "";
    if (a % 4 == 0 && a % 100 != 0 || a % 100 == 0 && a % 400 == 0){
        text = "Năm này là năm nhuận";
    } else {
        text = "Năm này không phải năm nhuận";
    }
    document.getElementById('output').innerHTML = text;
}