import axios from "axios";

const API_KEY = 'MMMQuWnLGwlTYdSMtKujs774rvSF8-g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD-_CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx';

export const axiosService = () => axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});
