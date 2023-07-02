import { refs } from '../refs/refs';
import { createArticleItem } from './renderItem';
import { state } from '../pagination/state';

const { currentPage, arr, newsPerPage } = state;
const startIndex = newsPerPage * (currentPage - 1) + 1;

export const renderGallery = (dates) => {
    refs.galleryMainPage.replaceChildren();
    refs.galleryMainPage.append(...dates.splice(startIndex + newsPerPage).map(el => createArticleItem(el)));
}