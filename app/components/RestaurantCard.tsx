"use client"
import Link from 'next/link'


export default function RestaurantCard() {
  return (
    <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
    {/* CARD */}
    <Link href="/restaurant/milestones-grill">
      <div
        className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
      >
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
          alt=""
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">Mexican</p>
            <p className="mr-3">$$$$</p>
            <p>Toronto</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </div>
    </Link>
    {/* CARD */}
  </div>
  )
}

