const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-generic-session');
const convert = require('koa-convert');
const CSRF = require('koa-csrf');

const app = new Koa();

// set the session keys
app.keys = ['a', 'b'];

// add session support
app.use(convert(session()));

// add body parsing
app.use(bodyParser());

// add the CSRF middleware
app.use(new CSRF({
    invalidTokenMessage: 'Invalid CSRF token',
    invalidTokenStatusCode: 403,
    excludedMethods: ['GET', 'HEAD', 'OPTIONS'],
    disableQuery: false
}));

// your middleware here (e.g. parse a form submit)
app.use((ctx, next) => {
    if (!['GET', 'POST'].includes(ctx.method))
        return next();
    if (ctx.method === 'GET') {
        ctx.body = ctx.csrf;
        return;
    }
    ctx.body = 'OK';
});

app.listen();


