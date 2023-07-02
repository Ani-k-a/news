const setCurrentPage = () => {
    const links = document.querySelectorAll('.header-nav__link');
    const pageUrl = document.URL;
    const isCurrentPage = false;

    links.forEach(el => {
        const currentPage = pageUrl.includes(el.pathname);
        currentPage && el.classList.add('header-nav__link--active') && (isCurrentPage = true);

    })
    if (!isCurrentPage) {
        const activePage = document.querySelector('.header-nav__link-main');
        activePage.classList.add('header-nav__link--active');
    }
}

setCurrentPage();