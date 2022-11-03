import { useActions, useTypedSelector } from 'hooks';
import { FC } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const AlertToDo:FC = () => {
  const { alert, isVisibleAlert } = useTypedSelector(state => state.alertReducer)
  const { setAlert } = useActions();

  const onDismiss = () => setAlert({ alert: "", isVisibleAlert: false });

  return (
    <ToastContainer 
      position="middle-start"
      className="m-3 mt-5 "
    >
      <Toast 
        show={isVisibleAlert} 
        onClose={onDismiss}
        bg="danger"
      >
        <Toast.Header>
          Error
        </Toast.Header>
  
        <Toast.Body>
          {alert}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default AlertToDo;