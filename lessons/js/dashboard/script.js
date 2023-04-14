url = "data/grades-data.json";

async function fetchDataFromApi() {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });
    const json = await res.json();
    return json;

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