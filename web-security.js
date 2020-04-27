// Hacker types
const blackHat = "Cause Damage"; // Zero Day Bug, who will be quicker
const greyHat = "Report bugs, usually no damage";
const whiteHat = "With permission";

// Types
// 1. XSS
// - putting content in place that is designed for text
// - type: stored XSS => add to Dbs (eg. {userName: 'Mike <script>terible()</script>'})
// - type: reflected XSS => Trick temporary response from server (eg. Error notification)
// - type: dom based XSS => Directly on Dom, no server involved
// - place: wysiwyg, iframe, full access to URL, input is reflected (eg. cannot find name 'XYZ'), element.innerHTML



