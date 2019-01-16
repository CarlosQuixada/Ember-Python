import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store,primaryModeClass,payload,id,requestType){
        payload = {clusters:payload}
        console.log(payload);
        return this._super(store,primaryModeClass,payload,id,requestType)
    }
});
