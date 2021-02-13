import { alertSelectors } from '@recipes/services';
import { useSelector } from 'react-redux';

export const useAlert = () => {
  const alert = useSelector(alertSelectors.alertSelector) || {};

  return {
    alertType: alert.type,
    alertMsg: alert.msg,
  };
};
