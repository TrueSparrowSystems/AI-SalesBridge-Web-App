import AxiosService from "../services/axiosService";

export const fetchTokesnFromSalesfroce = async (payload) => {
  try {
    const data = await AxiosService.post(`/oauth2/token`, payload);

    return data;
  } catch (error) {
    return error;
  }
};
