//<li class="list-group-item">Dapibus ac facilisis in <span class="close">x</span></li>

let AddDOM=document.querySelector("#Add")
let UserLiDOM=document.querySelector("#ToDoList")
let myToast=document.querySelector("#mytoast")
let errorDOM=document.querySelector("#error")
AddDOM.addEventListener("click",AddItem)
//fonksiyon başı
function AddItem(event)
{
    let textDOM=document.querySelector("#text") 
    //if başı   
    if(textDOM.value)
    {
    let liDOM= document.createElement("li")
    let spanDOM=document.createElement("span")
    liDOM.innerHTML=textDOM.value
    spanDOM.innerHTML="x"
    liDOM.classList.add("list-group-item")
    spanDOM.classList.add("close")
    UserLiDOM.append(liDOM)
    liDOM.appendChild(spanDOM)
    let option={
        animation:true,
        delay:1000
    }
    let toast=new bootstrap.Toast(myToast)
    toast.show(option) 
    }
    //if sonu
    else {
        let option={
            animation:true,
            delay:1000
        }
        let errorToast=new bootstrap.Toast(errorDOM)
        errorToast.show(option)
        
    }     
}
//fonksiyon sonu


