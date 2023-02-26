![DOM Window Manager logo](./dwm-logo.png)

# DOM Window Manager

A simple window manager for DOM elements

[Demo](https://dom-window-manager.vercel.app/)

## What it does

1. Makes DOM elements draggable
2. Moves an element on top of all other draggable elements (ex. when clicked)

## Description

DOM Window Manager consists of a single class, _WindowManager_, and a set of utility functions. _WindowManager_ uses the [singleton pattern](https://en.wikipedia.org/wiki/Singleton_pattern), effectively restricting the instantiation of the class to a singular instance to be used by all components, in any file.

## Instructions

At first, you need to import _WindowManager_ and _dragElement_ in each file that you create elements that you want to use with the DOM Window Manager. _WindowManager_ is the class that manages the elements and _dragElement_ is the utility function that makes elements draggable.

```
import { WindowManager, dragElement }  from "dom-window-manager";
```

Then, you have to instanciate the window manager in each file as well.

```
let windowManager = new WindowManager();
```

It takes an optional parameter, _base_, that is the initial z-index value that all elements will have. If no value is provided, _base_ defaults to 1.

Then, at some point you will create an element

```
const element = document.createElement("div");
```

It could be any type of element (p, h1, div etc.). The only prerequisite, is to set its position attribute to **absolute**. It can be done either in JavaScript of in the CSS file.

```
element.style.position = "absolute";
```

You can now call the dragElement function, with the element as its parameter.

```
dragElement(element);
```

You also need to set the elements z-index value to the base provided by _WindowManager_.

```
element.style.zIndex = windowManager.base;
```

Finally, you will probably want to make the element come on top of all other elements when clicked.

```
element.addEventListener("mousedown", () => {
    element.style.zIndex = windowManager.moveOnTop();
});
```

As you have seen, DOM Window Manager takes a very minimalist approach, providing you with the bare necessities, and giving you absolute freedom to use it as you see fit for your project.

### All the code

```
import { WindowManager, dragElement }  from "dom-window-manager";

let windowManager = new WindowManager();
const element = document.createElement("div");
element.style.position = "absolute";
dragElement(element);
element.style.zIndex = windowManager.base;

element.addEventListener("mousedown", () => {
    element.style.zIndex = windowManager.moveOnTop();
});

```

## Links

[DOM Window Manager npm package](https://www.npmjs.com/package/dom-window-manager)

## License

<a href="https://www.gnu.org/licenses/agpl-3.0.html"><img src="https://upload.wikimedia.org/wikipedia/commons/0/06/AGPLv3_Logo.svg" height="100px" /></a>

Copyright (c) 2023 Michael Kolesidis<br>
Licensed under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html).
