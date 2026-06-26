/* ==========================================================
   Baby Movement Tracker
   app.js
========================================================== */

let todayCount = 0;
let lastMovement = "--";
let timeline = [];

window.onload = function () {

    showTodayDate();

    loadLocalData();

    updateUI();

};

//-------------------------------------------

function showTodayDate() {

    const today = new Date();

    document.getElementById("todayDate").innerHTML =
        today.toLocaleDateString('en-IN', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

}

//-------------------------------------------

async function saveMovement(type) {

    const now = new Date();

    const movement = {

        date: now.toLocaleDateString('en-IN'),

        time: now.toLocaleTimeString('en-IN'),

        movement: type,

        notes: "",

        pregnancyWeek: PREGNANCY_WEEK,

        device: navigator.platform,

        timestamp: now.getTime()

    };

    //--------------------------------------
    // Update Screen
    //--------------------------------------

    todayCount++;

    lastMovement = type;

    timeline.unshift(movement);

    saveLocalData();

    updateUI();

    //--------------------------------------
    // Send to Google Sheet
    //--------------------------------------

    try {

        await fetch(GOOGLE_SCRIPT_URL, {

    method: "POST",

    mode: "no-cors",

    body: JSON.stringify(movement)

});



    }
    catch (e) {

        console.log(e);

        alert("Unable to connect to Google Sheet.");

    }

}

//-------------------------------------------

function updateUI() {

    document.getElementById("todayCount").innerHTML =
        todayCount;

    document.getElementById("lastMovement").innerHTML =
        lastMovement;

    drawTimeline();

}

//-------------------------------------------

function drawTimeline() {

    let html = "";

    if (timeline.length == 0) {

        html =
            "<p>No movement recorded today.</p>";

    }
    else {

        timeline.forEach(item => {

            html +=

            "<div class='timelineCard'>" +

            "<b>" + item.time + "</b><br>" +

            item.movement +

            "</div>";

        });

    }

    document.getElementById("timeline").innerHTML =
        html;

}

//-------------------------------------------

function saveLocalData() {

    localStorage.setItem(

        "todayCount",

        todayCount

    );

    localStorage.setItem(

        "lastMovement",

        lastMovement

    );

    localStorage.setItem(

        "timeline",

        JSON.stringify(timeline)

    );

}

//-------------------------------------------

function loadLocalData() {

    const c =
        localStorage.getItem("todayCount");

    if (c)
        todayCount = parseInt(c);

    const l =
        localStorage.getItem("lastMovement");

    if (l)
        lastMovement = l;

    const t =
        localStorage.getItem("timeline");

    if (t)
        timeline = JSON.parse(t);

}

//-------------------------------------------

function clearToday() {

    if (!confirm("Clear today's movements?"))
        return;

    todayCount = 0;

    lastMovement = "--";

    timeline = [];

    saveLocalData();

    updateUI();

}
