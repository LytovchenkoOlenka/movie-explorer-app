import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  return (
    <div className={css.searchContainer}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query === "") {
            toast.error("Please enter a keyword to search movies!");
          }
          onSubmit(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search movies"
          />
          <button className={css.button} type="submit">
            Search
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </div>
  );
}
