import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';

export default class LearnBookScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Choose your book'
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "purple"/>
        <h2>Your Books</h2>
        <br/>
        <LearnButton newLink = "Learn/Book1" text = "Book 1"/>
        <br/>
        <LearnButton newLink = "Learn/Book2" text = "Book 2"/>
        <br/>
      </div>
    );
  }
}
