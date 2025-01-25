let peng = [
    {
        id:1 ,
        title: 'Jadwal UTS PondokIT' , 
        tanggal:'22/06/2025',
        author:'Admin Pondok IT',
        photo:'01.jfif'
    },
    {
        id:2 ,
        title: 'Jadwal Pendaftaran Santri Baru' , 
        tanggal:'22/02/2025',
        author:'Admin Pondok IT',
        photo:'02.jfif'
    },
    {
        id:3,
        title: 'Jadwal Wisuda' , 
        tanggal:'11/03/2025',
        author:'Admin Pondok IT',
        photo:'03.jfif'
    }, 
]

let dataset2 = document.querySelector('.place-pengumuman-m');
peng.forEach(item => {
    let card2 = ` <div data-aos="fade-up" data-aos-duration="700" class="image-agenda">
                    <img data-aos="zoom-in" data-aos-duration="700" src="../../../assets/pengumuman/${item.photo}" alt="">
                    <span data-aos="zoom-in" data-aos-duration="700">${item.title}</span>
                </div>`
                
    dataset2.innerHTML += card2;
})