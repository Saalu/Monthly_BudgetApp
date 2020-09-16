// variable
const itemList = document.getElementById('list-container')

// addEventListener
eventListeners()
function eventListeners(){
    document.getElementById('input-form').addEventListener('submit', onSubmit)
    itemList.addEventListener('click', removeItem)
    document.addEventListener('DOMContentLoaded', pageOnLoad)


}

//Function
function listTemplate(item){
    const list = document.createElement('li')
    const removeBtn = document.createElement('span')
    removeBtn.classList = 'removeBtn'
    removeBtn.textContent = 'X'
    list.textContent = item
    list.appendChild(removeBtn)
    itemList.appendChild(list)
}
function onSubmit(e){
    e.preventDefault()
    const inputData = document.querySelector('.input').value

    listTemplate(inputData)

    addToStorage(inputData)

    this.reset()

}


function removeItem (e){
    if(e.target.classList.contains('removeBtn')){
       
        e.target.parentElement.remove()
    }
    
    deleteFromStorage(e.target.parentElement.textContent)
}

function addToStorage(item){
   let storeItems =getFromStorage()

    storeItems.push(item)
   localStorage.setItem('items', JSON.stringify(storeItems))

}

function getFromStorage(){
    let items;
    const storeItems = localStorage.getItem('items') 

    if(storeItems === null){
        items=[]
    }else{
        items = JSON.parse(storeItems)
    }

    return items 

}

function deleteFromStorage(item){
    let storeItems =getFromStorage()
    console.log('B4:', storeItems)

    const removeX = item.substring(0, item.length -1)

    storeItems.forEach((item,index) =>{
        if(item === removeX ){
            storeItems.splice(index, 1)
        }
    })
  
    // send the rest in LStorage
    localStorage.setItem('items', JSON.stringify(storeItems))
    console.log('Af:', storeItems)

}



function pageOnLoad(){
  let storeItems =getFromStorage()

  storeItems.forEach(item=>{

      listTemplate(item)
  })

}






