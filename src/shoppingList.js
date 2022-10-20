import React from "react";
import ReactDOM  from "react-dom/client";
class ShoppingList extends React.Component
{
    render() {
        return(
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Siracha</li>
                    <li>eggs</li>
                    <li>the next MXTX book</li>
                </ul>
            </div>
        );
    }
}
export default ShoppingList;