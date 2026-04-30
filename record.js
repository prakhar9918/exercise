({
    extendsFrom: 'RecordView',

    initialize: function (options) {
        this._super('initialize', [options]);

        this.model.on('sync', this.updateSummary2, this);
    },

    updateSummary2: function () {
    //     this.model.set('summary_2_c', 'Hello World');
    //     if (!this.disposed) {
    //       this.render();
    //    }   
    
    var url = app.api.buildURL('demo_announcement/data');

    app.api.call('GET', url, null, {
    success: (res) => {
        console.log('API Response : ',res);
        this.model.set('summary_2_c', res.data.first_name);
         if (!this.disposed) {
          this.render();
       }  
    },
    error: (err) => {
        console.error(err);
    }
});
       
   }
})