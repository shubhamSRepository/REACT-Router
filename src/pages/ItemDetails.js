/**we are importing 'params' to get value of 'itemId' from App.js.
* It is a react-hook */
import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function ItemDetails() {
    const {itemId} = useParams();
    const item = ITEMS.find((item)=>item.id===itemId);

    return (
        <>
            <main>
                <h1>item Details</h1>
            </main>
                <h2>{item.title}</h2>
                <h2>{item.detail}</h2>
        </>
    );
}

export default ItemDetails;