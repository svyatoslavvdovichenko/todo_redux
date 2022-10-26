import { FC } from 'react';
import { Alert } from 'reactstrap';
import { IAlertToDo } from './IAlertToDo';

const AlertToDo:FC<IAlertToDo> = ({ textAlert, setVisibleAlert, visibleAlert }) => {
  const onDismiss = (): void => setVisibleAlert(false);

  return (
    <Alert 
      className="sticky-lg-top"
      color="danger" 
      isOpen={visibleAlert} 
      toggle={onDismiss}
    >
      {textAlert}
    </Alert>
  );
}

export default AlertToDo;