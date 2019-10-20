import React from 'react' //render UI regardless the environment
import ReactDOM from 'react-dom'// browser environment
import './index.css'
//Component
//State
//lifecycle
//UI

class App extends React.Component
{
    render()
    {
        return (
            <div>Am a react app using webpack</div>
        )
    }
}

ReactDOM.render(
    <App />,//React Element
    document.getElementById("App")//where do we want to render to
    
)