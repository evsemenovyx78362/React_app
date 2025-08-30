import React from 'react';
import './App.css'; // Оставляем импорт для базовых стилей, которые создает create-react-app

// Компонент Message, который принимает пропс `text` и отображает его
const Message = ({ text }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #d9e2ec',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
    }}>
      <p style={{
        fontSize: '1.2em',
        color: '#52667a',
        fontWeight: '500',
        margin: '0'
      }}>{text}</p>
    </div>
  );
};

// Главный компонент App
function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '2.5em',
        fontWeight: 'bold',
        color: '#334e68',
        marginBottom: '40px',
        backgroundColor: '#fff',
        padding: '10px 20px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
      }}>Приложение с сообщениями</h1>
      <Message text="Привет из компонента Message!" />
      <Message text="Это мое первое приложение на React." />
      <Message text="Используем встроенные стили." />
    </div>
  );
}

export default App;
