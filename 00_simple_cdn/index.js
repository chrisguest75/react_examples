/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
const element = <h1>hello world</h1>
console.log(element)

const hierarchy = (
    <div>
        <h1>hello world</h1>
        <p>the is a paragraph</p>
    </div>
)

console.log(hierarchy)

const list = (
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
)
console.log(list)

function MyFirstComponent() {
    return (
        <div>
            <h1>Heading</h1>
            <ol>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
                <li>list4</li>
            </ol>
        </div> 
    )
}

ReactDOM.render(
    (
        <MyFirstComponent />
    )
    , document.getElementById("root"))


