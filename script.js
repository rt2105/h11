document.addEventListener('DOMContentLoaded', () => {
    console.log('NAHINA-KYO INITIATED. YOUR SOUL IS LOADING...');

    // Runaway Button Logic
    const runawayBtn = document.getElementById('runaway-btn');
    if (runawayBtn) {
        runawayBtn.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - runawayBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - runawayBtn.offsetHeight);

            runawayBtn.style.position = 'fixed'; // Escape the layout
            runawayBtn.style.left = `${x}px`;
            runawayBtn.style.top = `${y}px`;

            const screams = ["触るな！", "ぎゃあああ", "変態！", "Dirty!", "NO!!!"];
            runawayBtn.innerText = screams[Math.floor(Math.random() * screams.length)];
            runawayBtn.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
    }

    // Scroll Distortion
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        document.body.style.transform = `skewY(${Math.sin(scrolled / 100) * 2}deg)`;
    });

    // Populate Sinners Grid
    const memberGrid = document.querySelector('.member-grid');
    if (memberGrid) {
        memberGrid.innerHTML = ''; // Clear placeholder

        const members = [
            { name: "なひな神様", img: "なひな神様.jpg", sin: "パソコンのつけっぱ" },
            { name: "ひじり", img: "ひじり.jpg", sin: "ばななに抵抗した" },
            { name: "そあち", img: "そあち.jpg", sin: "エセ清楚" }
        ];

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.style.cssText = `
                border: 2px solid var(--acid-green);
                background: #000;
                padding: 10px;
                margin: 5px;
                display: inline-block;
                width: 120px;
                vertical-align: top;
                transform: rotate(${Math.random() * 10 - 5}deg);
            `;

            memberCard.innerHTML = `
                <img src="${member.img}" alt="${member.name}" class="member-img">
                <div style="font-size: 0.8rem; color: var(--primary-pink); margin-top: 5px; font-weight: bold;">${member.name}</div>
                <div style="font-size: 0.7rem; color: #fff;">罪状:<br>${member.sin}</div>
            `;
            memberGrid.appendChild(memberCard);
        });
    }

    // Agree Button - Infinite Loop Trap
    const agreeBtn = document.getElementById('agree-button');
    if (agreeBtn) {
        agreeBtn.addEventListener('click', () => {
            alert("後戻りはできません");
            alert("本当に？");
            alert("あなたの常識が削除されました");
            document.body.style.filter = "invert(100%)";
            document.body.style.transform = "rotate(180deg)";
        });
    }

    // Random Color Flicker for Background
    setInterval(() => {
        if (Math.random() > 0.95) {
            document.body.style.backgroundColor = 'white';
            setTimeout(() => {
                document.body.style.backgroundColor = 'var(--void-black)';
            }, 50);
        }
    }, 1000);
});
