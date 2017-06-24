'use strict';

//Funkcja document.ready()- wersja skrócona
// find -znajduje nam elementy w wybranej kolekcji

$(function(){
	
	
	//Wybieranie elementu z kolekcji za pomocą metody eq()- to samo co index w js
	$("body").find("p").eq(1).css({"color":"green"})

	
	//Pętla each dodająca do paragrafów klasę z kolejnym numerem
	$("p").each(function(index){
		
		$(this).addClass("paragraf-" + index);
		
		console.log(jQuery(this) );
	});



});