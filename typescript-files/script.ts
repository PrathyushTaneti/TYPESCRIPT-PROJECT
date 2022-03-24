let userDetailsArray:UserDetails[] = [
new UserDetails({ name: "Vijay Prakash", score: 34, email: "vijay@technovert.com" }),
new UserDetails({name:"Sashi Pagadala", score:21, email:"sashi@technovert.com"}),
new UserDetails({name:"Puneeth Satwik", score:25, email:"puneeth@technovert.com"}),
new UserDetails({name:"Varun Raj", score:41, email:"varun@technovert.com"}),
new UserDetails({name:"Mohammed Asad", score:34, email:"asad@technovert.com"}),
new UserDetails({ name: "Abdul Rahman", score: 98, email: "rahman@technovert.com" })
];

var table = document.getElementById("myTable") as HTMLTableElement;
var tableBody = table.getElementsByTagName('tbody')[0] as any;
for (var rowIndex = 0; rowIndex < userDetailsArray.length; rowIndex++) {
    var row = tableBody.insertRow(rowIndex);
    row.insertCell(0).innerHTML = '<input type="checkbox"></input> <label></label>';
    row.insertCell(1).textContent = userDetailsArray[rowIndex].name;
    row.insertCell(2).textContent = userDetailsArray[rowIndex].score;
    row.insertCell(3).textContent = userDetailsArray[rowIndex].email;
}

var optionAll = document.getElementById("option-all") as HTMLInputElement;
var checkboxes = document.querySelectorAll("input[type=checkbox]") as any;

optionAll.addEventListener('change', () => {
    if (optionAll.checked) {
        for (let checkbox of checkboxes) {
            checkbox.checked = true;
        }            
    }
    else{
        for (let checkbox of checkboxes) {
            checkbox.checked = false;
        }            
    }
});

var button = document.getElementById("myButton") as HTMLButtonElement;
button.addEventListener('click', ():void => {
    var maxNumber: number = 0, count: number = 0, sum: number = 0, index: number = 0, average: number = 0;
    var flag: boolean = false;
    for (let checkbox of checkboxes) {
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
    (document.getElementById('avgValue') as HTMLElement).innerHTML = (average).toString();
    (document.getElementById('maxValue') as HTMLElement).innerHTML = (maxNumber).toString(); 
});

var searchbox = document.getElementById('search') as HTMLInputElement;
searchbox.addEventListener('keyup', ():void => {
    let searchValue:string = (document.getElementById('search') as HTMLInputElement).value ;
    if (searchValue != "") {
        for (var rowIndex = 1, row; row = table.rows[rowIndex]; rowIndex++) {
            for (var colIndex = 1, col; col = row.cells[colIndex]; colIndex++) {
                let tdValue: string = table.rows[rowIndex].cells[colIndex].innerHTML;
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
                let tdValue: string = table.rows[rowIndex].cells[colIndex].innerHTML;
                if (tdValue.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0) {
                    removeHighlightForRow(rowIndex, colIndex);
                }
            }
        }
    }
    
}); 

function removeHighlightForRow(rowIndex: number, colIndex: number): void{
    table.rows[rowIndex].cells[colIndex].style.backgroundColor = 'transparent';
    table.rows[rowIndex].cells[colIndex].style.color = 'white';
    table.rows[rowIndex].cells[colIndex].style.borderColor = 'white';
}

function isAllChecked(): void{
    for (let checkbox of checkboxes) {
        checkbox.addEventListener('change', (): void => {
            if (checkbox.checked == false) {
                optionAll.checked = false;
            }
        });
    }
}

isAllChecked();

