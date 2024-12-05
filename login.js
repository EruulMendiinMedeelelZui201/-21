const jwt = require('jsonwebtoken');

exports.handler = async (event, context) => {
  const { username, password } = JSON.parse(event.body);

  // Define the allowed username and password
  const allowedUser = { username: 'tsolmonkhanorgil@gmail.com', password: 'khanuka0423' };

  // Check if the username and password match
  if (username === allowedUser.username && password === allowedUser.password) {
    // Generate a JWT token for this user
    const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });

    // Return success and set the JWT token in a cookie
    return {
      statusCode: 200,
      headers: {
        'Set-Cookie': `authToken=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`, // Token expires in 1 hour
      },
      body: JSON.stringify({ message: 'Login successful' }),
    };
  } else {
    // Return error if the credentials do not match
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Invalid credentials' }),
    };
  }
};
