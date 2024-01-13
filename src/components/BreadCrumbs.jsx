import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
    const location = useLocation();
    let currentLink = '';
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb) => {
        currentLink += `/${crumb}`;
        return(
            <div className="crumb">
                <Link to={currentLink} key={crumb}>{crumb}</Link>
            </div>
        )
    })

  return (
    <div className="breadcrumbs">
        {crumbs}
    </div>
  )
}

export default BreadCrumbs;