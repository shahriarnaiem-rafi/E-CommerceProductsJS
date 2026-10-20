const productUrl = "./../js/apis/product.json";
const getProduct = () => {
  fetch(productUrl)
    .then((res) => res.json())
    .then((data) => showAllProduct(data));
};
const categoriesUrl = "./../js/apis/categories.json";
const getCategories = () => {
  fetch(categoriesUrl)
    .then((res) => res.json())
    .then((data) => showCategories(data));
};

const showCategories = (categories) => {
  const btnDiv = document.getElementById("btnDiv");

  btnDiv.innerHTML = "";
  // all data

  const AllBtn = document.createElement("button");
  AllBtn.classList = "btn rounded-2xl";
  AllBtn.innerText = "ALL";
  AllBtn.addEventListener("click", function () {
    getProduct();
  });
  btnDiv.appendChild(AllBtn);

  categories.forEach((category) => {
    const createBtn = document.createElement("div");
    createBtn.innerHTML = `
                <button class="btn rounded-2xl ">${category}</button>
            `;
    createBtn.addEventListener("click", function () {
      findData(category);

    });
    btnDiv.append(createBtn);
  });
};

getCategories();
const findData = (category) => {
  fetch(`./../js/apis/product.json`)
    .then((res) => res.json())
    .then((data) => {
      const filterData = data.filter((item) => item.category === category);
      showAllProduct(filterData);
    });
};
const showAllProduct = (products) => {
  const allCardData = document.getElementById("allCardData");
  allCardData.innerHTML = "";
  products.forEach((product) => {
    const newCard = document.createElement("div");

    newCard.innerHTML = `
     <div class="card shadow-sm">
          <figure class="bg-gray-300">
            <img src=${product.image} class="w-full p-10 h-[350px]" alt="Shoes" />
          </figure>
          <div class="card-body" >
            <div class="flex w-full items-center justify-between">
              <p class='bg-blue-200 p-1 rounded-2xl'>${product.category}</p>
              <p class="  ml-20"><i class="fa-regular fa-star text-yellow-500"></i>  ${product.rating.rate}</p>
            </div>
            <h2 class="card-title">
              ${product.title}
            </h2>
            <p class="font-bold text-2xl">$
             ${product.price}
            </p>
            <div class="card-actions">
              <button class="btn w-[40%]">
                <i class="fa-regular fa-eye"></i> Details
              </button>
              <button class="btn btn-primary w-[50%]">
                <i class="fa-solid fa-cart-shopping"></i>Add
              </button>
            </div>
          </div>
        </div>
    
      `;
    allCardData.append(newCard);
  });
};

const showInHome = () => {
  fetch(productUrl)
    .then((res) => res.json())
    .then((products) => {
      const menProducts = products
        .filter((product) => product.category === "men's clothing")
        .slice(0, 3);

      const cardBody = document.getElementById("cardBody");
      cardBody.innerHTML = "";

      menProducts.forEach((product) => {
        const homeCard = document.createElement("div");

        homeCard.innerHTML = `
          <div class="card shadow-sm">
          <figure class="bg-gray-300">
            <img src=${product.image} class="w-full p-10 h-[350px]" alt="Shoes" />
          </figure>
          <div class="card-body" >
            <div class="flex w-full items-center justify-between">
              <p class='bg-blue-200 p-1 rounded-2xl'>${product.category}</p>
              <p class="  ml-20"><i class="fa-regular fa-star text-yellow-500"></i>  ${product.rating.rate}</p>
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

        cardBody.appendChild(homeCard);
      });
    })
    .catch((error) => console.error(error));
};
showInHome();
getProduct();
