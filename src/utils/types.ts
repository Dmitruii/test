export interface IData {
  balance: number;
  transactions: ITransaction[];
}

export interface ITransaction {
  id: string;
  type: "Payment" | "Credit";
  amount: number;
  transactionName: string;
  transactionDescription: string;
  date: Date;
  isPending: boolean;
  user: string | null;
}
