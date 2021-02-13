import { alertActions } from '@recipes/services';
import Alert from '@material-ui/lab/Alert';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAlert } from '../hooks/useAlertDialog';

const CustomAlert = () => {
  const dispatch = useDispatch();
  const { alertType, alertMsg } = useAlert();

  const onClose = useCallback(() => {
    dispatch(alertActions.setAlert());
  }, []);

  useEffect(() => {
    setTimeout(() => onClose(), 5000);
  }, [alertType, alertMsg]);

  if (!alertType || !alertMsg) return null;
  return (
    <div className="alert">
      <Alert severity={alertType} onClose={onClose}>
        {alertMsg}
      </Alert>
    </div>
  );
};

export { CustomAlert };
