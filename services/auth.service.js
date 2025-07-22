import jwt from 'jsonwebtoken';

const USERS = [
  { username: 'admin', password: 'admin123' },
  { username: 'user', password: '123456' }
];

export const login = ({ username, password }) => {
  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) throw new Error('Credenciales inválidas');

  return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
