import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

export default function About() {
  const navigate = useNavigate();
  const [shouldNavigate, setShouldNavigate] = useState(false);

  // This is to pretend navigation after some
  // async action like an api call.
  const handleClick = () => {
    setShouldNavigate(true);
  };

  useEffect(() => {
    if (shouldNavigate) {
      navigate("/");
    }
  }, [shouldNavigate, navigate]);

  return (
    <div className="About">
      <h1>About page</h1>
      <Nav />
      <p>My name is Jo.</p>
      <button
        onClick={handleClick}
        type="button"
      >
        <strong>go home with useNavigate()</strong>
      </button>
    </div>
  );
}
