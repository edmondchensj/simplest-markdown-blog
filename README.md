# The simplest markdown blog

## Background
The emergence of static site generators has helped developers do away with databases hosting (like in a Content Management System such as WordPress) and write blog posts in templates, using an easy-to-use language like Markdown. 

## Problem
This project arose out of a frustration with static site generators (SSGs). SSGs such as Jekyll and Hugo require developers to be familiar with their unique ecosystem, including backend runtime and handling of dependencies. Gatsby, another SSG, also takes up a significant amount of disk space due to its dependency on ReactJS. 

I wanted a Markdown-based blog that was highly customisable and lightweight, and does not require me to memorise a complicated installation-build-deploy process.

## Solution
I created a simple markdown-based blog written in as close to vanilla HTML/CSS/Javascript as possible. It involves three external libraries that I downloaded and packaged in a single repository (Bootstrap for CSS, JQuery for reducing Javascript code, and Showdown for converting Markdown to HTML).

The total repository size is less than 1MB. 

Since the external libraries were packaged within the repository, there is no installation of dependencies. There is also no build step. 

I also added an in-built pagination feature, written in just over 50 lines of Javascript. 

## Usage
These are the three steps to add a post to the blog.
1. Create a `.js` file in the `posts` directory, containing the Markdown text as an exported Javascript const string. [Refer to `sample-post.js`]

2. Create a corresponding `.html` file in the `posts` directory. After copying `sample-post.html`, change just one line of Javascript to refer to the newly created `.js` file. 

3. Add one line of Javscript to the bottom `<script>` section in `index.html` to provide the newly created post title, date and URL. 

## Customisation
You can update the number of posts per page in the `<script>` section in `index.html`. 

## Testing
You will need a live HTTP server because web browsers enforce a CORS policy that blocks Javascript ES6 "import" statements when you open the `index.html` file locally. Thankfully, if you already have Python installed, you can easily create a simple HTTP server. 

Just run `python -m SimpleHTTPServer`.

Then visit `http://localhost:8000`. **NOTE**: Use http, not https, as SimpleHTTPServer may not work with SSL.

## Deployment
Simply push the source code to Netlify or any static hosting service. 
