import NavigationCrypto from "@/components/NavigationCrypto";
import TableComponent from "@/components/TableComponent";

export default function TrendingCryptos() {
    return (
        <main
            className="w-full h-full flex flex-col first-letter:content-center items-center relative text-white font-nunito">
            <div className="w-screen h-screen bg-gray-300 fixed -z-10" />


            <NavigationCrypto />
            <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
                {/* <Filters /> */}
                <TableComponent />
                {/* <Outlet /> */}
            </section>
        </main>
    )
}