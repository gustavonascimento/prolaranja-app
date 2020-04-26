import { useFormState } from 'react-use-form-state'

const useForm = (initialValues = {}, callback) => {
  const [formState, inputTypes] = useFormState(initialValues)
  
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    callback(event)
  }

  return [
    formState,
    inputTypes,
    handleSubmit
  ]
}

export default useForm