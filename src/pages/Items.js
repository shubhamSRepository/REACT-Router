import { Link } from "react-router-dom";
import { ITEMS } from "../data/itemData"

function Items() {
  return (
    <>
      <main>

        <h1>Items Page</h1>

        {ITEMS.map((item, index) => {
          return (
            <>
              <Link to={`/items/${item.id}`} key={index} >
                <li>{item.title}</li>
              </Link>
            </>
          )
        })}


      </main>

    </>
  );
}

export default Items;
