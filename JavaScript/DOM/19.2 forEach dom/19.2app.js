// <!-- JavaScript – forEachDOM
// The following exercise contains the following subjects:
//  DOM
//  foreach
// Instructions:
// You get an array of objects of users from your database: -->
// <!-- const users = [
//  {
//  id: 167464,
//  firstName: "Jimmy",
//  lastName: "Arnold",
//  email: "jimmya@gmail.com",
//  },
//  {
//  id: 578447,
//  firstName: "Martha",
//  lastName: "Goldman",
//  email: "gold@hotmail.com",
//  },
//  {
//  id: 864578,
//  firstName: "Tim",
//  lastName: "Burton",
//  email: "timmy.hotmail.com",
//  },
//  ]; -->

//  <!-- 1. Loop over the array with the forEach method and dynamically
// create an ordered list of the first and last names from the objects.
// 2. Remove the bullet points of the ordered list with javaScript.
// 2. Create a custom data attribute called “data-id” and attach the id
// value to each li.
// Your markup should look like this: -->

    
    const users = [
    {
      id: 167464,
      firstName: "Jimmy",
      lastName: "Arnold",
      email: "jimmya@gmail.com",
    },
    {
      id: 578447,
      firstName: "Martha",
      lastName: "Goldman",
      email: "gold@hotmail.com",
    },
    {
      id: 864578,
      firstName: "Tim",
      lastName: "Burton",
      email: "timmy.hotmail.com",
    },
  ];
  
  
  const ol = document.createElement("ol");
  document.body.appendChild(ol);
  ol.style.listStyle = "none";
  
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = `${user.firstName} ${user.lastName}`;
    li.setAttribute("data-id", user.id);
    ol.appendChild(li);
  });
  
