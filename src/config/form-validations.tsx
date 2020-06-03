export const signupRules = {
    username: [{ required: true, message: "Username is required" }],
    email: [
        { type: "email", message: "Please enter a valid email" },
        { required: true, message: "Your email is required" },
    ],
    password: [{ required: true, message: "Password is required" }],
};