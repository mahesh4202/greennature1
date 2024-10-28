import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import 'react-toastify/dist/ReactToastify.css';

function MyComponentUp() {
  const showToast = () => {
    toast.success('Sign Up Success');
  };

  return (
    <div>
    <Button variant="primary" onClick={showToast}>
    Sign Up
    </Button>
    <ToastContainer position="top-right" />
    </div>
  );
}
export default MyComponentUp;