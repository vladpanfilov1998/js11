let favorites = JSON.parse(localStorage.getItem('favorites'));
console.log(favorites);
for (const favorite of favorites) {
    let div = document.createElement('div');
    div.className = "user";
    div.innerText = JSON.stringify(favorite);
    document.body.appendChild(div);
}