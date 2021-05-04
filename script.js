const container = document.querySelector(".container");
const input = document.getElementById("input");
let array=[];
let card;

input.addEventListener( 'keyup' , (e) => {
    const searchData = e.target.value.toLowerCase();

    const filteredData = array.filter((value) => {
        return (
            value.username.toLowerCase().includes(searchData) ||
            value.email.toLowerCase().includes(searchData)
        );
    });
    const htmlString = filteredData
        .map((filteredData) => {
            return ` <div class="card"> <div class="name">Name</div>
          <div class="name-content">${filteredData.username}</div>
          <div class="email">Email</div>
          <div class="email-content">${filteredData.email}</div></div>`;
        })
        .join('');
    container.innerHTML = htmlString;
});

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => {
    return data.text();
})
.then((result) => {
array = JSON.parse(result);

array.forEach((ele) => {
     card = document.createElement("div");
    card.classList.add("card");
   card.innerHTML = `<div class="name">Name</div>
          <div class="name-content">${ele.username}</div>
          <div class="email">Email</div>
          <div class="email-content">${ele.email}</div>`;
    container.appendChild(card);
});
});

