import { FormRow } from "../components";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const RegisterPage = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [values, setValues] = useState(initialState);
  const {
    user,
    register_loading: isLoading,
    // register_error: isError,
    registerUser,
  } = useUserContext();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = values;

    if (!name || !email || !password || !confirmPassword) {
      console.log("please fill out all fields...");
      return;
    }

    if (password !== confirmPassword) {
      console.log("password dosen't match");
      return;
    }

    registerUser({ name, email, password });
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
        <h4 style={{ textAlign: "center" }}>register</h4>
        <FormRow
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name}
        />
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
        <FormRow
          labelText="confirm password"
          name="confirmPassword"
          type="password"
          handleChange={handleChange}
          value={values.confirmPassword}
        />
        <p>
          Already have an account? <Link to="/login">login</Link>
        </p>
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "loading..." : "register"}
        </button>
      </form>
    </main>
  );
};

export default RegisterPage;
