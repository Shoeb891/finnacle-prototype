import { currencyFormatter } from "@/lib/utils";

export default function ExpenseTracker() {
    return (
        <main className="container max-w-2xl px-6 mx-auto">

        <section className="py-3">
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">{currencyFormatter(100000)}</h2>
      </section>

      <section className="flex items-center gap-2 py-3">
        <button className="bg-red-400">+ Expenses</button>
        <button className=" bg-red-400">+ Income</button>
      </section>

      
      </main>

    )
}