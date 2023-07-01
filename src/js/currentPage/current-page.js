
console.log("hi");
const setCurrentPage = () => {
    const links = document.querySelectorAll('.header-nav__link');
    const pageUrl = document.URL;

    links.forEach(el => {
        const currentPage = pageUrl.includes(el.pathname);
        currentPage && el.classList.add('header-nav__link--active');
    })
}

setCurrentPage();