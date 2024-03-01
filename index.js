/////// Page Setup
const Root = document.getElementById("root");
const Nav = document.getElementById("nav");
const Page = document.getElementById("page");

const TilingImgTot = 53;
const FlooringImgTot = 10;
const FramingImgTot = 18;
const DrywallImgTot = 12;

let TilingImgIndex = 1;
let FlooringImgIndex = 1;
let FramingImgIndex = 1;
let DrywallImgIndex = 1;

let ActiveGala = "tiling_nav";

SetupNav();
SetupGallery();
/////// Page Setup

/////// Nav Setup
function SetupNav() {
    Nav.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Manoles Renovation</a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active" onclick="SetupGallery()">
                        <a class="nav-link" href="#">Gallery</a>
                    </li>
                    <li class="nav-item active" onclick="SetUpAbout()">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">(647)-866-9212</button>
                </form>
            </div>
        </nav>
    `;
}
/////// Nav Setup

/////// Gallery Setup
function SetupGallery() {
    ActiveGala = "tiling_nav";
    TilingImgIndex = 1; FlooringImgIndex = 1; FramingImgIndex = 1; DrywallImgIndex = 1;

    Page.innerHTML = `
        <div class="card text-center">
            <div class="card-header">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button id="tiling_nav" type="button" class="btn btn-secondary" onclick="HandleGalleryNav(this)">Tiling</button>
                    <button id="flooring_nav" type="button" class="btn btn-secondary" onclick="HandleGalleryNav(this)">Flooring</button>
                    <button id="framing_nav" type="button" class="btn btn-secondary" onclick="HandleGalleryNav(this)">Framing</button>
                    <button id="drywall_nav" type="button" class="btn btn-secondary" onclick="HandleGalleryNav(this)">Drywall</button>
                </div>
            </div>
            <div class="card-body">
                <img id="gallery_img" src="Photos/tiling1.JPG" style="height: 400px; width: 300px;" alt="Finished Manoles Work">
            </div>
            <div class="card-footer text-muted">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" onclick="HandlePrevImg()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                    </button>
                    <button id="gallery_page" type="button" class="btn btn-secondary" disabled>
                        ${TilingImgIndex} / ${TilingImgTot}
                    </button>
                    <button type="button" class="btn btn-secondary" onclick="HandleNextImg()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>    
            </div>
        </div>
    `;
}

function HandleGalleryNav(el) {
    const Img = document.getElementById("gallery_img");
    const gPage = document.getElementById("gallery_page");
    ActiveGala = el.id;

    if(ActiveGala === "tiling_nav") {
        Img.src = `Photos/tiling${TilingImgIndex}.JPG`;
        gPage.innerHTML = `${TilingImgIndex} / ${TilingImgTot}`; 
    }
    else if(ActiveGala === "flooring_nav") { 
        Img.src = `Photos/flooring${FlooringImgIndex}.JPG`; 
        gPage.innerHTML = `${FlooringImgIndex} / ${FlooringImgTot}`; 
    }
    else if(ActiveGala === "framing_nav") { 
        Img.src = `Photos/framing${FramingImgIndex}.JPG`;
        gPage.innerHTML = `${FramingImgIndex} / ${FramingImgTot}`; 
    }
    else if(ActiveGala === "drywall_nav") { 
        Img.src = `Photos/drywall${DrywallImgIndex}.JPG`;
        gPage.innerHTML = `${DrywallImgIndex} / ${DrywallImgTot}`; 
    }
}

function HandlePrevImg() {
    const Img = document.getElementById("gallery_img");
    const gPage = document.getElementById("gallery_page");

    if(ActiveGala === "tiling_nav") {
        if((TilingImgIndex - 1) >= 1) 
        { TilingImgIndex--; }
        Img.src = `Photos/tiling${TilingImgIndex}.JPG`; 
        gPage.innerHTML = `${TilingImgIndex} / ${TilingImgTot}`; 
    }
    else if(ActiveGala === "flooring_nav") { 
        if((FlooringImgIndex - 1) >= 1) 
        { FlooringImgIndex--; }
        Img.src = `Photos/flooring${FlooringImgIndex}.JPG`; 
        gPage.innerHTML = `${FlooringImgIndex} / ${FlooringImgTot}`; 
    }
    else if(ActiveGala === "framing_nav") { 
        if((FramingImgIndex - 1) >= 1) 
        { FramingImgIndex--; }
        Img.src = `Photos/framing${FramingImgIndex}.JPG`; 
        gPage.innerHTML = `${FramingImgIndex} / ${FramingImgTot}`; 
    }
    else if(ActiveGala === "drywall_nav") { 
        if((DrywallImgIndex - 1) >= 1) 
        { DrywallImgIndex--; }
        Img.src = `Photos/drywall${DrywallImgIndex}.JPG`; 
        gPage.innerHTML = `${DrywallImgIndex} / ${DrywallImgTot}`; 
    }
}

function HandleNextImg() {
    const Img = document.getElementById("gallery_img");
    const gPage = document.getElementById("gallery_page");

    if(ActiveGala === "tiling_nav") {
        if((TilingImgIndex + 1) <= TilingImgTot) 
        { TilingImgIndex++; }
        Img.src = `Photos/tiling${TilingImgIndex}.JPG`; 
        gPage.innerHTML = `${TilingImgIndex} / ${TilingImgTot}`; 
    }
    else if(ActiveGala === "flooring_nav") { 
        if((FlooringImgIndex + 1) <= FlooringImgTot) 
        { FlooringImgIndex++; }
        Img.src = `Photos/flooring${FlooringImgIndex}.JPG`; 
        gPage.innerHTML = `${FlooringImgIndex} / ${FlooringImgTot}`; 
    }
    else if(ActiveGala === "framing_nav") { 
        if((FramingImgIndex + 1) <= FramingImgTot) 
        { FramingImgIndex++; }
        Img.src = `Photos/framing${FramingImgIndex}.JPG`; 
        gPage.innerHTML = `${FramingImgIndex} / ${FramingImgTot}`; 
    }
    else if(ActiveGala === "drywall_nav") { 
        if((DrywallImgIndex + 1) <= DrywallImgTot) 
        { DrywallImgIndex++; }
        Img.src = `Photos/drywall${DrywallImgIndex}.JPG`; 
        gPage.innerHTML = `${DrywallImgIndex} / ${DrywallImgTot}`; 
    }
}
/////// Gallery Setup

/////// About Setup
function SetUpAbout() {
    Page.innerHTML = `
        <div class="card text-center">
            <div class="card-body">
                <img src="Photos/about.JPG" style="height: 400px; width: 300px;" alt="Manoles With Family">
            </div>
            <div class="card-footer text-muted">
                <p>
                    <b>Manoles Renovation is a small family business that specializes in tiling, flooring, framing, drywall, and full renovation.</b>
                </p>
            </div>
        </div>
    `;
}
/////// About Setup


