import { useState } from 'react';

const SignupForm = ({ onSubmit }) => {

  //state
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({ email: false, password: false });

  //condition
  const isEmailValid = formData.email.includes('@') && formData.email.includes('.', formData.email.indexOf('@'));
  const isPasswordValid = formData.password.length >= 8;
  const isFormValid = isEmailValid && isPasswordValid;

  //handler
  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isFormValid && onSubmit(formData)
  };

  return (
    <form onSubmit={handleSubmit} className='signup-form' style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      
      {/* email */}
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          required
          value={formData.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {/* error message */}
        {touched.email && !isEmailValid && (
          <p style={{ color: 'red', fontSize: '0.8rem'}}>Invalid email (must contain @ and a dot after it)</p>
        )}
      </div>

      {/* password */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {/* error message */}
        {touched.password && !isPasswordValid && (
          <p style={{ color: 'red', fontSize: '0.8rem'}}>Password must be at least 8 characters</p>
        )}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;