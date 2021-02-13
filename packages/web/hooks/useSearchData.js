import { searchSelectors } from '@bpgen/services'
import { useSelector } from 'react-redux'

export const useSearchData = () => {
  const searchData = useSelector(searchSelectors.searchSelector) || {}

  return {
    searchData,
  }
}
