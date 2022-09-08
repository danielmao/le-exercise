import { Food } from "../types/food";

interface TipProps {
  tip: number,
  onChangeTip: (tip: number) => void;
}

export const Tip: React.FC<TipProps> = ({ tip, onChangeTip }) => {

  const onChangeValue = ({ target }: any) => {
    const { value } = target;
    if (value >= 0 && value <= 100) {
      onChangeTip(value);
    }

  }
  return (
    <>
      <hr />
      <li className="list-group-item d-flex justify-content-between">
        <div>
          <h4>Propina (%)</h4>
        </div>
        <div>
          <input type='number' min='0' max='100' value={tip} onChange={onChangeValue} />
        </div>
      </li>
    </>
  )
}
