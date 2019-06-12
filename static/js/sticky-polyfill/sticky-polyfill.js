/**
 * Credits: https://modernizr.com/
 */
//TODO: Include modernizr as npm dependency
!function(e,n,s){function t(e,n){return typeof e===n}function o(){var e,n,s,o,a,i,r;for(var c in l)if(l.hasOwnProperty(c)){if(e=[],n=l[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(o=t(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=o:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),f.push((o?"":"no-")+r.join("-"))}}function a(e){var n=c.className,s=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var t=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");n=n.replace(t,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n+=" "+s+e.join(" "+s),u?c.className.baseVal=n:c.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var l=[],r={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){l.push({name:e,fn:n,options:s})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var f=[],c=n.documentElement,u="svg"===c.nodeName.toLowerCase(),p=r._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];r._prefixes=p,Modernizr.addTest("csspositionsticky",function(){var e="position:",n="sticky",s=i("a"),t=s.style;return t.cssText=e+p.join(n+";"+e).slice(0,-e.length),-1!==t.position.indexOf(n)}),o(),a(f),delete r.addTest,delete r.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._q[m]();e.Modernizr=Modernizr}(window,document);

/**
 * Referenz auf das HTML Objekt um die globale scroll Distanz zu messen
 * @type {ElementTagNameMap[string] | null}
 */
var html = document.querySelector('html');
/**
 * Funktion zum hinzufügen eines sticky Elements
 * @param queryselector
 * @returns {*}
 */

window.sticky = function (queryselector) {
  console.log('polyfill');
  //Feature Detection
  var supported = false || Modernizr.csspositionsticky;
  console.log(supported);
  
  if (queryselector === undefined) {
    console.warn('No selector provided');
    return supported;
  }
  
  if (!supported) {
    /**
     * Referenz auf das sticky Element
     * @type {ElementTagNameMap[keyof ElementTagNameMap] | null}
     */
    var element = document.querySelector(queryselector);
    
    /**
     * Initiale Person des sticky Elements speichern
     * @type {number}
     */
    var initialpos = element.getBoundingClientRect().top;
    
    /**
     * Initialen Style speichern
     */
    var initialStyle = {
      position: element.style.position,
      width: element.style.width,
      top: element.style.top,
      left: element.style.left
    };
    
    /**
     * Style für Fixed
     */
    var fixedStyle = {
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0
    };
    
    window.addEventListener('scroll', function () {
      /**
       * Falls die Position des sticky Elements kleiner gleich 0 ist - also gerade noch oder nicht mehr im viewport ist - das position Attribut auf fixed setzen
       */
      if (element.getBoundingClientRect().top <= 0) {
        Object.assign(element.style, fixedStyle);
      }
      
      /**
       * Zurück auf normale position
       */
      if (-html.getBoundingClientRect().top <= initialpos) {
        Object.assign(element.style, initialStyle);
      }
    });
  }
  /**
   * Rückgabe ob feature supported ist
   */
  return supported;
};
