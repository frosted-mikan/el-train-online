var train = document.querySelector("#train");
var container = document.querySelector("#contentContainer");

container.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x - (train.clientWidth / 2);
    var yPosition = e.clientY - parentPosition.y - (train.clientHeight / 2);
    
    train.style.left = xPosition + "px";
    train.style.top = yPosition + "px";
}

// Helper function to get an element's exact position
function getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
        if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
}