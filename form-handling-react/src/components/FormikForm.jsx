import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log("Submitting with Formik:", values);

                // Mock API request
                fetch("https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("Response:", data);
                        alert("User registered successfully (Formik)!");
                        resetForm();
                    })
                    .catch((err) => console.error("Error:", err));
            }}
        >
            {() => (
                <Form className="space-y-4 p-4 border rounded">
                    <h2 className="text-xl font-bold">User Registration (Formik)</h2>

                    <div>
                        <Field
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="border p-2 w-full rounded"
                        />
                        <ErrorMessage
                            name="username"
                            component="p"
                            className="text-red-500"
                        />
                    </div>

                    <div>
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="border p-2 w-full rounded"
                        />
                        <ErrorMessage
                            name="email"
                            component="p"
                            className="text-red-500"
                        />
                    </div>

                    <div>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="border p-2 w-full rounded"
                        />
                        <ErrorMessage
                            name="password"
                            component="p"
                            className="text-red-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Register
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;
