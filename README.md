# tSPinner
Simple Javascript and CSS loading animation

## Setup
Requires jQuery. Built with jQuery 3.3.1.
1. Add tSpinner.js and tSpinner.css to project.


## Basic Use
tSpinner adds and removes a CSS loading animation and overlay to and from the DOM as needed. There are 3 basic functions: show, hide, and remove.

```
tSpinner.show("Loading Text...");
```
Adds loading animation and overlay to DOM. Custom text can be added as it's sole parameter. Defaults to "Loading..." if nothing is provided.

```
tSpinner.hide();
```
Performs a fadeout animation before removing loading animation and overlay from DOM.

```
tSpinner.remove();
```
Removes from DOM without fadeout.
