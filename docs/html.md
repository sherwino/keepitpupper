# Using HTML
Going to use semantic markup, and try to use whatever methods are available to make the page more accessibility friendly. 

In addition going to use methods that allow for a responsive, mobile first experience that minimizes the amount of requests we make and going to use things like src set to replace the images depending on the screen that is consuming them. 

## Semantic Markup
>Good CSS can make bad markup invisible to the average website visitor. However, no amount of styling will make bad markup more meaningful to a computerized visitor such as a search engine web crawler, browser translation tools, or assistive technologies such as screen readers. According to Bruce Lawson, the semantic use of HTML elements “enhances accessibility, searchability, internationalization, and interoperability.” In other words, writing semantic markup is mandatory if you want your website to be accessible to all visitors, to achieve a high search engine ranking, to be available to visitors from around the world, and to interface effectively with other web services. Writing semantic markup is about creating web content that is both human and computer readable. When the web can be read equally well by both humans and computers, it becomes more accessible since computers are better able to analyze its contents, index it, deliver it, and developers are better able to tie different sources of information together into new web services.

Read more: https://html.com/semantic-markup/#ixzz5R8qIO0Rx



```html 
<header></header>
```
```html 
<footer></footer>
```
```html 
<main></main>
```
```html 
<nav></nav>
```
```html 
<aside></aside>
```
```html 
<section></section>
```
```html 
<article></article>
```
```html 
<figure></figure>
```
```html 
<strong></strong>
```
```html 
<em></em>
```
```html 
<time></time>
```
et al...

## Src Set
I only want to use this stuff because I just learned how to use it. This allows me to tell the browser what immage to load based on the screen size. So if the person is visiting the page on an iPhone, the browser wont even bother downloading the 1900x1200 version of an image on a cellular connection.

Instead of writing out a full example I will just show you one from my Udacity course.

When you visit [this page](https://udacity.github.io/responsive-images/examples/3-08/pictureFullMonty/) you will notice there is one large full size image, but as you move to smaller sizes it scales down with you. Wooopptie doo, all they are doing is setting the image to 100% width and it is scalling down because of that. 

Well sort of.. see it is doing much more thant that it is selecting between five different image sources depending on the resolution of the screen. 

If the screen is 1000px or wider it uses `kookaburra_large_1x.jpg` on 1 Dpi screens, and `kookaburra_large_2x.jpg 2x` if it is a 2 Dpi screen

If the screen is less than 1000px, and more than 500px, it uses `kookaburra_medium_1x.jpg` for 1 Dpi, and it has another for 2 Dpi

```html
<picture>
  <source media="(min-width: 1000px)" srcset="kookaburra_large_1x.jpg 1x, kookaburra_large_2x.jpg 2x">
  <source media="(min-width: 500px)" srcset="kookaburra_medium_1x.jpg 1x, kookaburra_medium_2x.jpg 2x">
  <img src="kookaburra_small.jpg" alt="The kookaburra: a terrestrial tree kingfisher native to Australia and New Guinea">
</picture>
```

There are a few interesting things to note about this. 

- The images are wrapped in a ```<picture></picture>``` tag. 
- Each of the srcset sources are wrapped in a ```<source></source>``` tag.
- The source tag contains a media query, and it has a string with multiple image options with Dpi as a suffix. 
- Final thing to note is that the picture tag also has the generic ```<img></img>``` tag to fall back to if none of those conditions apply, and if the browser does not support srcset options. ...basically if these options don't work, well here is a the least fancy version of our image using an old fashioned img tag.

Actually MDN wrote about this topic [here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images), and mentions why you probably should do this in the HTML, and not through JS, or CSS. Tl;dr - basically browser will prefetch the images and by the time the script kicks in you have already downloaded the large image. The CSS way shown [here](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) 

>However, image-set() does not support width descriptors yet. The plan is to refine image-set() to provide feature parity with srcset.

## The Layout 
I guess this is where I would put mockups of how I plan to make the site look. I am going to sketch it in OneNote, and it is going to suck. Future sketch will not be this bad.

### Menu
Going to make a small little hamburger menu that just leads to some anchor links in the page below. If it makes sense to implement this we might animate the movement to that area of the page. (This might not be necesarry give the size of the page)

### Title 
Should be a clean font, with large text, we might want the logo on top of or next to the text. Going to try to make it a vector graphic so that it could scale and not occupy much space. Since this is going to be a parallax page may want content to flow under the header as you scroll, or the header/logo to move at a different rate than the rest of the page. When you finally scroll to a certain level the logo and title get tucked away to the top of the page. 

If you keep scrolling both the title and the header completely dissapear, and only come back when you scroll up. 

### Header
The main image on the top is going to feature some of our most prominent artist at the time, we are probably going to change this image around once in a while, the image should feature a transparent background around the artists so that we could make some kind of parallax effect as you scroll up.

### Under the Header
A little discription of what the hell is JQBX, who we are, what kind of music we listen to. Maybe provide some links to the app to the room, our spotify playlist, and something else.

### What We Listen To
This might be a good place to describe to the user what kind of music we listen to, and say something like for more information see the stats below. Maybe we could include some last.fm charts in here, and link them to our last.fm profile, and our JQBX stats page.

### Rules
Tell them what the rules are. 
Explain to them what we mean by keeping it pupper.
Tell them what we mean by going with the flow. Exceptions to the flow law. (RR/DW/Maybe album release parties)

### Text
All of the text, and icons are going to fade in and possibly lazy load for an effect.

### Events
Maybe just mention what we do on certain days
M - DW 

T - Open Format

W - Open Format

T - Throwbacks and more

F - Fresh Finds and more

Events
-------
OCT - Battle Against Wildflower

NOV - Frank Ocean Album Release Party


### Play History
Often we want to know what we have played in the past or played on a certain day maybe make a little widget that lets you pick a day and see what we played that day, maybe make the list expand up to 50 if you want to see more you click more.

This is ambitious, but maybe a search, and people could see when we played a certain song last. Maybe put some kind of styling if the song was played today in the last 8 hours.


### Now playing

Maybe show what is now playing somewhere on the site

### Edit Permissions
The site is going to use firebase realtime db, so we could probably make a little db of users, and if the user has a certain JQBX token / Spotify token they will have the ability to edit the page.

<center>

![Sketch of the puppy lounge site layout](https://i.gyazo.com/2da34de42b7fbdb1f2f56f858a773125.png)

</center>

### Finally

In the bottom somewhere we could say, don't like our music, visit one of our friends in some of the other rooms, and we could feature the other rooms like Brainwaves, MF Room, The Jungle, Darkwave Room, Bacon and etc.