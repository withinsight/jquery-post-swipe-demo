jquery-post-swipe-demo
======================

Swipe to reach the next or previous post in a list of stories.

When building content-driven applications for touch devices, a common pattern is a list of articles, with one single article open. Swiping to reach either the next or previous post has also become a common pattern. 

In this demo, I use jQuery, jQuery Mobile, CSS3 transitions and transforms, and a little jQuery queuing magic. The CSS3 property "translate3d" is used to offload animation to mobile device hardware, resulting in transitions that are not only smoother than jQuery's .animate() function, but perform on par with true native mobile operating system animations. 

Using a single div, the article is animated either to the left or right (depending on the swipe direction), the content is updated while the div is off-screen, it is then transported to the opposite edge of the screen, and finally animated back in, all using jQuery's .queue() for timing.

This foundation could easily be further developed to have dynamic content, scrolling, or respond to device widths.
