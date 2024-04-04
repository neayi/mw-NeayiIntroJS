<?php
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

namespace MediaWiki\Extension\NeayiIntroJS;

use MWNamespace;
use MediaWiki\MediaWikiServices;

class NeayiIntroJS
{

	// NeayiIntroJS singleton instance
	private static $instance = null;

	// cache to store User GUIDs and information
	private static $usersInfos = array();

	/**
	 * create a NeayiIntroJS singleton instance
	 *
	 * @return NeayiIntroJS a singleton NeayiIntroJS instance
	 */
	public static function singleton(): self
	{
		if (self::$instance === null) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * initializes the display of comments
	 *
	 * @param OutputPage $output OutputPage object
	 */
	public function init($output)
	{
		$this->initJS($output);
	}


	/**
	 * initialize JavaScript
	 *
	 * @param OutputPage $output the OutputPage object
	 */
	private function initJS($output)
	{
		$params = [];

		$output->addJsConfigVars('NeayiIntroJS', $params);
		$output->addModules(['ext.NeayiIntroJS']);
	}
}
