//------------- start global
var siteName =document.getElementById('siteName')
var siteUrl =document.getElementById('siteUrl')
var btnAdd =document.getElementById('btnAdd')
var btnUbdate =document.getElementById('btnUbdate')

var prouductcontainer =[]


if(localStorage.getItem('products') !=null){  //3 =>2
        prouductcontainer =JSON.parse(localStorage.getItem('products')) // 3
        displayProduct()
    }


function AddBook(){

    if(NameValidation() === true && UrlValidation() === true){//alert

        var productObj ={ 
            Name:siteName.value ,
            Url:siteUrl.value
        }
        prouductcontainer.push(productObj) 
    
        localStorage.setItem('products',JSON.stringify(prouductcontainer)) 
    
      
    
        displayProduct() 
    
        clearInput() 
    
    }

    }






function displayProduct(){  //2  اخر حاجه ف الخطوه التانية لما تعمل ريفريش اللي انت مسجله بيختفي
    var cartona=`` //2

    for (var i=0; i<prouductcontainer.length;i++){ //2

        cartona+=`  
        <tr>
        <td>${prouductcontainer[i].Name}</td>
        <td>
            <p class="small text-truncate ">${prouductcontainer[i].Url}</p>
        </td>
        <td>
            <div class="hstack gap-3 justify-content-center">
                <a href="" target="_blank" class="btn btn-outline-dark "><i class="fa-regular fa-eye fa-shake"></i></a>
                <button class="btn btn-outline-warning" onclick="SetFormForUbdate(${i})"><i class="fa-solid fa-pen-to-square fa-shake"></i></button>
                <button class="btn btn-outline-danger" onclick="DeleteItem(${i})"><i class="fa-solid fa-trash fa-shake"></i></button>
            </div>
        </td>
    </tr>
        `

    }
document.getElementById("tableBody").innerHTML=cartona   //2


} 

function clearInput(){
    siteName.value=""
    siteUrl.value=""
  
}

// delete 4  ==> onclick="DeleteItem(${i})" button
function DeleteItem(index){
    prouductcontainer.splice(index,1)
    localStorage.setItem('products',JSON.stringify(prouductcontainer)) 
    displayProduct()

}
///////////

function SetFormForUbdate(index){

    btnAdd.classList.replace('d-block','d-none')
    btnUbdate.classList.replace('d-none','d-block')
    siteName.value = prouductcontainer[index].Name
    siteUrl.value = prouductcontainer[index].Url
    indexUbdate=index
   

}
//// 2 ubdate
    indexUbdate =0 //global 
function ubdateData(){
    var productObj ={ 
        Name:siteName.value ,
        Url:siteUrl.value
    }


    prouductcontainer.splice(indexUbdate,1,productObj)
    localStorage.setItem('products',JSON.stringify(prouductcontainer)) 
    displayProduct()
    btnAdd.classList.replace('d-none','d-block')
    btnUbdate.classList.replace('d-block','d-none')
    clearInput()
}
/////////////////////
function searchItems(){
     var searchIputs = document.getElementById('searchIputs').value // مكان كلمه this
    var box2=``
    for(var i=0 ; i < prouductcontainer.length ; i++ ){
        if(prouductcontainer[i].Name.toLowerCase().includes(searchIputs.toLowerCase()) ){

            box2+=`
            <tr>
            <td>${prouductcontainer[i].Name}</td>
            <td>
                <p class="small text-truncate ">${prouductcontainer[i].Url}</p>
            </td>
            <td>
                <div class="hstack gap-3 justify-content-center">
                    <a href="" target="_blank" class="btn btn-outline-dark "><i class="fa-regular fa-eye fa-shake"></i></a>
                    <button class="btn btn-outline-warning" onclick="SetFormForUbdate(${i})"><i class="fa-solid fa-pen-to-square fa-shake"></i></button>
                    <button class="btn btn-outline-danger" onclick="DeleteItem(${i})"><i class="fa-solid fa-trash fa-shake"></i></button>
                </div>
            </td>
        </tr>
                
                `
        }
      
    }
    document.getElementById('tableBody').innerHTML=box2

}
///////////
var alertName=document.getElementById('alertName') //1
var alertUrl=document.getElementById('alertUrl') //2
var alertExite=document.getElementById('alertExite') //3



function NameValidation(){
    if(siteName.value === ""){
        alertName.classList.replace('d-none','d-block')
        return false
    }else{
        alertName.classList.add('d-none')
        return true
    }
}

function UrlValidation(){
    if(siteUrl.value === ""){
        alertUrl.classList.replace('d-none','d-block')
        return false
    }else{


        //لو url متاخد مرتين
        // var isExit=false

        // for(var i=0 ; i < prouductcontainer.length ; i++ ){
        //     if(prouductcontainer[i].Url === siteUrl.value){
        //         isExit=true
        //         break
        //     }
        // }

        // if(isExit === true){
        //     alertExite.classList.remove('d-none')

        // }else{
        //     alertExite.classList.add('d-none')

        // }

        alertUrl.classList.add('d-none')
        return true
    }
}



 





// var prouductnameInput=document.getElementById('prouductName')   //1
// var prouductCategoryInput=document.getElementById('prouductCategory')  //1
// var prouductpriceInput=document.getElementById('prouductprice')   //1
// var prouductdescribtionInput=document.getElementById('prouductdescribtion')   //1



// var prouductcontainer =[]  //2

// var addbtnn = document.getElementById("addbtn")//4 ubdate
// var ubdatebtnn = document.getElementById("ubdatebtn")//4 ubdate

// if(localStorage.getItem('products') !=null){  //3 =>2
//     prouductcontainer =JSON.parse(localStorage.getItem('products')) // 3
//     displayProduct()
// }

// function addProduct(){   //1
//     var productObj ={   //1
//         name: prouductnameInput.value, //1
//         Category: prouductCategoryInput.value,  //1
//         price: prouductpriceInput.value,  //1
//         describtion: prouductdescribtionInput.value, //1

//     }

//     // console.log(productObj)
  
//         prouductcontainer.push(productObj)     //1
//         // console.log(prouductcontainer)  //1
//     // بعد ميعمل بوش عاوزين نخزن الحاجه علشان لو عملنا فريش الحاجه بتتمسح

  
//        localStorage.setItem('products',JSON.stringify(prouductcontainer))  //  3=>1 prouductcontainer دي اراي لازم تتحول لاسترينج علشان اللوكال بتاخد اتنين استرينج
  
//     // localStorage.setItem('myname' , 'mido')
    

//     displayProduct()  //1

//     clearInput() // clear

// //    var x =prouductNameInput.value
// //     console.log(x)
// }



// function displayProduct(){  //2  اخر حاجه ف الخطوه التانية لما تعمل ريفريش اللي انت مسجله بيختفي
//     var cartona=`` //2

//     for (var i=0; i<prouductcontainer.length;i++){ //2

//         cartona+=`  
//     <tr>

//         <td>${prouductcontainer[i].name}</td>
//         <td>${prouductcontainer[i].Category}</td>
//         <td>${prouductcontainer[i].price}</td>
//         <td>${prouductcontainer[i].describtion}</td>
//         <td><button  onclick="DeleteItem(${i})" class="btn btn-sm btn-outline-info">Delete</button></td> 
//         <td><button onclick="SetFormForUbdate(${i})" class="btn btn-sm btn-outline-info bg-danger" >Ubdate</button></td>
        
//     </tr>
        
//         `
//     }
// document.getElementById("tbody").innerHTML=cartona   //2


// }  

// // بتمسح الكلام اللي انت كنت كاتبه
// function clearInput()
// {
//     prouductnameInput.value=""
//     prouductCategoryInput.value=""
//     prouductpriceInput.value=""
//     prouductdescribtionInput.value=""
// }


// // delete 4  ==> onclick="DeleteItem(${i})" button
// function DeleteItem(index){
//     prouductcontainer.splice(index,1)
//     localStorage.setItem('products',JSON.stringify(prouductcontainer)) 
//     displayProduct()

// }


// function SetFormForUbdate(index){

//     addbtnn.classList.replace('d-block','d-none')
//     ubdatebtnn.classList.replace('d-none','d-block')
//     prouductnameInput.value = prouductcontainer[index].name
//     prouductCategoryInput.value = prouductcontainer[index].Category
//     prouductpriceInput.value = prouductcontainer[index].price
//     prouductdescribtionInput.value = prouductcontainer[index].describtion

// }


// function searchItems(){
//      var searchIputs = document.getElementById("searchIputs").value // مكان كلمه this
//     var box2=``
//     for(var i=0 ; i < prouductcontainer.length ; i++ ){
//         if(prouductcontainer[i].prouductnameInput.tolowerCase().includes(searchIputs.tolowerCase()) ){

//             box2+=`
//             <tr>
        
//                 <td>${prouductcontainer[i].name}</td>
//                 <td>${prouductcontainer[i].Category}</td>
//                 <td>${prouductcontainer[i].price}</td>
//                 <td>${prouductcontainer[i].describtion}</td>
//                 <td><button  onclick="DeleteItem(${i})" class="btn btn-sm btn-outline-info">Delete</button></td> 
//                 <td><button onclick="SetFormForUbdate(${i})" class="btn btn-sm btn-outline-info bg-danger" >Ubdate</button></td>
                
//             </tr>
                
//                 `
//         }
      
//     }
//     document.getElementById("searchIputs").innerHTML=box2

// }
