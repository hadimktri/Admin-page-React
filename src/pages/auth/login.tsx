import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../utils/Alert";
import { loginService } from "../../services/auth";

type FormValues = {
  phone: string;
  password: string;
  remember: boolean;
};

const defaultValues = {
  phone: "",
  password: "",
  remember: false,
};

const schema = yup.object({
  phone: yup.string().required("Phone is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/^[a-zA-Z0-9@!%$?&]+$/, "Only Words and Numbers"),
  remember: yup.boolean(),
});

const Login = () => {
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting, isSubmitted, isDirty } = formState;

  const onSubmit = async (values: FormValues) => {
    const res = await loginService(values);
    try {
      if (res.status == 200) {
        localStorage.setItem("loginToken", JSON.stringify(res.data));
        navigate("/");
      } else {
        Alert({
          title: "sorry",
          text: "Phone with this password is not valid",
          icon: "error",
        });
      }
    } catch (error) {
      Alert({
        title: "sorry",
        text: "Phone with this password is not valid",
        icon: "error",
      });
    }
  };
  return (
    <div className="wrap-login100">
      <form
        className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center"
        onSubmit={handleSubmit((values) => onSubmit(values))}
        noValidate
      >
        <span className="login100-form-title">Login</span>
        <div className="form-control">
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" {...register("phone")} />
          <p className="error">{errors.phone?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
        </div>

        <div className="form-check form-switch mt-2">
          <input className="form-check-input" type="checkbox" role="switch" />
          <label className="form-check-label">Remember me</label>
        </div>

        <div className="container-login100-form-btn">
          <button
            className="login100-form-btn"
            disabled={!isDirty || isSubmitting}
          >
            {isSubmitting || !isSubmitted ? "Login" : "Wait"}
          </button>
        </div>
      </form>
      <div className="login100-pic js-tilt" data-tilt>
        <img src="../src/assets/images/login.png" alt="IMG" />
      </div>
    </div>
  );
};

export default Login;
