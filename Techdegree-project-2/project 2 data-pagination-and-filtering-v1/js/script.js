/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const studentPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
 function showPage(list, page) {
   const startIndex = (page * studentPerPage ) - studentPerPage;
   const endIndex = page * studentPerPage;
   const studentList = document.querySelector('.student-list'); // maybe? const studentList = document.getElementsByClassName('student-list'); 
   studentList.innerHTML = ""; 
   
   for (let i = 0; i < list.length; i+=1) {
      if (i >= startIndex && i < endIndex) {
      const studentItem = `
      <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
            <h3>${list[i].name.first}</h3> 
            <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
         </div>
      </li>
      `;
      //unable to get last name
      studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
 };

 showPage(data, 1);

 
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   const numOfPages = Math.ceil(list.length/studentPerPage);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   

   for (let i = 1; i <= numOfPages; i+=1) { 
      const button = `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      linkList.insertAdjacentHTML('beforeend', button);
   }

      const firstButton = linkList.querySelector('button'); //linkList.querySelector('button').className = 'active';
      if (firstButton) {
         firstButton.className = 'active';
   }
   
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON'){
      document.querySelector('.link-list','.active').classList.remove('active');
      firstButton.className = 'active';
      e.target.className = 'active';

      const page = 
      parseInt(e.target.textContent);
         showPage(list, page);
      }
   });
}

/*searchInput.addEventListener('keyup', () => {
   const newData = [];
   const userInput = searchInput.value.toLowerCase();


});
*/


addPagination(data);
showPage(data, 1);

// Call functions
