import { BigNumber, BigNumberish, ethers } from "ethers";
export const handleError = (error: any, message?: string) => {
  console.log(error);
  return {
    code: 500,
    message:
      message || error?.data?.message || error.message || "Request error",
  };
};

export const beautifulNumber = (amount: number, minimum = 2) => {
  if (amount === 0) return "0";
  return amount.toLocaleString(undefined, { minimumFractionDigits: minimum });
};

export const formatTxHash = (txHash: string) => {
  return txHash.substring(0, 10) + "...";
};

export function ellipseAddress(address = "", width = 3) {
  return `${address.slice(0, 6)}...${address.slice(-width)}`;
}

export const wrapperFunction = (fn: any) => {
  try {
    return fn();
  } catch (e) {
    return handleError(e);
  }
};

export const getBalanceLocalString = (
  amount: BigNumber | BigNumberish,
  decimal = 18
) => {
  if (!amount) return 0;
  return beautifulNumber(+ethers.utils.formatUnits(amount));
};

export const randomTicketNumbers = (amounts) => {
  const arr = [];
  for (let i = 0; i < amounts; i++) {
    arr.push(Math.floor(Math.random() * 100000));
  }
  return arr;
};

export const formatCurrency = (price: string | number): unknown => {
  const currentPrice = Number(price);
  if (currentPrice >= 1000) {
    return beautifulNumber(+currentPrice.toFixed(1));
  }

  if (currentPrice > 100 && currentPrice < 1000) {
    return currentPrice.toFixed(2);
  }

  if (currentPrice >= 10 && currentPrice < 100) {
    return currentPrice.toFixed(2);
  }

  if (currentPrice >= 1 && currentPrice < 10) {
    return currentPrice.toFixed(2);
  }

  if (currentPrice < 1 && currentPrice > 0) {
    return currentPrice.toFixed(2);
  }
  return 0;
};
