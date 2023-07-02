export const createArticleItem = (dates) => {
    let { url, published_date, title, abstract, media, subsection } = dates;
    const mediaDate = media[0];
    const mediaDates = mediaDate ? mediaDate['media-metadata'] : "https://dummyimage.com/353x235";


    const cardArticle = document.createElement('li');
    cardArticle.classList.add('gallery__card');

    const image = document.createElement('img');
    image.classList.add('gallery__img');
    image.setAttribute('src', mediaDates[2].url || "https://dummyimage.com/480x240");
    image.setAttribute('alt', title);

    const descriptionBlock = document.createElement('div');
    descriptionBlock.classList.add('gallery__descriptionBlock');

    const titlePage = document.createElement('h3');
    titlePage.classList.add('gallery__title-item');
    titlePage.innerText = title;

    const description = document.createElement('p');
    description.classList.add('gallery__description-item');
    description.innerText = abstract;

    const infoBlock = document.createElement('div');
    infoBlock.classList.add('gallery__infoBlock');

    const date = document.createElement('div');
    date.classList.add('gallery__date');
    date.innerText = published_date;

    const link = document.createElement('a');
    link.innerText = " Read more";
    link.classList.add('gallery__link');
    link.setAttribute('href', url);
    link.setAttribute('target', "_blank");
    link.setAttribute('rel', "noreferrer noopener");

    const tag = document.createElement('div');
    tag.classList.add('gallery__tag');
    tag.innerText = subsection || 'Other';

    infoBlock.append(date, link);
    descriptionBlock.append(titlePage, description, infoBlock);
    cardArticle.append(image, descriptionBlock, tag);
    return cardArticle;
}