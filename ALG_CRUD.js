let title = document.getElementById('title');
let price = document.getElementById('price');
let description = document.getElementById('description');
let image = document.getElementById('image');
let quantity = document.getElementById('quantity');
let options = document.getElementsByName('options');
let saveBtn = document.getElementById('saveBtn');
let createBtn = document.getElementById('create');  
let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');
let productList = document.getElementById('productList');
let searchResults = document.getElementById('searchResults');
let deleteSelectedBtn = document.createElement('button');
let container = document.createElement('div');
container.setAttribute("class","container");
let updateSelectedBtn =document.createElement('button')
let li;
let index;
//localStorage.clear();
let mood = "create";
let tmp;
let product;

function insertData() {

        product = JSON.parse(localStorage.getItem('products')) || [];
    let newProduct = {
        id: Date.now(),
        title: title.value,
        price: parseFloat(price.value),
        description: description.value,
        image: image.value,
        quantity: parseInt(quantity.value),
        options: Array.from(options).map(option => option.value)
    }
    if(mood === "create"){
    product.push(newProduct);
    
    localStorage.setItem('products',JSON.stringify(product));
    clearData();
}else{
   let index = product.findIndex(pro => pro.id === tmp);
    if(index !== -1){
        product[index] = {
            ...product[index],
            title: title.value,
            price: parseFloat(price.value),
            description: description.value,
            image: image.value,
            quantity: parseInt(quantity.value),
            options: Array.from(options).map(option => option.value)
        };
   
    }
   mood = "create";
   saveBtn.textContent = "Save Product";
}
 localStorage.setItem('products',JSON.stringify(product));
    clearData();
}
clearData = function(){
    title.value = '';
    price.value = '';
    description.value = '';
    image.value = '';
    quantity.value = '';
    Array.from(options).forEach(option => option.value = '');
}
searchButton.onclick = function searchProduct(){
    console.log(searchInput.value);
    let query = searchInput.value.toLowerCase();
    products = JSON.parse(localStorage.getItem('products')) || [];
    results = products.filter(product=> 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
);    
    displayResults(results);     
   }

function displayResults(results){
    searchResults.innerHTML ="";
    searchResults.innerHTML = "<h4>Search Results:</h4>";

    if (results.length > 0){
        results.forEach((product,index)=>{
            li = document.createElement('li');

            let checkbox = document.createElement('input');
            
            checkbox.type = 'checkbox';
            checkbox.className = 'selectProduct';
            checkbox.checked = false;
            checkbox.dataset.id =product.id;

            li.style.whiteSpace = "pre-line";
            li.style.border = "1px solid #ccc";
            li.style.padding ='10px';

            li.innerHTML = 
            `Title:${product.title}\n
            Price:${product.price}\n
            Description:${product.description}\n
            Quantity:${product.quantity}\n
            Options:${product.options}\n
            <img src="${product.image}" style="max-width:100px;">
            <br><button id = "updateSelectedBtn" 
            onclick ="updateSelecte(${product.id})" >Update</button>`
            ;

            li.insertBefore(checkbox ,li.firstChild);
            searchResults.appendChild(li);
        });
    } else {
        searchResults.innerHTML += "<h4>No result found</h4>";
    }

    updateSelectedBtn.style.display ="none";
    deleteSelectedBtn.textContent ="Delete";
    deleteSelectedBtn.style.display ="none";
    searchResults.appendChild(deleteSelectedBtn);

    
    const allchecked = document.querySelectorAll('.selectProduct');

    for (const checkbox of allchecked) {
        checkbox.addEventListener('change', function () {
            const anyChecked = document.querySelectorAll('.selectProduct:checked').length > 0;
            if(anyChecked){
            deleteSelectedBtn.style.display = anyChecked ? "flex" :"none";
            }
        });
    }
}
    
 deleteSelectedBtn.onclick = function() {
   
    const allchecked = document.querySelectorAll('.selectProduct:checked');
    let deleteInx = Array.from(allchecked).map(cb => Number(cb.dataset.id));
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let updated = products.filter(pro => !deleteInx.includes(pro.id));
    console.log(updated)
    localStorage.setItem('products',JSON.stringify(updated))
    
    allchecked.forEach(cb => cb.parentElement.remove()); 
    
    location.reload();
};

function updateSelecte(id){
        saveBtn.style.display ='none';
        let products = JSON.parse(localStorage.getItem('products')) || [];
        proToUpdate = products.find(pro=> pro.id === id);
            title.value = proToUpdate.title;
            price.value = proToUpdate.price;
            description.value = proToUpdate.description;
            image.value = proToUpdate.image;
            quantity.value = proToUpdate.quantity;
        Array.from(options).forEach((option, index) => {
        option.value = proToUpdate.options[index];
        }); 

        mood = 'update';
        tmp=id;
        scroll(2.3,'up');  
        saveBtn.style.display ='block';
        saveBtn.textContent ='Update and Save';
        saveBtn.onclick = insertData;



   
}





