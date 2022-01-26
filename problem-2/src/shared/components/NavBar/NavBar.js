import Branding from "shared/assets/salda-logo.svg"
const Navbar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between py-2 px-6">
        <img alt="brand-logo" src={Branding} />
      </div>
    </nav>
  );
};

export default Navbar;
