import "./login.css";
import { useFormik } from "formik";
import { validationSchemaForContact } from "../../validation/validationSchemaForContact";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchemaForContact,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">الاسم</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name && <p>{formik.errors.name}</p>}

      <label htmlFor="email">البريد الإلكتروني</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <p>{formik.errors.email}</p>}

      <label htmlFor="message">الرسالة</label>
      <textarea
        id="message"
        name="message"
        onChange={formik.handleChange}
        value={formik.values.message}
      ></textarea>
      {formik.errors.message && <p>{formik.errors.message}</p>}

      <button type="submit">إرسال</button>
    </form>
  );
};

export default Login;
