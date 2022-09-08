import { DecimalNumber } from "../../common/components/DecimalNumber";
import { Food } from "../types/food";

interface OrderItemProps {
  item: Food,
  onEditFood: (data: Food) => void;
  onDeleteFood: (data: Food) => void;
}

export const OrderItem: React.FC<OrderItemProps> = ({ item, onEditFood, onDeleteFood }) => {
  const { name, cost, amount } = item;

  const changeAmount = (value: number) => {
    const newAmount = amount + value;
    if (newAmount === 0) return onDeleteFood(item);

    onEditFood({ ...item, amount: newAmount })
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <div>
          <span className="align-self-center">{name}</span>
          <p>
            <span className="align-self-center">
              $<DecimalNumber number={(cost * amount)} />
            </span>
          </p>
        </div>

        <div>
          <button className="btn btn-danger" onClick={() => changeAmount(-1)}>
            -
          </button>
          {amount}
          <button className="btn btn-success" onClick={() => changeAmount(1)}>
            +
          </button>
        </div>
      </li>
    </>
  )
}
