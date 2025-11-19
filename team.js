/* --------------------------------------------------
   AOS INIT
-------------------------------------------------- */
AOS.init({
    once: false,      // animate every time element scrolls into view
    mirror: true,     // animate elements when scrolling past in opposite direction
    startEvent: 'DOMContentLoaded'
});

window.addEventListener('load', () => {
    AOS.refresh();
});


/* --------------------------------------------------
   TEAM MEMBER DATA (Modal Info)
-------------------------------------------------- */
const members = [
    {
        img: "media/ceo.jpg",
        name: "MD Fahim Imtiam Khan",
        role: "Founder & CEO",
        bio: "A visionary leader focused on scaling businesses through digital marketing, performance ads, branding, and AI-driven growth strategies."
    },
    {
        img: "media/mem7.jpg",
        name: "Muhammad Umer",
        role: "Co-founder & Graphic Designer",
        bio: "Expert in brand identity, creative graphics, UI visuals, and commercial design for modern digital brands."
    },
    {
        img: "media/member2.jpg",
        name: "Masum Kabir",
        role: "Graphic Designer",
        bio: "Expert in brand identity, creative graphics, UI visuals, and commercial design for modern digital brands."
    },
    {
        img: "media/member3.jpg",
        name: "Bilal Ahmed",
        role: "Web Developer",
        bio: "Frontend developer skilled in HTML, CSS, JavaScript, and creating fast, responsive, and beautiful websites."
    },
    {
        img: "media/member4.jpg",
        name: "Tanha Naznin",
        role: "Social Media Manager",
        bio: "Specialist in content strategy, brand growth, social media ads, and maintaining strong digital presence for brands."
    },
    {
        img: "media/member5.jpg",
        name: "Kantom Prio",
        role: "Marketing Specialist",
        bio: "Focuses on customer acquisition, paid campaigns, sales funnel building, and business positioning."
    },
    {
        img: "media/member6.jpg",
        name: "Shams Anam",
        role: "Ads Expert",
        bio: "Performance marketer with expertise in Facebook Ads, TikTok Ads, Google Ads, and ROI optimization."
    }
];


/* --------------------------------------------------
   MODAL OPEN / CLOSE
-------------------------------------------------- */
function openModal(index){
    const modal = document.getElementById("teamModal");
    modal.classList.add("active");

    document.getElementById("modalImg").src = members[index].img;
    document.getElementById("modalName").textContent = members[index].name;
    document.getElementById("modalRole").textContent = members[index].role;
    document.getElementById("modalBio").textContent = members[index].bio;
}

function closeModal(){
    const modal = document.getElementById("teamModal");
    modal.classList.remove("active");
}

// Close modal on clicking outside content
window.addEventListener("click", (e) => {
    const modal = document.getElementById("teamModal");
    if (e.target === modal) modal.classList.remove("active");
});


/* --------------------------------------------------
   3D TILT EFFECT
-------------------------------------------------- */
document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 15);
        const rotateY = ((centerX - x) / 15);

        card.style.transform = `
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.07)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(800px) scale(1)";
    });
});


/* --------------------------------------------------
   PARTICLE BACKGROUND
-------------------------------------------------- */
const canvas = document.getElementById("teamParticleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0; i<70; i++){
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.6 - 0.3,
        speedY: Math.random() * 0.6 - 0.3
    });
}

function animateParticles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if(p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if(p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = "#0ef";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#0ef";

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
