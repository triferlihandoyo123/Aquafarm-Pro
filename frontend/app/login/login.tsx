'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LandingPage from '../dashboard_U/page'; // Import useRouter dari next/router

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter(); // Gunakan useRouter untuk mendapatkan instance dari router

  useEffect(() => {
    if (message) {
      alert(message);
      setMessage('');
    }
  }, [message]);

  const login = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful');

        if (data.redirect === 'admin') {
          router.push('/dashboardA'); // Gunakan router.push() untuk navigasi
        } else if (data.redirect === 'users') {
          router.push('/dashboard_U'); // Gunakan router.push() untuk navigasi
        }
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('An error occurred while logging in');
    }
  };

  const register = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setMessage('User registered successfully');
      } else {
        const errorData = await response.json();
        setMessage(`Failed to register user: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage('An error occurred while registering user');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex justify-center items-center flex-col">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4 text-center">{isSignUp ? 'Register' : 'Login'}</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          {!isSignUp ? (
            <button
              onClick={login}
              className="w-full bg-green-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-400 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          ) : (
            <button
              onClick={register}
              className="w-full bg-green-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-400 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
          )}
          <div className="text-center pt-10">
            <p>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</p>
            <a href="#" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Sign In Here' : 'Sign Up Here'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
