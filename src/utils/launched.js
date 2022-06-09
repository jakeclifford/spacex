export function launched(launchdate){
    var countDownDate = new Date(launchdate).getTime()
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(seconds)
    return seconds >= 0 ? true : false
}