const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
      const [name, value] = item.split('=');
      return { ...acc, [name]: value };
    }, {});
  };

const cookie = getCookie();

if (cookie.modalActive !== "yes") {
        modal.classList.add("modal_active");
    modalClose.onclick = () => {
        modal.classList.remove("modal_active");
        document.cookie = "modalActive=yes; max-age=300";
    };
};