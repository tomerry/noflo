import Cookies from 'universal-cookie';

const cookies = new Cookies();

const knownParameters = [
    'utm_source',
    'utm_term',
    'utm_campaign',
    'utm_content',
    'utm_medium'
];

function encodeCookieValue(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('|');
}

function decodeCookieValue(string) {
    return string.split('|')
        .reduce((current, pair) => {
            pair = pair.split('=', 2);
            current[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            return current;
        }, {});
}

function getUtmQueryParameters() {
    let params = {};
    let query = window.location.search.substring(1);
    let lets = query.split('&');
    for (let i = 0; i < lets.length; i++) {
        let pair = lets[i].split('=');
        if (pair[0].indexOf('utm_') === 0) {
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
    }

    return params;
}

function getUtmCookieParameters() {
    let cookie = cookies.get('cpy_source');
    return decodeCookieValue(cookie ? cookie : '');
}

let utmParameters = getUtmQueryParameters();
if (Object.keys(utmParameters).length > 0) {
    let expireDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);
    cookies.set(
        'cpy_source',
        encodeCookieValue(utmParameters),
        {expire: expireDate.toGMTString(), path: '/'}
    )
} else {
    utmParameters = getUtmCookieParameters()
}

Object.keys(utmParameters).forEach((key) => {
    if (knownParameters.indexOf(key) === -1) {
        delete utmParameters[key];
    }
});

export function getUtmParameters() {
    return utmParameters;
}

function getLocation(href) {
    const parser = document.createElement('a');
    parser.href = href;
    return {
        protocol: parser.protocol, // => "http:"
        host: parser.host,     // => "example.com:3000"
        hostname: parser.hostname, // => "example.com"
        port: parser.port,     // => "3000"
        pathname: parser.pathname, // => "/pathname/"
        hash: parser.hash,     // => "#hash"
        search: parser.search,   // => "?search=test"
        origin: parser.origin   // => "http://example.com:3000" {
    };
}

function getReferrerCookieValue() {
    let cookie = cookies.get('cpy_referrer');
    return cookie ? decodeCookieValue(cookie) : '';
}

let referrer = {};
if (document.referrer) {
    //const referrerLocation = getLocation(document.referrer);
    const referrerLocation = getLocation(document.referrer);

    if (referrerLocation.hostname !== document.location.hostname) {
        let expireDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);
        referrer = {
            referrer_host: referrerLocation.hostname,
            referrer_path: referrerLocation.pathname + referrerLocation.search
        };
        cookies.set(
            'cpy_referrer',
            encodeCookieValue(referrer),
            {expire: expireDate.toGMTString(), path: '/'}
        )
    }
} else {
    referrer = getReferrerCookieValue()
}


export function getReferrerData() {
    return referrer;
}