import { useState } from "react";

const Form = ({list, formData, onChange, name}) => {
    const [error, setError] = useState('')

   const onLocalChange = (ev) => {
       const value = ev.target.value

        const item = list.find((item) => {
            return item[name] === value
        })
        console.log(list, formData)
        setError(item ? 'Trung' : '')
        onChange(ev)
   }

    return (
        <div class="mb-3">
            <label for="for-email" class="form-label"> {name} </label>
            <input type="text" id="form-email" name={name} class="form-control" placeholder=" abc@gmail.com " onChange={onLocalChange} value={formData[name]}/>
            <div>{error}</div>
        </div>
    )  
}
export default Form;