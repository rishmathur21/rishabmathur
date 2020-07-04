# Personal Website for Rishab Mathur

I have owned the domain rishabmathur dot com for years, but it was a shame that I wasn't using it. I took the opportunity during the quarantine to built a website using React.

Live at: https://rishabmathur.com

## Local Start up
1) Clone Repository 
2) run ```npm start```
3) visit http://localhost:3000

## Tools Used
- React
- HTML/CSS
- JavaScript

## How I Built This
I started by making sure the foundation of the website was strong. I wanted it to be easily extendable and conveniently adjustable. CSS Styling did not come naturally to me, and in the initial prototypes I struggled with getting things centered as I wanted. What I ended up doing was finding a website template respoitory that had a lot of styling in place. The problem was that it was too much styling, I didn't know what most of the code did. So I rebuilt it. 

I started from scratch and rebuilt parts of the template I wanted to emulate to find out how the styles affected the layout. Eventually I became comfortable in centering the components, adjusting their colors and fonts with the minimum amount of code I thought I needed. Addtionally, I used this template to help me figure out the navigation.

One helpful thing I did is reading the data for the site from a JSON. I do it all the time at work, but in all my attempts at a personal website I never thought about that. This makes the website so extendable! If I ever want to add a new article link or timeline entry or even change my name, I don't have to adjust my code!

Now that I had the foundations in place, I had to figure out the actual content I want to show. How do I make this from a derivation of template to a true personal site? 

First, I included a section for linking any articles. I found a react library that makes horizontal scrolling menus and implemented that to have a list of many links without overflowing the page. 
Next, I made an about section. Whenever I have envisioned or attempted my website, I always thought I'd include some kind of timeline to chronicle siginificant events in my life. I think it is an effective way to engage with the user. After much exploring about the various libraries available and how I would position it on the site, I found a react-vertical-timeline library that I integrated into the site. 

Finally after I finished a basic version of the site, I got to deploying it. I set up github pages and tried to link the DNS entries with my custom domain. There was some trouble, especially with the application trying to read its CSS files from the %PUBLIC_URL%. Finally, I got something up there.

## Next Steps
- [x] Get HTTPS to work. During the deploy, Enforcing HTTPS did not quite work out.
- [ ]  Strengthen the mobile layout. While I started to handle media queries, it still looks a little janky on the phone. Especially the horizontal scrolling menus.
- [ ]  Add a 'contact' subsection or footer.
- [ ]  Highlight which subsection you are in from the nav bar. 
- [ ]  Get designed logos (a bicycle, a tabla, a plate, an airplane...) and display those on the home page. (Possible with some animation)
- [ ]  Add more content
