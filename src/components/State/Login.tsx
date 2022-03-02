import React, { useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

const Login = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "lee yong woo",
      email: "dyddn304@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleLogout}>로그아웃</button>
      <p>User name is {user?.name}</p>
      <p>User email is {user?.email}</p>
    </div>
  );
};

export default Login;
