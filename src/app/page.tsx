import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[45px] font-bold mt-20 mb-20 font-sans">
        Welcome To Finnacle!
      </h1>

      <Link href="/signin">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Sign In
        </button>
      </Link>

      <Link href="/signup">
        <button className=" mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
