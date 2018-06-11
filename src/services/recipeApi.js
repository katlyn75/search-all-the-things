const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';


const get = url => fetch(url)
  .then(response => response.json()).then(checkResponseData);

export function checkResponseData(response) {
  if(response.Response === 'False') throw response.Error;
  return response;
}

export function search(searchCategory)
//, page, perPage)
{
  //const pageIndex = (page * perPage) - perPage;
  const search = `?c=${searchCategory}`;

  return get (`${BASE_URL}${search}`);
}