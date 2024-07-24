export const toggleSideDrawer = () => {
    const sideDrawerElement = document.querySelector(".side-drawer") as HTMLDivElement;
    sideDrawerElement.classList.toggle("side-drawer-open");
    lockWindowScroll()
};

export const lockWindowScroll = () => {
    const bodyEl = document.querySelector("body") as HTMLBodyElement;
    bodyEl.classList.toggle("overflow-hidden");
};