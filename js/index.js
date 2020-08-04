const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ===========================
// Navigation bar
// ===========================
const navItems = document.querySelectorAll('.container header nav a')

navItems.forEach((item, i) => {
  item.textContent = siteContent["nav"][`nav-item-${i + 1}`];
})


// ===========================
// CTA
// ===========================

// CTA-Text
const ctaHeader = document.querySelector(".cta-text h1");
const splitHeader = siteContent["cta"]["h1"].split(" ");
const [strDOM, strIS, strAWESOME] = splitHeader;

const tn1 = document.createTextNode(strDOM);
const tn2 = document.createTextNode(strIS);
const tn3 = document.createTextNode(strAWESOME);
const br1 = document.createElement("br");
const br2 = document.createElement("br");

ctaHeader.appendChild(tn1);
ctaHeader.appendChild(br1);
ctaHeader.appendChild(tn2);
ctaHeader.appendChild(br2);
ctaHeader.appendChild(tn3);

// CTA-Button
 const ctaButton = document.querySelector(".cta-text button");
 ctaButton.textContent = siteContent["cta"]["button"];

 // CTA-Image
 const ctaImage = document.getElementById("cta-img");
 ctaImage.src = siteContent["cta"]["img-src"];

// ===========================
// Main Content
// ===========================

// Top Conent
const textContentElms = document.querySelectorAll(".text-content");
const [features, about, services, product, vision] = textContentElms;

// Features
features.children[0].textContent = siteContent["main-content"]["features-h4"];
features.children[1].textContent = siteContent["main-content"]["features-content"];

// About
about.children[0].textContent = siteContent["main-content"]["about-h4"];
about.children[1].textContent = siteContent["main-content"]["about-content"];

// Main Content Image
const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Services
services.children[0].textContent = siteContent["main-content"]["services-h4"];
services.children[1].textContent = siteContent["main-content"]["services-content"];

// Product
product.children[0].textContent = siteContent["main-content"]["product-h4"];
product.children[1].textContent = siteContent["main-content"]["product-content"];

// Vision
vision.children[0].textContent = siteContent["main-content"]["vision-h4"];
vision.children[1].textContent = siteContent["main-content"]["vision-content"];

// ===========================
// Contact Section
// ===========================

const contactSection = document.querySelector(".contact");
const [contact, address, phone, email] = contactSection.children;

const addrText1 = siteContent["contact"]["address"].substring(0, 18);
const addrText2 = siteContent["contact"]["address"].substring(19);

const addrTextNode1 = document.createTextNode(addrText1);
const addrTextNode2 = document.createTextNode(addrText2);

const addrBreak = document.createElement("br");



contact.textContent = siteContent["contact"]["contact-h4"];
address.appendChild(addrTextNode1);
address.appendChild(addrBreak);
address.appendChild(addrTextNode2);
phone.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];

// ===========================
// Footer
// ===========================

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];