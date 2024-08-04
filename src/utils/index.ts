export const toggleSideDrawer = () => {
    const sideDrawerElement = document.querySelector(".side-drawer") as HTMLDivElement;

    const isOpen = sideDrawerElement.classList.contains("side-drawer-open");

    if (isOpen) {
        sideDrawerElement.classList.remove("side-drawer-open");
        lockWindowScroll(false);
    } else {
        sideDrawerElement.classList.add("side-drawer-open");
        lockWindowScroll(true);
    }
};

export const lockWindowScroll = (state?: boolean) => {
    const bodyEl = document.querySelector("body") as HTMLBodyElement;
    if (state !== undefined) {
        if (state) {
            bodyEl.classList.add("overflow-hidden");
        } else {
            bodyEl.classList.toggle("overflow-hidden");
        }
    } else {
        bodyEl.classList.toggle("overflow-hidden");
    }

};