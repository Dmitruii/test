import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../utils/data.ts";
import formatCurrency from "../utils/formatCurrency.ts";

const TransactionDetailPage = () => {
  let navigate = useNavigate();
  let { id: paramId } = useParams();
  const transaction = data.transactions.filter(({ id }) => id === paramId)[0];

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="flex justify-center">
      <div className="w-96 bg-slate-100 px-3 py-4">
        <div onClick={handleClick} className="hover:cursor-pointer">
          <FontAwesomeIcon
            className="text-xl text-slate-500"
            icon={faChevronLeft}
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl">
            {formatCurrency(transaction.amount)}
          </h1>
          <h3 className="text-slate-400 mt-2">{transaction.transactionName}</h3>
          <h3 className="text-slate-400">
            {new Date(transaction.date).toLocaleString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </h3>
        </div>
        <div className="rounded p-4 bg-white mt-10">
          <h3 className="font-bold">
            Status: {transaction.isPending ? "Pending" : "Approved"}
          </h3>
          <h3 className="text-slate-400">
            {transaction.transactionDescription}
          </h3>
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <h3>Total</h3>
            <h3>{formatCurrency(transaction.amount)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailPage;
