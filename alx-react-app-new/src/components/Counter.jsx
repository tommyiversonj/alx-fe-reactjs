import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            width: '300px',
            textAlign: 'center',
            margin: '20px auto',
            backgroundColor: '#f0f8ff'
        }}>
            <p style={{ fontSize: '20px', marginBottom: '15px' }}>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>Increment</button>
            <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;
