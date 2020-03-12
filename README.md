# POPOP JS
### Modals for everyone! **ᕕ( ᐛ )ᕗ**
---
## Intro

### POPOP is a vanilla JS, flexbox-based, bare-bones modal framework, boasting the use of only 2 files, 3 required css classes, and less than 80 lines of JS! (Including the comments!)
---
## Getting Started
Download or copy-pasta the code from the "downloads" folder in the repo!
CDN link and npm/yarn init coming soon!

---
## Setup
1. Insert the <link> tag for popop.css BEFORE  your own custom css (main.css, style.css, etc.)

2. Insert the <script> tag for  popop.js either AFTER all of your CSS 
(with "defer"-- ex: <script defer src="popop.js"></script>)
OR at the bottom of the HTML file, after the <body> tag!

3. To set up a modal and functionality:
* Apply the "popop-modal" class to a div and give it a unique ID.
* Apply the "popop-open-btn" class to a button, span, or a element.
* Add "data-modal-id" name that matches the modal's ID * **VERY IMPORTANT**
* From within the popop-modal div, add an element with the "popop-close-btn" class.

*BAM!* you have a modal!

### An example setup:
```html
<button class="popop-open-btn" data-modal-id="modal-1">Open!</button>
<div class="popop-modal" id="modal-1"> 
    <p>Stuff.</p>
    <button class="popop-close-btn"> 
</div>
```
---
## Classes
| Class                       | Purpose             | Required |
| ---------------------------:|:-------------------:|:--------:|
|<code>.popop-modal</code>    |The main wrapper for your modal! Very important!|Yes|
|<code>.popop-open-btn</code> |The class to apply to whatever opens your modal! Apply this outside of .popop-modal!|Yes|
|<code>.popop-close-btn</code>|This will close your modal. Setup within .popop-modal |Yes|
|<code>.popop-content</code>  |Wrapper for content. This may be used if you want to apply an overlay background under your modal. |No|
|<code>.popop-fixed</code>    |Makes an element in your modal sticky!|No|

---
## Upcoming Features:
* A library of pre-made modals for you to copy-pasta!
* Dark mode!
---
## Comments? Concerns?
Feel free to fork the repo and add your own twist!

Honestly, feel free to edit anything in the code. I'm not the boss of you. This is built to be flexible/customizable lol.

Contact me via DMs on twitter or LinkedIn!
