import React, { Component } from 'react'
import MovieDetails from './MovieDetails';
import movies from '../model/movies';
import './SearchMovie.css';
export default class SearchMovie extends Component {
    state={
        searchMovie:'',
        suggestions:[],
        show:false,
        selectedMovie:''
    }

    handleChange =(e)=>{
        let searchvalue = e.target.value;
        let suggestions = [];
        if(!searchvalue)
            suggestions=[]
        else{
            searchvalue = searchvalue.charAt(0).toUpperCase() 
            + searchvalue.substring(1);
            for(let movie of movies)
            {
                if(movie.startsWith(searchvalue))
                    suggestions.push(movie);
            }
        }
        this.setState({suggestions, searchMovie:searchvalue});
    }
    renderSuggestions =()=>{
        if(this.state.suggestions.length == 0)
        return null;
        else{
            return( <div>    <ul>
                {this.state.suggestions.map((moviename, index)=>
                <li key={index} 
                onClick={()=>this.selectedText(moviename)}>{moviename}</li>
                )}
            </ul></div>)
        }
    }
    selectedText = (moviename)=>{
        this.setState({
            searchMovie:'',
            suggestions:[],
            show:true,
            selectedMovie:moviename
        })
    }
    render() {
        return (
            <div>
                <div id="movie">
                    <h3>Enter movie : </h3>
                    <input type="text" value={this.state.searchMovie}
                    onChange={this.handleChange}
                    /><br></br> 
                
                        {this.renderSuggestions()}
                    
                    <p>Suggestions : {this.state.suggestions.length}</p>
                </div>
               <div>
                   {
                       this.state.show && <MovieDetails movie = {this.state.selectedMovie}/>
                   }
               </div>
            </div>
        )
    }
}
