import { NavLink, Outlet } from "react-router-dom"

const HelpLayot = () => {
  return (
    <div className="help-layout">
        <h2>How to use this app?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nostrum.</p>
        <nav>
            <NavLink to='faq'>View the FAQs</NavLink>
            <NavLink to='contact'>Contact us</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default HelpLayot