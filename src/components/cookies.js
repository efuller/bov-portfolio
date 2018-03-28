export default function() {

    // Reducer.
    function converToObject(acc, current) {
        var cookie = current.split('=');
        acc[cookie[0]] = cookie[1];
        return acc;
    }

    // Convert cookies to object.
    const cleanCookies = document.cookie.split('; ')
        .filter(Boolean)
        .reduce(converToObject, {});

    // Check if a cookie exists.
    function cookieExists(cleanCookies, name) {
        return cleanCookies[name] && 'true' === cleanCookies[name]
    }

    const welcomeMessage = document.getElementById('welcome-message');
    let welcomeText =  cookieExists(cleanCookies, 'portfolio-visited' ) ?
        'Welcome Back! Thanks stopping by again.' :
        'Thanks for checking out my BOV portfolio!';


    welcomeMessage.innerHTML = `<h3>${welcomeText}</h3>`;
    document.cookie = 'portfolio-visited=true';
}