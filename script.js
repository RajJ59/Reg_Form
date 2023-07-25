let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];

let a = document.getElementById('name');
let b = document.getElementById('email');
let c = document.getElementById('contact');
let d = document.getElementById('blood-grp');

let n = 1;
let x = 0 ;
AddRow = () =>{
   

    if(a.value == '' || b.value == '' || c.value == '' || d.value == ''){
        alert('Please Enter all the details')
    }
    else{
        let Add = document.getElementById('table');
        let New = Add.insertRow(n);
    
        list1[x] = document.getElementById('name').value;
        list2[x] = document.getElementById('email').value;
        list3[x] = document.getElementById('contact').value;
        list4[x] = document.getElementById('blood-grp').value;
    
        let cel1 = New.insertCell(0);
        let cel2 = New.insertCell(1);
        let cel3 = New.insertCell(2);
        let cel4 = New.insertCell(3);

        cel1.innerHTML = list1[x];
        cel2.innerHTML = list2[x];
        cel3.innerHTML = list3[x];
        cel4.innerHTML = list4[x];
    }

    

    n++;
    x++;

    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
    

}
