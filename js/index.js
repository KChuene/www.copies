let sites = {
    "unity": { 
        "original": "./unity.com/Unity.html",
        "copy": "./unity.com/copy/Unity.html",
        "logo": "./images/unity-logo-white.png"
    },

    "blender": {
        "original": "./blender.org/Blender.html",
        "copy": "./blender.org/copy/Blender.html",
        "logo": "./images/blender-logo-white.png"
    }
}

function toggleDropdown(event) {
    let target = event.target.id
    let menu = null
    if(target == "site-selector") {
        menu = document.getElementById("site-menu")
    
    } else if(target == "version-selector") {
        menu = document.getElementById("version-menu")
    }

    if(menu != null) {
        if(menu.style.display == "block") {
            menu.style.display = "none"
        } else {
            menu.style.display = "block"
        }
    }
}

function hideDropdown() {
    document.getElementById("site-menu").style.display = "none"
    document.getElementById("version-menu").style.display = "none"
}

function setSite(event) {
    let site = event.target.text
    let logo = document.getElementById("site-logo")
    
    document.getElementById("site-selector").text = site
    changeSite()
    if(site == "Blender") {
        logo.src = sites.blender.logo
    }
    else
    if(site == "Unity") {
        logo.src = sites.unity.logo
    }
}

function setVersion(event) {
    document.getElementById("version-selector").text = event.target.text
    changeSite()
}

function changeSite() {

    const site = document.getElementById("site-selector").text
    const version = document.getElementById("version-selector").text

    switch(site) {
        case "Unity": {
            reloadFrame(sites.unity, version)
            break;
        }
        case "Blender": {
            reloadFrame(sites.blender, version)
            break;
        }
        default:
            return
    }
}

function reloadFrame(site, version) {
    let frame = document.getElementById("site-frame")
    if(version == "Original") {
        frame.src = site.original
    
    } else if(version == "Copy by Me") {
        frame.src = site.copy
    }
}