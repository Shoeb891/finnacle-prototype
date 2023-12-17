import NavigationCrypto from "@/components/NavigationCrypto";
import TableComponent from "@/components/TableComponent";
import { CryptoProvider } from "@/context/CryptoContext";

export default function Crypto() {
  return (
    <>
      <CryptoProvider>
        <main className="flex flex-col first-letter:content-center items-center relative text-black font-nunito">
          <div className="bg-blue" />
          <NavigationCrypto />

          <section className="flex flex-col mt-16 mb-24 relative">
            {/* <Filters /> */}
            <TableComponent />
            {/* <Outlet /> */}
          </section>
        </main>
      </CryptoProvider>
    </>
  );
}
