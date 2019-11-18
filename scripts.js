// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let missionAbortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let flightStatusReading = document.getElementById("flightStatus");
    let shuttleBackgroundControl = document.getElementById("shuttleBackground");
    let heightReading = document.getElementById("spaceShuttleHeight");
    let rocketIcon = document.getElementById("rocket");
    let verticalLocation = null;
    let horizontalLocation = null;
    
    takeOffButton.addEventListener("click", function(event) {
        if(window.confirm("Confirm that the shuttle is ready for takeoff."))
        {
            flightStatusReading.innerHTML = "Shuttle in flight.";
            shuttleBackgroundControl.style.backgroundColor = 'blue';
            heightReading.innerHTML = 10000;
        }
    });
    
    landButton.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatusReading.innerHTML = "The shuttle has landed.";
        shuttleBackgroundControl.style.backgroundColor = 'green';
        heightReading.innerHTML = 0;
        rocketIcon.style.top = "225px";
        rocketIcon.style.left = "0px";
    });

    missionAbortButton.addEventListener("click", function(event)
    {
        if(window.confirm("Confirm that you want to abort the mission."))
        {
            flightStatusReading.innerHTML = "Mission aborted.";
            shuttleBackgroundControl.style.backgroundColor = 'green';
            heightReading.innerHTML = 0;
            rocketIcon.style.top = "225px";
            rocketIcon.style.left = "0px";
        }
    });

    upButton.addEventListener("click", function(event)
    {
        if(flightStatusReading.innerHTML === "Shuttle in flight.")
        {
            if(parseFloat(heightReading.innerHTML) >= 240000)
            {
                window.alert("Maximum Altitude Reached!");
            }
            else
            {
                verticalLocation = parseFloat(rocketIcon.style.top);
                let moveUp = verticalLocation - 10;
                rocketIcon.style.top = moveUp + "px";
                heightReading.innerHTML = parseFloat(heightReading.innerHTML) + 10000;
            }
        }
        else
        {
            window.alert("You must take off first!");
        }
    });

    downButton.addEventListener("click", function(event)
    {
        if(flightStatusReading.innerHTML === "Shuttle in flight.")
        {
            if(parseFloat(heightReading.innerHTML) <= 10000)
            {
                if(window.confirm("Are you sure you would like to land?"))
                {
                    window.alert("The shuttle is landing. Landing gear engaged.");
                    flightStatusReading.innerHTML = "The shuttle has landed.";
                    shuttleBackgroundControl.style.backgroundColor = 'green';
                    rocketIcon.style.top = "225px";
                    rocketIcon.style.left = "0px";
                    heightReading.innerHTML = 0;
                }
            }
            else
            {
                verticalLocation = parseFloat(rocketIcon.style.top);
                let moveDown = verticalLocation + 10;
                rocketIcon.style.top = moveDown + "px";
                heightReading.innerHTML = parseFloat(heightReading.innerHTML) - 10000;
            }
        }
        else
        {
            window.alert("You must take off first!");
        }
    });

    rightButton.addEventListener("click", function(event)
    {
        if(flightStatusReading.innerHTML === "Shuttle in flight.")
        {
            if(parseFloat(rocketIcon.style.left) >= 230)
            {
                window.alert("You're veering off course! Auto-pilot engaged!")
                horizontalLocation = parseFloat(rocketIcon.style.left);
                let moveRight = horizontalLocation - 10;
                rocketIcon.style.left = moveRight + "px";
            }
            else
            {
                horizontalLocation = parseFloat(rocketIcon.style.left);
                moveRight = horizontalLocation + 10;
                rocketIcon.style.left = moveRight + "px";
            }
        }
        else
        {
            window.alert("You must take off first!");
        }
    });

    leftButton.addEventListener("click", function(event)
    {
        if(flightStatusReading.innerHTML === "Shuttle in flight.")
        {
            if(parseFloat(rocketIcon.style.left) <= -230)
            {
                window.alert("You're veering off course! Auto-pilot engaged!")
                horizontalLocation = parseFloat(rocketIcon.style.left);
                let moveLeft = horizontalLocation + 10;
                rocketIcon.style.left = moveLeft + "px";
            }
            else{
                horizontalLocation = parseFloat(rocketIcon.style.left);
                let moveLeft = horizontalLocation - 10;
                rocketIcon.style.left = moveLeft + "px";
            }
        }
        else
        {
            window.alert("You must take off first!");
        }
    });

}

window.onload = init;