define(
    'model', [],

    function() {
        function Model(data) {

            var self = this;

            self.data = data;

            self.addItem = function(item) {
                if (item.length === 0) {
                    return;
                }
                self.data.push(item);

                return self.data;
            };

            self.removeItem = function(item) {
                var index = self.data.indexOf(item);

                if (index === -1) {
                    return;
                }

                self.data.splice(index, 1);

                return self.data;
            };

            self.saveItem = function(index, item) {
                var indexArr = self.data.indexOf(index);

                self.data[indexArr] = item;

                console.log(self.data);

                return self.data;
            };

        }
        var firstToDoList = ['learn javascript', 'learn html', 'learn react'];
        var model = new Model(firstToDoList);
        return model;
    }
);
