import { FaBookOpen } from "react-icons/fa6";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <h1 className="header-title">
          <FaBookOpen /> BookList
        </h1>
      </div>
    </div>
  );
};
export default Header;
