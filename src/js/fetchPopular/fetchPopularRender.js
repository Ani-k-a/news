import { fetchMostPopular } from "./fetchPopular";
import { renderGallery } from "../renderPopQuery/renderGallery";
import { createButtons } from "../pagination/buttons";
import { state } from "../pagination/state";


export const firstRenderPage = async () => {
    const dates = await (fetchMostPopular());
    state.arr = dates;
    console.log(state.currentPage);
    const newArr = dates.slice(((state.currentPage - 1) * state.newsPerPage), state.newsPerPage)
    createButtons(dates);
    renderGallery(newArr);

}

firstRenderPage();

