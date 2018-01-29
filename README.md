# Note Index
A repository of notes organised by theme. Searchable, linked, comprehensive.

## Why?
Because static files are handy if you're hosting on Github Pages, or even just running a HTML document from your local computer. It's not possible to use server-side programming in that scenario, so most CMS and wiki options are out the window. There are static HTML generators like Jekyll, but that doesn't really give you a simple out of the box solution unless you want to install Ruby and get your head around yet another piece of software. Not that Ruby isn't great, but I want to go one step simpler.

## How?
Well basically you should just be able to follow some really basic HTML principles and get good results. That's the idea, anyway.

Add new item:

```html
<div class="item" id="TITLE"> <!--ADD ADDITIONAL CLASS NAMES AS TAGS HERE -->
  <div class="item-header">TITLE</div>
  <div class="item-body-summary" id="TITLE-summary">
    <p>SUMMARY CONTENT <span class="preview-link" onclick="preview('ID OF RELATED ITEM')">LINK TEXT</span></p>
  </div>
  <div class="item-body-full" id="TITLE-body">
    <p>BODY CONTENT</p>
  </div>
  <button class="open-full" onclick="toggle('TITLE-body')">expand / collapse</button>
</div>
```

The sidebar provides grouping under SUBJECTS - which are high level, and AREAS - which are lower level. You might have many areas within a subject - for instance:

Subject: Music
  Area: Folk
  Area: Metal
  Area: Pop

Functionally, subjects and areas are identical - the difference is purely cosmetic and is based on using the <h5> tag for subjects and the <h6> tag for areas.

Edit the sidebar:

```html
<div class="sidebar">
  <h4>Search for...</h4>
  <input id="searchbox" type="text" onkeyup="search()">
  <h4>--------------------</h4>
  <h4 class="selector" style="color: #921515" onclick="reset()">Reset page</h4>
  <h4>--------------------</h4>
  <h4>Filter by...</h4>
  <h5 class="selector" id="selector-SUBJECT1" onclick="select('SUBJECT1','selector-SUBJECT1')">SUBJECT1</h5>
  <h6 class="selector" id="selector-AREA1" onclick="select('AREA1','selector-AREA1')">AREA1</h6>
  <h5 class="selector" id="selector-SUBJECT2" onclick="select('SUBJECT2','selector-SUBJECT2')">SUBJECT2</h5>
  <h6 class="selector" id="selector-AREA2" onclick="select('AREA2','selector-AREA2')">AREA2</h6>
</div>
```

