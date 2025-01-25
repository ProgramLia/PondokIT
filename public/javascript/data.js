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

let dataset = document.querySelector('.place-agenda-m');
agenda.map(item => {
    let card = ` <div  data-aos="fade-up" data-aos-duration="700"class="image-agenda">
                    <img data-aos="zoom-in" data-aos-duration="700" src="../../../assets/agenda/${item.photo}" alt="">
                    <span data-aos="zoom-in" data-aos-duration="700">${item.title}</span>
                </div>`
                
    dataset.innerHTML += card;
})

