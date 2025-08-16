import React from 'react';
import LoginBox from '../components/LoginBox';

export default function Login({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <LoginBox onLogin={onLogin} />
    </div>
  );
}
