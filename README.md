# Note Index
A repository of notes organised by theme. Searchable, linked, comprehensive.

## Why?
Because static files are handy if you're hosting on Github Pages, or even just running a HTML document from your local computer. It's not possible to use server-side programming in that scenario, so most CMS and wiki options are out the window. There are static HTML generators like Jekyll, but that doesn't really give you a simple out of the box solution unless you want to install Ruby and get your head around yet another piece of software. Not that Ruby isn't great, but I want to go one step simpler.

## How?
Well basically you should just be able to follow some really basic HTML principles and get good results. That's the idea, anyway.

Add new item:

```html
    <div class="item">
        <div class="item-header">NAME OF ENTRY</div>
        <div class="item-body-summary">
            <p>BRIEF SUMMARY HERE</p>
            <div class="item-body-full" id="">
                <p>FULL ENTRY GOES HERE</p>
            </div>
            <button class="open-full" onclick="toggle('')">expand / collapse</button>
        </div>
    </div>
```

Basic principles as follow:
- Main container will include search options in navbar on left of article
- Main article will contain all content in separate divs
- Each entry will have classes that act as tags for the purpose of filtering the displayed content.
- By default only a summary of each entry will be shown, but you can click to expand and read the full entry
- Any terms of interest in the entry will be linked to the main entry on that subject - clicking will display a custom div that is fixed in position (so will always open in the same place on screen) - this will contain a brief summary / description with the option to click and go to the full entry
- Major connected items will have dedicated buttons to highlight their importance

Plan to host on GitHub pages, so will only use static files (no PHP!) this means that search and filtering functions will be Javascript-based (or JQuery if necessary).

There's a link to how to implement a search function here: https://stackoverflow.com/questions/14031369/how-to-implement-search-function-using-javascript-or-jquery
