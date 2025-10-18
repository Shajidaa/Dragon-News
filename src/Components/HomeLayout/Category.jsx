import { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Category = () => {
  const categories = use(categoriesPromise);
  return (
    <div>
      <h1 className="text-xl font-semibold">
        All Categories({categories.length})
      </h1>
      <div className=" grid grid-cols-1">
        {categories.map((category) => (
          <NavLink
            className="btn bg-base-100 mt-5 border-0 hover:bg-base-200 hover:text-white font-semibold text-base-200"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
