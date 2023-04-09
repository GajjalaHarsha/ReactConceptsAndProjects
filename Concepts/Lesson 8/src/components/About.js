import Portfolio from "./Profile.js";
import  { Component }from "react";

class About extends Component{
    constructor(props) {
        super(props);
        console.log("Parent-constructor")
        
    }

    componentDidMount() {
        console.log("parnet componentDidMount().....")
    }

    componentDidUpdate(){
        console.log("Parent componentDidUpdate()....")
    }

    render() {
        console.log("Parent-render")
        return (
            <div>
                <h1>About Us</h1>
                <Portfolio name="GajjalaHarsha"/>
            </div>
        );
    }
    
}

export default About;



/*
render phase: parent-constructor
              parent-render
              child-constructor
              child-render
commit phase: componentDidMount
              componentDidUpdate

It will do the render phase for all parentAndChildComponents.
Then It will call componentDidMount, after the fdirst render of component and
 from next render it will call the  componentDidUpdate of child and parent components -> which is a commit phase.
*/