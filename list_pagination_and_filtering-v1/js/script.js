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

const studentList = document.querySelectorAll('.student-list li');
const numberOfPages = Math.ceil(studentList.length/10);
let pageRecords = 10;


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
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
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
      links.addEventListener('click', () => {
         const pg = event.target.innerText;
         showPage(studentList, pg);
         for (j = 1; j <= links.length; j ++) {
            links[j].classList.remove('active');
         }
         event.target.className = 'active';
      });
   }

}

appendPage(numberOfPages);
document.querySelector('a').className = 'active';

// Remember to delete the comments that came with this file, and replace them with your own code comments.