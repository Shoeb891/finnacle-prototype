"use client";
import { currencyFormatter } from "@/lib/utils";

import ExpenseCategoryItem from "@/components/ExpenseCategoryItem";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATA = [
  {
    id: 1,
    title: "Entertainment",
    color: "#C3E2C2",
    total: 500,
  },
  {
    id: 2,
    title: "Gas",
    color: "#8ACDD7",
    total: 200,
  },
  {
    id: 3,
    title: "Fuel",
    color: "#DBCC95",
    total: 1200,
  },
  {
    id: 4,
    title: "Movies",
    color: "#CD8D7A",
    total: 800,
  },
  {
    id: 5,
    title: "Holiday",
    color: "#607274",
    total: 2000,
  },
];

export default function Home() {
  return (
    <main className="container max-w-2xl px-6 mx-auto py-12">
      <section className="py-6">
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">{currencyFormatter(25000)}</h2>
      </section>

      <section className="flex items-center gap-2 py-3">
        <button className="btn btn-primary">+ Expenses</button>
        <button className="btn btn-primary-outline">+ Income</button>
      </section>

      {/* Expenses */}
      <section className="py-6">
        <h3 className="text-2xl">My Expenses</h3>
        <div className="flex flex-col gap-4 mt-6">
          {DUMMY_DATA.map((expense) => {
            return (
              <ExpenseCategoryItem
                key={expense.id}
                color={expense.color}
                title={expense.title}
                total={expense.total}
              />
            );
          })}
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-6">
        <h3 className="text-2xl">Stats</h3>
        <div className="w-1/2 mx-auto">
          <Doughnut
            data={{
              labels: DUMMY_DATA.map((expense) => expense.title),
              datasets: [
                {
                  label: "Expenses",
                  data: DUMMY_DATA.map((expense) => expense.total),
                  backgroundColor: DUMMY_DATA.map((expense) => expense.color),
                  borderColor: ["#18181b"],
                  borderWidth: 5,
                },
              ],
            }}
          />
        </div>
      </section>
    </main>
  );
}
