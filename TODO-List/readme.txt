-> This is a basic <b>TO-DO List</b> application made with react-redux.
-> In this app you can basically add and delete todos as per your requriement.

1-> We will use materializecss.com : It is a CSS library, which is based on Material Design.
I will load this into my project so that I don't have to focus much on writing CSS.
Instead, I will use some material clases to style up our project.
E.g : Materialized class-> todos-collection for styling.

2-> Next we will copy the CDN file of CSS from that website and paste in our index.html file.

3-> Our Root Component is gonna be a container component where we will store the state of our application.
i.e., we will store our TODOs inside the state of this component. (Root file -> App.js)

4->  We will create a separate component which is just responsible for listing individual TODOs.
i.e., we create Todos.js
This component will be just a functional component. We will pass the state from App.js to here.

5-> We will use props for passing our todos from root component to Todos.js

6-> We have two states id and content using which we will output the todos.
Also we need to pass id as a key as React expects a unique key on every surrounding element that we return
inside our map function in Todos.js file when we output them to browser.In order to identify each item.

7-> For testing we logged the new todo in the console, but we have to add it to the list.

8-> To do that we need to make a function inside the root component which is gonna interact with the state and 
add that TODO to this property i.e, our array.

