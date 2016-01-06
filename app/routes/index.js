import Ember from 'ember';

export default Ember.Route.extend({
    // Main Entry point for getting the years
    model () {
        var ph = Phish.Phishin();
        return ph.getYears();
    }
});
