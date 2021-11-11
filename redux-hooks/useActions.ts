import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";
import { actionCreators } from "../store/index";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
