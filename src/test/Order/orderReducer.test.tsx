import { Food } from "../../order/types/food";
import { Order } from "../../order/types/order";
import { orderActions, reducer } from "../../order/orderReducer"

describe('testing orderReducer', () => {

  const initialState = {
    list: [] as Food[],
    tip: 0
  } as Order;

  const newOrderItem = {
    id: 1,
    cost: 10,
    amount: 1,
    name: 'pan'
  } as Food;

  test('should expect the initial state', () => {
    const newState = reducer(initialState, { type: 'none' });
    expect(newState).toBe(initialState);
  })

  test('should create an item to order', () => {
    const newState = reducer(initialState, {
      type: orderActions.create,
      payload: { item: newOrderItem }
    });
    expect(newState.list.length).toBe(1);
    expect(newState.list).toContain(newOrderItem);
  })

  test('should remove an item from order', () => {
    const state2 = reducer(initialState, {
      type: orderActions.create,
      payload: {
        todo: { item: newOrderItem }
      }
    });
    const state3 = reducer(state2, {
      type: orderActions.delete,
      payload: {
        todo: { item: newOrderItem }
      }
    });
    expect(state3.list.length).toBe(0);
    expect(state3).toEqual(initialState);
  })


})

export { };

