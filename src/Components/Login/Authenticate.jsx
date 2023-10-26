
const userRegistration = [
    { username: 'Neeraj', password: 'pass123' },
    { username: 'Alok', password: 'pass1234' },
    // Add more users as needed
  ];
  
  export const authenticate = (username, password) => {
    const user = userRegistration.find(user => user.username === username && user.password === password);
    
    if (user) {
      // Successful login
      return { success: true, message: 'Login successful' };
    } else {
      // Failed login
      return { success: false, message: 'Invalid username or password' };
    }
  };
  