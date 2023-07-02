import { fetchGlobalSearch } from "./globalSearchAPI";
import { renderGallery } from "../renderSearchQuery/renderGallery";
import { createButtons } from "../pagination/buttons";

const form = document.querySelector('.header-form');
console.log('hello');

const onSubmit = async (ev) => {
    ev.preventDefault();
    const query = ev.target.search.value;
    const dates = await (fetchGlobalSearch(query));
    console.log(dates);
    renderGallery(dates);
    createButtons(dates);
}

form.addEventListener('submit', onSubmit);