  function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block') {
      e.style.display = 'none';
    }
      else {
        e.style.display = 'block';
    }
  }  

  function select(cl,id) {
    var e = document.getElementsByClassName(cl);
	var a = document.getElementsByClassName('item');
	var c = document.getElementsByClassName('selector');
	
	// First, need to set all elements with class 'item' to hidden so that non-relevant results are ommitted
	for (var z = 0; z < a.length; z++) {
		a[z].style.display = 'none';
	}
	
	// Loops through the instances of the class that is named cl, which will be the topic filtered for
	// Sets those elements with a matching class to display
	for (var i = 0; i < e.length; i++) {
		e[i].style.display = 'block';
	}
	
	// Sets all selectors to deactivated before moving on to activate the appropriate selector usng ID
	for (var y = 0; y < c.length; y++) {
		c[y].classList.remove('active');
	}
	
	// Sets the topic to active, highlights it
	document.getElementById(id).classList.add('active');
  }

  
  function reset() {
	var a = document.getElementsByClassName('item');
	var b = document.getElementsByClassName('item-body-full');
	var c = document.getElementsByClassName('selector');
	
	for (var z = 0; z < a.length; z++) {
		a[z].style.display = 'block';
	}
	
	for (var i = 0; i < b.length; i++) {
		b[i].style.display = 'none';
	}

	for (var y = 0; y < c.length; y++) {
		c[y].classList.remove('active');
	}
  }

  function search() {
    var list = document.getElementsByClassName('item-header');
    var item = document.getElementsByClassName('item');
    var input = document.getElementById('searchbox');
    var filter = input.value.toUpperCase();
    var title;

  for (i = 0; i < list.length; i++) {
      title = list[i].innerHTML;
      if (title) {
        if (title.toUpperCase().indexOf(filter) > -1) {
          item[i].style.display = "block";
        } else {
          item[i].style.display = "none";
        }
        }
      }
  }

  function preview(id) {
 	var x = document.getElementById(id+'-summary');

  	document.getElementById('previewbox').style.display = 'block';
  	document.getElementById('preview-body').innerHTML = x.innerHTML;
  	document.getElementById('preview-title').innerHTML = id;
  	document.getElementById('preview-options').innerHTML = '<a onclick="jump(\''+id+'\')">Full Article</a>'

  }

  function jump(id) {
  	var a = document.getElementsByClassName('item');
  	var b = document.getElementById(id);
  	var c = document.getElementById(id+'-body');
  	var d = document.getElementsByClassName('selector');
	
	for (var z = 0; z < a.length; z++) {
		a[z].style.display = 'none';
	}

	for (var y = 0; y < d.length; y++) {
		d[y].classList.remove('active');
	}	

 	document.getElementById('previewbox').style.display = 'none';
	b.style.display = 'block';
	c.style.display = 'block';
  }

  function closePreview() {
 	document.getElementById('previewbox').style.display = 'none';
  }