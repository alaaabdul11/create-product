**# create-product
CRUD project for my business
** Product Manager (ArtLightGlass JavaScript)

A simple product management web app built with **HTML, CSS, and JavaScript**.
This project allows users to create, search, update, and delete products using **localStorage**, and he can create web page for this producte " still work on this".

---

##  Features

*  Add new products
*  Search products by title or description
*  Update existing products
*  Delete selected products
*  Store data in browser using **localStorage**
*  Select multiple items with checkboxes

---

## Technologies Used

* HTML
* CSS
* JavaScript (Vanilla JS)
* Browser Local Storage API

---

## How It Works

1. Enter product details (title, price, description, etc.)
2. Click **Save** to store the product
3. Use the search bar to find products
4. Select products using checkboxes
5. Click:

   * **Delete** → removes selected products
   * **Update** → edit product data

---

## Project Structure

* `index.html` → UI structure
* `style.css` → styling
* `script.js` → main logic (CRUD operations)

---

## Data Storage

All products are saved in the browser using:

```js
localStorage.setItem('products', JSON.stringify(products));
```

---

##  Known Limitations

* Data is stored locally (not shared across devices)
* No backend/database
* No image upload (only image URL)

---

## Future Improvements

*  Connect to backend (Node.js / Firebase)
*  Upload images instead of URLs
*  Add sorting and filtering
*  Improve UI/UX design
*  Live search (without button)

---

## Author

Created by Alaa Abdulrahman

---

## Support

If you like this project, consider giving it a ⭐ on GitHub!
