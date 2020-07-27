import React from "react";
import axios from "axios";
const URL = "http://anapioficeandfire.com/api/";

let robert = 'characters/901';

class Question5 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info:[]
        }
    }

    async getAnswer(){
        try{
            const response = await axios.get(URL + robert)
            this.setState({
                info: response.data.aliases[1]
            })
        }
        catch{

        }
    }
    
    componentDidMount(){
        this.getAnswer();
    }
    
    render(){
        return(
            <div>
                <h3>Question 5: What is Robert Baratheon's second alias?</h3>
                <p> &emsp; Answer: {this.state.info}</p>
            </div>
        )
    }
}

export default Question5;