//const API_QUERY = `apiKey=${API_KEY}`;
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

const throwJson = json => { throw json };
const get = url => fetch(url)
  .then(r => r.ok ? r.json(): r.json().then(throwJson));



export function search({ page=1, pageSize=5}) {
  const paging = `&page=${page}&pageSize=${pageSize}`;

  return BASE_URL(`${paging}`);
}