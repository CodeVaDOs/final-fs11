import { notification } from "antd";

export const catchError = (e) => {
  if (e?.response?.data?.message) {
    const { message } = e.response.data;

    message.forEach((i) => {
      const { msg } = i;
      notification.error({
        message: msg,
      });
    });
  } else {
    notification.error({
      message: "Something went wrong",
    });
  }
};
