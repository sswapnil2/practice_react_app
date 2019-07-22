import React from "react";
import Axios from "axios";
import Card from "./Card";

// extend react.Component 
class App extends React.Component {

    // 
    constructor(props){
        super(props);
        this.state = {
            name: "hello",
            a: "",
            v: "",
            b: "",
            cardList: []
        }
        console.log("CAlling constructotr");
    }

    componentDidMount(){
        console.log("render in component did mount");
        // const response = await Axios.get("http://5bb1bc576418d70014071c7e.mockapi.io/modal/list")
        // this.getRequest();
        this.get();
    }

    showCandidateAlert = async (data) => {
        console.log(data);
        alert(`show candidate ${data.id} ${data.name}`);
        // await Axios.post("/url", {
        //     candidate_id: data.id
        // });
    }


    get = async () => {
            const response = await Axios.get("http://5bb1bc576418d70014071c7e.mockapi.io/modal/list")
        // console.log("Response from api: ", response.data);    
        const list = response.data.map((item, index) =>  <Card  data={item} key={`${index}${item.id}`} showAlert={this.showCandidateAlert} />)
        // console.log("list: ", list);
        this.setState({ cardList: list });
    }

    changeName = (event) => {
        console.log(event);
        // change the nmw of state on calling this method
        // const { name } = this.state;
        
        this.setState({
            name: "Swapnil"
        });
    }


    render(){
        console.log("Props in App.jsx", this.props);
        console.log("Calling render");
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                { this.state.name }
                props.data       <button onClick={this.changeName} >Click here</button>
                </div>
                {/** Imported from "./Card" */}
                {this.state.cardList}
            </div>
        );
    }   
}

// default export 
export default App;