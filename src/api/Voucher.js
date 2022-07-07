import { callAPIWithToken } from "../services/jwt-axios";

export const getVoucher = async (username) => {
  const res = await callAPIWithToken.get(`/api/voucher/${username}`);
  if (res && res.status !== 200)
    throw Error("Something wrongs with code status" + res.status);
  return res;
};

export const deletedVoucher = async (id) => {
  const res = await callAPIWithToken.delete(`/api/voucher/${id}`);
  if (res && res.status !== 200)
    throw Error("Something wrongs with code status" + res.status);
  return res;
};
