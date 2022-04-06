/* React is a basically just javascript wrap around synthetic sugar call JSX

For example: basic creation of HTML element with basic JavaScript.

    <body>
        <div id="root"></div>
        <script type="module">
            const rootElement = document.getElementById('root')
            const element = document.createElement('div')
            element.textContent = 'Hello World'
            element.className = 'container'
            rootElement.append(element)
        </script>
    </body>

I can also just create the root element and then append it to the body too
     <body>
        <div id="root"></div>
        <script type="module">
            const rootElement = document.createElement('root')
            rootElement.id = 'root'
            document.body.append(rootElement)
            const element = document.createElement('div')
            element.textContent = 'Hello World'
            element.className = 'container'
            rootElement.append(element)
        </script>
    </body>


Now let's use React library to create the same HTML element.
One important thing to know about React is that it supports multiple platforms (for example, native and web). 
Each of these platforms has its own code necessary for interacting with that platform, and then there's shared code between the platforms.

With that in mind, you need two JavaScript files to write React applications for the web:

React: responsible for creating React elements (kinda like document.createElement())
ReactDOM: responsible for rendering React elements to the DOM (kinda like rootElement.append())

    // global react api
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>

    // first params is the html element, second is the props, third is the children
    const element = React.createElement('div', {className: 'container', children: 'Hello World'}, 'Hello World')

    ReactDOM.render(element, document.getElementById('root'))

    note: you can't put statement inside template string, but you can put expression inside template string

    statement: if(true) {}
    expression: name ? 'Hello' : 'World'

    spread props
    - How can you spread props?
    const children = 'Hello World'
    const className = 'container'
    const props = {children, className}
    const element = <div />?

    Looking how jsx is form underneath will help
    const element = react.createElement('div', props) or react.createElement('div', {...props})

    so therefore we can do this:
    const element = <div {...props} />

    we can also add more props to the element
    const element = <div id="default" {...props} className="contain" />

    React Form
    function UsernameForm({onSubmitUsername}) {
        // access value of input
        function handleSubmit(event) {
            event.preventDefault()
            const username = event.target.username.value
            // ref access the value of input
            const username = inputRef.current.value

            onSubmitUsername(username)
        }

        // access individual input
        function handleChange(event) {
            const {value} = event.target
        }

        // using ref to access individual input
        const inputRef = React.useRef()
        function handleChange(event) {
            const {value} = event.target
        }
        return (
            <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" id="username" onChange={handleChange} ref={inputRef} />
            </div>
            <button type="submit">Submit</button>
            </form>
        )
    }
    
*/