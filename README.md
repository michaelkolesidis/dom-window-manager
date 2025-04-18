![DOM Window Manager logo](./dwm-logo.png)

# DOM Window Manager

A simple window manager for DOM elements

[Demo 1](https://dom-window-manager.vercel.app/)

[Demo 2](https://collection-of-div-surrogates.vercel.app/)

[Repository](https://github.com/michaelkolesidis/dom-window-manager)

[npm package](https://www.npmjs.com/package/dom-window-manager)

![Attention! Free Software](./attention-free-software.png)

This software is free (as in freedom). **If you use any part of this code, you must make your entire project's source code publicly available under the same license.** This applies whether you modify the code or use it as it is in your own project. This ensures that all modifications and derivative works remain free software, so that everyone can benefit. If you are not willing to comply with these terms, you must refrain from using any part of this code.

For full license terms and conditions, you can read the AGPL-3.0 at: [gnu.org/licenses/agpl-3.0.html](https://www.gnu.org/licenses/agpl-3.0.html).

## What it does

1. Makes DOM elements draggable
2. Moves an element on top of all other draggable elements (ex. when clicked)

## Description

DOM Window Manager consists of a single class, _WindowManager_, and a set of utility functions. _WindowManager_ uses the [singleton pattern](https://en.wikipedia.org/wiki/Singleton_pattern), effectively restricting the instantiation of the class to a singular instance to be used by all components, in any file.

## Instructions

At first, you need to import _WindowManager_ and _dragElement_ in each file that you create elements that you want to use with the DOM Window Manager. _WindowManager_ is the class that manages the elements and _dragElement_ is the utility function that makes elements draggable.

```typescript
import { WindowManager, dragElement }  from "dom-window-manager";
```

Then, you have to instanciate the window manager in each file as well.

```typescript
let windowManager = new WindowManager();
```

It takes an optional parameter, _base_, that is the initial z-index value that all elements will have. If no value is provided, _base_ defaults to 1.

Then, at some point you will create an element

```typescript
const element = document.createElement("div");
```

It could be any type of element (p, h1, div etc.). The only prerequisite, is to set its position attribute to **absolute**. It can be done either in JavaScript of in the CSS file.

```typescript
element.style.position = "absolute";
```

You can now call the dragElement function, with the element as its parameter.

```typescript
dragElement(element);
```

This will make the **entire element** draggable.

Optionally, you can pass a second argument to specify a **handle** (like a header) from which the element will be draggable, while the rest remains non-draggable:

```typescript
const header = document.createElement("div");
element.appendChild(header);
dragElement(element, header);
```

You also need to set the elements z-index value to the base provided by _WindowManager_.

```typescript
element.style.zIndex = windowManager.base;
```

Finally, you will probably want to make the element come on top of all other elements when clicked.

```typescript
element.addEventListener("mousedown", () => {
    element.style.zIndex = windowManager.moveOnTop();
});
```

As you have seen, DOM Window Manager takes a very minimalist approach, providing you with the bare necessities, and giving you absolute freedom to use it as you see fit for your project.

### All the code

```typescript
import { WindowManager, dragElement } from "dom-window-manager";

let windowManager = new WindowManager();
const element = document.createElement("div");
element.style.position = "absolute";

// Optional: create a handle (like a header)
const header = document.createElement("div");
element.appendChild(header);

// Drag entire element:
dragElement(element);

// OR: Drag only from header
// dragElement(element, header);

element.style.zIndex = windowManager.base;

element.addEventListener("mousedown", () => {
  element.style.zIndex = windowManager.moveOnTop();
});


```

## 💖 Support the Project

Thank you so much for your interest in my project! If you want to go a step further and support my open source work, buy me a coffee:

<a href='https://ko-fi.com/michaelkolesidis' target='_blank'><img src='https://cdn.ko-fi.com/cdn/kofi1.png' height="40px" alt='Buy Me a Coffee at ko-fi.com' /></a>

## License

<a href="https://www.gnu.org/licenses/agpl-3.0.html"><img src="https://upload.wikimedia.org/wikipedia/commons/0/06/AGPLv3_Logo.svg" height="100px" /></a>

Copyright (c) Michael Kolesidis  
Licensed under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html).
