const formatCurrency = (money: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(money);
};

export default formatCurrency;
