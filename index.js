const fetchData = async function(searchTerm){
  const response = await axios.get("http://www.omdbapi.com", {
      params: {
          apikey: '33b6e284',
          s: searchTerm
      }
  });

    console.log(response.data);
};



const input = document.querySelector("input");

const debounce = (func) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, 500);
    }
};


const onInput = debounce(event => {
        fetchData(event.target.value);
});


input.addEventListener("input", onInput);
