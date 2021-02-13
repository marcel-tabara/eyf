const recipeTypeEnums = ['SOUP', 'MAIN', 'SALAD'];
const mealTypes = [
  'breakfast',
  'brunch',
  'elevenses',
  'lunch',
  'tea',
  'supper',
  'dinner',
];

export const settingsSchema = {
  type: 'object',
  properties: {
    mealTypes: { type: 'string', default: mealTypes },
    ingredientType: {
      type: 'string',
    },
  },
};

export const settingsUiSchema = {
  id: { 'ui:widget': 'hidden' },
  recipeType: {
    'ui:placeholder': 'Choose a Type',
  },
  description: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 15,
    },
  },
  ingredientsList: {
    'ui:options': {
      rows: 15,
    },
  },
};
