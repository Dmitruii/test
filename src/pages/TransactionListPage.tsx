import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import data from "../utils/data.ts";
import { ITransaction } from "../utils/types.ts";
import formatCurrency from "../utils/formatCurrency.ts";
import TransactionItem from "../components/TransactionItem.tsx";
import calculatePoints from "../utils/points.ts";

const TransactionListPage = () => {
  const avaliable = 1500 - data.balance;
  const transactions = data.transactions.slice(0, 10);

  return (
    <div className="flex justify-center">
      <div className="w-96 bg-slate-100 px-3 py-4 ">
        <div className="flex gap-3">
          <div className="basis-1/2 gap-3 flex flex-col h-full">
            <div className="flex-1 bg-white rounded-md p-2">
              <h3>Card Balace</h3>
              <h1 className="font-bold text-2xl">
                {formatCurrency(data.balance)}
              </h1>
              <h4 className="text-slate-500 text-sm">
                {avaliable < 0 ? "No avaliable" : `$${avaliable} Avaliable`}
              </h4>
            </div>

            <div className="flex-1 bg-white rounded-md p-2">
              <h2>Daily points</h2>
              <h3 className="text-slate-500 text-sm">
                {calculatePoints(new Date().getDate())}
              </h3>
            </div>
          </div>

          <div className="basis-1/2 bg-white rounded-md p-2 flex flex-col">
            <h2>No Payment due</h2>
            <h3 className="text-slate-500 text-sm">
              You've paid your September balance
            </h3>
            <span className="mt-auto ml-auto bg-slate-100 w-16 h-16 rounded-full flex justify-center items-center">
              <FontAwesomeIcon className="text-3xl" icon={faCheck} />
            </span>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-xl font-bold mb-1">Latest Transaction</h1>
          <div className="bg-white p-2 rounded-lg">
            {transactions.map((transaction: ITransaction, i) => {
              return (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  isLastItem={transactions.length !== i + 1}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionListPage;
