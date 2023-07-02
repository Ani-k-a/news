import { refs } from '../refs/refs';
import { createArticleItem } from './renderItem';
import { state } from '../pagination/state';

const { currentPage, arr, newsPerPage } = state;
const startIndex = newsPerPage * (currentPage - 1) + 1;

export const renderGallery = (dates) => {
    refs.galleryMainPage.replaceChildren();
    console.log(dates)
    refs.galleryMainPage.append(...dates.map(el => createArticleItem(el)));
}