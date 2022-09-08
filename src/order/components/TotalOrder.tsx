import { DecimalNumber } from "../../common/components/DecimalNumber"

interface TotalOrderProps {
  subtotal: number,
  tipValue: number,
  total: number,
}

export const TotalOrder: React.FC<TotalOrderProps> = ({ tipValue, subtotal, total }) => {

  return (
    <>
      <hr />
      <li className="list-group-item d-flex justify-content-between">
        <div>
          <h4>Subtotal</h4>
        </div>
        <div>
          <p>$<DecimalNumber number={subtotal} /></p>
        </div>
      </li>

      <li className="list-group-item d-flex justify-content-between">
        <div>
          <h4>Propina</h4>
        </div>
        <div>
          <p>$<DecimalNumber number={tipValue} /></p>
        </div>
      </li>

      <li className="list-group-item d-flex justify-content-between">
        <div>
          <h4>Total</h4>
        </div>
        <div>
          <p>$<DecimalNumber number={total} /></p>
        </div>
      </li>
    </>
  )
}
