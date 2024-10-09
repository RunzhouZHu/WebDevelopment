import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const name = useField("text");
  const username = useField("text");
  const password = useField("current-password");
  const gender = useField("text");
  const dateOfBirth = useField("date");
  const address = useField("text");
  const occupation = useField("text");

  const { signup, error } = useSignup("/api/users/signup");

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signup({
      username: username.value,
      password: password.value,
      name: name.value,
      gender: gender.value,
      date_of_birth: dateOfBirth.value,
      address: address.value,
      occupation: occupation.value,
    });
    if (!error) {
      console.log("success");
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="create">
        <h2>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Name: </label>
          <input {...name} />
          <label>UserName: </label>
          <input {...username} />
          <label>Password: </label>
          <input {...password} />
          <label>Gender: </label>
          <input {...gender} />
          <label>Date of Birth: </label>
          <input {...dateOfBirth} />
          <label>Address: </label>
          <input {...address} />
          <label>Occupation: </label>
          <input {...occupation} />
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}
