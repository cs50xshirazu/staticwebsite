export const toggleSideDrawer = () => {
    const sideDrawerElement = document.querySelector(".side-drawer") as HTMLDivElement;
    sideDrawerElement.classList.toggle("side-drawer-open");
};