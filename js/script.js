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
//const searchInput = document.querySelector("#search");
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
 function showPage(list, page) {
   const startIndex = (page * studentPerPage ) - studentPerPage; //calc index of first student should appear on current page
   const endIndex = page * studentPerPage;//calc index of last student that should appear
   const studentList = document.querySelector('.student-list'); //select class from HTMl doc // maybe? const studentList = document.getElementsByClassName('student-list'); 
   studentList.innerHTML = ""; //clears current student list ensuring no duplicates
   
   // iterate through list to input user info
   for (let i = 0; i < list.length; i++) { //iterates through all student
      if (i >= startIndex && i < endIndex) {//ensures only the students displayed within the current pages range are displayed 
      const studentItem = `
      <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3> 
            <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
         </div>
      </li>
      `;
      //unable to get last name
      studentList.insertAdjacentHTML('beforeend', studentItem);//add each student details to end of of student list on page
      }
   }
 };

 showPage(data, 1);

 
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   const numOfPages = Math.ceil(list.length/studentPerPage); //calc how many pages are needed to display all items in list, divides total # of students by number of students per pg and rounds up to ensure leftover students are displayed 
   const linkList = document.querySelector('.link-list'); 
   linkList.innerHTML = '';
   
// add buttons for number of pages using for loop 
   for (let i = 1; i <= numOfPages; i++) { //runs from 1 to numofpages to generate pag buttons
      const button = `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      linkList.insertAdjacentHTML('beforeend', button); //appends new HTML content before the end of linklist class element 
   }
//first button is active 
      const firstButton = linkList.querySelector('button'); //button inside linklist class elem //??linkList.querySelector('button').className = 'active';
      if (firstButton) { //firstbutton selected and marked active
         firstButton.classList.add('active');
   }
 //will listen for a click inside the linklist
   linkList.addEventListener('click', (e) => { //anytime you click anywhere inside linklist the listener will run
      if (e.target.tagName === 'BUTTON'){ //this checks if click element was clicked
      document.querySelector('.link-list .active').classList.remove('active');//removes active class from previous active button and add it to current active button
      //firstButton.className = 'active';
      e.target.classList.add('active');
//NOTE:without this eventlistener, anything inside linklist would run if clicked - div, span, whitespace 
      const page = 
      parseInt(e.target.textContent); //gets page number user clicked on 
         showPage(list, page);//uses pg number to display number of students for the pg and updating html
      }
   });
}

/*searchInput.addEventListener("keyup", () => {
   const newUserData = [];
   const userInput = searchInput.value.toLowerCase();

   for(let i = 0; i < data.length; i++){
      if (typeof data[i].name === 'string')
    
  if (userName.includes(userInput)){
    newUserData.push(data[i]);
   }
   const userName = data[i].name.toLowerCase();
}
   if (newUserData.length > 0){
    studentList(newUserData); // will pass new user data into the student item class in html
    showPage(newUserData, 1); //will pass newUserData array and return the first page
   } else {
      studentList.innerHTML = '<p>No data found...</p>'
   }
});
*/


addPagination(data);
showPage(data, 1);

// Call functions