/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      <li>
    </ul>
  </div>

  Pass the function an array as it's only argument.*/
  window.addEventListener('load', (e)=>{ 
    //querySelector
    const header = document.querySelector (".header");
    const menuBar = document.querySelector (".menu-button");

    //eventListener
    menuBar.addEventListener ('click', (e) =>{
      const btn = document.querySelector ('.menu');
      btn.classList.toggle("menu--open");
    })

    function Menu (arr) {
      //set new elements
      const menuDiv = document.createElement('div');
      const list = document.createElement('ul');

      //add class
      menuDiv.classList.add('menu');


      //add to div
      menuDiv.appendChild (list);

      //list items
      arr.forEach (item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
  
      })
      return menuDiv;
    }
    header.appendChild(Menu(menuItems));
  });

  /*Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
