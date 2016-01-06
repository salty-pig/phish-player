import Ember from 'ember';

// Hacky. TODO: make better
function parseCurrentYear (yearAsString) {
    return yearAsString.substr(0,4);
}

export default Ember.Route.extend({
    model (params) {
        var ph = Phish.Phishin();
        return ph.getShows(params.show_id);
    },
    setupController (controller, model) {
        controller.set('model', model);
        let currentYear = parseCurrentYear(model.data.date);
        this.controllerFor('application').set('currentYear', currentYear);
        this.controllerFor('application').set('currentShow', model.data);
    }
});
