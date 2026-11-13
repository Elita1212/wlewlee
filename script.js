const kataKata = [
    '"miccuu sayangkuu"',
    '"semangat yaa ujiannya mingdep"',
    '"tanya ke aku kalo gatau yaa"',
    '"iloveeyouu moree sayaangg"'
];
let index = 0;

function gantiPesan() {
    index = (index + 1) % kataKata.length;
    document.getElementById('pesan').innerText = kataKata[index];
    hujanHati();
}

function hujanHati() {
    for (let i = 0; i < 10; i++) {
        const h = document.createElement('div');
        h.className = 'rain';
        h.innerText = '❤️';
        h.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 3000);
    }
}