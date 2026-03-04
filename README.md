### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### Ans:
getElementById: We use it to access nodes by the id name.
getElementsByClassName: We use this to access all the nodes that have same classname as html collection.
querySelector: We use this to access the first matching tag/id/class.
querySelectorAll: We use this to access all matching tags/class as node list

### 2. How do you create and insert a new element into the DOM?
### Ans:
First I create element with document.createElement(). Then add contents inside it. Last apped it to the parent Node using appendChild();
### 3. What is Event Bubbling? And how does it work?
### Ans:
Event bubbling is when an event starts at the target element and propagates up through its ancestors in the DOM tree. 
When we click or interact with an element. The event first triggers on that element. Then the same event automatically triggers on the element’s parent. Then goes up to the root of the document.
### 4. What is Event Delegation in JavaScript? Why is it useful?
### Ans:
Event Delegation is attaching a single event listener to a parent element instead of individual child elements.
It is usefull because it educes memory usage, new items automatically have the event handler handler.
### 5. What is the difference between preventDefault() and stopPropagation() methods?
### Ans:
preventDefault() is used to stops the default browser action. stopPropagation() stops the event from bubbling further .