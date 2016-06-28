$(document).ready(function(){
	$(document).foundation();
	/* sections */
	$('#products .squared').click(
		function() 
		{	
			event.preventDefault(); // prevents the page to refresh
			$('#products p').hide(); // hide the section already displayed
			$('p', this).toggle(); // show the clicked section
		}
	);
});
