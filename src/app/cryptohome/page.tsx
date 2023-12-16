import NavigationCrypto from "@/components/NavigationCrypto";

export default function CryptoHome() {
    return (
        <main
            className="w-full h-full flex flex-col first-letter:
content-center items-center relative text-white font-nunito
"
        >
            <div className="w-screen h-screen bg-gray-300 fixed -z-10" />


            <NavigationCrypto />
        </main>

    )
}