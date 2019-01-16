import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host:'http://0.0.0.0:5000',
    
    pathForType(){
        return 'clusters';
    }
});
