import axios from "../setup/axios";

export const FoodData = () => {
  return axios.get(`api/food`);
};

export const FoodTypeData = () => {
  return axios.get(`api/foodtype`);
};

export const FoodByTypeData = (id) => {
  return axios.get(`api/foodtype/${id}`);
};

export const OrderData = () => {
  return axios.get("api/order");
};

export const OrderProcessingData = () => {
  return axios.get("api/order/unfinished");
};

export const OrderCompletedData = () => {
  return axios.get("api/order/finished");
};

export const AddNewOrderData = (orders) => {
  axios.post('api/order', orders)
      .then((response) => {
        // Xử lý phản hồi từ server nếu cần
        console.log(response.data);
        return 1;
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.log(error);
        return -1;
      });
}