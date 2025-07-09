import { Link, useLocation } from "react-router-dom";

import { categories } from "../data/data";

function Home() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="py-10">
      <h1 className="mb-8 text-2xl font-semibold text-center">Categories</h1>
      <ul className="grid grid-cols-3 gap-4 px-5">
        {categories.map((category) => (
          <li key={category.id}>
            <Link className="relative flex flex-col items-center justify-center" to={`/category/${category.name}`}>
              <span className="absolute z-10 text-xl font-semibold text-white">{category.name}</span>
              <img className="rounded-md" src={category.img} alt={category.name} />
              <div className="absolute inset-0 rounded-md bg-gray-950 opacity-40"></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
