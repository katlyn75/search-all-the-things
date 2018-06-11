const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';


const get = url => fetch(url)
  .then(response => response.json()).then(checkResponseData);

export function checkResponseData(response) {
  if(response.Response === 'False') throw response.Error;
  return response;
}

export function search({ category }) {//, { page = 1, pageSize = 5 }) {
  // const paging = `&page=${page}&pageSize=${pageSize}`;
  const search = `?c=${category}`;

  return get (`${BASE_URL}${search}`);
}