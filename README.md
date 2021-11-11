# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![screenshot of webpage](https://raw.githubusercontent.com/karthik2265/url-shortening-service-landing-page/master/ss.png)

### Links

- Solution URL: [open](https://github.com/karthik2265/url-shortening-service-landing-page)
- Live Site URL: [open](https://karthik2265.github.io/url-shortening-service-landing-page/)

## My process

I started with html, then worked on styling the page and then finally the javascript part

### Built with

- Html
- css
- Flexbox css
- javaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I have learnt to built a web page which is responsive and looks amazing.
also have learnt how to create and insert elements into the DOM

one of the function i wrote in js, to insert an element into the DOM

```js
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
};
```

Reviewing the code i have written to complete this challenge, I can improve these

- better names for css classes
- better understand what each css rule is doing and how specific it is

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I want to improve my css and also learn node.js
