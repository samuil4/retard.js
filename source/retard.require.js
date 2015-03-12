/***
 * @date: 12.03.2015
 * @author: Samuil
 * Require JS Implementation
 * Implement on client side
 * Added support for dynamic CLient name definition and post initialization
 * Strongly advised to be ingrated in WHMCS
 */
define(function () {

    function RetardClient () {
        //Post initalization
        //this.init('Your client's name);
    }

    RetardClient.prototype.init = function(clientName) {
        /***
         * Tell the client what you think of him/her
         */
        document.body.innerHTML = 'You ' + clientName + ' are a fucking retard!';
    };

    return new RetardClient();
});