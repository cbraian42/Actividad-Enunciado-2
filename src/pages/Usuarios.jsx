import React from 'react';
import { Link } from 'react-router-dom';

const Usuarios = () => {
  const [users, setUsers] = React.useState(() => {
    return JSON.parse(localStorage.getItem('users') || '[]');
  });

  React.useEffect(() => {
    // En caso de que se actualice desde otra parte
    const stored = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = users.filter(u => u.id !== id);
    setUsers(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Usuarios</h1>
      {users.length === 0 ? (
        <div>
          <p>No hay usuarios registrados.</p>
          <Link to="/register/personal">
            <button>Registrar un usuario</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>Total: {users.length}</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: '8px' }}>Nombre</th>
                  <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: '8px' }}>Fecha de Nacimiento</th>
                  <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: '8px' }}>Género</th>
                  <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: '8px' }}>Email</th>
                  <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: '8px' }}>Teléfono</th>
                  <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: '8px' }}>Ciudad</th>
                  <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: '8px' }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id}>
                    <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>
                      {u.firstName} {u.lastName}
                    </td>
                    <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>{u.dateOfBirth}</td>
                    <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>{u.gender}</td>
                    <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>{u.email}</td>
                    <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>{u.phone}</td>
                    <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>{u.city}</td>
                    <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>
                      <button
                        onClick={() => handleDelete(u.id)}
                        style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usuarios;