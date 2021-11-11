const menuBtn = document.querySelector("i.fas");
const menu = document.querySelector(".nav-links-container");

const shortLinksContainer = document.querySelector(".shortened-links-div");
const input = document.querySelector("input");
const shortenItBtn = document.querySelector(".btn--shorten-it");
const linkIsEmpty = document.querySelector(".url-shortener-div p");

const copyBtns = document.querySelector(".btn--copy");

function createAndInsertEl(originalLink) {
  let shortLink =
    originalLink.length < 20
      ? originalLink
      : originalLink.substring(0, 20) + "w3.com";
  div = document.createElement("div");
  div.classList.add("shortened-link-div");
  div.innerHTML = `<p>${originalLink}</p>
  <div>
    <p>${shortLink}</p>
    <p class="btn btn--copy">Copy</p>
  </div>`;
  shortLinksContainer.appendChild(div);
}

shortenItBtn.addEventListener("click", () => {
  let link = input.value;
  if (link == "" || link == null) {
    input.classList.add("empty");
    linkIsEmpty.classList.add("empty");
  } else {
    input.classList.remove("empty");
    linkIsEmpty.classList.remove("empty");
    createAndInsertEl(link);
    input.value = "";
  }
});

menuBtn.addEventListener("click", () => {
  if (menu.style.visibility == "visible") {
    menu.style.visibility = "hidden";
  } else {
    menu.style.visibility = "visible";
  }
});

shortLinksContainer.addEventListener("click", (e) => {
  let el = e.target;
  if (copyBtns != null) {
    copyBtns.forEach((btn) => {
      btn.classList.remove("copied");
      btn.textContent = "Copy";
    });
  }

  if (el.classList.contains("btn--copy")) {
    console.log("hi");
    el.classList.add("copied");
    el.textContent = "Copied!";
    let linkEl = el.previousElementSibling;
    console.log(linkEl);
    navigator.clipboard.writeText(linkEl.textContent);
  }
});
