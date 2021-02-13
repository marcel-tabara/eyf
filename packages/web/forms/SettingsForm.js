import React from 'react';
import Form from '@rjsf/material-ui';
import {
  settingsActions,
  settingsSchemas,
  settingsSelectors,
} from '@recipes/services';
import { useDispatch, useSelector } from 'react-redux';

const SettingsForm = () => {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelectors.settingsSelector) || [];

  const onSubmit = ({ formData }) => {
    dispatch(settingsActions.updateSettings(formData));
  };

  return (
    <div>
      <div className="paddingTop">
        <Form
          schema={settingsSchemas.settingsSchema}
          uiSchema={settingsSchemas.settingsUiSchema}
          onSubmit={onSubmit}
          formData={settings}
        />
      </div>
    </div>
  );
};

export default SettingsForm;
