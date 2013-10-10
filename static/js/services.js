function WinesService($resource) {
    var url, defaultParams, actions;
    url = 'http://localhost\\:3000/wine/:id';
    defaultParams = {};
    actions = {
        query: { method: 'GET', isArray: false }
    };
    return $resource(url, defaultParams, actions);
};

