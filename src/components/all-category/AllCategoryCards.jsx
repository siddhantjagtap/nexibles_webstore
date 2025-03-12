import Link from 'next/link';
import Image from 'next/image';

const AllCategoryCards = ({ categoryData }) => {
  const token = process.env.NEXT_PUBLIC_API_KEY;
  const APIURL = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className="h-auto bg-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-20 ">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="mt-8 text-left p-2 rounded-lg transition-all duration-300 border border-gray-300 shadow-md rounded-lg hover:shadow-2xl hover:-translate-y-1"
          >
            <Link href={`/category/${category.cat_url}`} passHref>
              <div className="w-full h-[250px] relative ">
                <Image
                  src={`${APIURL}/uploads/${category.bg_Img}`}
                  alt={category.name}
                  className="rounded-md object-contain transition-transform duration-300 hover:scale-105  p-4 "
                  layout="fill" // Fill the container
                  objectFit="contain" // Make sure the image covers the entire area with the same aspect ratio
                />
              </div>
              <div className="py-4 text-center">
                <p className="text-gray-900 font-semibold text-base">{category.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategoryCards;
