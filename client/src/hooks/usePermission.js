import { useSelector } from "react-redux";

export const usePermission = () => {
  console.log(useSelector(state => state));
  return useSelector(state => state.auth.user.role) || "USER";
};