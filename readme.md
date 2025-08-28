Answer of the questions

1. getElementById is used when we want to just select the element by its ID. Since we can use only one id with the same name we will only get the element specified by that ID.
getElementsByClassName gives us the list of elements that share the same class name. querySelector only gives the first match.
querySelectorAll gives all matches as a list.

2. We will first create an element using document.createElement. Then we can add text to it if we want. Finally, we attach it to the page using something like appendChild. But we must use the append keyword for appending parent to child.
Example: 
let example = document.createElement("example")
div.message = "Razaan"
document.body.appendChild(example)

3. When we click on something inside another element, the event first happens on the clicked element, then goes upward to its parent, then to the parent's parent, and so on. This moving upward in the DOM tree is called bubbling.

4. Instead of putting a click listener on every single child element, we can just put one listener on the parent. Then we will check which child was clicked. It's useful because it saves time and also works for new elements added later.

5. preventDefault() stops the normal action of something, like stopping a link from opening or stopping a form from submitting. 
stopPropagation() doesn’t stop the action itself, but it stops the event from moving up to parent elements.