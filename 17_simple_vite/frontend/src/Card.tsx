import React from 'react';

interface CardProps {
  count: number;
  loading: boolean;
  onIncrement: () => void;
  onReset: () => void;
}

const Card: React.FC<CardProps> = ({ count, loading, onIncrement, onReset }) => (
  <div className="card">
    <button onClick={onIncrement} disabled={loading}>
      {loading ? 'Loading...' : `count is ${count}`}
    </button>
    <button onClick={onReset} disabled={loading} style={{ marginLeft: '10px' }}>
      Reset
    </button>
    <p>
      Edit <code>src/App.tsx</code> and save to test HMR
    </p>
    <p>
      The count is now persisted on the server!
    </p>
  </div>
);

export default Card;
