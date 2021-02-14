const menuSchema = {
  type: 'object',
  required: ['days'],
  properties: {
    days: { type: 'string', title: 'Days', default: '' },
  },
};
const menuUiSchema = {
  id: { 'ui:widget': 'hidden' },
  recipeType: {
    'ui:placeholder': 'Choose a provider',
  },
  description: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 15,
    },
  },
};
