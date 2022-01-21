import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../button/button";
import Input from "../input/input";

const ContactUs = () => {
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    resetForm,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      musicTaste: "",
      message: "I like this music because...",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, "Too short!").trim().required("Required!"),
      lastName: Yup.string().min(2, "Too short!").trim().required("Required!"),
      email: Yup.string().email("Invalid email").trim().required("Required!"),
      musicTaste: Yup.string().required("Required!"),
      message: Yup.string()
        .min(2, "Too short!")
        .max(200, "Too long, we don't need stories")
        .trim()
        .required("Required!"),
    }),
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 2000);
    },
  });

  if (isSubmitting) {
    return (
      <div>
        <p>We are sending your form please wait a bit...</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          id="firstName"
          name="firstName"
          placeholder="John"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          isError={errors.firstName}
        />
        <p style={{ color: "red" }}>{touched.firstName && errors.firstName}</p>

        <br />

        <Input
          id="lastName"
          name="lastName"
          placeholder="Smith"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.lastName && errors.lastName}</p>

        <br />

        <Input
          id="email"
          name="email"
          placeholder="user@mail.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.email && errors.email}</p>

        <br />

        <select
          id="musicTaste"
          name="musicTaste"
          value={values.musicTaste}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="default">Music</option>
          <option value="classical">classical</option>
          <option value="rap">rap</option>
          <option value="edm">edm</option>
          <option value="heavyMetail">heavyMetail</option>
        </select>
        <p style={{ color: "red" }}>
          {touched.musicTaste && errors.musicTaste}
        </p>

        <br />

        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.message && errors.message}</p>

        <br />

        <Button type="submit" disabled={isSubmitting}>
          Submit ✉️
        </Button>
        <br />
        <Button
          style={{ background: "#e7b1a5" }}
          type="reset"
          onClick={resetForm}
        >
          Reset ❌
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
