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

			// If we are not on a proper article, abort
			var pageId = mw.config.get('wgArticleId');
			if (pageId == 0)
				return;

			// If the side-map is not shown (on mobiles) or if the map is not
			// shown (special pages, home, ...), abort the tour:
			if (!$('.interaction-bloc').is(":visible")) {
				$('a.neayi-tour').parent().remove();
				return;
			}

			var triplePerformanceTour = introJs();

			triplePerformanceTour.setOptions({

				scrollToElement: false,
				nextLabel: mw.msg("introjs-next-label"),
				prevLabel: mw.msg("introjs-prev-label"),
				doneLabel: mw.msg("introjs-done-label"),
				hidePrev: true,
				
				steps: [{
					title: mw.msg("introjs-step1-title"), //"Bienvenue",
					intro: mw.msg("introjs-step1-intro") //"Bienvenue sur Triple Performance! 👋"
				},
				{
					element: document.querySelector(".interaction-bloc .interaction-buttons"),
					title: mw.msg("introjs-step2-title"), //"Interagir avec la page",
					intro: mw.msg("introjs-step2-intro") //"Voici les boutons qui permettent d'interagir avec la page"
				},
				{
					element: document.querySelector(".interaction-bloc .neayi-interaction-suivre"),
					title: mw.msg("introjs-step3-title"), //"Interagir avec la page",
					intro: mw.msg("introjs-step3-intro"), //'Cliquez sur "suivre" pour rester informé des discussions sur cette page, ou bien quand celle-ci évolue',
					position: "left"
				},
				{
					element: document.querySelector(".interaction-bloc .interaction-discussions"),
					title: mw.msg("introjs-step4-title"), //"Interagir avec la page",
					intro: mw.msg("introjs-step4-intro"), //"N'hésitez pas à poser des questions sur le sujet, seuls ceux qui suivent la page seront notifiés",
					position: "left"
				},
				{
					element: document.querySelector("#neayi-add-button"),
					title: mw.msg("introjs-step5-title"), //"Créer du contenu",
					intro: mw.msg("introjs-step5-intro") //"Cette plateforme est la vôtre ! Vous souhaitez partager une manière particulière de faire ? N'hésitez pas !!"
						+ '<span class="text-primary">❤</span>'
				},
				{
					title: mw.msg("introjs-step6-title"), //"C'est ouvert à tous !",
					intro: mw.msg("introjs-step6-intro") //"La plateforme est ouverte à tous ! On est ici pour parler technique, dans le respect des trajectoires de chacun ! Pas de bashing ici !" +
						+ '<br><br><img style="width:100%" src="https://i.giphy.com/media/KP5J5Ss9moWaI/giphy.webp" alt="">'
				}]
			  })
			.oncomplete(function () {
					localStorage.setItem('TriplePerformanceTour', 'done');
				})
			.onexit(function () {
				localStorage.setItem('TriplePerformanceTour', 'done');
			});


		$( 'a.neayi-tour').on('click', function (e) {
			e.preventDefault();
			triplePerformanceTour.start();
		});

		var tourDone = (localStorage.getItem('TriplePerformanceTour') === 'done');

		if(tourDone)
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

