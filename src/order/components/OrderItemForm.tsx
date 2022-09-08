import { useForm } from "react-hook-form";
import { ErrorForm } from "../../common/components/ErrorForm";
import { Food } from "../types/food";
import { orderFormValidations } from "../validations/orderFormValidation";

interface OrderItemFormProps {
  onCreate: (data: any) => void
}

export const OrderItemForm: React.FC<OrderItemFormProps> = ({ onCreate }) => {

  const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data: any) => {
    onCreate({ ...data, id: new Date().toTimeString() } as Food );
    reset();
  }

  return (
    <>
      <h4>Añadir ítem</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('name', orderFormValidations.name)}
          className="form-control "
          placeholder="Nombre de la orden" />
        <ErrorForm error={errors.name} />

        <input
          type="number" step='1'
          {...register('amount', orderFormValidations.amount)}
          className="form-control"
          placeholder="Cantidad" />
        <ErrorForm error={errors.amount} />

        <input
          type="number"
          {...register('cost', orderFormValidations.cost)}
          className="form-control"
          placeholder="Valor" />
        <ErrorForm error={errors.cost} />

        <button type="submit" disabled={!isValid} className="btn btn-secondary">Agregar</button>
        <button type="button" className="btn btn-light" onClick={() => reset()}>Reset</button>
      </form>
    </>

  )
}
