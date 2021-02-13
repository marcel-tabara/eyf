const recipeTypeEnums = ['SOUP', 'MAIN', 'SALAD'];

export const recipesSchema = ({ recipe, ingredients }) => {
  const { id, name, description, recipeType, plates, startTime } = recipe;
  return {
    type: 'object',
    required: ['name', 'recipeType'],
    properties: {
      id: { type: 'string', title: 'Id', default: id || '' },
      name: { type: 'string', title: 'Name', default: name },
      description: {
        type: 'string',
        title: 'Description',
        default: description,
      },
      recipeType: {
        type: 'string',
        title: 'Type',
        enum: recipeTypeEnums,
        default: recipeType,
      },
      plates: { type: 'string', title: 'Plates', default: plates },
      startTime: { type: 'string', title: 'Start', default: startTime || '0' },
      ingredientsList: {
        type: 'array',
        uniqueItems: true,
        title: 'Ingredients',
        items: {
          type: 'string',
          enum: ingredients,
        },
      },
    },
  };
};

export const recipesUiSchema = {
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
