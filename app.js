// TODO
/*var GroceryList = () => (
    <ul>
      <li>Milk</li>
      <li>Eggs</li>  
    </ul>
)*/

/*var GroceryList = () => (
    <div>
        <h2>My Grocery List</h2>
           <ul>
             <Milk />
             <Eggs />
           </ul>
    </div>
)

var Milk = () => (<li>Milk</li>)
     


var Eggs = () => (<li>Eggs</li>)*/
   
//--------------FIRST REFACTOR------------------------//

var Heading = () => (
    <h2>Grocery List Refactor</h2>
);

/*var GroceryListItem = (props) => (
<ul>
    <li>{props.item[0]}</li>
    <li>{props.item[1]}</li>
</ul>
);

var GroceryList = () => (
    <div>
        <Heading />
        <GroceryListItem item={['Milk', 'Eggs']}/>
    </div>
)*/

//---------------------SECOND REFACTOR------------------------//

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bold: false
        }
    }


    onMouseOver () {
        this.setState({bold: !this.state.bold});
    }

    

    

    render () {

        var style = {
            fontWeight: this.state.bold ? "bold" : "normal"
        }


        return (<li style={style} onMouseOver={this.onMouseOver.bind(this)}>{this.props.item}</li>)
    }
};

var GroceryList = (props) => (
    <div>
        <h2>Groceriez</h2>
        <ul>{props.items.map(item =>
        <GroceryListItem item={item} />
        )}
        </ul>
    </div>
    
);


ReactDOM.render(<GroceryList items={["Milk", "Eggs", "Protein Powder"]} />, document.getElementById("app"));

