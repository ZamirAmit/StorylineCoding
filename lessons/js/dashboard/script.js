url = "data/grades-data.json";

async function fetchDataFromApi() {
    const res = await fetch(url);
    const json = await res.json();
    return json.joke;
}

function finish(joke) {
    console.log(joke);
    console.log('Finished fetching data');
}
async function init() {
    let joke = await fetchDataFromApi();
    finish(joke);
}
init();