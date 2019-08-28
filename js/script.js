/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//create global variables
const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;

//create function to dynamically display and hide students
function showPage(list, page) {
  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex = page * itemsPerPage;
  //default display students within index range, hide those outside of that range
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

//create functional page links
function appendPageLinks(list) {
  const numberOfPages = Math.ceil(list.length / itemsPerPage);
  //create and append html elements
  const div = document.createElement('div');
  div.className = 'pagination';
  document.querySelector('.page').appendChild(div);
  const ul = document.createElement('ul');
  div.appendChild(ul);
  //creates a li containing a link for every page of students
  for (let i = 1; i <= numberOfPages; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    const a = document.createElement('a');
    a.innerHTML = i;
    if (a.innerHTML === '1') {
      //'active' applies css styling
      a.className = 'active';
    }
    a.href = '#';
    li.appendChild(a);
  }
  //upon clicking a link, the showPage() function runs. Page number is retrieved from the event target
  ul.addEventListener('click', e => {
    if (e.target.tagName == 'A') {
      const links = document.querySelectorAll('a');
      const pageNumber = parseInt(e.target.innerHTML);
      //remove 'active' class from all links
      for (let i = 0; i < numberOfPages; i++) {
        links[i].className = '';
      }
      //assign 'active' class to event target
      e.target.className = 'active';
      showPage(listItems, pageNumber);
    }
  });
}

//Initialization functions
//create functional page links based on the number of students in the given list
appendPageLinks(listItems);
//load first page
showPage(listItems, 1);
