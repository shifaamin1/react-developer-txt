import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/list");
  };

  return (
    <div className="center">
      <form className="card" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;