import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.username || !formData.email || !formData.password) {
            setError("All fields are required.");
            return;
        }

        setError("");
        console.log("Submitting form data:", formData);

        // Mock API request
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Response:", data);
                alert("User registered successfully!");
            })
            .catch((err) => console.error("Error:", err));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
            <h2 className="text-xl font-bold">User Registration (Controlled)</h2>

            {error && <p className="text-red-500">{error}</p>}

            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="border p-2 w-full rounded"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full rounded"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border p-2 w-full rounded"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;
