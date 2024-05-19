"use client";

import { useContext, useState } from "react";
import LoginButton from "../components/login-button";
import axios from "axios";
import { UserContext } from "../contexts/user-context";
import { useUser } from "../hooks/hooks";
import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "../utils/constants";
import SignupButton from "../components/signup-button";

type Form = {
  username: string;
  password: string;
  confirmPassword: string;
};

type User = {
  username: string;
  memberSince: string;
};
export default function Signup() {
  const [form, setForm] = useState<Form>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { user, updateUser } = useUser();

  const onSignup = async () => {
    const resp = await axios.post(SIGNUP_ENDPOINT, form);

    const user: User = {
      username: resp.data.username,
      memberSince: resp.data.memberSince,
    };

    updateUser(user);
  };
  return (
    <form className="flex flex-col justify-center items-center space-y-3 w-screen h-screen">
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={(e) => {
          setForm({
            ...form,
            username: e.target.value,
          });
        }}
        placeholder="Username"
        className="outline-none bg-till-green w-64 h-12 rounded-md placeholder-nice-yellow px-2 caret-nice-yellow focus:placeholder-transparent text-nice-yellow"
      ></input>
      <input
        type="text"
        name="password"
        value={form.password}
        onChange={(e) => {
          setForm({ ...form, password: e.target.value });
        }}
        placeholder="Password"
        className="outline-none bg-till-green w-64 h-12 rounded-md placeholder-nice-yellow px-2 caret-nice-yellow focus:placeholder-transparent text-nice-yellow"
      ></input>

      <input
        type="text"
        name="password"
        value={form.confirmPassword}
        onChange={(e) => {
          setForm({ ...form, confirmPassword: e.target.value });
        }}
        placeholder="Confirm Password"
        className="outline-none bg-till-green w-64 h-12 rounded-md placeholder-nice-yellow px-2 caret-nice-yellow focus:placeholder-transparent text-nice-yellow"
      ></input>

      <SignupButton width={150} height={50} onClick={onSignup} />
    </form>
  );
}
