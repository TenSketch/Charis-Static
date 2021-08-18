//Movement Animation to happen
const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
const card4 = document.querySelector("#card-4");
//Items1
//const title = document.querySelector(".title");

//const description = document.querySelector(".info h3");
//const MRP = document.querySelector(".MRP");
//IMAGES
//const bags1 = document.querySelector("#bags-1");
//const bags2= document.querySelector("#bags-2");
//const bags3 = document.querySelector("#bags-3");
//const bags4 = document.querySelector("#bags-4");

//card1
//Moving Animation Event
card1.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
card1.addEventListener("mouseenter", (e) => {
    card1.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    //bags1.style.transform = "translateZ(200px) rotateZ(-45deg)";
    bags.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    MRP.style.transform = "translateZ(100px)";
});
//Animate Out
card1.addEventListener("mouseleave", (e) => {
    card1.style.transition = "all 0.5s ease";
    card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    bags.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    MRP.style.transform = "translateZ(0px)";
});

//card2
//Moving Animation Event
card2.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
card2.addEventListener("mouseenter", (e) => {
    card2.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    bags.style.transform = "translateZ(200px) rotateZ(-45deg)";
    //bags2.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    MRP.style.transform = "translateZ(100px)";
});
//Animate Out
card2.addEventListener("mouseleave", (e) => {
    card2.style.transition = "all 0.5s ease";
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    bags.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    MRP.style.transform = "translateZ(0px)";
});

//card3
 //Moving Animation Event
 card3.addEventListener("mousemove", (e) => {
     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
     card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
 });
 //Animate In
 card3.addEventListener("mouseenter", (e) => {
     card3.style.transition = "none";
     //Popout
     title.style.transform = "translateZ(150px)";
     bags.style.transform = "translateZ(200px) rotateZ(-45deg)";
     //bags3.style.transform = "translateZ(200px) rotateZ(-45deg)";
     description.style.transform = "translateZ(125px)";
     MRP.style.transform = "translateZ(100px)";
 });
 //Animate Out
 card3.addEventListener("mouseleave", (e) => {
     card3.style.transition = "all 0.5s ease";
     card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
     //Popback
     title.style.transform = "translateZ(0px)";
     //bags3.style.transform = "translateZ(0px) rotateZ(0deg)";
     description.style.transform = "translateZ(0px)";
     MRP.style.transform = "translateZ(0px)";
 });

//card4
//Moving Animation Event
card4.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card4.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
card4.addEventListener("mouseenter", (e) => {
    card4.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    bags.style.transform = "translateZ(200px) rotateZ(-45deg)";
    //bags4.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    MRP.style.transform = "translateZ(100px)";
});
//Animate Out
card4.addEventListener("mouseleave", (e) => {
    card4.style.transition = "all 0.5s ease";
    card4.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
  //  bags4.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    MRP.style.transform = "translateZ(0px)";
})
