
// Gestion appui sur le bouton A

    b4a = document.getElementById("b4a");

    b4a.addEventListener("mouseover", (event) => 
    {
        event.target.style.backgroundColor = "#333333";
        event.target.style.color = "#FFFFFF";

        fade4b = document.getElementById("b4b");
        fade4b.style.backgroundColor = "#DDDDDD";

        fade4c = document.getElementById("b4c");
        fade4c.style.backgroundColor = "#DDDDDD";

    }, false
    );

    b4a.addEventListener("mouseout", (event) => 
    {
        event.target.style.backgroundColor = "#808080";
        event.target.style.color = "#999999";

        fade4b = document.getElementById("b4b");
        fade4b.style.backgroundColor = "#808080";

        fade4c = document.getElementById("b4c");
        fade4c.style.backgroundColor = "#808080";

    }, false
    );

// Gestion appui sur le bouton B

    b4b = document.getElementById("b4b");

    b4b.addEventListener("mouseover", (event) => 
    {
        event.target.style.backgroundColor = "#333333";
        event.target.style.color = "#FFFFFF";

        fade4a = document.getElementById("b4a");
        fade4a.style.backgroundColor = "#DDDDDD";

        fade4c = document.getElementById("b4c");
        fade4c.style.backgroundColor = "#DDDDDD";

    }, false
    );

    b4b.addEventListener("mouseout", (event) => 
    {
        event.target.style.backgroundColor = "#808080";
        event.target.style.color = "#999999";

        fade4a = document.getElementById("b4a");
        fade4a.style.backgroundColor = "#808080";

        fade4c = document.getElementById("b4c");
        fade4c.style.backgroundColor = "#808080";

    }, false
    );

    // Gestion appui sur le bouton C

    b4c = document.getElementById("b4c");

    b4c.addEventListener("mouseover", (event) => 
    {
        event.target.style.backgroundColor = "#333333";
        event.target.style.color = "#FFFFFF";

        fade4a = document.getElementById("b4a");
        fade4a.style.backgroundColor = "#DDDDDD";

        fade4b = document.getElementById("b4b");
        fade4b.style.backgroundColor = "#DDDDDD";

    }, false
    );

    b4c.addEventListener("mouseout", (event) => 
    {
        event.target.style.backgroundColor = "#808080";
        event.target.style.color = "#999999";

        fade4a = document.getElementById("b4a");
        fade4a.style.backgroundColor = "#808080";

        fade4b = document.getElementById("b4b");
        fade4b.style.backgroundColor = "#808080";

    }, false
    );
