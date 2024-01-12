import { Link, useRouteError } from "react-router-dom"

const CareerError = () => {
    const error = useRouteError();

  return (
    <div className="careers-error">
        <h2>Oops!</h2>
        <p>{error.message}</p>
        <Link to='/'>Go back to home</Link>
    </div>
  )
}

export default CareerError