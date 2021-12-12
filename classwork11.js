//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.
//Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerText = JSON.stringify(user);
    userDiv.className = "user";
    let button = document.createElement('button');
    button.innerText = 'ДОДАТИ ІНФОРМАЦІЮ'
    button.onclick = function () {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(user);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };
    userDiv.appendChild(button);
    document.body.appendChild(userDiv);
}




