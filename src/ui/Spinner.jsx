function Spinner() {
  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust as needed
  };

  const loaderStyle = {
    border: '8px solid #f3f3f3', // Light grey
    borderTop: '8px solid #3498db', // Blue
    borderRadius: '50%',
    width: '50px', // Size of the spinner
    height: '50px', // Size of the spinner
    animation: 'spin 2s linear infinite',
  };

  return (
    <div style={spinnerStyle}>
      {/* Spinner element */}
      <div style={loaderStyle}></div>
    </div>
  )
}

export default Spinner


