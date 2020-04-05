/**
 * JavaScript file that controls the Vanilli UI toolkit.
 * @file vanillai.js
 * @author jkelol111 <jkelol111@gmail.com>
 * @copyright jkelol111 et al 2020
 */

/**
 * Creates a VanillaiApp object to control the Vanillai UI elements using the various helper methods available here.
 * @class
 * @classdesc  A VanillaiApp object to control the Vanillai UI elements using the various helper methods available here.
 */

class VanillaiAppCore {
  /**
   * Creates a new VanillaiApp object.
   * @constructor
   * @param {string} appThemeColor 
   */
  constructor (appThemeColor) {
    this.themeColor = appThemeColor ? appThemeColor : "#8500DC"
  }

  overrideElementColor (element, color) {
    element.classList.add('vanillai-transitions-colorfade-in')
    element.style.backgroundColor = color
  }

  resetElementColor (element) {
    element.classList.add('vanillai-transitions-colorfade-in')
    element.style.backgroundColor = this.themeColor
  }

}

class VanillaiListNavigator {
  constructor (listElement) {
    this.listElement = listElement
    naviBoard.setNavigation(this.listElement)
  }

  keydownHandler (key) {
    switch (key) {
      case 'ArrowUp':
        break
      case 'ArrowDown':
        break
    }
  }
}