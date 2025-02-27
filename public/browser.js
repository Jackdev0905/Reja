
function itemTemplate(item){
    return `<li
          class="list-group-item my-1 list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja} </span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-warning btn-sm mr-1"
            >
              Edit
            </button>
            <button
              data-id="${item._id}"
              class="button delete-me btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </li>
    `
} 

let createField = document.getElementById("create-field");


document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    axios.post("/create-item", {reja: createField.value})
    .then((response)=>{
        document.getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));

        createField.value = "";
        createField.focus();
    })
    .catch((err)=>{
        console.log("Iltimos qayta urining");
        
    })
})


document.addEventListener("click", function(e){
    
    if(e.target.classList.contains("delete-me")){
        if(confirm("Aniq o'chirmoqchimisiz?")){
            axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then((response)=>{
              console.log(response.data);
              e.target.parentElement.parentElement.remove();
              
            })
            .catch((err)=>{
              console.log("Iltimos qayta urining");

            })
        }
    }

    if(e.target.classList.contains("edit-me")){
        if(confirm("Aniq o'zgartirmoqchimisiz?")){
            axios.post("/edit-item")
        }
    }
})