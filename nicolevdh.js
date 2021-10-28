import http, { batch } from 'k6/http';
import { sleep, check, group } from 'k6';

export const options = {
    duration: '5m',
    vus: 5,
    thresholds: {
        'group_duration{group:::Home}': ['p(90)<1000'],
        'group_duration{group:::Notes}': ['p(90)<2000'],
        http_req_failed: ['rate<0.05'],
        checks: ['rate>0.97'],
    },
    ext: {
        loadimpact: {
          projectID: 3548222,
          name: "nicolevdh.com",
          distribution: {
             europe: { loadZone: 'amazon:gb:london', percent: 20 },
             namerica: { loadZone: 'amazon:us:ashburn', percent: 20 },
             asia: { loadZone: 'amazon:sg:singapore', percent: 20 },
             australia: { loadZone: 'amazon:au:sydney', percent: 20 },
             samerica: { loadZone: 'amazon:br:sao paulo', percent: 20 },
          }
        }
    }
};

const domain = 'https://nicolevanderhoeven.com';
export default function () {
    Home();
    ThinkTime();
    Notes();
    ThinkTime();
}

export function Home () {

    group('Home', function () {
        
        let res = http.batch([
            ['GET', domain],
            ['GET', 'https://nicolevanderhoeven.github.io/css/style-dark.css'],
            ['GET', domain + '/lib/font-awesome/css/all.min.css'],
            ['GET', domain + '/lib/jquery/jquery.min.js'],
            ['GET', domain + '/js/main.js'],
            ['GET', 'https://nicolevanderhoeven.github.io/images/logo.png'],
            ['GET', domain + '/lib/JetBrainsMono/ttf/JetBrainsMono-Regular.ttf'],
            ['GET', domain + '/lib/font-awesome/webfonts/fa-brands-400.woff2'],
            ['GET', domain + '/lib/font-awesome/webfonts/fa-solid-900.woff2'],
            ['GET', 'https://nicolevanderhoeven.github.io/images/favicon.ico']
        ]);
        check(res, {
            'Homepage text verification': (r) => JSON.stringify(r).includes('Maastricht')
        });
    });
}

export function Notes () {
    
    group("Notes", function () {
        let res = http.batch([
            ['GET', 'https://notes.nicolevanderhoeven.com/'],
            ['GET', 'https://publish.obsidian.md/app.js?0baafbfed92e71ff3ff7'],
            ['GET', 'https://publish.obsidian.md/app.css?0baafbfed92e71ff3ff7'],
            ['GET', 'https://publish.obsidian.md/lib/purify.min.js'],
            ['GET', 'https://publish.obsidian.md/public/fonts/450beda71fb8564202a0.woff2'],
            ['GET', 'https://publish-01.obsidian.md/options/186a0d1b800fa85e50d49cb464898e4c'],
            ['GET', 'https://publish-01.obsidian.md/cache/186a0d1b800fa85e50d49cb464898e4c'],
            ['GET', 'https://publish.obsidian.md/favicon.ico?0baafbfed92e71ff3ff7'],
            ['GET', 'https://publish-01.obsidian.md/access/186a0d1b800fa85e50d49cb464898e4c/obsidian.css'],
            ['GET', 'https://publish-01.obsidian.md/access/186a0d1b800fa85e50d49cb464898e4c/publish.css'],
            ['GET', 'https://publish.obsidian.md/lib/pixi.min.js'],
            ['GET', 'https://publish-01.obsidian.md/access/186a0d1b800fa85e50d49cb464898e4c/Fork%20My%20Brain.md'],
            ['GET', 'https://publish.obsidian.md/public/fonts/b0b9c035692f884e8635.woff2'],
            ['GET', 'https://publish-01.obsidian.md/access/186a0d1b800fa85e50d49cb464898e4c/assets/profile-token.png'],
            ['GET', 'https://publish.obsidian.md/lib/prism.min.js'],
            ['GET', 'https://publish.obsidian.md/public/images/874d8b8e340f75575caa.svg'],
            ['GET', 'https://publish.obsidian.md/public/fonts/856e8f46fd911d2040c3.woff2'],
            ['GET', 'https://publish.obsidian.md/sim.js'],
        ]);
        check(res, {
            'Notes page text verification': (r) => JSON.stringify(r).includes('my working notes')
        });
    });
}

export function ThinkTime() {
    sleep(Math.random() * 5);
}