import React from "react";
import { ITransaction } from "../utils/types.ts";
import formatDate from "../utils/formatDate.ts";
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import formatCurrency from "../utils/formatCurrency.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ITransactionItemProps {
  transaction: ITransaction;
  isLastItem: boolean;
}

const TransactionItem = ({
  transaction,
  isLastItem,
}: ITransactionItemProps) => {
  const {
    id,
    type,
    transactionName,
    transactionDescription,
    user,
    isPending,
    amount,
    date,
  } = transaction;
  return (
    <Link to={`/detail/${id}`}>
      <div className="flex gap-3">
        <img
          src="/apple.svg"
          className="my-auto bg-slate-600 w-12 h-12 p-1 rounded"
        />

        <div className="w-full truncate">
          <div className="">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold leading-none">
                {type === "Payment"
                  ? `Payment - ${transactionName}`
                  : `${transactionName}`}
              </h2>
              <div className="flex">
                <h3 className="text-lg leading-none pl-2 mr-2">
                  {type === "Payment" && "+"}
                  {formatCurrency(amount)}
                </h3>
                <FontAwesomeIcon
                  className="text-md text-slate-500"
                  icon={faChevronRight}
                />
              </div>
            </div>
            <p className="text-slate-500 truncate">
              {isPending && "Pending - "}
              {`${transactionDescription}`}
            </p>
            <h3 className="text-slate-500 leading-none">
              {user && "Diana -"} {formatDate(date)}
            </h3>
          </div>
        </div>
      </div>
      {isLastItem && <hr className="my-2" />}
    </Link>
  );
};

export default TransactionItem;
