({
    extendsFrom: 'RecordView',

    initialize: function (options) {
        this._super('initialize', [options]);

        this.model.on('sync', this.updateSummary2, this);
    },

    updateSummary2: function () {
        // this.model.set('summary_2_c', 'Hello World');
        // if (!this.disposed) {
        //     this.render();
        // }
        let url  =  'https://uselessfacts.jsph.pl/api/v2/facts/random';
        var self = this;
        app.api.call('GET', url , null, {
            success: function (data) {
                console.log('Data fetched successfully:', data.text);
                self.model.set('summary_2_c', data.text);
                if (!self.disposed) {
                    self.render();
                }
            },
            error: function (error) {
                console.error('Error fetching data:', error);
            }
        });
    }
})