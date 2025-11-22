import React, { useState } from 'react';

const FAKE_USER = {
  username: 'admin',
  password: 'password123',
};

export default function LoginBox({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username === FAKE_USER.username && password === FAKE_USER.password) {
      setError('');
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card p-8 rounded-lg shadow-lg w-full max-w-sm flex flex-col gap-4 border border-border"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-accent"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-accent"
      />
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <button
        type="submit"
        className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 font-semibold"
      >
        Login
      </button>
    </form>
  );
}
