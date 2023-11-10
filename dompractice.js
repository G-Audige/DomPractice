// Create an index.html and dompractice.js. Connect the js file.
// Inside the body of your element write the code below to create a bunch of divs using Emmett shortcut.
// For example, div#frenchfry
// There should be a parent div which 6 children and each children has 3 children :)
// The names of the divs should contain the following class names.
// parent > child > grandchild

// ===== JavaScript =====
// Change the title of your webpage to 'DOM Practice' using textContent and without assigning an id or a class name
let newTitle = "DOM Practice"
document.querySelector("title").textContent = newTitle

// Access the parent and apply the following properties to the parent.
// width 500px
// height of 450 px
// background color of red
const divPar = document.querySelectorAll(".parent")
for(let div of divPar) {
    div.style.width = "500px"
    div.style.height = "450px"
    div.style.backgroundColor = "red"
}


// Access the children of parent and apply the following properties to them
// Width 100%
// Height 50px
// Background color of blue
// Margins 30 px at top and bottom and 0 on left and right
// Text align of center
// Font color of #E0D635
const divChild = document.querySelectorAll(".child")
for(let div of divChild) {
    div.style.width = "100%"
    div.style.height = "50px"
    div.style.backgroundColor = "blue"
    div.style.margin = "30px 0px 30px 0px"
    div.style.textAlign = "center"
    div.style.color = "#E0D635"
}


// Access the grandchildren give them the following properties
// width 100%
// height of 7px
// text that indicates index starting at 1
// margin top of 10px
const divGrand = document.querySelectorAll(".grandchild")
let count = 0
for(let div of divGrand) {
    div.style.width = "100%"
    div.style.height = "7px"
    div.textContent = `${++count}`
    div.style.marginTop = "10px"
}


// Grandma's favorite
// Access the 14th grandchild and give them a font color of pink and italicize
// use array index to access the child and use 'children' to access the grandchild.
// Look at MDN DOM children property
// Assign a text color purple to the 14th grandchild
divGrand[13].style.color = 'pink'
divGrand[13].style.fontStyle = 'italic'

divChild[4].children[1].style.color = 'purple'


// The JavaScript of Grandchildren
// Access the parent with the child named 9 and give the parent a position of relative
// Access the 9th child and assign it to a variable named blackSheep. Use the same method from above to access the child (children property)
// Give the following properties to blackSheep
// text color black
// font size 9rem
// text align right
// transform scale(-1, 1)
// position absolute
// top 30px
// left 500px
divChild[2].style.position = 'relative'
let blacksheep = divChild[2].children[2]
blacksheep.style.color = 'black'
blacksheep.style.fontSize = '9rem'
blacksheep.style.textAlign = 'right'
blacksheep.style.transform = 'scale(-1, 1)'
blacksheep.style.position = 'absolute'
blacksheep.style.top = '30px'
blacksheep.style.left = '500px'