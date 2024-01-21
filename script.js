var myDate = new Date();
var hrs = myDate.getHours();
var greet;

if (hrs < 12)
    greet = 'Good Morning';
else if (hrs >= 12 && hrs < 17)
    greet = 'Good Afternoon';
else if (hrs >= 17 && hrs < 24)
    greet = 'Good Evening';

let greeting = document.getElementById('greeting');
if (greeting != null)
    greeting.innerHTML = greet;

// Navigation Code
function navigateAlbum(ele) {
    window.location.href = `albums.php?value=${ele.id}`;
}