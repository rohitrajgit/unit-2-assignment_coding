// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfunction)

let formtag=document.querySelector("form")
function myfunction(event){
    event.preventDefault()
    var avtar=formtag.image.value
    var name=formtag.name.value
    var batch=formtag.batch.value
    var DSA=formtag.dsa.value
    var cs=formtag.cs.value
    var coding=formtag.coding.value
   
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    let pic=document.createElement("img")
    pic.setAttribute("src",avtar)
    td1.append(pic)
    let td2=document.createElement("td")
    td2.innerHTML=name
    let td3=document.createElement("td")
    td3.innerText=batch
    let td4=document.createElement("td")
    td4.innerText=DSA
    let td5=document.createElement("td")
    td5.innerText=cs
    let td6=document.createElement("td")
    td6.innerText=coding
    let td7=document.createElement("td")
    let obtained=Number(DSA)+Number(cs)+Number(coding);
    let percentage=(obtained/30)*100
    td7.innerText=percentage.toFixed(3)

    let td8=document.createElement("td")
    if(percentage<50)
    {
        td8.innerText="Async"
        td8.style.background="red"
    }
    else{
        td8.innerText="Regular"
    }
    let td9=document.createElement("td")
    td9.innerText="DELETE"
    td9.style.background="green"
    td9.style.cursor='pointer'
    td9.addEventListener("click",deleterow)

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)

    document.querySelector("tbody").append(tr)


}
function deleterow(event){
    event.target.parentNode.remove();
}