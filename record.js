({
    extendsFrom: 'RecordView',

    initialize: function (options) {
        this._super('initialize', [options]);

        this.model.on('sync', this.updateSummary2, this);
    },

    updateSummary2: function () {
        this.model.set('summary_2_c', 'Hello World');
        if (!this.disposed) {
            this.render();
        }
    }
})