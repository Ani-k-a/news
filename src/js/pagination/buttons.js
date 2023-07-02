import { state } from "./state";
import { refs } from "../refs/refs";
import { firstRenderPage } from "../fetchPopular/fetchPopularRender";

let { currentPage, totalPage, newsPerPage, arr } = state;
const { buttonsPagination } = refs;

const renderButton = (value) => {
    const btn = document.createElement('button');
    btn.innerText = value;

    btn.addEventListener('click', () => {
        currentPage = Number(value);
        console.log(currentPage);
        firstRenderPage();
    })
    return btn;
}

export const createButtons = (dates) => {
    arr = dates;
    totalPage = Math.ceil(arr.length / newsPerPage);
    if (totalPage === 1) {
        return;
    }
    console.log(totalPage);
    if (totalPage < 7) {
        const pageArr = []
        for (let i = 0; i < totalPage; i++) {
            pageArr.push(i + 1);
        }
        buttonsPagination.replaceChildren();
        buttonsPagination.append(...pageArr.map(renderButton))

    }
    if (totalPage < 7) {
        const pageArr = []
        for (let i = 0; i < totalPage; i++) {
            pageArr.push(i + 1);
        }
        buttonsPagination.replaceChildren();
        buttonsPagination.append(...pageArr.map(renderButton))

    }
}