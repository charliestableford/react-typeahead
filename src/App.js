import React from 'react';
import './App.css';
import NamesContainer from './NamesContainer';

class App extends React.Component {

  state = {
    illegalStates: [
      'North Dakota', 
      'Montana', 
      'Idaho', 
      'Oregon', 
      'Wyoming', 
      'Utah', 
      'Arizona', 
      'Nebraska', 
      'South Dakota', 
      'Kansas', 
      'Oklahoma',
      'Missouri', 
      'Arkansas', 
      'Louisiana', 
      'Mississippi', 
      'Tennessee', 
      'Kentucky', 
      'Indiana', 
      'Michigan', 
      'Ohio', 
      'Alaska', 
      'Vermont', 
      'New Hampshire', 
      'Delaware', 
      'Virginia', 
       'West Virginia', 
       'North Carolina', 
       'South Carolina', 
       'Georgia', 
       'Alabama', 
       'Florida', 
       'Guam', 
       'American Samoa', 
       'Puerto Rico',
       'Virgon Islands', 
       'Northern Marisana Islands' 

    ], 
    legalState: [
      'Washington', 
      'California',
      'Nevada', 
      'Hawaii', 
      'Texas', 
      'New Mexico',
      'Colorado'
    ],
    searchTerm: '' //an empty string controlled by our inpur tag
  }

  editSearchTerm = (e) => {
    this.setState({
      // allows our input field to control the searchTerm value in our state.
      searchTerm: e.target.value
    })
  }

  dynamicSearch = () => {
    //allows us to render what shows up onto the page dynamically.
    return this.state.illegalStates.filter(illegalState => illegalState.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>Where is the 'gay panic defense' legal?</p>
        <p>The 'gay panic defense' is a legal strategy in which a defendant claims they acted in a state of voilent, temporary insanitty, committing assault or murder, because of an unwanted sexual advance from a person in the LGBTQ+ community. </p>
        <p>Shocked by this? Type in a state name to check what the law is.</p>
        <input type="text" value = {this.state.searchTerm} onChange= {this.editSearchTerm} placeholder = 'Check a state' /> 
        <h3></h3>
        <NamesContainer illegalStates = {this.dynamicSearch()} />       
      </header>
    </div>
  );
  }
}

export default App;
