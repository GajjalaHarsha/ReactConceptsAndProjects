import { Component } from "react";
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state={
            login:"",
            name:"",
            public_repos:0, 
            avatar_url:""
        }
        console.log("child-constructor")
    }

    async componentDidMount() {
        console.log("child componentDidMount() before api call.............")
        const rest = await fetch('https://api.github.com/users/'+this.props.name);
        const resp = await rest.json();
        console.log("child componentDidMount().............")
        this.setState({
            login:resp?.login,
            name:resp?.name,
            public_repos:resp?.public_repos,
            avatar_url:resp?.avatar_url
        })
    }

    componentDidUpdate(){
        console.log("Children componentDidUpdate()....")
    }
    render() {
        console.log("child-render")
        return (
            <div>
                <h1> Profile is {this.state?.login} </h1>
                <h1> Name: {this.state?.name} </h1>
                <h1> Repos Count: {this.state?.public_repos} </h1>
                <h1>Avatar: </h1>
                <img src={this.state?.avatar_url} width={100} height={100} alt="User Avatar Image "/>
            </div>
        )
    }
}

export default Profile;