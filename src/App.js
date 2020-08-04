import React, { Component } from "react";
import Information from "./infro-json";

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
    const styleInfo = {
      paddingRight: "10px",
    };
    const elementStyle = {
      width: " 49%",
      margin: " 10px 20px",
      padding: " 10px 5px"
    };

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
              <span style={styleInfo}>{data.name}</span>
              <span style={styleInfo}>{data.age}</span>
              <span style={styleInfo}>{data.country}</span>
            </li>
          </ul>
      );
    });

    return (
      <div className="container">
        <input
          type="text"
          placeholder="Enter item to be searched"
          style={elementStyle}
          onChange={(e) => this.searchSpace(e)}
        />
        {items.length ? items : <div>No Data found</div>}
      </div>
    );
  }
}
export default App;
