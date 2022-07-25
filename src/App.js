
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
let name="Altaf";
function App() {
  return (

    <>
     {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <h1>Hello {name}</h1>
      </nav>
      <div className="container">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse distinctio facilis amet officiis id maxime illo, eaque adipisci perferendis sunt nobis quidem ex eius, nesciunt sapiente modi voluptatem temporibus ad.</p>
      </div>
      <button></button>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button> */}


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
   
  );
}

export default App;
