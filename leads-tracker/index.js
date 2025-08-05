let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tapBtn = document.getElementById("tap-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))// add my leads to localstorage

if (leadsFromLocalStorage) { // localstorage doesn't reset when refresh
   myLeads = leadsFromLocalStorage
   render(myLeads)
}

tapBtn.addEventListener("click" , function (){


chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    // console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
  })
})

function render (leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    //listItems += "<li><a href='" + myLeads[i] + "' target = '_blank'>" + myLeads[i] + "</a></li>" //make the input become list + become link and tapable
    listItems += `
      <li>
          <a target='_blank' href='${leads[i]}'> 
            ${leads[i]} 
          </a>
      </li>`
  }
  ulEl.innerHTML = listItems //output list on site0
}

deleteBtn.addEventListener("dblclick", function() { //when double clicked
  localStorage.clear() //cleaned
  myLeads = [] // display nothing
  render(myLeads)
})

inputBtn.addEventListener("click", function() { //when click 
  myLeads.push(inputEl.value) //push the input to the list
  inputEl.value = " " //clear input
  localStorage.setItem("myLeads", JSON.stringify(myLeads))  // save the myLeads sto localstorage array 
  render(myLeads) //display the list on site
})


