import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

import oauth2 from 'simple-auth-oauth2/authenticators/oauth2'
import ENV from '../config/environment';

export default oauth2.extend({
    serverTokenEndpoint: '/auth/convert-token',

    init: function () {
        this.serverTokenEndpoint = ENV['simple-auth-convert-token'] ? ENV['simple-auth-convert-token'].url : '/auth/convert-token';
    },

    authenticate: function (options) {
        var that = this;
        return new Ember.RSVP.Promise(function (resolve, reject) {
            var data = {bearer: options.bearer};
            switch (options.bearer) {
                case 'facebook':
                    data.access_token = options.data.accessToken;
                    break;
            }
            that.makeRequest(that.serverTokenEndpoint, data).then(function (response) {
                Ember.run(function () {
                    var expiresAt = that.absolutizeExpirationTime(response.expires_in);
                    that.scheduleAccessTokenRefresh(response.expires_in, expiresAt, response.refresh_token);
                    if (!Ember.isEmpty(expiresAt)) {
                        response = Ember.merge(response, {expires_at: expiresAt});
                    }
                    resolve(response);
                });
            }, function (xhr, status, error) {
                Ember.run(function () {
                    reject(xhr.responseJSON || xhr.responseText);
                });
            });
        });
    },
    makeRequest: function (url, data) {
        return Ember.$.ajax({
            url: url,
            type: 'GET',
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", 'Bearer ' + data.bearer + ' ' + data.access_token);
            }
        });
    }
});
