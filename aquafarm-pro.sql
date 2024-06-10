/*
SQLyog Ultimate v12.4.3 (64 bit)
MySQL - 10.4.27-MariaDB : Database - aquafarm-pro
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`aquafarm-pro` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `aquafarm-pro`;

/*Table structure for table `articles` */

DROP TABLE IF EXISTS `articles`;

CREATE TABLE `articles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `judul` varchar(255) NOT NULL,
  `isi` text NOT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `penulis` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `articles` */

/*Table structure for table `contacts` */

DROP TABLE IF EXISTS `contacts`;

CREATE TABLE `contacts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nama_pengirim` varchar(255) NOT NULL,
  `email_pengirim` varchar(255) NOT NULL,
  `subjek` varchar(255) NOT NULL,
  `pesan` text NOT NULL,
  `tanggal_kirim` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `contacts` */

/*Table structure for table `failed_jobs` */

DROP TABLE IF EXISTS `failed_jobs`;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `failed_jobs` */

/*Table structure for table `guides` */

DROP TABLE IF EXISTS `guides`;

CREATE TABLE `guides` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `judul` varchar(255) NOT NULL,
  `isi` text NOT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `penulis` varchar(255) NOT NULL,
  `tanggal_dibuat` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `guides` */

insert  into `guides`(`id`,`judul`,`isi`,`gambar`,`penulis`,`tanggal_dibuat`,`created_at`,`updated_at`) values 
(3,'Cara Budidaya Ikan Mas','Budidaya ikan mas (Cyprinus carpio) telah banyak dipilih oleh para peternak dengan alasan memiliki nilai ekonomis tinggi dan mudah dalam perawatan serta cocok untuk kondisi cuaca di wilayah tropis seperti Indonesia.\r\n\r\nBenih ikan mas pun mudah diperoleh dalam skala besar, dengan harga yang murah dan juga kualitas tinggi sehingga lebih menguntungkan bagi peternak yang ingin melakukan pembesaran untuk tujuan konsumsi maupun tujuan untuk ikan hias.\r\n\r\nIkan mas adalah jenis ikan yang berasal dari wilayah Eropa dan Tiongkok, kemudian dibawa ke Indonesia oleh para pendatang dan berkembang biak dengan pesat di berbagai wilayah tanah air.\r\nBudidaya jenis ikan mas paling baik dilakukan di daerah yang memiliki ketinggian 150-1000 mdpl dengan suhu rata-rata 20-25 derajat Celcius serta pH air 7-8.\r\nUmumnya peternak memilih satu dari dua jenis usaha terkait budidaya ikan mas yakni peternak yang khusus melakukan pembenihan saja, serta peternak yang khusus melakukan pembesaran saja.\r\n\r\nUntuk usaha pembenihan ikan mas akan membidik konsumen yaitu para pengusaha pembesaran ikan serta pedagang ikan hias, sementara usaha pembesaran ikan mas akan membidik pangsa pasar konsumen konsumsi.\r\n\r\nTahapan Budidaya Ikan Mas\r\n1. Pembenihan\r\n\r\nPemilihan benih adalah kunci mendapatkan hasil panen yang melimpah dan sesuai harapan.\r\n\r\nPilihlah calon indukan yang memiliki sifat-sifat unggul agar menghasilkan benih berkualitas tinggi.\r\n\r\nPisahkan calon indukan ikan mas betina dari yang jantan dalam kolam pembibitan berbeda, hingga kedua calon indukan siap memijah, cybex.pertanian.go.id melansir.\r\n\r\nKemudian jika sudah siap memijah, proses pemijahan dilakukan di kolam khusus yang dilengkapi dengan kakaban, atau sejenis ijuk yang akan menjadi tempat menempelnya hasil telur ikan.\r\n\r\nDikutip lamanKKP, induk ikan mas yang berkualitas baik dan jumlah telur banyak memiliki syarat atau kriteria seperti berikut:\r\n\r\nBentuk tubuh tidak kerdil, tinggi proporsional\r\nBerwarna hitam keabu-abuan dan memiliki pola sisik normal dengan pola beraturan\r\nTidak ada ikan yang cacat, serta memiliki sirip dubur dan sirip dada normal\r\nTinggi dan pangkal ekor seimbang\r\n2. Pembesaran\r\nUkuran benih yang ideal untuk budidaya ikan mas adalah 10-12 cm atau 80-100 gram per ekor agar cukup kuat hidup di kolam pembesaran dan risiko mati lebih kecil.\r\n\r\nProses pembesaran berlangsung selama 2-3 bulan.\r\n\r\nTeknik pembesaran yang dapat dipilih antara lain adalah metode air deras, air tenang atau tumpang sari.\r\n\r\nSedangkan untuk media yang umum digunakan adalah kolam tanah, kolam tembok, kolam terpal, sawah, keramba dan jaring apung.\r\n\r\nTipe Kolam untuk Ikan Mas\r\nKolam tanah (air tenang)\r\n\r\nAda dua tipe kolam tanah yang bisa digunakan untuk budidaya ikan mas yakni kolam tanah dengan tanggul tanah dan kolam tanah dengan tanggul tembok atau batu.\r\n\r\nKolam ini punya kelebihan yaitu dapat menyediakan pakan alami untuk ikan yakni cacing atau tumbuhan air di dasar kolam.\r\n\r\nDetail membuat kolam tanah:\r\nSesudah melakukan penggalian tanah sesuai ukuran yang diinginkan, lakukan pembajakan dasar kolam, penjemuran, pengapuran, pemupukan dan penggenangan air.\r\nWaktu persiapan untuk kolam tanah sekitar 1-2 pekan.\r\n\r\nKapasitas kolam adalah 1-2 ekor/m2. Beri pakan pelet yang kadar proteinnya 25 persen, dosis 3-4 persen dari bobot ikan sebanyak 3x sehari. Misalnya 1.000 ekor ikan berarti butuh pakan 3-4 kg per hari.\r\n\r\nIkan bisa dipanen ketika bobotnya telah naik jadi 300-400 gram per ekor dalam waktu 3 bulan untuk dapat mengembalikan modal dan mendapatkan keuntungan dari nilai jualnya.\r\n\r\nKolam air deras\r\n\r\nJenis kolam air deras memiliki sirkulasi air yang cepat mengalir, sehingga kadar oksigen terlarutnya tinggi.\r\n\r\nHal ini membuat ikan terus bergerak dan nafsu makannya lebih besar. Selain itu kapasitas ikan di dalam kolam ini bisa lebih padat.\r\n\r\nDinding kolam air deras umumnya dibuat dari tembok untuk mencegah terkikis air deras, dengan ukuran lebih kecil namun dalam.\r\n\r\nAreal kolam juga dipetak-petak menjadi ukuran lebih kecil agar aliran air bisa tetap deras.\r\n\r\nDetail kolam air deras:\r\nUntuk membuat kolam air deras, dibutuhkan debit air sekitar 25-100 liter/detik. Kapasitas benih adalah sejumlah 30-60 ekor/m2 dengan bobot 100 gram/ekor.\r\nPakan berupa pelet 25-30 persen protein yang tidak mudah hancur di dalam air yang deras, 3 x sehari. Dosisnya adalah 4 persen dari bobot tubuh ikan.\r\n\r\nPanen bisa dilakukan setelah 2-3 bulan dengan hasil bobot ikan naik 3-4 kali dari awal.','http://localhost:8000/storage/panduans/1717918965.jpg','Tri Ferli Handoyo','2024-05-29 00:00:00','2024-06-09 07:42:45','2024-06-09 07:42:45'),
(4,'Cara Budidaya Ikan Mujaer','Ikan mujair merupakan salah satu jenis ikan air tawar yang digemari masyarakat Indonesia. Seiring dengan banyaknya peminat, budidaya ikan mujair bisa jadi menguntungkan.\r\n\r\nIkan mujair atau java tilapia (Oreochromis mossambicus) merupakan ikan yang berasal dari perairan Afrika. Nama \'mujair\' yang dikenal di Indonesia diambil dari nama penemu ikan ini, yaitu Mujair.\r\n\r\nMelansir laman Cybext Kementerian Pertanian (Kementan) di tahun 1939, Mujair menemukan ikan ini di muara sungai Serang, Pantai Selatan, Blitar, Jawa Timur. Ikan ini kemudian ia budidayakan untuk pertama kalinya di dalam negeri sehingga dikenal dengan nama ikan mujair.\r\nIkan mujair digemari karena harganya yang tidak mahal dan banyak ditemui di pasaran. Hal ini sejalan dengan proses budidaya ikan yang tidak memakan waktu lama dan sifat ikan mudah beradaptasi di beragam lingkungan perairan.\r\nCara membudidayakannya pun kurang lebih mirip dengan ikan air tawar lainnya, dengan tahap, sarana, dan alat-alat sebagai berikut.\r\n\r\nTahapan Budidaya Ikan Mujair\r\nMenurut Survei Geologi Amerika Serikat (USGS) budidaya ikan mujair mirip dengan budidaya ikan tilapia atau nila. Usaha budidaya ikan ini tidak lepas dari tahap penyediaan kolam, pembibitan, pengendalian hama, hingga panen.\r\n\r\nBerdasarkan paparan dari Kementan berikut tahapan-tahapan dalam budidaya ikan mujair:\r\n\r\nMenyiapkan sarana dan peralatan budidaya, termasuk empat kolam yang berbeda. Satu kolam untuk pemeliharaan induk, satu kolam untuk pemeliharaan benih, satu kolam untuk pembesaran, dan satu kolam untuk pembersihan ikan sebelum dipasarkan.\r\nMelakukan pembibitan dan pembuahan. Pembibitan dilakukan dengan mempersiapkan bibit ikan mujair yang unggul dan berkualitas. Sedangkan pembuahan dapat dilakukan dengan tiga sistem, yaitu dalam satu kolam, dua kolam, atau sistem platform (kolam yang disekat-sekat).\r\nMelakukan pembenihan. Setelah pembibitan dan pembuahan selesai, telur-telur dikumpulkan oleh induk ke dalam mulutnya hingga menetas. Telur akan menetas setelah 3 hingga 5 hari dan akan dilepaskan setelah 2 minggu.\r\nMemelihara dan membesarkan ikan mujair, termasuk memupuk kolam, memberi makan, dan pembersihan kolam untuk menjaga kualitas air. Tahap ini dapat dilakukan dengan monokultur atau polikultur. Apabila melakukan polikultur maka sebaiknya ikan mujair digabung dengan ikan mas, tawes, atau gurame dengan persentase ikan mujair 50 persen dan ikan lain tidak lebih dari 30 persen.\r\nMencegah hama dan penyakit. Hama ikan mujair adalah bebeasan (Notonecta), ucrit (Larva cybister), kodok, ular, lingsang, dan burung. Hama bebeasan dan ucrit dapat diatasi dengan dengan menuangkan minyak tanah ke permukaan air dan menjaga kebersihan kolam. Sedangkan hama lainnya dapat dihindari dengan cara diburu dan mengamankan kolam.\r\nMemanen ikan mujair dapat dilakukan secara selektif atau sebagian maupun dengan total. Panen sebagian dilakukan sesuai dengan usia dan ukuran ikan dan permintaan konsumen. Sedangkan panen total dapat dilakukan pada usia 5 bulan dengan ukuran ikan antara 30 hingga 45 gram per ekor.\r\nSarana Budidaya Ikan Mujair\r\nSarana dan alat adalah komponen penting dalam keberhasilan budidaya ikan mujair. Seperti yang telah disinggung sebelumnya, sarana adalah jenis kolam yang disiapkan untuk budidaya ikan.\r\n\r\nAda tiga jenis kolam yang mendukung kegiatan budidaya ikan mujair, yaitu:\r\n\r\n1. Kolam pemeliharaan induk atau kolam pemijahan\r\nKolam pemeliharaan induk atau pemijahan sebaiknya dibuat berupa kolam tanah seluas 50 hingga 100 meter persegi dengan dasar berpasir.\r\n\r\nSuhu air yang baik untuk kolam ini berkisar antara 20 hingga 22 derajat dengan kedalaman 40 sampai 60 cm. Jumlah kepadatan ikan yang ditempatkan di kolam ini hanya 2 ekor per meter persegi.\r\n\r\n2. Kolam pemeliharaan benih\r\nKolam pemeliharaan benih (pendederan) digunakan untuk menyimpan benih yang berukuran 3 hingga 5 cm selama tiga sampai empat minggu. Kolam ini sebaiknya dibuat seluas 50 hingga 100 meter persegi dengan kepadatan ikan 5 hingga 50 ekor per meter persegi.\r\n\r\n3. Kolam pembesaran\r\nKolam pembesaran digunakan untuk membesarkan ikan selepas pendederan. Kolam ini sebaiknya bibuat sebanyak 2 sampai 4 buah dengan luas masing-masing antara 250 hingga 500 meter persegi. Pembuatan kolam dianjurkan dengan menggunakan semen.\r\n\r\n4. Kolam pembersihan atau pemberokan\r\nKolam pembersihan digunakan sebagai tempat untuk membershikan ikan-ikan mujair sebelum dipasarkan.\r\n\r\nAlat Budidiaya Ikan Mujair\r\nAlat-alat yang digunakan untuk budidaya ikan mujair meliputi alat untuk pembenihan, menangkap bibit, hingga menangkap ikan. Menurut Cybext Kementan, alat-alat yang dibutuhkan termasuk:\r\n\r\n1. Alat Pembenihan\r\nJala;\r\nwaring (anco)\r\nhapa, yaitu kotak dari jaring atau kelambu untuk menampung benih;\r\nseser;\r\nember;\r\nbaskom berbagai ukuran;\r\ntimbangan skala kecil atau timbangan gram;\r\ntimbangan besar atau timbangan kilogram;\r\ncangkul;\r\narit;\r\npisau;\r\npiring secchi atau secchi disk untuk mengukur kadar kekeruhan.\r\n2. Alat Panen dan Menangkap Benih\r\nWaring atau scoopnet halus berbagai ukuran;\r\nayakan panglembangan berdiameter 100 cm;\r\nayakan penandean berdiameter 5 cm;\r\ntempat menyimpan ikan;\r\nkeramba kemplung;\r\nkeramba kupyak;\r\nfish bus untuk mengangkut ikan jarak dekat;\r\nkekaban atau tempat penempelan telur yang melekat;\r\nhapa dari kain tricote untuk menangkap benih;\r\nayakan dari alumunium atau bambu;\r\nsirib untuk menangkap benih ukuran 10 cm ke atas;\r\njaring nilon.\r\nLama Panen Ikan Mujair\r\nBudidaya ikan mujair dapat dilakukan sepanjang tahun sehingga pembibitannya dapat dilakukan kapanpun. Namun, periode panen tergantung dengan tujuan budidaya dan permintaan pasar.\r\n\r\nApabila budidaya ikan mujair bertujuan untuk mengembangkan bibit, maka ketika bibit menetas sudah bisa dipanen dan dipasarkan.\r\n\r\nBibit ikan mujair yang dijual biasanya digolongkan dalam tiga ukuran, yaitu 1-3 cm, 3-5 cm, dan 5-8 cm. Agar mencapai ukuran tersebut, bibit dapat dipanen pada usia antara 1 hingga 1,5 bulan atau sesuai dengan permintaan konsumen.\r\n\r\nSedangkan untuk ikan mujair dapat dipanen setelah berusia 5 bulan. Pada usia tersebut ikan dapat tumbuh berkisar antara 30 hingga 45 gram per ekor.','http://localhost:8000/storage/panduans/1717919046.jpg','Indah Rani Fatmawati','2024-05-27 00:00:00','2024-06-09 07:44:06','2024-06-09 07:44:06'),
(5,'Cara Budidaya Ikan Gabus','Di Indonesia terdapat beberapa spesies ikan gabus (Channidae), salah satunya adalah ikan gabus haruan (Channa striata) yang merupakan salah satu komoditas ikan konsumsi yang memiliki nilai ekonomis yang cukup tinggi, satu kilogram ikan gabus haruan mencapai Rp40.000 – Rp60.000. Ikan gabus dimanfaatkan untuk penyembuhan luka, hal ini dikarenakan pada daging ikan gabus memiliki kandungan albumin berkisar antara 63-107 mg/gr daging.  \r\nUntuk memenuhi kebutuhan pasar, masyarakat di Indonesia berupaya untuk membudidayakan ikan gabus haruan ini dengan mengguknakan berbagai media mulai dari kolam tanah, terpal maupun bak beton. \r\nSalah satu keunggulan budidaya ikan gabus adalah tidak memerlukan sistem aerasi atau filtrasi. Ikan gabus memiliki pernafasan tambahan berupa labirin yang memungkinkan ikan gabus untuk mengambil oksigen langsung dari udara. Sehingga dapat menurunkan biaya produksi budidaya ikan gabus ini.\r\nBudidaya ikan gabus dapat dilakukan pada kolam beton, kolam tanah, atau kolam terpal. Berikut ini Minapoli akan memberikan tips melakukan budidaya ikan gabus di kolam beton agar berhasil\r\n\r\n1.	Persiapan Media Pemijahan Ikan Gabus\r\nMedia budidaya ikan gabus dengan bak beton menggunakan luas 3 x 3 x 1 meter. Terdapat beberapa tahapan yang perlu dilakukan yang meliputi pengeringan dan pembersihan bak beton dengan cara disikat. Langkah selanjutnya kolam diisi air dengan ketinggian 40 cm. Beri tanaman air berupa eceng gondok dan pipa paralon sebagai tempat persembunyian.\r\n\r\n2.	Seleksi Induk Ikan Gabus\r\nKeberhasilan budidaya ikan gabus juga ditentukan oleh kualitas induk yang digunakan. Usia ikan gabus yang ideal untuk dijadikan induk antara 11-12 bulan dengan bobot 150-200 gr. Perbedaan kelamin dapat dilihat pada bagian lubang urogenital di bagian perut.\r\nIkan jantan memiliki dua lubang sedangkan betina hanya memiliki satu lubang. Ikan yang matang gonad ditandai dengan lubang urogenital berwarna kemerahan. Ikan yang akan dijadikan induk harus dalam kondisi sehat dan anatomi yang lengkap. \r\n\r\n3.	Proses Pemijahan\r\nPemijahan pada budidaya ikan gabus dilakukan dengan perbandingan 1:1. Ikan dibiarkan memijah secara alami yang biasanya terjadi pada malam hari. Perilaku memijah ditandai dengan kedua induk akan saling mengejar sampai akhirnya membentuk bola dan terjadi proses pembuahan. Telur yang dibuahi akan berwarna bening dan akan menetas dalam waktu 48 jam. \r\n\r\n4.	Proses Pendederan I\r\nPendederan budidaya ikan gabus dilakukan ketika kantung kuning telur ikan gabus sudah habis dalam waktu 2-3 hari. Pendederan ini dilakukan dengan menggunakan kolam dengan luas 10 x 5 m2 dengan ketinggian kolam 1 m. Ketinggian air yang digunakan adalah 40 cm. \r\n\r\n5.	Pemberian Pakan Larva Ikan Gabus\r\nLarva ikan gabus diberi pakan berupa cacing sutra sampai larva berubah warna menjadi coklat kehitaman. Langkah selanjutnya yaitu memberi pakan tambahan berupa bubuk atau powder sampai benih berusia 3 minggu. Setelah itu benih ikan gabus dapat diberi pakan berupa pelet sebagai pakan utama. \r\n\r\nPada budidaya ikan gabus, pakan diberikan sebanyak 2 kali dalam sehari dengan metode ad satiaton atau sekenyangnya. Pellet ditimbang terlebih dahulu untuk menentukan berapa jumlah pakan yang habis perharinya, kemungkinan sedikit pakan yang tersisa dan timbang kembali pakan sisa tersebut.\r\n\r\n6.	Pemanenan Benih Ikan Gabus\r\nPendederan I pada budidaya ikan gabus, dilakukan hingga benih berukuran 5-7 cm dalam waktu kurang lebih 45 hari. Setelah itu, benih ikan gabus dipanen pada pagi hari dengan cara menguras air kolam hingga surut. Selanjutnya benih hasil pendederan akan disortir berdasarkan ukuran dan akan dipindahkan ke kolam pendederan II, yaitu tahap lanjutan budidaya ikan gabus.\r\n\r\n7.	Pembesaran Benih Ikan Gabus\r\nKepadatan yang optimal pada budidaya ikan gabus adalah 50 ekor/m2. Tahap pembesaran atau pendederan II ini dilakukan selama 5-6 bulan. Kolam yang digunakan berukuran 5 x 4 x 1 meter dengan ketinggian air 70-80 cm, tambahkan penutup pada atas kolam untuk mencegah ikan gabus melompat keluar.\r\n\r\nIkan gabus diberi pakan berupa pelet dengan kadar protein 30-31% yang diberikan sebanyak 2 kali sehari. Anda dapat memberikan pakan tambahan berupa daging sisa atau usus ayam untuk membantu mencukupi kebutuhan protein ikan gabus.','http://localhost:8000/storage/panduans/1717919292.jpg','Tri Ferli Handoyo','2024-05-31 00:00:00','2024-06-09 07:48:12','2024-06-09 07:48:12');

/*Table structure for table `ikans` */

DROP TABLE IF EXISTS `ikans`;

CREATE TABLE `ikans` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `tanggal_dibuat` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `ikans` */

insert  into `ikans`(`id`,`nama`,`deskripsi`,`gambar`,`tanggal_dibuat`,`created_at`,`updated_at`) values 
(1,'Ikan Gurame','Ikan Gurame Adalah salah satu jenis ikan air Tawar yang sangat populer dikalangan petani Ikan','http://localhost:8000/storage/ikans/1717812143.PNG','2024-06-08 00:00:00',NULL,NULL),
(2,'Ikan Bawal','Tambaqui atau bawal air tawar adalah spesies ikan air tawar besar dalam keluarga Serrasalmidae. Ikan ini berasal dari daerah tropis Amerika Selatan, tetapi dipelihara dalam budidaya perairan dan diperkenalkan di tempat lain.','http://localhost:8000/storage/ikans/1717914258.jpg','2024-02-05 00:00:00',NULL,NULL),
(3,'Ikan Gabus','Ikan Gabus adalah sejenis ikan pemangsa atau predator yang hidup di air tawar. Ikan ini berbagai nama di beberapa daerah: dolak Kapuas Hulu, Kalbar, bocek dari Riau, aruan, haruan, gabus, bogo, bayong, ...','http://localhost:8000/storage/ikans/1717914451.jpg','2024-03-05 00:00:00',NULL,NULL),
(4,'Ikan Lele','Lele atau ikan keli, adalah suatu keluarga ikan yang hidup di air tawar. Lele mudah dikenali karena tubuhnya yang licin, agak pipih memanjang, serta memiliki 2 kumis yang panjang, yang mencuat dari sekitar bagian mulutnya.','http://localhost:8000/storage/ikans/1717914568.jpg','2024-04-05 00:00:00',NULL,NULL),
(5,'Ikan Mas','Ikan mas atau Ikan karper adalah ikan air tawar yang memiliki nilai ekonomis penting dan sudah tersebar luas di Indonesia. Di Indonesia, ikan mas mulai dipelihara sekitar tahun 1920-an. Ikan mas yang terdapat di Indonesia merupakan ikan mas yang dibawa dari Cina, Eropa, Taiwan dan Jepang.','http://localhost:8000/storage/ikans/1717914729.jpg','2024-05-06 00:00:00',NULL,NULL),
(6,'Ikan Mujaer','Mujair adalah sejenis ikan yang biasa dikonsumsi. Penyebaran alami ikan ini adalah perairan Afrika dan di Indonesia pertama kali ditemukan di Indonesia oleh Pak Mujair di muara Sungai Serang pantai selatan Blitar, Jawa Timur pada tahun 1939. ','http://localhost:8000/storage/ikans/1717914907.jpg','2024-05-11 00:00:00',NULL,NULL),
(7,'Ikan Nila','Ikan nila adalah sejenis ikan konsumsi air tawar. Ikan ini diintroduksi dari Afrika, tepatnya Afrika bagian timur, pada tahun 1969, dan kini menjadi ikan peliharaan yang populer di kolam-kolam air tawar di Indonesia sekaligus hama di setiap sungai dan danau Indonesia. ','http://localhost:8000/storage/ikans/1717915048.jpeg','2024-05-14 00:00:00',NULL,NULL),
(8,'Ikan Nilem','Nilem, nilem mangut, melem, atau paweh bahasa Banjar: puyau‎ adalah sejenis ikan air tawar anggota suku Cyprinidae. Ikan herbivora ini diketahui menyebar di Asia Tenggara: Tonkin, Siam, Semenanjung Malaya, sedangkan di Kalimantan disebut sebagai ikan puyau. Sumatra, dan Jawa.','http://localhost:8000/storage/ikans/1717915244.jpg','2024-06-15 00:00:00',NULL,NULL),
(9,'Ikan Patin','Patin siam adalah ikan budidaya dan akuarium yang populer. Ikan ini dikenal pula dengan nama jambal siam, lele bangkok, dan hiu bangkok. Dalam bahasa perdagangan internasional, ikan ini dikenal dengan nama siamese shark, sutchi catfish, atau pangasius. ','http://localhost:8000/storage/ikans/1717915349.jpg','2024-06-17 00:00:00',NULL,NULL);

/*Table structure for table `logins` */

DROP TABLE IF EXISTS `logins`;

CREATE TABLE `logins` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `logins_username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `logins` */

insert  into `logins`(`id`,`username`,`password`,`role`,`created_at`,`updated_at`) values 
(1,'ferli','$2y$12$E0mQ42OJZMcHuviFIB/ZFO..cXEuuLqwl5so.4AI928lnKurA7tca','admin','2024-05-29 15:19:50','2024-05-29 15:19:50'),
(2,'tri','$2y$12$Y0IVUC9FPBnkxOVDUAvbM.e2Uh4/znS2paVn9QUFKjb7CTEb7q8wK','admin','2024-05-29 17:32:32','2024-05-29 17:32:32'),
(3,'han','$2y$12$EKy8gZPJMmA9FlvsRPlKZOEhRXqOjAWnuR5/ZxZYC4mvJxt.9hb0O','users','2024-05-29 20:28:40','2024-05-29 20:28:40'),
(4,'ferl','$2y$12$OB5VqBog6sL/gt.tNDYpaucT4U0gfZQT.RdAYasWDvxWFXk94j4MC','users','2024-05-29 21:25:11','2024-05-29 21:25:11'),
(5,'budi','$2y$12$HI3/CLnJ14zVrmCS4/SXqubCMI2Sy867UEKDHen9tyoVmPzrjdV1q','users','2024-05-29 21:51:17','2024-05-29 21:51:17'),
(6,'user1','$2y$12$MmHZYiYRG6ymmhtwukBtMeJv5dOUaLqlhIdxvLn1rONuwHiCjxLR6','users','2024-05-30 11:20:50','2024-05-30 11:20:50'),
(7,'testuser','$2y$12$Dt6G7yXTfXMrh/RDO/isOeuGtLcOGLwCqGtNwK6y1El3L2rL4UKeO','users','2024-05-30 13:11:14','2024-05-30 13:11:14'),
(22,'trihan','$2y$12$6dcC0KrUPtxGTvQFWqnSO.F1lHQsL0RD0MLFzTsldxE/biNc.BMbm','users','2024-06-10 16:10:52','2024-06-10 16:10:52');

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`) values 
(1,'2014_10_12_000000_create_users_table',1),
(2,'2014_10_12_100000_create_password_reset_tokens_table',1),
(3,'2019_08_19_000000_create_failed_jobs_table',1),
(4,'2019_12_14_000001_create_personal_access_tokens_table',1),
(5,'2024_05_29_110335_create_ikans_table',1),
(7,'2024_05_29_110521_create_articles_table',1),
(8,'2024_05_29_110636_create_contacts_table',1),
(11,'2024_05_29_133009_user',2),
(13,'2024_05_29_143227_buat_login',3),
(14,'2024_05_29_110436_create_guides_table',4);

/*Table structure for table `password_reset_tokens` */

DROP TABLE IF EXISTS `password_reset_tokens`;

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_reset_tokens` */

/*Table structure for table `personal_access_tokens` */

DROP TABLE IF EXISTS `personal_access_tokens`;

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `personal_access_tokens` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
