import React , {Component} from 'react';
import './App.css';
import Food from './container/Food';
import Recipe from './container/Recipe';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { searchFood , searchRecipe } from './container/Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      Recipe: [],
      searchValue:''
    };
  }
  handleClick = async()=>{
      const response1 = await searchFood({food: this.state.searchValue})
      this.setState({food: response1.data.hints})
  
      const response2 = await searchRecipe({food: this.state.searchValue})
      this.setState({Recipe: response2.data.hits})
  }

  render(){
  return (
    <div className="App">
      <div className = "d-flex search-block">
      <TextField
          id="filled-full-width"
          style={{ margin: 8  }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={event => {
            const { value } = event.target;
            this.setState({ searchValue: value });
          }}
        /> 
        <Button variant="contained" color="primary" disableElevation onClick={this.handleClick}> Search</Button>
      </div>
  
       <Food  filterFood = {this.state.food} item = {this.state.food.length}/> 
       <Recipe Recipe = {this.state.Recipe} item = {this.state.food.length} /> 
    </div>
  );
  }
}

export default App;
