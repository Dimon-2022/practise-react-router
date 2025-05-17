//Rus
// 01. Пропишите в URL путь /searchpage?q=hello-world! +++
// 02. Получите значение параметра query string и отобразите его в <p>Search term: </p> +++
// 03. Создайте функцию, которая будет изменять значение параметра q в query string на то, что будет введено в input. +++

import { useSearchParams } from "react-router-dom";

//Eng
// 01. Specify the path in URL /searchpage?q=hello-world!
// 02. Retrieve the value of the query string parameter and display it in <p>Search term: </p>
// 03. Create a function that will change the value of the q parameter in the query string to the value entered in the input field.

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  
  function changeUrlParam(e){
    setSearchParams({q: e.target.value});
  }

  return (
    <div>
      <h1>Search Results</h1>
      {query && <p>Search term: {query}</p>}

      {/* Поле ввода для изменения строки запроса */}
      <input type="text" value={query} onChange={changeUrlParam}/>
    </div>
  );
}

export default SearchPage;
