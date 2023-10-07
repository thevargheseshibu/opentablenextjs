import Link from "next/link"
import NavBar from "../../../components/NavBar"
export default function RestaurantMenu() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                {/* NAVBAR */}
                <NavBar />
                {/* NAVBAR */} {/* HEADER */}
                <div className="h-96 overflow-hidden">
                    <div
                        className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center"
                    >
                        <h1 className="text-7xl text-white captitalize text-shadow text-center">
                            Milestones Grill (Toronto)
                        </h1>
                    </div>
                </div>
                {/* HEADER */} {/* DESCRIPTION PORTION */}
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[100%] rounded p-3 shadow">
                        {/* RESAURANT NAVBAR */}
                        <nav className="flex text-reg border-b pb-2">
                        <Link href="/restaurant/milestone-grill"  className="mr-7"> Overview </Link>
                        <Link href="/restaurant/milestone-grill/menu"  className="mr-7"> Menu </Link>
                        </nav>
                        {/* RESAURANT NAVBAR */} {/* MENU */}
                        <main className="bg-white mt-5">
                            <div>
                                <div className="mt-4 pb-1 mb-1">
                                    <h1 className="font-bold text-4xl">Menu</h1>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    {/* MENU CARD */}
                                    <div className=" border rounded p-3 w-[49%] mb-3">
                                        <h3 className="font-bold text-lg">Surf and Turf</h3>
                                        <p className="font-light mt-1 text-sm">
                                            A well done steak with lobster and rice
                                        </p>
                                        <p className="mt-7">$80.00</p>
                                    </div>
                                    {/* MENU CARD */}
                                </div>
                            </div>
                        </main>
                        {/* MENU */}
                    </div>
                </div>
                {/* DESCRIPTION PORTION */}
            </main>
        </main>



    )
}
