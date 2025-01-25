let data = [
    {
        jabatan: 'Kepala Sekolah',
        nama: 'Heru Fermansyah, S.Pd, M.Pd'
    },
    {
        jabatan: 'Kepala Tata Usaha',
        nama: 'Addul Jalali , R. SP, S.Pd'
    },
    {
        jabatan: 'Ka. Perpustakaan',
        nama: 'Khadijah Al Athiyah , R. SP, S.Pd'
    },
    {
        jabatan: 'Ka. Lab Komputer',
        nama: 'Andrew Sudirman , R. SP, S.Pd'
    },
    {
        jabatan: 'Waka Akademik',
        nama: 'Nur Fadilahh Rasyid , SE, M.Pd'
    },
    {
        jabatan: 'Waka Kesiswaan',
        nama: 'Clara Fla Audia , SE, M.Pd'
    },
    {
        jabatan: 'Waka Humas',
        nama: 'Adrian Nur Hidayatullah , SE, M.Pd'
    },
    {
        jabatan: 'Penanggung Jawab SNP',
        nama: 'Eli Sumady , SE, M.Pd'
    },
]

let place = document.querySelector('.struktur');
data.forEach(item => {
    let card = `<div data-aos="fade-up" data-aos-duration="700"  class="card-struktur">
                <div class="image">
                    <img data-aos="zoom-in" data-aos-duration="700"  src="" alt="">
                </div>
                <div class="text">
                    <h2 data-aos="zoom-in" data-aos-duration="700" >${item.jabatan}</h2>
                    <p data-aos="zoom-in" data-aos-duration="700" >${item.nama}</p>
                    <div data-aos="fade-up" data-aos-duration="700"  class="quote">
                        <span><b>Motto</b> : </span>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, nesciunt praesentium provident nihil maxime ipsa repudiandae id incidunt soluta. Dolorum aut modi fugiat id veniam architecto similique quam eos eius!</span>
                    </div>
                    <div class="poin">
                    <span data-aos="zoom-in" data-aos-duration="700" ></span>
                    <span data-aos="zoom-in" data-aos-duration="700" ></span>
                    <span data-aos="zoom-in" data-aos-duration="700" ></span>
                    </div>
                </div>`

    place.innerHTML += card;
})