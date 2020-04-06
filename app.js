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
     

var Heading = () => (
    <h2>Grocery List Refactor</h2>
);

var GroceryListItem = (props) => (
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
)


ReactDOM.render(<GroceryList />, document.getElementById("app"));