import React ,{Component} from "react";


class Row extends Component {

    render(){
        return(
            <div className={`flex ${this.props.className}`}>
                {this.props.children}
            </div>
        )
     
    }
}

export default Row;