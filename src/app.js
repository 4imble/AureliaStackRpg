import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([ {route: ['', 'main'], moduleId: './main', nav: true, title: 'Stack RPG' },
    ]);

        this.router = router;
    }
}