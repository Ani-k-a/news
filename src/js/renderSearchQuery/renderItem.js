export const createArticleItem = (dates) => {
    const { web_url, pub_date, lead_paragraph, headline, multimedia } = dates;

    const cardArticle = document.createElement('li');
    const image = document.createElement('img');
    image.classList.add('gallery__img');
    image.setAttribute('src', `https://static01.nyt.com/${multimedia[2].url}`);
    image.setAttribute('alt', headline.main);

    const descriptionBlock = document.createElement('div');
    descriptionBlock.classList.add('gallery__descriptionBlock');
    const title = document.createElement('h3');
    titlePage.classList.add('gallery__title-item');
    title.innerText = headline.main;

    const description = document.createElement('p');
    description.classList.add('gallery__description-item');
    description.innerText = lead_paragraph;

    const infoBlock = document.createElement('div');
    infoBlock.classList.add('gallery__infoBlock');

    const date = document.createElement('div');
    date.classList.add('gallery__date');
    date.innerText = pub_date;

    const link = document.createElement('a');
    link.innerText = " Read more";
    link.classList.add('gallery__link');
    link.setAttribute('href', web_url);
    link.setAttribute('target', "_blank");
    link.setAttribute('rel', "noreferrer noopener");

    infoBlock.append(date, link);
    descriptionBlock.append(title, description, infoBlock);
    cardArticle.append(image, descriptionBlock);
    return cardArticle;
}