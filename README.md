## Website Performance Optimization portfolio project
### To Make Changes to project:
1. download project directory
2. run npm install to install required grunt dependencies

### To Run:
1. clone directory and open up dist/index.html in your browser.

### Optimization and Performance Related Changes
#### Part 1: Optimize PageSpeed Insights score for index.html

1. index.html:
    - loaded google analytics script asynchronously
    - added css file type to print.css
    - used webfont loader to load google fonts
2. Optimize images:
    - resized unnecessarily large images (pizzeria.jpg), and create smaller version for thumbnail
    - resized and compress images using Grunt tasks (responsive_images, imagemin)
3. Optimize CSS delivery:
    - minified CSS using Grunt task (grunt-contrib-cssmin)
    - inlined CSS on pizza.html and index.html

#### Part 2: Optimize Frames per Second in pizza.html
1. main.js:
    - eliminated forced synchonous layout on resizePizzas function
    - changed pizza widths to percentages in changePizzaSizes function
    - reduced number of background pizzas generated from 200 to 40
    - changed 'querySelectorAll' to 'getElementsByClassName' in updatePositions function
    - added requestAnimationFrame to scroll event handler
    - created empty array in updatePositions function, and push precomputed 5 possible numbers that determine phase quantity; used this to determine translation for CSS transformation of .mover elements
    - applied CSS transformation (translateX) in main.js;
2. pizza.html:
    - added transform, will-change, and backface-visibility properties to CSS in pizza.html


### Built with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
