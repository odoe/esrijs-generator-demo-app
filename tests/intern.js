define({
    proxyPort: 9000,
    proxyUrl: 'http://localhost:9000/',
    capabilities: { 'selenium-version': '2.46.0' },
    webdriver: {
        host: 'localhost',
        port: 4444
    },
    environments: [{ browserName: 'chrome' }],
    maxConcurrency: 3,
    tunnel: 'NullTunnel',
    loaders: {
        'host-node': 'dojo/dojo',
        'host-browser': 'node_modules/dojo/dojo.js'
    },
    loaderOptions: {
        async: true,
        locale: 'en-us',
        packages: [
            {
                name: 'app',
                location: 'dist/app'
            },
            {
                name: 'dojo',
                location: 'dist/dojo'
            },
            {
                name: 'dijit',
                location: 'dist/dijit'
            },
            {
                name: 'dojox',
                location: 'dist/dojox'
            },
            {
                name: 'dgrid',
                location: 'dist/dgrid'
            },
            {
                name: 'dstore',
                location: 'dist/dstore'
            },
            {
                name: 'dmodel',
                location: 'dist/dmodel'
            },
            {
                name: 'xstyle',
                location: 'dist/xstyle'
            },
            {
                name: 'put-selector',
                location: 'dist/put-selector'
            },
            {
                name: 'esri',
                location: 'dist/esri'
            },
            {
                name: 'sinon',
                location: 'node_modules/sinon/lib',
                main: 'sinon'
            },
            {
                name: 'sinon-chai',
                location: 'node_modules/sinon-chai/lib',
                main: 'sinon-chai'
            }
        ]
    },
    suites: [
        'tests/unit/components-map-mapview',
        'tests/unit/components-map-webmapview',
        'tests/unit/components-legend-view',
        'tests/unit/helpers-mapgenerator',
        'tests/unit/helpers-zoom',
        'tests/unit/components-search-view'
    ],
    functionalSuites: [],
    excludeInstrumentation: /^(?:tests|node_modules)\//
});
