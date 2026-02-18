import SignupForm from './components/SignupForm';
import './App.css'

function App() {
  
  //log the data
  const handleSubmission = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
      <div className="container">
        <SignupForm onSubmit={handleSubmission} />
      </div>
  )
}

export default App
