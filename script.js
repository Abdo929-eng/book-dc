
    
let nameinp=document.getElementById("nam");
let urlinp=document.getElementById("urll");
let Submitbtn=document.getElementById("sub");
let visitbtn=document.getElementById("vis");
let deletbtn=document.getElementById("del");
let formm=document.getElementById("formm");






let arr=[];

if(localStorage.getItem("keyarr")!=null)

arr=JSON.parse( localStorage.getItem("keyarr") )

display();

Submitbtn.onclick=function(){

 if(nameinp.value!=="" && urlinp.value!=="" && nameinp.value!==null && urlinp.value!==null && isValid()){
let object={

name : nameinp.value.trim(),
SiteURL : urlinp.value.trim(),

}
   
arr.push(object);
localStorage.setItem("keyarr",JSON.stringify(arr));
display();

}

clear();
}


function clear(){
nameinp.value=null;
urlinp.value=null;

}
function display(){
    let container="";

for(let i=0;i<arr.length;i++){
container+=`<div class="col-sm-6 col-md-4 col-lg-3">
                <div class="inner">
                    <div class="card">
                        <img src="./image/159202.jpg" class="card-img-top w-100" alt="...">
                        <div class="card-body d-flex flex-column">
                          <p>index :  ${i} </p>
                          <p>WebsiteName :  ${arr[i].name} </p>
                          <p>Url :${arr[i].SiteURL} </p>
                          <div class="card-footer d-flex justify-content-around">
                            <button id="vis" onclick="visit(${i})">Visit</button>
                            <button id="del" onclick="delet(${i})">Delet</button>
                          </div>
                          
                        </div>
                      </div>
                </div>

            </div>

`
}

document.getElementById("sec").innerHTML=container;

}

function delet(index){


    arr.splice(index,1);
    localStorage.setItem("keyarr",JSON.stringify(arr));
    display();

}

function visit(index){
    document.location=arr[index].SiteURL
}

function isValid(){
    let urlReg=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
    let resultValid=urlReg.test(urlinp.value);
    let palert=document.getElementById("palert")
    if(resultValid){

       urlinp.classList.add("is-valid");
       urlinp.classList.remove("is-invalid");
        palert.classList.add("d-none");

        return true;
    }
    else{

        urlinp.classList.add("is-invalid");
        urlinp.classList.remove("is-valid");
        palert.classList.remove("d-none");
        return false;
    }

}

