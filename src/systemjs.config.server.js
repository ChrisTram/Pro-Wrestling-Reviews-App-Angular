/**
 * Version de SystemJS dédié à la production.
 * Les paquets sont chargés depuis le web.
 */
(function (global) {
    System.config({
      paths: {
        'npm:': 'https://unpkg.com/' // Le nouvel alias
      },
  
      map: {
        app: 'dist/app', //app when online
        '@angular/core': 'npm:@angular/core@6.0.3/bundles/core.umd.min.js',
        '@angular/common': 'npm:@angular/common@6.0.3/bundles/common.umd.min.js',
        '@angular/compiler': 'npm:@angular/compiler@6.0.3/bundles/compiler.umd.min.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser@6.0.3/bundles/platform-browser.umd.min.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@6.0.3/bundles/platform-browser-dynamic.umd.min.js',
        '@angular/http': 'npm:@angular/http@6.0.3/bundles/http.umd.min.js',
        '@angular/common/http': 'npm:@angular/common@6.0.3/bundles/common-http.umd.min.js',
        '@angular/router': 'npm:@angular/router@6.0.3/bundles/router.umd.min.js',
        '@angular/forms': 'npm:@angular/forms@6.0.3/bundles/forms.umd.min.js',
        'rxjs': 'npm:rxjs@6.2.0',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api@0.6.0/bundles/in-memory-web-api.umd.js',
        'tslib': 'npm:tslib/tslib.js'
      },
      packages: {
        app: {
          main: './main.js',
          defaultExtension: 'js'
        },
        rxjs: {
          main: 'index.js',
          defaultExtension: 'js'
        },
        'rxjs/operators': {
          main: 'index.js',
          defaultExtension: 'js'
        }
      }
    });
    })(this);