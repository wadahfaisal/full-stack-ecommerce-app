import { FormRow } from "../components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const LoginPage = () => {
  const initialState = { email: "", password: "" };
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const {
    user,
    login_loading: isLoading,
    // login_error: isError,
    loginUser,
  } = useUserContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      console.log("please fill out all fields...");
      return;
    }

    loginUser({ email, password });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [user]);

  return (
    <main className="page-100">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h4>login</h4>
        <FormRow
          name="email"
          type="email"
          handleChange={handleChange}
          value={values.email}
        />
        <FormRow
          name="password"
          type="password"
          handleChange={handleChange}
          value={values.password}
        />
        <p>
          Don't have an accoutn? <Link to="/register">register now</Link>
        </p>
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "loading..." : "Log in"}
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
