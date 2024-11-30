// 1. createElemWithText
// a. Receives up to 3 parameters
// b. 1st parameter is the HTML element string name to be created (h1, p, button, etc)
// c. Set a default value for the 1st parameter to “p”
// d. 2nd parameter is the textContent of the element to be created
// e. Default value of the 2nd parameter is an empty string.
// f. 3rd parameter is a className if one is to be applied (optional)
// g. Use document.createElement() to create the requested HTML element
// h. Set the other desired element attributes.
// i. Return the created element.

// This first function makes use of two default parameters, p and textContent, as well as an optional parameter named className
// in case you must create a parameter with no default value. the const elem function creates new elements under the tagName it is supplied with.
// elem.textcontent creates new text content and return elem returns the newly created element complete with tags and text content, and optionally, a class name.

function createElemWithText(tagName = 'p', textContent = "", className){

    const elem = document.createElement(tagName);

    elem.textContent = textContent;

    if (className){

      elem.className = className;}

    return elem;

}
  
  
// 2. createSelectOptions
// a. Test users JSON data available here: https://jsonplaceholder.typicode.com/users
// b. For testing (not in function) you may want to define users with the test data.
// c. Receives users JSON data as a parameter
// d. Returns undefined if no parameter received
// e. Loops through the users data
// f. Creates an option element for each user with document.createElement()
// g. Assigns the user.id to the option.value
// h. Assigns the user.name to the option.textContent
// i. Return an array of options elements

// This second function makes use of various features. The JsonData return function checks if JsonData is falsy (null, undefinded, or an empty value).
// The const options code initializes an empty array of options. The for const user function acts as a for loop iterating over each element in the Json array. 
// Const option acts as a second loop, option.textContent displays the user name, and the return options code simply returns the options.

  function createSelectOptions(JsonData){

    if (!JsonData){

      return ;

    }
  
    const options = [];
  
    for (const user of JsonData){

      const option = document.createElement("option");

      option.value = user.id;

      option.textContent = user.name;

      options.push(option);

    }
  
    return options;
      
}
  
  
// 3. toggleCommentSection
// a. Receives a postId as the parameter
// b. Selects the section element with the data-post-id attribute equal to the postId received as a parameter
// c. Use code to verify the section exists before attempting to access the classList property
// d. At this point in your code, the section will not exist. You can create one to test if desired.
// e. Toggles the class 'hide' on the section element
// f. Return the section element

// This third function toggles the comment section in the Acme blog website. Like the Json Data code above, the postId code checks if the postId is falsy.
// The query selector selects the first element that has a matching postId. The data post id uses template literals to insert the post Id back into the string.
// The if (section) classlist code acts as the toggle to hide or display the comments. The returns the section element if it was found.

function toggleCommentSection(postId){

  if (!postId){

    return ;

  }
    const section = document.querySelector(`section[data-post-id="${postId}"]`);

    if (section){

      section.classList.toggle('hide');

    }

    return section;

}
    
  
//4 toggleCommentButton
// a. Receives a postId as the parameter
// b. Selects the button with the data-post-id attribute equal to the postId received as a parameter
// c. If the button textContent is 'Show Comments' switch textContent to 'Hide Comments'
// d. If the button textContent is 'Hide Comments' switch textContent to 'Show Comments'
// e. Suggestion (not required) for above: try a ternary statement
// f. Return the button element

// This fourth function controls the text contents for the "Show" and "Hide" comment buttons, continuing on from the function above.
// Like previous functions, it begins by checking if the postId is falsy. The const button code selects a button element that has a matching postId.
// The if (button) code executes if the button element was successfully found in the dom. The function concludes by displaying the button element with return.

function toggleCommentButton(postId){

  if (!postId){

    return ;

  }
    const button = document.querySelector(`button[data-post-id="${postId}"]`);

    if (button){

      button.textContent = (button.textContent === 'Show Comments') ? 'Hide Comments' : 'Show Comments';

    }

    return button;

}
  
  
//5 deleteChildElements
// a. Receives a parentElement as a parameter
// b. Define a child variable as parentElement.lastElementChild
// c. While the child exists…(use a while loop)
// d. Use parentElement.removeChild to remove the child in the loop
// e. Reassign child to parentElement.lastElementChild in the loop
// f. Return the parentElement

// The fifth function removes all child elements from the parent in the DOM. The if statement at the top checks to see if a parent element has any instances
// of HTML elements such as a <div> or <p> element. The let child code initializes the variable "child" to the last child element in the parent.
// The while loop will continue as long child is not null. After the last child element is removed, the value of last child goes to the child before it.


function deleteChildElements(parentElement){

  if (!(parentElement instanceof HTMLElement)) return;

  let child = parentElement.lastElementChild;
  
  while (child){

    parentElement.removeChild(child);

    child = parentElement.lastElementChild;

  }

  return parentElement;

}
  
// 6 addButtonListeners
// a. Selects all buttons nested inside the main element
// b. If buttons exist:
// c. Loop through the NodeList of buttons
// d. Gets the postId from button.dataset.postId
// e. If a postId exists, add a click event listener to the button (referenceaddEventListener) - inside the loop so this happens to each button
// f. The listener calls an anonymous function (see cheatsheet)
// g. Inside the anonymous function: the function toggleComments is called with the event and postId as parameters
// h. Return the button elements which were selected
// i. You may want to define an empty toggleComments function for now. The listener test will NOT pass for addButtonListeners until toggleComments is completed.
// Nevertheless, I recommend waiting on the logic inside the toggleComments function until we get there.

// The sixth function adds event listeners to all of the button elements within the main element. The function begins by selecting all of the button elements
// that are descendants of the main element. If (buttons.length) checks if the buttons nodelist contains any buttons by checking its length. The remainder of
// the function loops through each button element, accesses the attribute of each button, and adds an event listener for a "click" event.
  
function addButtonListeners() {

  const buttons = document.querySelectorAll('main button');

  if (buttons.length) {

    buttons.forEach((button) => {

      const postId = button.dataset.postId;

      button.addEventListener('click', (event) => toggleComments(event, postId));

    });

  }

  return buttons;

}
  
  
// 7 removeButtonListeners
// a. Selects all buttons nested inside the main element
// b. Loops through the NodeList of buttons
// c. Gets the postId from button.dataset.id
// d. If a postId exists, remove the click event listener from the button (referenceremoveEventListener) - inside the loop so this happens to each button
// e. Refer to the addButtonListeners function as this should be nearly identical
// f. Return the button elements which were selected

// The seventh function acts as the opposite of the sixth function by removing the button listeners. The querySelectorAll code selects all button elements in the main
// document and returns a nodelist. If (buttons.length) checks if the buttons nodelist contains any buttons by checking its length like in function six. The function
// ends by deleting all of the event listeners in the opposite fashion of function six and finally returning the buttons.

function removeButtonListeners() {

  const buttons = document.querySelectorAll('main button');

  if (buttons.length) {

    buttons.forEach((button) => {

        const postId = button.dataset.postId;

        button.removeEventListener('click', (event) => toggleComments(event, postId));

      });

    }

    return buttons;

} 
  
  
// 8 createComments
// a. Depends on the createElemWithText function we created
// b. Receives JSON comments data as a parameter
// c. Creates a fragment element with document.createDocumentFragment()
// d. Loop through the comments
// e. For each comment do the following:
// f. Create an article element with document.createElement()
// g. Create an h3 element with createElemWithText('h3', comment.name)
// h. Create an paragraph element with createElemWithText('p', comment.body)
// i. Create an paragraph element with createElemWithText('p', `From:${comment.email}`)
// j. Append the h3 and paragraphs to the article element (see cheatsheet)
// k. Append the article element to the fragment
// l. Return the fragment element

// The eighth function begins by taking the argument (comment data). The if / return code checks if the comment data is falsy, like functions two, three, and four.
// After that, a document fragment is created to temporarily hold nodes. The a for loop iterates through each item in the content array (commentdata).
// Then a second for loop creates an <article> element for each comment and later creates <p> elements for the comment body and email.
  
function createComments(commentData){

if (!commentData){

return ;

}
const fragment = document.createDocumentFragment();
        
for (const comment of commentData) {

const article = document.createElement('article');
        
const name = createElemWithText('h3', comment.name);
        
const body = createElemWithText('p', comment.body);
        
const email = createElemWithText('p', `From: ${comment.email}`);
        
            article.appendChild(name);

            article.appendChild(body);

            article.appendChild(email);
        
fragment.appendChild(article);
          }
    return fragment; 
 
}
  
  
// 9 populateSelectMenu
// a. Depends on the createSelectOptions function we created
// b. Receives the users JSON data as a parameter
// c. Selects the #selectMenu element by id
// d. Passes the users JSON data to createSelectOptions()
// e. Receives an array of option elements from createSelectOptions
// f. Loops through the options elements and appends each option element to the select menu
// g. Return the selectMenu element

// Like function eight, function nine begins with a parameter, users, and then checks to make sure that users is not falsy. Const selectMenu
// uses getElementById to select any HTML element with the 'selectMenu' Id. The if(options.length) code checks if any options were created by
// checking their length. The function ends with a for loop that appends each <option> element and finally returns the selectMenu element.
  
function populateSelectMenu(users) {

if (!users){

    return;}

    const selectMenu = document.getElementById('selectMenu');

    const options = createSelectOptions(users);

if (options.length) {

    options.forEach((option) => selectMenu.appendChild(option));

    }

return selectMenu;

}

  
// 10 getUsers
// a. Fetches users data from: https://jsonplaceholder.typicode.com/ (look at Resources section)
// b. Should be an async function
// c. Should utilize a try / catch block
// d. Uses the fetch API to request all users
// e. Await the users data response
// f. Return the JSON data

// The tenth function uses Fetch API to send an async request to the link provided. The function itself is located in a large try block.
// This is done to make sure that if an error occurs in fetching and recieving a response, the program will not crash.
// The keyword "await" is uset to make sure the block does not continue until it recieves the Fetch API.

async function getUsers() {

    try {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    return await response.json();

    } catch (error) {

    console.error(error);

    }

}


// 11 getUserPosts
// a. Receives a user id as a parameter
// b. Fetches post data for a specific user id from:https://jsonplaceholder.typicode.com/ (look at Routes section)
// c. Should be an async function
// d. Should utilize a try / catch block
// e. Uses the fetch API to request all posts for a specific user id
// f. Await the users data response
// g. Return the JSON data

// Like the tenth function, the eleventh function makes use of the Fetch API. The function begins by checking the userId to make sure it is
// not falsy like previous functions. This helps prevent any errors before beginning the fetch process. This function also uses a try / catch
// block like the tenth function to prevent any errors. The function also uses the user id as a parameter.

async function getUserPosts(userId){

if (!userId){

    return;}

    try {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    return await response.json();

    } catch (error) {


    console.error(error);

    }

}


// 12 getUser
// a. Receives a user id as a parameter
// b. Fetches data for a specific user id from: https://jsonplaceholder.typicode.com/ (look at Routes section)
// c. Should be an async function
// d. Should utilize a try / catch block
// e. Uses the fetch API to request a specific user id
// f. Await the user data response
// g. Return the JSON data

// Function twelve uses async, like function eleven, meaning it will always return a promise and allow the use of "await" to make handling async
// operations more easily. Also like function eleven, it uses userId as a parameter for which we will fetch unique information. The function begins
// by checking if the userId is falsy, and will later use fetch to make an HTTP get request from the external API within a try block.

async function getUser(userId){

  if (!userId){

    return;}

    try {

      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      return await response.json();

    } catch (error) {

      console.error(error);

    }

  }


// 13 getPostComments
// a. Receives a post id as a parameter
// b. Fetches comments for a specific post id from: https://jsonplaceholder.typicode.com/ (look at Routes section)
// c. Should be an async function
// d. Should utilize a try / catch block
// e. Uses the fetch API to request all comments for a specific post id
// f. Await the users data response
// g. Return the JSON data

// Function thirteen makes use of similar code to that of functions twelve and eleven before it. It takes a parameter, though in this case it is
// postId and not userId. It is an async function, meaning it will always return a promise. This function also makes use of try blocks to prevent
// any errors during the function's execution. The function itself fetches comments for a given post Id from a mock API.

async function getPostComments(postId){

  if (!postId){

    return;}

    try {

    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

      return await response.json();

      } catch (error) {

        console.error(error);

      }

  }


// 14 displayComments
// a. Dependencies: getPostComments, createComments
// b. Is an async function
// c. Receives a postId as a parameter
// d. Creates a section element with document.createElement()
// e. Sets an attribute on the section element with section.dataset.postId
// f. Adds the classes 'comments' and 'hide' to the section element
// g. Creates a variable comments equal to the result of await getPostComments(postId);
// h. Creates a variable named fragment equal to createComments(comments)
// i. Append the fragment to the section
// j. Return the section element

// The fourteenth function is an async function that fetches and displays comments in the blog. Like function thirteen, it takes the postId as a
// parameter. Then it checks if the postId is falsy like other functions in this file. After that, a new element named, 'section' is created. The
// remainder of the function does other various functions including giving the new section the classes 'comments' and 'hide' before the final return.

async function displayComments(postId) {

if (!postId){

  return;}

  const section = document.createElement('section');

  section.dataset.postId = postId;

  section.classList.add('comments', 'hide');
    
    const comments = await getPostComments(postId);

    const fragment = createComments(comments);

    section.appendChild(fragment);
    
    return section;

}


// 15 createPosts
// a. Dependencies: createElemWithText, getUser, displayComments
// b. Is an async function
// c. Receives posts JSON data as a parameter
// d. Create a fragment element with document.createDocumentFragment()
// e. Loops through the posts data
// f. For each post do the following:
// g. Create an article element with document.createElement()
// h. Create an h2 element with the post title
// i. Create an p element with the post body
// j. Create another p element with text of `Post ID: ${post.id}`
// k. Define an author variable equal to the result of await getUser(post.userId)
// l. Create another p element with text of `Author: ${author.name} with ${author.company.name}`
// m. Create another p element with the author’s company catch phrase.
// n. Create a button with the text 'Show Comments'
// o. Set an attribute on the button with button.dataset.postId = post.id
// p. Append the h2, paragraphs, button, and section elements you have created to the article element.
// q. Create a variable named section equal to the result of await displayComments(post.id);
// r. Append the section element to the article element

// The fifteenth function is quite long and is used to dynamically create various HTML elements to display a list of posts with additional details
// regarding the post's author and the comments. Like previous functions, this function is async, and begins by checking if the posts are falsy.
// The function can loop through user posts, create various post elements and can fetch author data using asynchronously using await.

async function createPosts(posts) {

  if (!posts){

  return;}

    const fragment = document.createDocumentFragment();
    
    for (const post of posts) {

      const article = document.createElement('article');
    
      const h2 = createElemWithText('h2', post.title);

      const p1 = createElemWithText('p', post.body);

      const p2 = createElemWithText('p', `Post ID: ${post.id}`);
    
      const author = await getUser(post.userId);

      const p3 = createElemWithText('p', `Author: ${author.name} with ${author.company.name}`);

      const p4 = createElemWithText('p', author.company.catchPhrase);
    
      const button = createElemWithText('button', 'Show Comments');

      button.dataset.postId = post.id;
    
      article.append(h2, p1, p2, p3, p4, button);
    
      const section = await displayComments(post.id);

      article.append(section);
    
      fragment.append(article);

    }
    
    return fragment;

  }
 

// 16 displayPosts
// a. Dependencies: createPosts, createElemWithText
// b. Is an async function
// c. Receives posts data as a parameter
// d. Selects the main element
// e. Defines a variable named element that is equal to:
//  i. IF posts exist: the element returned from await createPosts(posts)
//  ii. IF post data does not exist: create a paragraph element that is identical to the default paragraph found in the html file.
//  iii. Optional suggestion: use a ternary for this conditional
// f. Appends the element to the main element
// g. Returns the element variable
  
// The sixteenth function is used to check if there are posts to display and will display a default message to the user if there are none
// to display. Like previous functions, it is async and it takes a parameter, in this case posts. It begins by selecting the "main" HTML
// element followed by creating a document fragment. This is followed by an if argument that loops through the posts followed by a return.

async function displayPosts(posts){
  
  const main = document.querySelector('main');

  var fragment = document.createDocumentFragment();

    if(!posts){

      fragment = createElemWithText('p', 'Select an Employee to display their posts.', 'default-text');
      
      main.append(fragment);
      
      return fragment;
      
    }

  fragment = await createPosts(posts);

  main.append(fragment);
    
  return fragment;

}
    
  
// 17 toggleComments
// a. Dependencies: toggleCommentSection, toggleCommentButton
// b. Receives 2 parameters: (see addButtonListeners function description)
//   i. The event from the click event listener is the 1st param
//   ii. Receives a postId as the 2nd parameter
// c. Sets event.target.listener = true (I need this for testing to be accurate)
// d. Passes the postId parameter to toggleCommentSection()
// e. toggleCommentSection result is a section element
// f. Passes the postId parameter to toggleCommentButton()
// g. toggleCommentButton result is a button
// h. Return an array containing the section element returned from toggleCommentSection and the button element returned from toggleCommentButton: [section, button]

// The seventeenth function is the first function in the file to make use of an event listener which will trigger the function.It begins
// by checking if the event and post Id are falsy and then marks the event listener as true. The function then toggles the comment section
// and comment button. The function concludes by returning an array containing the two toggling actions, section and button.

function toggleComments(event, postId){

if (!event || !postId){

  return;}

  event.target.listener = true;
    
  const section = toggleCommentSection(postId);

  const button = toggleCommentButton(postId);
    
  return [section, button];

}


// 18 refreshPosts
// a. Dependencies: removeButtonListeners, deleteChildElements, displayPosts, addButtonListeners
// b. Is an async function
// c. Receives posts JSON data as a parameter
// d. Call removeButtonListeners
// e. Result of removeButtonListeners is the buttons returned from this function
// f. Call deleteChildElements with the main element passed in as the parameter
// g. Result of deleteChildElements is the return of the main element
// h. Passes posts JSON data to displayPosts and awaits completion
// i. Result of displayPosts is a document fragment
// j. Call addButtonListeners
// k. Result of addButtonListeners is the buttons returned from this function
// l. Return an array of the results from the functions called: [removeButtons, main, fragment, addButtons]

// The eighteenth function is used to update or refresh the blog with new posts and remove older content. Like previous functions, it takes
// posts as a parameter and checks if posts are falsy. After that, the function will remove all button listeners and delete the child elements
// in the main element. It will then await new posts to be processed and add new button listeners before returning an array.

async function refreshPosts(posts){

  if (!posts){

  return;}

    const main = document.querySelector('main')

    const removeButtons = removeButtonListeners();

    const x = deleteChildElements(main);
    
    const fragment = await displayPosts(posts);
    
    const addButtons = addButtonListeners();
    
    return [removeButtons, x, fragment, addButtons];

}


// 19 selectMenuChangeEventHandler
// a. Dependencies: getUserPosts, refreshPosts
// b. Should be an async function
// c. Automatically receives the event as a parameter (see cheatsheet)
// d. Disables the select menu when called into action (disabled property)
// e. Defines userId = event.target.value || 1; (see cheatsheet)
// f. Passes the userId parameter to await getUserPosts
// g. Result is the posts JSON data
// h. Passes the posts JSON data to await refreshPosts
// i. Result is the refreshPostsArray
// j. Enables the select menu after results are received (disabled property)
// k. Return an array with the userId, posts and the array returned from refreshPosts: [userId, posts, refreshPostsArray]

// The nineteenth function is the first and only arrow function in this program. It takes an argument, event, and begins by checking if event
// is falsy. The function then proceeds to locate the select menu and disable it. After selecting the value from the event's target element, the
// function will await for getUserPosts, re-enable the select menu, and return an array containing userId, posts, and refrechPostsArray.

const selectMenuChangeEventHandler = async(event) =>{

  if(!event)

  return; 

    let select = document.querySelector("#selectMenu");

    select.disabled = true;

    let userId = event?.target?.value || 1;

    let posts = await getUserPosts(userId);

    let refreshPostsArray = await refreshPosts(posts);

    select.disabled = false;

    return [userId, posts, refreshPostsArray];

}
    
// 20 initPage
// a. Dependencies: getUsers, populateSelectMenu
// b. Should be an async function
// c. No parameters.
// d. Call await getUsers
// e. Result is the users JSON data
// f. Passes the users JSON data to the populateSelectMenu function
// g. Result is the select element returned from populateSelectMenu
// h. Return an array with users JSON data from getUsers and the select element result from populateSelectMenu: [users, select]

// The twentieth function is declared using async, meaning it will return a promise and allows the use of 'await' within the function. The
// function begins by waiting for the getUsers function to be resolved. Then the function passes the users JSON data via const select.
// The function concludes by returning an array including the fetched user data and the results of the const select code above.

async function initPage() {

  const users = await getUsers();
    
  const select = populateSelectMenu(users);
    
  return [users, select];

}


// 21 initApp
// a. Dependencies: initPage, selectMenuChangeEventHandler
// b. Call the initPage() function.
// c. Select the #selectMenu element by id
// d. Add an event listener to the #selectMenu for the “change” event
// e. The event listener should call selectMenuChangeEventHandler when the change event fires for the #selectMenu
// f. NOTE: All of the above needs to be correct for your app to function correctly. However, I can only test if the initApp function exists. It does not return anything.

// The twenty-first function is used to initialize sections of the Acme Blogs application. It begins by calling the initPage function followed
// by selecting all 'selectMenu' elements in the DOM by their id. The function concludes by adding an event listener to each selectMenu
// element the previous code located while also listening for the change event that select menu fires.

function initApp() {

  initPage();
    
  const selectMenu = document.getElementById('selectMenu');

  selectMenu.addEventListener('change', selectMenuChangeEventHandler);

}


/*NOTE: There is one last step to get your app to function correctly. I cannot test for this, but you
must apply it to call the script into action.
*** This must be underneath the definition of initApp in your file.
1. Add an event listener to the document.
2. Listen for the “DOMContentLoaded” event.
3. Put initApp in the listener as the event handler function.
4. This will call initApp after the DOM content has loaded and your app will be started. */

/// This final function makes use of the DOM and initApp commands to launch the Acme Blogs program after the site has fully loaded.
  
document.addEventListener('DOMContentLoaded', initApp);