import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface ErrorProps {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
}

export const ErrorForm: React.FC<ErrorProps> = ({ error}) => {

  return (
    <div className="text-danger mb-2">
      {error &&
        <span className='text-regular text-caption text-red'>
          {error.message?.toString()}
        </span>}
    </div>
  )
}