function ktten() {
    let ten = document.getElementById('txtTen').value.trim();
    let regexten = /^[A-Z]{1}[a-zA-Z]+( [A-Z]{1}[a-zA-Z]+)*$/;
    if (ten == '' || regexten.test(ten) == false) {
        document.getElementById('helpTen').innerHTML = 'Không được rỗng và viết hoa đầu tiên'
        return false;
    }
    document.getElementById('helpTen').innerHTML = '*';
    return true;
}
document.getElementById('txtTen').onblur = ktten;

function ktso() {
    let rong = document.getElementById('txtSo').value;
    let so = parseInt(document.getElementById('txtSo').value);

    if (rong == '' || so > 100 || so < 1) {
        document.getElementById('helpSo').innerHTML = "Số không được rỗng và phải từ 1 đến 100";
        return false;
    }
    document.getElementById('helpSo').innerHTML = '*';
    return true;
}
document.getElementById('txtSo').onblur = ktso;

function ktdc() {
    let dc = document.getElementById('txtDC').value.trim();
    let regexdc = /^[A-Z]{1}[a-zA-Z0-9]+( [A-Z]{1}[a-zA-Z0-9]+)*$/;
    if (dc == '' || regexdc.test(dc) == false) {
        document.getElementById('helpDC').innerHTML = 'Không được rỗng và viết hoa đầu tiên'
        return false;
    }
    document.getElementById('helpDC').innerHTML = '*';
    return true;
}
document.getElementById('txtDC').onblur = ktdc;

function ktngay() {
    let ngay = document.getElementById('txtNgay').value;
    let d1 = new Date(ngay);
    let d2 = new Date();
    d2.setDate(d2.getDate() + 6);
    if (ngay == '' || d1 < d2) {
        document.getElementById('helpNgay').innerHTML = 'Ngày tập trung sau ngày hiện tại 7 ngày'
        return false;
    }
    document.getElementById('helpNgay').innerHTML = '*';
    return false;
}
document.getElementById('txtNgay').onblur = ktngay;


function ktdt() {
    let dt = document.getElementById('txtDT').value;
    let regexdt = /^0[0-9]{9}$/;
    if (dt == '' || regexdt.test(dt) == false) {
        document.getElementById('helpDT').innerHTML = 'Phải đúng cú pháp 0xxx-xxx-xxx';
        return false;
    }
    document.getElementById('helpDT').innerHTML = '*';
    return true;
}
document.getElementById('txtDT').onblur = ktdt

document.getElementById('btnLuu').onclick = function () {
    if (!ktten() || !ktso() || !ktdc() || !ktngay() || !ktdt()) {
        return false;
    }
    let ten = document.getElementById('txtTen').value.trim();
    let rong = document.getElementById('txtSo').value;
    let dc = document.getElementById('txtDC').value.trim();
    let ngay = document.getElementById('txtNgay').value;
    let dt = document.getElementById('txtDT').value;
    let anh = document.getElementById('txtAnh').value;

    let tb = document.getElementById('tablebody');
    let r = '<tr><td>' + (tb.rows.length) + '</td><td>' + ten + '</td><td>' + rong + '</td><td>' + dc + '</td><td>' + ngay + '</td><td>' + dt + '</td><td>' + anh + '</td</tr>'
    let newRow = tb.insertRow(tb.rows.length);
    newRow.innerHTML = r;
    return true;
}