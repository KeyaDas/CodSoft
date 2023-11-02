function display(value){
    document.getElementById('view').value +=value;
}
function calcu(){
    try{
        let string = document.getElementById('view').value;
        string = eval(string);
        console.log(string);
        document.getElementById('view').value = string;
    }
    catch(error){
        console.error(error);
    }
}
function power(){
    let a = document.getElementById('view').value;
    a = Math.pow(a, 3);
    document.getElementById('view').value = a;
}

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=> {
    button.addEventListener('click', (e)=> {       
        if(e.target.innerHTML == '%'){
            var a = document.getElementById('view').value;
            var s = parseFloat(a)/100;
            document.getElementById('view').value = s;
        }
        else if(e.target.innerHTML == 'C'){
            document.getElementById('view').value = "";
        }
        else{
            console.log(e.target);
        }
     })
});
