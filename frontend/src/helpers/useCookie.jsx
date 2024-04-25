import { useState, useEffect } from 'react';

const useCookie = (cookieName) => {
  // State to hold the current value of the cookie
  const [cookieValue, setCookieValue] = useState(null);

  // Effect to update the cookie value when the component mounts or the cookieName changes
  useEffect(() => {
    const cookie = getCookie(cookieName);
    setCookieValue(cookie);
  }, [cookieName]);

  // Function to update the cookie with a new value
  const updateCookie = (value, options = {}) => {
    document.cookie = `${cookieName}=${value}; ${serialize(options)}`;
    setCookieValue(value);
  };

  // Function to delete the cookie
  const deleteCookie = () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    setCookieValue(null);
  };

  // Return an array containing the current cookie value, function to update the cookie, and function to delete the cookie
  return [cookieValue, updateCookie, deleteCookie];
};

// Utility function to retrieve the value of a cookie by name
const getCookie = (name) => {
  const cookieString = document.cookie.split('; ').find(row => row.startsWith(name));
  return cookieString ? cookieString.split('=')[1] : null;
};

// Utility function to serialize cookie options
const serialize = (options) => {
  const optionsArray = [];
  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      optionsArray.push(`${key}=${options[key]}`);
    }
  }
  return optionsArray.join('; ');
};

export default useCookie;
