import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/index";
const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form action="" onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="Example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
