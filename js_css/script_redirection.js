// fonction qui transform le cookie string en dictionnaire
const parseCookie = str =>
  str
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});


// si le cookie string n'est pas vide
if (document.cookie != "")
{
  // parse le cookie
  const lang = parseCookie(document.cookie)["lang"];

  // si sa valeur est valide on redirige
  if (lang == "en" || lang == "fr" || lang == "br")
  {
    window.location.replace(`./${lang}/index.html`);
  }

  // sinon on la change
  else
  {
    document.cookie = "lang=fr;path=/";
    window.location.replace(`./fr/index.html`);
  }

}

// si il n'y a pas encore de cookie alors on le crée et on redirige l'utilisateur
else
{
  document.cookie = "lang=fr;path=/";
  window.location.replace(`./fr/index.html`);
}