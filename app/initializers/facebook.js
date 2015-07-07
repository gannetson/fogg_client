import ENV from '../config/environment';
import ConvertTokenAuthenticator from '../authenticators/convert-token-authenticator'

export function initialize(container, application) {

    application.register('authenticator:convert-token', ConvertTokenAuthenticator);

    application.deferReadiness();

    window.fbAsyncInit = function () {
        FB.init({
            appId: ENV.facebook.app_id,
            xfbml: true,
            version: 'v2.3'
        });
        application.advanceReadiness();

    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

/* global FB */
export default {
    name: 'facebook',
    initialize: initialize
};
