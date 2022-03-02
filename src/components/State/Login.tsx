import React, { useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

const Login = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "lee yong woo",
      email: "dyddn304@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>로그인</button>
      <p>User name is {user.name}</p>
      <p>User email is {user.email}</p>
    </div>
  );
};

export default Login;
