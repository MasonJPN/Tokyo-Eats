

type Props = {
    category: string;
    setCategory: (cat: string) => void;

}



export default function ListFilter({ category , setCategory }:Props ) {
  const categories = ["All", "Ramen", "Sushi", "Izakaya", "Cafe", "Other"];

  return (
    <div className="ml-10 md:ml-20  mt-5 flex gap-3 mb-6 flex-wrap">
      {categories.map((cat) => {
        const isActive = category === cat;

        return (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-2xl text-sm transition-all duration-200 border
              ${
                isActive
                  ? "bg-blue-500 text-white border-gray-700"
                  : "bg-gray-900 text-gray-400 border-gray-800 hover:bg-gray-800"
              }
            `}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
