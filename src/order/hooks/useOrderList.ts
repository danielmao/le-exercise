import { useEffect, useMemo, useReducer } from "react";
import { initReducer, orderActions, reducer } from "../orderReducer";
import { Food } from "../types/food";

export const useOrderList = () => {

  const [state, dispatch] = useReducer(reducer, undefined, initReducer);

  const subtotal = useMemo(() => {
    return state.list.reduce((sum, current) => {
      return sum + (current.cost * current.amount)
    }, 0)
  }, [state]);

  const tipValue = useMemo(() => {
    return subtotal * (state.tip / 100)
  }, [state])

  const total = useMemo(() => {
    return subtotal + subtotal * (state.tip / 100)
  }, [state])

  const onCreate = (item: Food) => {
    dispatch({ type: orderActions.create, payload: { item } })
  }

  const onEdit = (item: Food) => {
    dispatch({ type: orderActions.edit, payload: { item } })
  }

  const onDelete = (item: Food) => {
    dispatch({ type: orderActions.delete, payload: { item } })
  }

  const onChangeTip = (tip: number) => {
    dispatch({ type: orderActions.changeTip, payload: { tip } })
  }

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(state));
  }, [state])

  return {
    ...state,
    listCount: state.list.length,
    onCreate,
    onEdit,
    onDelete,
    onChangeTip,
    subtotal,
    tipValue,
    total
  }
}