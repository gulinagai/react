import React from 'react'

const validacao = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'Insira um CEP válido',
    },
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Insira um email válido'
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function validate(value) {
        if(type === false) {
            return true
        }
        if(value.length === 0) {
            setError('Insira um valor')
            return false
        }
        if(validacao[type] && !validacao[type].regex.test(value)) {
            setError(validacao[type].message)
            return false
        } else {
            setError(null)
            return true
        }
    }
    
    function onChange({ target }) {
        if(error) validate(value)
        setValue(target.value)
    }

  return {
    value: value,
    error: error,
    onChange: onChange,
    onBlur: ()=> validate(value),
    validate: ()=> validate(value),
  }
}

export default useForm
