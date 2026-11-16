import { useState } from "react";
import { useNavigate } from "react-router";

export default function useForm(initialValues, onSubmit){
    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }


    const submitHandler =  async (e) => {
        e.preventDefault();

        await onSubmit(values)

        setValues(initialValues)

       navigate('/catalog')
    }
    return {values, changeHandler, submitHandler, setValues}
}