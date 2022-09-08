import { DecimalNumber } from '../common/components/DecimalNumber';
import { OrderItemForm } from './components/OrderItemForm'
import { OrderList } from './components/OrderList'
import { Tip } from './components/Tip';
import { TotalOrder } from './components/TotalOrder';
import { useOrderList } from './hooks/useOrderList'


const App: React.FC = () => {

  const { list, tip, tipValue, subtotal, total, listCount, onCreate, onEdit, onDelete, onChangeTip } = useOrderList();

  return (
    <>
      <h1>Orden y Propina</h1>
      <h4>Items: {listCount}</h4>
      <hr />

      <div className="row">
        <div className="col-7">
          <OrderList list={list}
            onDeleteFood={onDelete} onEditFood={onEdit} />

          <Tip tip={tip} onChangeTip={onChangeTip} />
          <TotalOrder tipValue={tipValue} subtotal={subtotal} total={total} />
        </div>

        <div className="col-5">
          <OrderItemForm onCreate={onCreate} />
        </div>
      </div>
    </>
  )
}

export default App
