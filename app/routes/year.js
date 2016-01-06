import Ember from 'ember';

export default Ember.Route.extend({
    model (params) {
        var ph = Phish.Phishin();
        return ph.getYears(params.year_id);
    }
});
