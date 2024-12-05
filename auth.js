const jwt = require('jsonwebtoken');

exports.handler = async (event, context) => {
  const cookies = event.headers.cookie || '';
  const token = cookies.split(';').find(c => c.trim().startsWith('authToken='));

  if (!token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Not authenticated' }),
    };
  }

  try {
    const decoded = jwt.verify(token.split('=')[1], 'your-secret-key'); // Use the same secret key as in the login function
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Authenticated', user: decoded.username }),
    };
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Invalid token' }),
    };
  }
};
