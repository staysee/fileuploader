import React from 'react';
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import FilterableList from './FilterableList/FilterableList'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}

export default App;