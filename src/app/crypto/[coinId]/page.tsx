// import { CryptoContext, CryptoProvider } from "@/context/CryptoContext";
// import { useContext, useLayoutEffect } from "react";

export default function CryptoDetails({params}: any) {
    
    let coinId = params.coinId;
    // let {getCoinData, coinData} = useContext(CryptoContext)

    // useLayoutEffect(() => {
    //     getCoinData(coinId);
    //   }, [coinId]);
    
    return(

        <div
        className="fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 first-letter:
      backdrop-blur-sm flex items-center justify-center font-nunito
      "
      >
        <div
          className="w-[65%] h-[75%] bg-gray-300 bg-opacity-75 rounded-lg text-white relative"
        >
            coinData ? <h1>{}</h1>
            </div>
            </div>

    )}
