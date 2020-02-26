import React from 'react'

class SearchBar extends React.Component {
    constructor(probs){
        super(probs)
        this.state = {searchText:"",placeHolder:"Saisir la recherche ..."}
    }
    render(){
        return ( 
        <div>
            <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
        </div>
        )
    }

    handleChange(event){
        this.setState({searchText:event.target.value})
    }
}

export default SearchBar;