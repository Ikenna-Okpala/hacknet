export default function Login() {
  return (
    <form className="flex flex-col justify-center items-center space-y-3">
      <input
        type="text"
        name="username"
        value={""}
        placeholder="Username"
      ></input>
      <input
        type="text"
        name="password"
        value={""}
        placeholder="Password"
      ></input>
    </form>
  );
}
