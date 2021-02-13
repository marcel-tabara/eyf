const ingredientsTypeEnums = ['carne', 'legume', 'crupe', 'paste', 'lactate'];
const stockType = [false, true];

export const ingredientsSchema = ({ ingredient }) => {
  const { id, name, ingredientType, isOutOfStock } = ingredient;
  return {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'string', title: 'Id', default: id || '' },
      name: { type: 'string', title: 'Name', default: name },
      ingredientType: {
        type: 'string',
        title: 'Type',
        enum: ingredientsTypeEnums,
        default: ingredientType,
      },
      isOutOfStock: {
        type: 'boolean',
        title: 'Out of Stock',
        default: isOutOfStock || false,
      },
    },
  };
};

export const ingredientsUiSchema = {
  id: { 'ui:widget': 'hidden' },
  ingredientType: {
    'ui:placeholder': 'Choose a Type',
  },
};
