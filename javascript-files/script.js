var userDetailsArray = [
    new UserDetails({ name: "Vijay Prakash", score: 34, email: "vijay@technovert.com" }),
    new UserDetails({ name: "Sashi Pagadala", score: 21, email: "sashi@technovert.com" }),
    new UserDetails({ name: "Puneeth Satwik", score: 25, email: "puneeth@technovert.com" }),
    new UserDetails({ name: "Varun Raj", score: 41, email: "varun@technovert.com" }),
    new UserDetails({ name: "Mohammed Asad", score: 34, email: "asad@technovert.com" }),
    new UserDetails({ name: "Abdul Rahman", score: 98, email: "rahman@technovert.com" })
];
var table = document.getElementById("myTable");
var tableBody = table.getElementsByTagName('tbody')[0];
for (var rowIndex = 0; rowIndex < userDetailsArray.length; rowIndex++) {
    var row = tableBody.insertRow(rowIndex);
    row.insertCell(0).innerHTML = '<input type="checkbox"></input> <label></label>';
    row.insertCell(1).textContent = userDetailsArray[rowIndex].name;
    row.insertCell(2).textContent = userDetailsArray[rowIndex].score;
    row.insertCell(3).textContent = userDetailsArray[rowIndex].email;
}
var optionAll = document.getElementById("option-all");
var checkboxes = document.querySelectorAll("input[type=checkbox]");
optionAll.addEventListener('change', function () {
    if (optionAll.checked) {
        for (var _i = 0, checkboxes_1 = checkboxes; _i < checkboxes_1.length; _i++) {
            var checkbox = checkboxes_1[_i];
            checkbox.checked = true;
        }
    }
    else {
        for (var _a = 0, checkboxes_2 = checkboxes; _a < checkboxes_2.length; _a++) {
            var checkbox = checkboxes_2[_a];
            checkbox.checked = false;
        }
    }
});
var button = document.getElementById("myButton");
button.addEventListener('click', function () {
    var maxNumber = 0, count = 0, sum = 0, index = 0, average = 0;
    var flag = false;
    for (var _i = 0, checkboxes_3 = checkboxes; _i < checkboxes_3.length; _i++) {
        var checkbox = checkboxes_3[_i];
        if (checkbox.checked) {
            flag = true;
            sum += (userDetailsArray[index].score);
            count += 1;
            if (maxNumber < (userDetailsArray[index].score)) {
                maxNumber = (userDetailsArray[index].score);
            }
        }
        index += 1;
        if (index == userDetailsArray.length) {
            break;
        }
    }
    average = (flag) ? (sum / count) : 0;
    document.getElementById('avgValue').innerHTML = (average).toString();
    document.getElementById('maxValue').innerHTML = (maxNumber).toString();
});
var searchbox = document.getElementById('search');
searchbox.addEventListener('keyup', function () {
    var searchValue = document.getElementById('search').value;
    if (searchValue != "") {
        for (var rowIndex = 1, row; row = table.rows[rowIndex]; rowIndex++) {
            for (var colIndex = 1, col; col = row.cells[colIndex]; colIndex++) {
                var tdValue = table.rows[rowIndex].cells[colIndex].innerHTML;
                if (tdValue.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0) {
                    table.rows[rowIndex].cells[colIndex].style.backgroundColor = 'yellow';
                    table.rows[rowIndex].cells[colIndex].style.color = 'red';
                    table.rows[rowIndex].cells[colIndex].style.borderColor = 'red';
                }
                else {
                    removeHighlightForRow(rowIndex, colIndex);
                }
            }
        }
    }
    else {
        for (var rowIndex = 1, row; row = table.rows[rowIndex]; rowIndex++) {
            for (var colIndex = 1, col; col = row.cells[colIndex]; colIndex++) {
                var tdValue = table.rows[rowIndex].cells[colIndex].innerHTML;
                if (tdValue.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0) {
                    removeHighlightForRow(rowIndex, colIndex);
                }
            }
        }
    }
});
function removeHighlightForRow(rowIndex, colIndex) {
    table.rows[rowIndex].cells[colIndex].style.backgroundColor = 'transparent';
    table.rows[rowIndex].cells[colIndex].style.color = 'white';
    table.rows[rowIndex].cells[colIndex].style.borderColor = 'white';
}
function isAllChecked() {
    var _loop_1 = function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (checkbox.checked == false) {
                optionAll.checked = false;
            }
        });
    };
    for (var _i = 0, checkboxes_4 = checkboxes; _i < checkboxes_4.length; _i++) {
        var checkbox = checkboxes_4[_i];
        _loop_1(checkbox);
    }
}
isAllChecked();
