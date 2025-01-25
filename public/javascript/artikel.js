// artikel data...
let artikel = [
    {
        id:1,
        tanggal: '12/03/2025',
        author: 'Admin Pondok IT',
        title: 'Tahfidz 300 Hari',
        photo: '01.jfif'
    },
    {
        id:2,
        tanggal: '12/03/2025',
        author: 'Admin Pondok IT',
        title: 'Kompetisi Coding Nasional',
        photo:'02.jfif'
    },
    {
        id:3,
        tanggal: '17/03/2025',
        author: 'Admin Pondok IT',
        title: 'Kenal Lebih dalam Ketua Pondok IT',
        photo:'03.jfif'
    },
    {
        id:4,
        tanggal: '17/04/2025',
        author: 'Admin Pondok IT',
        title: 'Touring Bersama Pondok IT',
        photo:'04.jfif'
    },
    {
        id:5,
        tanggal: '31/04/2025',
        author: 'Admin Pondok IT',
        title: 'Seminar Rocky Gerung',
        photo:'05.jfif'
    },
    {
        id:6,
        tanggal: '31/04/2025',
        author: 'Admin Pondok IT',
        title: 'Seminar Pak Sandikha Galih',
        photo:'06.jfif'
    },
]

let artikelPlace = document.querySelector('.place-main-artikel')
artikel.forEach(item => {
    let card = `<div class="card">
    <!-- photo -->
    <div data-aos="fade-up" data-aos-duration="700" class="photo-card">
        <img data-aos="zoom-in" data-aos-duration="700" src="../../../assets/artikel/${item.photo}" alt="">
    </div>
    <!-- title -->
    <div class="text-card">
        <div class="item-text">
            <h3 data-aos="fade-up" data-aos-duration="700">${item.title}</h3>
            <p data-aos="fade-up" data-aos-duration="700">${item.tanggal}</p>
        </div>
        <a href="" class="author-card">
            <i class="bi bi-person"></i>
            <span data-aos="zoom-in" data-aos-duration="700">${item.author}</span>
        </a>
    </div>
    <!-- deskripsi -->
    <div data-aos="fade-up" data-aos-duration="700" class="deskripsi-card">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laborum magni nam, velit cumque odit rem amet beatae corporis veritatis.....
    </div>
    <a data-aos="zoom-in" data-aos-duration="700" href="../view-artikel/artikel1.html" class="link-card">
    <span data-aos="zoom-in" data-aos-duration="700">Baca selengkapnya</span>
    <i class= "bi bi-arrow-right"></i>
    </a>
</div>`

artikelPlace.innerHTML += card;
})