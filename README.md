# The simplest markdown blog

## Problem
This project arose out of a frustration with static site generators (SSGs). SSGs such as Jekyll and Hugo not only require installation of dependencies, but also memorisation of their own unique build-deploy steps. Gatsby, another SSG, also takes up a significant amount of disk space at over 1GB. I wanted a Markdown-based blog that was as close to vanilla frontend (HTML/CSS/JS) as possible for high customisability, low disk space use, and without need to memorise how to install dependencies and the build-deploy process.

## Solution
This is a simple markdown-based blog that involves no installation of dependencies, no build step, and is extremely lightweight. Frontend helper packages are located in the `lib` folder and are used sparingly. It does not require tedious memorisation of backend install-build-deploy steps. 

It also comes with in-built pagination, written in just over 50 lines of Javascript. 

## Usage
These are the three steps to add a post to the blog.
1. Create a `.js` file in the `posts` directory, containing the Markdown text as an exported Javascript const string. [Copy `sample-post.js`]

2. Create a corresponding `.html` file in the `posts` directory. After copying `sample-post.html`, change just one line of Javascript to refer to the newly created `.js` file. 

3. Add one line of Javscript to the bottom `<script>` section in `index.html` to provide the newly created post title, date and URL. 

## Customisation
You can update the number of posts per page in the `<script>` section in `index.html`. 

## Testing
You will need a live HTTP server because web browsers enforce a CORS policy that blocks importing of Javascript modules when you open the `index.html` file locally. Thankfully, if you already have Python installed, you can easily create a simple HTTP server. 

Just run `python -m SimpleHTTPServer`.

Then visit `https://localhost:8000`. 