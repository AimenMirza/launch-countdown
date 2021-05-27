const count = () =>{
    const launchDate = new Date("June 1, 2021 00:00:00").getTime()
    const now = new Date().getTime()

    const difference = launchDate - now

    let secs = 1000
    let mins = secs * 60
    let hrs = mins * 60
    let days = hrs * 24

    const timeOfDays = Math.floor(difference / days)
    const timeOfHours = Math.floor((difference % days) / hrs)
    const timeOfMinutes = Math.floor((difference % hrs) / mins)
    const timeOfSeconds = Math.floor((difference % mins) / secs)

    document.getElementById("days").innerHTML = timeOfDays
    document.getElementById("hours").innerHTML = timeOfHours
    document.getElementById("minutes").innerHTML = timeOfMinutes
    document.getElementById("seconds").innerHTML = timeOfSeconds


}
setInterval(count,1000)