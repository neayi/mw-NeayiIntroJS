/*
 * Copyright (c) 2016 The MITRE Corporation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

var neayiintrojs_controller = (function () {
	'use strict';

	return {


		initialize: function () {

			if (!$('#side-map').is(":visible"))
			{
				$( 'a.neayi-tour' ).parent().remove();
				return;
			}

			var triplePerformanceTour = introJs();

			triplePerformanceTour.setOptions({
				
				steps: [{
				  title: 'Bienvenue',
				  intro: 'Bienvenu sur Triple Performance! 👋'
				},
				{
				  element: document.querySelector('.interaction-bloc .interaction-buttons'),
				  title: 'Interagir avec la page',
				  intro: 'Voici les boutons qui permettent d\'interagir avec la page'
				},
				{
					element: document.querySelector('.interaction-bloc .neayi-interaction-suivre'),
					title: 'Interagir avec la page',
					intro: 'Cliquez sur "suivre" pour rester informé des discussions sur cette page, ou bien quand celle-ci évolue',
					position: 'left'
				},
				{
					element: document.querySelector('.interaction-bloc .neayi-interaction-doneit'),
					title: 'Interagir avec la page',
					intro: 'Cliquez sur "Je le fais" pour indiquer aux autres que vous faites cette technique chez vous (ça marche aussi pour les productions, ou bien si vous avez affronté un type de ravageur particulier) 💪',
					position: 'left'
				},
				{
					element: document.querySelector('.interaction-bloc .neayi-interaction-suivre-label'),
					title: 'Interagir avec la page',
					intro: 'Cliquez là ou dans la carte pour accéder à la communauté de ceux qui s\'intéressent à cette page...'
				},
				{
					title: 'Une communauté pour chaque page !',
					element: document.querySelector('#side-map'),
					intro: 'Entrez en contact avec d\'autres agris, conseillers, experts, même s\'ils ne sont pas dans le même département ou sur les mêmes productions...!'
				},
				{
					element: document.querySelector('#neayi-add-button'),
					title: 'Créer du contenu',
					intro: 'Cette plateforme est la votre ! Vous souhaitez partager une manière particulière de faire ? N\'hésitez pas !! ❤'
				},				
				{
				  title: 'C\'est ouvert à tous !',
				  intro: 'La plateforme est ouverte à tous ! On est ici pour parler technique, dans le respect des trajectoires de chacun ! Pas de bashing ici !<br><br><img style="width:100%" src="https://i.giphy.com/media/KP5J5Ss9moWaI/giphy.webp" onerror="this.onerror=null;this.src=\'https://i.giphy.com/KP5J5Ss9moWaI.gif\';" alt="">'
				}]
			  })
			.oncomplete(function() {
				localStorage.setItem('TriplePerformanceTour', 'done');
			})
			.onexit(function() {
				localStorage.setItem('TriplePerformanceTour', 'done');
			});


			$( 'a.neayi-tour' ).on('click', function (e) {
				e.preventDefault();
				triplePerformanceTour.start();
			});

			var tourDone = (localStorage.getItem('TriplePerformanceTour') === 'done');

			if (tourDone)
				return;

			triplePerformanceTour.start();
		}


	}; // return line 26
}());

window.NeayiIntroJSController = neayiintrojs_controller;

(function () {
	$(document)
		.ready(function () {
			if (mw.config.exists('NeayiIntroJS')) {
				window.NeayiIntroJSController.initialize();
			}
		});
}());

