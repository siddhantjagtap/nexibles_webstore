import cardData from './cardData';
import Link from "next/link";
import noproduct from '../../../../public/cards/product-not-found.jpg';
import Loading from '../../comman/Loader';
export default function Card({product, isLoading}) {
  console.log("productdatahere", product);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white ">
      <div className="md:py-1 mb-6">
        <div className="flex flex-wrap items-center md:justify-start justify-center gap-x-8 px-4">
          {product && product.length > 0 ? (
            product.map(data => (
              <div key={data.id} className="">
                <Link href={`/carddetails/${data.id}`}>
                  <div className="h-86 md:w-80 w-72 bg-gray-100 shadow-[0.2px_2px_5px_0.2px_#4a5568] rounded-lg mt-3">
                    <img
                      src={`https://nexiblesapp.barecms.com/uploads/${data.image}`}
                      alt={data.name}
                      className="rounded-t-lg h-72 w-full object-contain"
                    />
                    <div className="py-3 px-5">
                      <p
                        className="text-gray-900 font-semibold text-sm"
                        style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          width: '100%'
                        }}
                      >
                        {data.name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center w-full h-96 mt-24">
              <img src={noproduct.src} alt="Empty" width={400} height={400} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}