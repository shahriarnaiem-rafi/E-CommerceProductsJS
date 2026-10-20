// const productUrl = "./../js/apis/product.json";
// const categoryUrl = "./../js/apis/catagories.json";

// // Fetch products
// const productData = () => {
//   fetch(productUrl)
//     .then((res) => res.json())
//     .then((data) => {
//       mensCollection(data);
//     });
// };

// // Fetch categories
// const categoryData = () => {
//   fetch(categoryUrl)
//     .then((res) => res.json())
//     .then((categories) => showCategory(categories));
// };
 
// // Show category buttons
// const showCategory = (categories) => {
//   const btnDiv = document.getElementById("btnDiv");
//   btnDiv.innerHTML = "";

//   for (let category of categories) {
//     const button = document.createElement("button");

//     button.className = "btn";
//     button.textContent = category;

//     btnDiv.append(button);
//   }
// };

// const mensCollection = (colectedData) => {
//   const cardBody = document.getElementById("cardBody");
//   cardBody.innerHTML = "";
//   const mensData = colectedData
//     .filter((product) => product.category === "men's clothing")
//     .slice(0, 3);
//   for (let product of mensData) {
//     const newCard = document.createElement("div");

//     if (product.category === "men's clothing") {
//       newCard.innerHTML = `
//         <div class="card shadow-sm">
//           <figure class="bg-gray-300">
//             <img src=${product.image} class="w-full p-10 h-[350px]" alt="Shoes" />
//           </figure>
//           <div class="card-body" >
//             <div class="flex w-full items-center justify-between">
//               <p class='bg-blue-200 p-1 rounded-2xl'>${product.category}</p>
//               <p class="ml-40"><i class="fa-regular fa-star text-yellow-500"></i>  ${product.rating.rate}</p>
//             </div>
//             <h2 class="card-title">
//               ${product.title}
//             </h2>
//             <p class="font-bold text-2xl">$
//              ${product.price}
//             </p>
//             <div class="card-actions">
//               <button class="btn w-[47%]">
//                 <i class="fa-regular fa-eye"></i> Details
//               </button>
//               <button class="btn btn-primary w-[50%]">
//                 <i class="fa-solid fa-cart-shopping"></i>Add
//               </button>
//             </div>
//           </div>
//         </div>
   
//       `;
//       cardBody.append(newCard);
//     }
//   }
// };

// productData();
// categoryData();
