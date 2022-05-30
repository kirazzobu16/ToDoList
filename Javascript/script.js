//<li class="list-group-item">Dapibus ac facilisis in <span class="close">x</span></li>

let AddDOM=document.querySelector("#Add")
let UserLiDOM=document.querySelector("#ToDoList")
let myToast=document.querySelector("#mytoast")
let errorDOM=document.querySelector("#error")
let DeleteDOM=document.querySelector("#delete")
AddDOM.addEventListener("click",AddItem)
//fonksiyon başı
function AddItem(event)
{
    let textDOM=document.querySelector("#text") 
    let liDOM= document.createElement("li")
    let spanDOM=document.createElement("span")
    //if başı   
    if(textDOM.value)
    {
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
    spanDOM.addEventListener("click",DeleteItem)
    function DeleteItem() {
        spanDOM.remove()
        liDOM.remove()
        let option={
            animation:true,
            delay:1000
        }
        let DeleteToast=new bootstrap.Toast(DeleteDOM)
        DeleteToast.show(option) 
    
    }
}
//fonksiyon sonu



