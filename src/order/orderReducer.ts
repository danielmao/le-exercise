import { orderList } from './data/data';
import { Order } from './types/order';

export const orderActions = {
  create: '[ORDER] create',
  delete: '[ORDER] delete',
  edit: '[ORDER] edit',
  changeTip: '[ORDER] changeTip'
}

export const initReducer = () => {
  const items = localStorage.getItem('order');
  return items ? JSON.parse(items) as Order : {
    list: orderList,
    tip: 0,
  } as Order;
}

export const reducer = (state: Order, action: { type: string, payload: any }): Order => {

  switch (action.type) {
    case orderActions.create:
      return {
        ...state,
        list: [...state.list, action.payload.item]
      }
    case orderActions.delete:
      return {
        ...state,
        list: state.list.filter(x => x !== action.payload.item)
      };
    case orderActions.edit:
      return {
        ...state,
        list: state.list.map(x => {
          if (x.id !== action.payload.item.id) return { ...x };
          return { ...action.payload.item };
        })
      };

    case orderActions.changeTip:
      return {
        ...state,
        tip: action.payload.tip
      };
    default:
      return state;
  }
}