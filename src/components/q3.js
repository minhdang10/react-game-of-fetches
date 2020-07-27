import React from "react";
import axios from "axios";
const URL = "http://anapioficeandfire.com/api/";

let lannister = 'houses/229';

class Question3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info:[]
        }
    }

    async getAnswer(){
        try{
            const response = await axios.get(URL + lannister)
            this.setState({
                info: response.data
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
                <h3>Question 3: What's the coat of arms of House Lannister?</h3>
                <p> &emsp; Answer: {this.state.info.coatOfArms}</p>
            </div>
        )
    }
}

export default Question3;