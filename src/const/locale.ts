// locale could come from a user setting or a service
// but right now we can take the locale from the browser
const locale: string = navigator.language || "en-US";

export default locale;
