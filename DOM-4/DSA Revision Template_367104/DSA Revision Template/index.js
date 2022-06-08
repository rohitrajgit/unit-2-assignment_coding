document.querySelector("form").addEventListener("submit",mydsa)
let arrobj=JSON.parse(localStorage.getItem("data"))||[]
function mydsa(event){
    event.preventDefault()

    let obj={
        Title:document.querySelector("#title").value,
        Link:document.querySelector("#link").value,
        select:document.querySelector("#difficulty").value,
    }
    arrobj.push(obj);
    displaytable(arrobj)

    localStorage.setItem("data",JSON.stringify(arrobj))
}

function displaytable(arrobj){
    document.querySelector("tbody").innerHTML="";
    arrobj.forEach(function(el){
        let tr=document.createElement("tr")

        let td1=document.createElement("td")
        td1.innerText=el.Title;
        let td2=document.createElement("td")
        td2.innerText=el.Link;
        let td3=document.createElement("td")
        td3.innerText=el.select;
        let td4=document.createElement("td")
        if(td3.innerText=="Easy"){
            td4.innerText="NO"
        }
        else{
            td4.innerText="Yes"
        }
        let td5=document.createElement("td")
        td5.innerText="DELETE"
        td5.style.backgroundColor="red"
        td5.style.color="white"
        td5.addEventListener("click",delfunction)
        tr.append(td1,td2,td3,td4,td5)

        document.querySelector("tbody").append(tr);
    })
}

function delfunction(event){
   event.target.parentNode.remove();
}