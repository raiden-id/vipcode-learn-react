import InputForm from "../Elements/Input/Index";
import Button from '../Elements/Button/index'
const FormRegister = () => {
    return (
        <form action="">
        <InputForm label="Username" type='text' placeholder="update your name here" name="fullname" />
        <InputForm label="Email" type='email' placeholder="Example@gmail.com" name="email" />
        <InputForm label="Password" type='password' placeholder="********" name="password" />
        <Button classname="bg-blue-600 w-full">Register</Button>
      </form>
    )
}

export default FormRegister;