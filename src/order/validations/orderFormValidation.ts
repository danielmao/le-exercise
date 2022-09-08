export const orderFormValidations = {
  name: {
    required: {
      value: true,
      message: 'Campo requerido'
    }
  },
  amount: {
    valueAsNumber:true,
    required: {
      value: true,
      message: 'Campo requerido'
    },
    min: {
      value: 1,
      message: 'Mínimo debes ordenar 1'
    }
  },
  cost: {
    valueAsNumber:true,
    required: {
      value: true,
      message: 'Campo requerido'
    },
    min: {
      value: 1,
      message: 'Valor incorrecto'
    }
  }
}