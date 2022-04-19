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

    // default initial value to something especially when you are using it for a useState initial value because it can be undefined
    function Greeting({initialValue = ''}) {
        const [name, setName] = useState(initialValue)

        // IN this case input value doesn't accept undefined as value so it will throw an error.
        // providing default value is best here
        return (
            <input value={name} />
        )
    }

    // Each of the hooks has a unique API. Some return a value (like React.useRef and React.useContext), 
    others return a pair of values (like React.useState and React.useReducer), and 
    others return nothing at all (like React.useEffect).

    // Lazy state initialization
    if the initial state is a call that might be slow or async it will make more sense to use a lazy state initialization.
    the useState allows you to pass a function as params. The good thing about this is prevent the function from being called 
    every time the component re-renders. 
    From this React.useState(someExpensiveComputation()) To this: React.useState(() => someExpensiveComputation())

    // Note: child component re-render when
    1. a state changes within the component
    2. When the parent state changes

    with dependencies you can detect when your side-effects in child component should re-render. 
    Allowing only state that actually change to trigger and not the entirety of the child component.

    // Custom hooks: are just hooks that uses other hooks inside of it. e.g
    it is just using useState and useEffect

    useLocalStorage({key, defaultValue = ''}) {
        const [state, setState] = useState(defaultValue)

        useEffect(() => {
            window.localStorage.setItem(key, state)
        }, [])
    }


    Lesson 1: Don't mutate state directly e.g
    const [squares, setSquares] = useState([1,2,3,4,5,6,7,8,9])

    function handleSquareClick(square) {
        // copy the array before mutating it
        const newSquares = [...squares]
        newSquares[square] = 'X'
        setSquares(newSquares)
    }
    
*/