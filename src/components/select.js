define(['node_modules/kpc/src/views/components/select'], function(template) {
    return Intact.extend({
        defaults: {
            data: [],
            value: null,
            disabled: false,
            className: '',
            name: undefined,
            width: 200
        },

        template: template,

        _create: function() {
            var self = this;
            var appendTo = self.get('appendTo');
            $(this.element).find('select')
                .selectmenu({
                    width: this.get('width'),
                    appendTo: appendTo === 'self' ? this.element :appendTo,
                    position: self.get('position')
                })
                .on('selectmenuchange', function(e, ui) {
                    self.set('value', ui.item.value, {silent: true});
                    self.trigger('change', e, ui);
                });
        },

        _update: function() {
            $(this.element).find('.c-select').selectmenu('refresh');
        },

        _destroy: function() {
            $(this.element).find('.c-select').selectmenu('destroy');
        }
    });
});
