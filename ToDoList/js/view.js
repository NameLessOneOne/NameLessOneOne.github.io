define(
    'view', ['model', 'jquery', 'tmpl', ],
    function(model) {
        function View(model) {
            var self = this;

            function init() {
                var wrapper = tmpl($('#wrapper-template').html());

                $('body').append(wrapper);
                self.elements = {
                    input: $('.item-value'),
                    addBtn: $('.item-add'),
                    listContainer: $('.item-list')
                };
                self.renderList(model.data);
            };

            self.renderList = function(data) {
                var list = tmpl($('#list-template').html(), {
                    data: data
                });
                self.elements.listContainer.html(list);
            };

            self.addEditButtons = function(item, value) {
                var editInput = '<input type="text" class="text-edit" value="' + value + '">'

                $(item).parent('li').append(editInput, '<button class="btn-edit-save">Save</button>', '<button class="btn-edit-cancel">Cancel</button>');
                $(item).hide();
            }

            init();
        }

        var view = new View(model);
        return view;
    }
);
