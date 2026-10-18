// const url = "https://fakestoreapi.com/products";
const url = "./../js/apis/product.json";

const productData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));
};
const showProduct = (data) => {
  const cardBody = document.getElementById("cardBody");
  cardBody.innerHTML = "";

  data.forEach((product) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="card shadow-sm">
          <figure class="bg-gray-300">
            <img src=${product.image} class="w-full p-10 h-[350px]" alt="Shoes" />
          </figure>
          <div class="card-body" >
            <div class="flex w-full items-center justify-between">
              <p class='bg-blue-200 p-1 rounded-2xl'>${product.category}</p>
              <p class="ml-40"><i class="fa-regular fa-star text-yellow-500"></i>  ${product.rating.rate}</p>
            </div>
            <h2 class="card-title">
              ${product.title}
            </h2>
            <p class="font-bold text-2xl">$
             ${product.price}
            </p>
            <div class="card-actions">
              <button class="btn w-[47%]">
                <i class="fa-regular fa-eye"></i> Details
              </button>
              <button class="btn btn-primary w-[50%]">
                <i class="fa-solid fa-cart-shopping"></i>Add
              </button>
            </div>
          </div>
        </div>
    `;
    cardBody.append(newDiv);
  });
};
productData();

