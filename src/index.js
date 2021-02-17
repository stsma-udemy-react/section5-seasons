import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

//const App = () =>{
//    window.navigator.geolocation.getCurrentPosition( 
//        (position) => console.log(position),
//        (err) => console.log(err)
//    )

//    return(
//        <div>
//            Hi there!
//        </div>
//    )
//}

class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );

        return(
            <div>Hi there!</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))