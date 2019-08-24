/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage(list, page) {
  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex = page * itemsPerPage;
  console.log('startIndex', startIndex, 'endIndex', endIndex);

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {
  const numberOfPages = Math.ceil(list.length / itemsPerPage);
  console.log('Number of pages', numberOfPages);

  const div = document.createElement('div');
  div.className = 'pagination';
  console.log('div', div);
  document.querySelector('.page').appendChild(div);
  const ul = document.createElement('ul');
  div.appendChild(ul);
  for (let i = 1; i <= numberOfPages; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    const a = document.createElement('a');
    a.innerHTML = i;
    if (a.innerHTML === '1') {
      a.className = 'active';
    }
    a.href = '#';
    li.appendChild(a);
  }
  ul.addEventListener('click', e => {
    console.log('target', e.target);
    if (e.target.tagName == 'A') {
      const links = document.querySelectorAll('a');
      console.log('links', links);
      for (let i = 0; i < numberOfPages; i++) {
        links[i].className = '';
      }
      const pageNumber = parseInt(e.target.innerHTML);
      console.log('page number', pageNumber);
      e.target.className = 'active';
      showPage(listItems, pageNumber);
    }
  });
}

appendPageLinks(listItems);
showPage(listItems, 1);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
