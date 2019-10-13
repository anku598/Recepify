import Search from './models/Search';
import * as searchView from './views/searchView'
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base'

/** Global State of the app **/

const state = {}

const controlSearch = async () => {
    // Get Query from view
    const query = searchView.getInput();
    if (query) {
        state.search = new Search(query);
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        await state.search.getResult()

        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
})