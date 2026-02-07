export default function Nav() {
  return (
    <div className="flex justify-between md:justify-start md:gap-8 items-center">
      <h1 className="font-bold lg:text-3xl">Shortly</h1>
      <div className="md:hidden">
        <button
          type="button"
          aria-label="menu"
          className="lg:text-3xl text-gray-600"
        >
          &#9776;
        </button>
      </div>
      <div className="hidden md:flex md:justify-between items-center w-full text-xl text-gray-600">
        <ul className="flex gap-8 items-center">
          <li>
            <a href="#" className="hover:text-black">Features</a>
          </li>
          <li>
            <a href="#" className="hover:text-black">Pricing</a>
          </li>
          <li>
            <a href="#" className="hover:text-black">Resources</a>
          </li>
        </ul>
        <ul className="flex gap-8 items-center">
          <li>
            <a href="#" className="hover:text-black">Login</a>
          </li>
          <li>
            <a href="#" className="text-white px-3 py-2 rounded-3xl text-white bg-blue-300">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
