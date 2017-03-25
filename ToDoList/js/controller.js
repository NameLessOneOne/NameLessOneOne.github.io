define(
    'controller', ['model', 'view', 'jquery'],
    function(model, view) {
        function Controller(model, view) {

            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('click', '.btn-edit', editItem);
            view.elements.listContainer.on('click', '.btn-edit-save', editSave);
            view.elements.listContainer.on('click', '.btn-edit-cancel', editCancel);


            function addItem() {
                var newItem = view.elements.input.val();

                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function removeItem(event) {
                var item = $(this).attr('data-value');

                model.removeItem(item);
                view.renderList(model.data);
            }

            function editItem() {
                var item = $(this);
                var value = $(this).attr('data-value');
                $('button').attr('disabled', 'disabled');

                view.addEditButtons(item, value);
            }

            function editSave() {
                var item = $(this).siblings('input').val();
                var index = $(this).siblings('.btn-edit').attr('data-value');
                $('button').removeAttr('disabled');


                model.saveItem(index, item);
                view.renderList(model.data);
            }

            function editCancel() {
                $('button').removeAttr('disabled');

                view.renderList(model.data);

            }

        }

        var controller = new Controller(model, view);
        return controller;

    }


);
