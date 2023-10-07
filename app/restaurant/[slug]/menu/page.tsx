import Header from "../components/Header"
import RestaurantNavbar from "../components/RestaurantNavbar"
import Menu from "../components/Menu"
export default function RestaurantMenu() {
    return (
        <>
            <Header />
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                <div className="bg-white w-[100%] rounded p-3 shadow">
                    <RestaurantNavbar />
                    <Menu />
                </div>
            </div>
        </>
    )
}
