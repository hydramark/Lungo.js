/** 
 * Boot for a new LungoJS Application instance
 * 
 * @namespace LUNGO
 * @class App
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 * @author Guillermo Pascual <pasku@tapquo.com> || @pasku1
 */

LUNGO.Boot = (function(lng, undefined) {

    return function() {
        lng.Environment.start();

        lng.Boot.Events.start();
        lng.Boot.Data.start();
        lng.Boot.Section.start();
        lng.Boot.Article.start();
    };

})(LUNGO);