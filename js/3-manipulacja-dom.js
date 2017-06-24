'use strict';


//Funkcja document.ready()-wersja pełna
jQuery(document ).ready(function(){
	
	//Pobieranie tekstu
	var tekstParagrafuPierwszego = $("#paragraf").text();
	console.log(tekstParagrafuPierwszego);
	
	//Dodawanie tekstu
	$(".paragraf") .text(tekstParagrafuPierwszego);
	
	//Dodawanie HTML
	$(".paragrafnext").html("To jest <strong>paragraf<strong/> z danymi <br> HTML");
	
	//Dodawanie treści na końcu selektora
	$(".paragrafnext").append("Treść na końcu selektora");
	
	//Dodawania treści za selektrem
	$(".paragrafnext").after("Treść za selektorem");
	
	//Usuwanie elementu i jego zawartości
	$("strong").remove;
	
	//Usuwanie TYLKO jego zawartości
	$(".paragraf").empty();
	
	//Dodawanie CSS
	$(".paragrafnext").css({'font-size':"3em", 'color':"red"});
	
	//Dodawanie klasy
	$("h1").addClass("blue");
	
	//Dodawanie Atrybutu
	$("h1").attr("imie", "Michał")
});