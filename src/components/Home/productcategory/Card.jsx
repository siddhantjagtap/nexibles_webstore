import cardData from './cardData';
import Link from "next/link"

export default function Card({ product }) {
  console.log("productdatahere", product);

  return (
    <div className="bg-white">
      <div className="md:py-14 px-12">
        <div className="px-4 md:px-4">
          <p className="text-2xl font-bold text-blue-1 text-start md:text-left">Product Categories</p>
        </div>
        <div className="flex flex-wrap items-center md:justify-start justify-center gap-x-8 px-4">
          {product && product.length > 0 && product.map(data => (
            <div key={data.id} className="mt-6">
              <Link href={`/carddetails/${data.id}`}>
                <div key={data.id} className="h-86 md:w-80 w-72 bg-gray-100 shadow-[0.2px_2px_5px_0.2px_#4a5568] rounded-lg mt-3">
                  {/* <img src={data.imageUrl || '/product/letterhead.jpg'} alt={data.name} className="rounded-t-lg" /> */}
                  <img src={`https://nexiapi.barecms.com/uploads/${data.image}`} alt={data.name} className="rounded-t-lg h-72 w-full object-cover" />

                  <div className="py-3 px-5">
                    <p className="text-gray-900 font-semibold text-sm" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}>{data.name}</p>
                    <p className="text-gray-600 text-sm">&#8377;{data.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
