import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, {Component} from 'react';
import { Label, Input, Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      items: []
    }
  }

  /**
   * Control value of the input field for item.
   * @param e
   */
  onChangeItem = (e) => {
    const item = e.target.value;
    this.setState({ item});
  }

  /**
   * Handle click on add item button
   * @param e
   */
  onAddItem = (e) => {
    e.preventDefault();
    const items = this.state.items;
    if (this.state.item !== '') {
      items.push(this.state.item);
      this.setState({ items, item:""});
    }
  }

  /**
   * Handle click on clear list button
   * @param e
   */
  onClearList = (e) => {
    e.preventDefault();
    this.setState({ items: []});
  }

  render() {
    let items = (this.state.items.length>0) ? (
        this.state.items.map((item,i) => {
          return (<li key={i}>{item}</li>)
        })
    ) : "";

    return (
        <div style={{margin:"100px"}}>
          <h4>Bryant Christie Test Page</h4>
            <form>
              <div style={{display:"flex", width: "400px", justifyContent: "space-between", alignItems: "center", marginTop:"20px"}}>
                <Label className={"form-item"} for="item">New Item:</Label>
                <Input  className={"form-item-2x"} type="text" name="item" id="item" value={this.state.item} onChange={this.onChangeItem}/>
                <Button className={"form-item"} onClick={this.onAddItem} color="success">Add Item</Button>
                <Button className={"form-item"} onClick={this.onClearList} color="warning">Clear List</Button>
              </div>
            </form>

            <ul className={"item-list"}>
              {items}
            </ul>

        </div>
    );
  }
}

App.propTypes = {};

export default App;
