/*
 *  DOM Window Manager
 *  https://github.com/michaelkolesidis/dom-window-manager
 *  https://www.npmjs.com/package/dom-window-manager
 *
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

let instance: any = null;

export class WindowManager {
  // base z-index to be used as the initial value of all elements
  base!: string;
  // highest z-index amongst all elements
  highZ!: string;

  constructor(base = 1) {
    if (instance) {
      return instance;
    }

    instance = this;

    this.base = base.toString();
    this.highZ = this.base;
  }

  // move elements on top of all other elements
  moveOnTop() {
    let newHigh = parseInt(this.highZ) + 1;
    this.highZ = newHigh.toString();
    return newHigh.toString();
  }
}

// make element draggable (optionally from a specific handle)
/**
 * @param element The element to move
 * @param handle Optional: the element to use as the drag handle (e.g., a header)
 */
export function dragElement(element: HTMLElement, handle?: HTMLElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  // If no handle is provided, use the whole element
  const dragTarget = handle || element;

  dragTarget.onmousedown = dragMouseDown;

  function dragMouseDown(e: MouseEvent) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: MouseEvent) {
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Set the element's new position:
    element.style.top = element.offsetTop - pos2 + 'px';
    element.style.left = element.offsetLeft - pos1 + 'px';
  }

  // stop moving when mouse button is released:
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
