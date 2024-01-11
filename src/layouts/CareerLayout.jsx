import { Outlet } from "react-router-dom"


const CareerLayout = () => {
  return (
    <div className="careers-layout">
        <h1>Careers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam veritatis libero aliquam.</p>
        
        <Outlet />
    </div>
  )
}

export default CareerLayout