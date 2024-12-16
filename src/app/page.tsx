import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[45px] font-bold mt-20 mb-10 font-sans">
        Welcome To Finnacle! 📈📊💲💸🚀
      </h1>
      <h3 className="text-[25px] px-24 mt-10 mb-10 font-sans">
        Finnacle is a Expense Tracker Web App meticulously designed to simplify
        financial management while offering personalized insights into personal
        finance, including stock recommendations. At its core, Finnacle serves
        as a comprehensive Expense Tracker, allowing users to effortlessly
        monitor and categorize their expenditures. Through intuitive interfaces
        and customizable features, users can input, track, and analyze their
        expenses in real-time, enabling a clear understanding of their spending
        patterns and financial health.
      </h3>

      <Link href="/signin">
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          SIGN IN
        </button>
      </Link>

      <Link href="/signup">
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          {" "}
          SIGN UP
        </button>
      </Link>
    </div>
  );
}
