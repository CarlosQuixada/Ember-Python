import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('cluster');
        //console.log("IAI CARAI")
        //let text = this.store.createRecord({text:'teste'})
        //text.save()
        //return text
    }
});
