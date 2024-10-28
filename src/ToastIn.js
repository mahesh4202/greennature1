import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import 'react-toastify/dist/ReactToastify.css';

function MyComponentIn() {
  const showToast = () => {
    toast.success('Sign In Success');
  };

  return (
    <div>
    <Button variant="primary" onClick={showToast}>
    Sign In
    </Button>
    <ToastContainer position="top-right" />
    </div>
  );
}
export default MyComponentIn;