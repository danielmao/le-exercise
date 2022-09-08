interface DecimalNumberProps {
  number: number
}

export const DecimalNumber: React.FC<DecimalNumberProps> = ({ number }) => {

  return (
    <>
      {parseFloat(number+'').toFixed(2)}
    </>
  )
}