/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/*** 
   Here I define some of the global variables for my code
   I need an HTML collection of all the students,
   a number of pages to create,
   and how many students to show on each page.
***/

const studentList = document.querySelectorAll('.student-list li');
const numberOfPages = Math.ceil(studentList.length/10);
let pageRecords = 10;


/*** 
   Now I need to create the function that will show a certain number
   of students using the above defined consts. Within the function I'll
   need to create an index to show the students necessary for each page
   while hiding the rest.
***/

const showPage = (list, page) => {
   let startIndex = (page * pageRecords) - pageRecords;
   let endIndex = page * pageRecords;
   for (i = 0; i < list.length; i ++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}

showPage(studentList, 1);

/*** 
   Now that I've determined which grouping of students to show for the
   specific page, the page links must be created. Creating the new div,
   ul, li, and a elements below appending them to the correct place, and
   adding functionality for each button through event listeners, and class
   designation.
***/

const appendPage = (pages) => {
   let newDiv = document.createElement("div");
   newDiv.className = 'pagination';
   document.querySelector(".page").appendChild(newDiv);
   let ul = document.createElement('ul');
   ul.className = 'pagination';
   newDiv.appendChild(ul);
   for (i = 1; i <= pages; i ++) {
      let pageButtons = document.createElement("li");
      ul.appendChild(pageButtons);
      let links = document.createElement("a");
      links.innerHTML = i;
      pageButtons.appendChild(links);

      // the above is required to create the buttons on the page
      // and the below adds the functionality and classes to the buttons

      links.addEventListener('click', () => {
         const pg = event.target.innerText;
         showPage(studentList, pg);
         const allLinks = document.getElementsByTagName("a");
         for (j = 0; j < allLinks.length; j ++) {
            allLinks[j].classList.remove('active');
         }
         event.target.className = 'active';
      });
   }

}

appendPage(numberOfPages);
document.querySelector('a').className = 'active';
