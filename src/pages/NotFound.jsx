import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
        <h1>Oops! Page Not Found.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores impedit cum eum ad. Aut exercitationem voluptatem perferendis quos iste. Explicabo quibusdam ipsa voluptates laborum. Deserunt qui alias omnis sit corporis!</p>

        <p>Go to home <Link to='/'>Home page</Link></p>
    </div>
  )
}

export default NotFound;