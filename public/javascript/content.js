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

let placeBerita = document.querySelector('.place-berita');

// card ...
artikel.map(item => {
    let card = ` <div data-aos="fade-up" data-aos-duration="700" class="card">
                    <!-- photo -->
                    <div class="photo-card">
                        <img data-aos="zoom-in" data-aos-duration="700" src="../../assets/artikel/${item.photo}" alt="">
                    </div>
                    <!-- title -->
                    <div class="text-card">
                        <div class="item-text">
                            <h3 data-aos="zoom-in" data-aos-duration="700">${item.title}</h3>
                            <p data-aos="zoom-in" data-aos-duration="700">${item.tanggal}</p>
                        </div>
                        <a data-aos="zoom-in" data-aos-duration="700" href="" class="author-card">
                            <i class="bi bi-person"></i>
                            <span>${item.author}</span>
                        </a>
                    </div>
                    <!-- deskripsi -->
                    <div data-aos="fade-up" data-aos-duration="700" class="deskripsi-card">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laborum magni nam, velit cumque odit rem amet beatae corporis veritatis.....
                    </div>
                    <a data-aos="zoom-in" data-aos-duration="700" href="view-artikel/artikel1.html" class="link-card">
                    <span>Baca selengkapnya</span>
                    <i class= "bi bi-arrow-right"></i>
                    </a>
                </div>`
    placeBerita.innerHTML += card;
})

// agenda data...
let agenda = [
    {
        id:1 ,
        title: 'Penerimaan Santri Baru' , 
        tanggal:'22/04/2025',
        author:'Admin Pondok IT',
        photo:'01.jpg'
    },
    {
        id:2 ,
        title: 'Hasil Ujian Akhir' , 
        tanggal:'22/02/2025',
        author:'Admin Pondok IT',
        photo:'02.jpg'
    },
    {
        id:3,
        title: 'Bazar Berkah Ramadhan' , 
        tanggal:'11/03/2025',
        author:'Admin Pondok IT',
        photo:'03.jpg'
    },
    {
        id:4 ,
        title: 'Tabligh Akbar 2025' , 
        tanggal:'09/07/2025',
        author:'Admin Pondok IT',
        photo:'04.jpg'
    },
    {
        id:5 ,
        title: 'Wisuda Program 300 Hari' , 
        tanggal:'22/11/2025',
        author:'Admin Pondok IT',
        photo:'05.jpg'
    },
    {
        id:6 ,
        title: 'Pameran IOT Pondok IT' , 
        tanggal:'31/11/2025',
        author:'Admin Pondok IT',
        photo:'06.jpg'
    }
]

let placeAgenda = document.querySelector('.place-agenda')
agenda.map( item => {
    let card2 = ` <div data-aos="fade-up" data-aos-duration="700" class="image-agenda">
                    <img src="../../assets/agenda/${item.photo}" alt="">
                    <span>${item.title}</span>
                </div>`

    placeAgenda.innerHTML += card2;
})
