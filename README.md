# Jquery BG Image JS
<p>Retorna a imagem de background de qualquer elemento como um objeto. | Returns the background image of any element as an object.</p>
<p>Godahtech | Soluções Digitais - Roberto Godoy</p>
<b>Version 1.0.0</b>

# Zero Vulnerabilidades
[![Known Vulnerabilities](https://snyk.io/test/github/godoyrw/jquery-bg-image/badge.svg?targetFile=package.json)](https://snyk.io/test/github/godoyrw/jquery-bg-image?targetFile=package.json) 


# Instalação
npm i jquery-bg-image --save


## Usando:

#### HTML
```html
<div id="bg-image"></div>
```

#### CSS
```style
#bg-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center top;
    background-image: url(harley-quinn.jpg);
}
```

#### JAVASCRIPT
```javascript
$(document).ready(function () {
    $("#bg-image").bgImage(function (event) {
        /**
         * Event Log
         */
        console.log(event);
        
        /**
        * Get Object
        * @type {*|jQuery}
        */
        var background_image = $(this).get(0);
    
        /**
         * Get width
         */
        console.log(background_image.width);
    
        /**
         * Get height
         */
        console.log(background_image.height);
    
        /**
         * Get src
         */
        console.log(background_image.src);
    
    });
    
});
```
