import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" >
          <h1>MuscleMania Gym</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;