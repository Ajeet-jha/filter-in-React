import React, { Component } from "react";
import Information from "./infro-json";
import './index.css';
class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };
  render() {
    
    const items = Information.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.country.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.age.includes(this.state.search)
      ) {
        return data;
      }
    }).map((data) => {
      return (
          <ul>
            <li key={data.name}>
              <span className="rander_list">{data.name}</span>
              <span className="rander_list">{data.age}</span>
              <span className="rander_list">{data.country}</span>
            </li>
          </ul>
      );
    });

    return (
      <div className="container">
        <input
          type="text"
          placeholder="Enter item to be searched"
          className = "input_box"
          onChange={(e) => this.searchSpace(e)}
        />
        {items.length ? items : <div>No Data found</div>}
      </div>
    );
  }
}
export default App;
