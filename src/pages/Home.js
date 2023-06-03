import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>

        {/* we are not using  anchor tag here because it reloads the whole page which we do not want 
      as it is a single page application so we are using 'Link' */}
        {/* <Link to="/about">About</Link>nbsp;nbsp;
        <Link to="/items">Items</Link> */}
        
      </main>
    </>
  );
}

export default Home;
