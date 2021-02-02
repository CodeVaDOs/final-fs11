import { useSelector } from "react-redux";

export const usePermission = () => {
  return useSelector(state => state.auth.user.role) || "USER"
}