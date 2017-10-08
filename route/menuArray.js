define(['../app'], function(app) {

    class Module {
        constructor(moduleId, moduleName, url, desc = "") {
            this.moduleId = moduleId;
            this.moduleName = moduleName;
            this.url = url;
            this.desc = desc;
            this.children = [];
        }
    }

    let list = [];

    list.push();

    app.constant('menu', {
        list: [1, 2, 3, 4]
    })
})