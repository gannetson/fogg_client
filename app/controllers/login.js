import Ember from 'ember';
import ENV from '../config/environment';

/* global FB */
export default Ember.Controller.extend({
    actions: {
        logout: function() {
            this.get('session').invalidate();
        },
        loginFacebook: function () {
            var that = this;
            FB.login(function (response) {
                if (response.authResponse) {
                    that.get('session').authenticate('authenticator:convert-token', {
                        bearer: 'facebook',
                        data: response.authResponse
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            }, {scope: ENV.facebook.login_scope});
        }
    }
});
