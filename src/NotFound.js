import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>That page cannot be found</h2>
            <Link to='/'>Back to HomePage</Link>
        </div>
    );
}
 
export default NotFound;