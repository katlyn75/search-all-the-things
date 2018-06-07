const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';


const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));



export function search({ category }) {//, { page = 1, pageSize = 5 }) {
  // const paging = `&page=${page}&pageSize=${pageSize}`;
  const search = `?c=${category}`;

  return get (`${BASE_URL}${search}`);
}