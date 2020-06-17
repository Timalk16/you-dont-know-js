'use strict';

let books = document.querySelector('.books'),
      book = document.querySelectorAll('.book'),
      adv = document.querySelector('.adv');


books.prepend(book[1]);
books.append(book[2]);
book[3].before(book[4]);


document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";


book[4].querySelector('h2 a').textContent = 'Книга 3. this и Прототипы Объектов';




adv.remove();



let book2 = book[0].querySelectorAll('li');
book2[9].after(book2[2]);
book2[3].after(book2[6]);
book2[6].after(book2[8]);



let book5 = book[5].querySelectorAll('li');
book5[1].after(book5[9]);
book5[4].after(book5[2]);
book5[8].before(book5[5]);



let newBook = document.createElement('li');
newBook.textContent = 'Глава 8: За пределами ES6';
book[2].querySelector('ul').append(newBook);
book[2].querySelectorAll('li')[9].before(newBook);
