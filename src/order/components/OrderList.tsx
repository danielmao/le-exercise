import React from "react";
import { Food } from "../types/food"
import { OrderItem } from "./OrderItem"

interface OrderlistProps {
  list: Food[];
  onDeleteFood: (data: Food) => void;
  onEditFood: (data: Food) => void;
}

export const OrderList: React.FC<OrderlistProps> = ({ list = [], onEditFood, onDeleteFood }) => {
  return (
    <ul className="list-group">
      {list.map(item => (
        <OrderItem key={item.id} item={item}
          onDeleteFood={onDeleteFood} onEditFood={onEditFood} />
      ))}
    </ul>
  )
}
