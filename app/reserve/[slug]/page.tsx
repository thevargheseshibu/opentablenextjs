import Link from "next/link"
import Header from "./components/Header"
import Form from "./components/Form"

export default function Reserve() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                {/* NAVBAR */}
                <nav className="bg-white p-2 flex justify-between">
                    <Link href="/" className="font-bold text-gray-700 text-2xl">
                        {" "} OpenTable{" "}
                    </Link>
                    <div>
                        <div className="flex">
                            <button
                                className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
                            >
                                Sign in
                            </button>
                            <button className="border p-1 px-4 rounded">Sign up</button>
                        </div>
                    </div>
                </nav>
                {/* NAVBAR END */}
                <div className="border-t h-screen">
                    <div className="py-9 w-3/5 m-auto">
                        <Header />
                        < Form />
                    </div>
                </div>
            </main>
        </main>


    )
}
