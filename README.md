# Jquery BG Image JS
<p>Get background image and return object</p>
<p>Author Godahtech | Soluções Digitais - Roberto W. Godoy</p>
<b>Version 1.0.0</b>
 
## Usage:

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
