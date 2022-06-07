// const root = document.getElementById('root');

// const ul = document.createElement('ul');
// root.appendChild(ul);

// let liElement = [];
// for(let i = 0; i < 10; i++) {
//   liElement.push(`<li> ${i} </li>`);
// }

// console.log(liElement.join(''));
// ul.innerHTML = liElement.join('');


// for(let i = 0; i < 10; i++) {
//   const li = document.createElement('li');
//   li.textContent = i;
//   ul.appendChild(li);
// }


// ---------(innerHTML react)-----------

const root = document.getElementById('root');

root.innerHTML = `
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
`;