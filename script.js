const heading = document.createElement("h1");
const root = document.getElementById("root2");


heading.innerHTML = "I am from JS";
root.append(heading);


const head = React.createElement("div",{className : "sub-head"}, React.createElement("div",{className : "parent"},
 [
    React.createElement("p",{},"I am first child"),
    React.createElement("p",{},"I am second child"),
    React.createElement("p",{},"I am third child")
 ]
));
console.log(head);
const roote = ReactDOM.createRoot(document.getElementById("root3"));
roote.render(head);