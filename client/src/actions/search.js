/* import * as api from '../api';

export const getPage = (page) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data: { data, currentPage, numberOfPages } } = await api.fetchPage(page);
  
      dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
  
export const getPageBySearch = (searchQuery) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
      console.log(data);
  
      /* dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
      dispatch({ type: END_LOADING }); */
    //} catch (error) {
     // console.log(error);
    //}
  //}; */