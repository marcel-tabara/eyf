import { searchSelectors } from '@recipes/services';
import { useSelector } from 'react-redux';

export const useSearchData = () => {
  const searchData = useSelector(searchSelectors.searchSelector) || {};

  return {
    searchData,
  };
};
