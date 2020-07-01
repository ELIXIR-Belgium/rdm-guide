let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

if (systemInitiatedDark.matches) {
	document.getElementById("theme-toggle").innerHTML = '<i id="tg-sb-icon" class="fa fa-toggle-off"></i>  Light Mode';
} else {
	document.getElementById("theme-toggle").innerHTML = '<i id="tg-sb-icon" class="fa fa-toggle-on"></i>  Dark Mode';
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	document.getElementById("theme-toggle").innerHTML = '<i id="tg-sb-icon" class="fa fa-toggle-off"></i>  Light Mode';
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").innerHTML = '<i id="tg-sb-icon" class="fa fa-toggle-on"></i>  Dark Mode';
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = '<i id="tg-sb-icon" class="fa fa-toggle-on"></i>  Dark Mode';
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = '<i id="tg-sb-icon" class="fa fa-toggle-off"></i>  Light Mode';
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = '<i id="tg-sb-icon" class="fa fa-toggle-on"></i>  Dark Mode';
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = '<i id="tg-sb-icon" class="fa fa-toggle-off"></i>  Light Mode';
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").innerHTML = '<i id="tg-sb-icon" class="fa fa-toggle-off"></i>  Light Mode';
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	document.getElementById("theme-toggle").innerHTML = '<i id="tg-sb-icon" class="fa fa-toggle-on"></i>  Dark Mode';
}