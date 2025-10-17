Discord üzerinden ESX altyapılı fivem sunucunuz için SQL yönetimini sağlayan, SQL komutlarını çalıştıran ve birçok işlemi yapabilmenizi sağlayan bir discord botu projesidir.


ESX Altyapısına göre 2019 yılında yapılmış bir bottur. Node.js ile yazılıp js ve sql kullanılmıştır.
SQL komutlarını çalıştırmaya yarayan bu proje ile offline olarak oyuna girmeden game staff ihtiyacı olmadan hemen hemen herşeyi discord komutları ile yapabilirsiniz.
Detaylı bir komut sistemi vardır.

BİTMEDİ!
Ayrıca bak komutları ile  yaparak Dataları görünteleyebilirsiniz.

NOT: Bu projeyi Open-Source olarak, 18.10.2025 yılında PUBLIC olarak TheOrient github hesabımda yayınlıyorum. Bot esx-disc envantere göre 2019-2020 yılları arasında yapılmıştır. Dolayısı ile günümüzde kullanılan QBase QB altyapıya göre uyarlayabilirsiniz. Tek yapmanız gereken SQL komutlarını değiştirmek ve tabloları column satırları vs. güncellemek. 


KURULUM 

node.js indirin ve kurun.

cmd yi açıp botun olduğu dizine cd komutu ile girin Örn: cd C:\bot

cmd ye npm install yazın

cmd yi kapatın

.BAT lardan birini başlatın


AYARLAMALAR-CONFIG

TOKEN ve PREFIX(komut harfi) değiştirmek için ".env" dosyasını açın düzenleyin.
SQL Bağlantısı bilgileri ve Discord role idlerini değiştirmek için "config.json" açın ve düzenleyin.
ortmeslekler.json açarak databasedeki Job isimlerini düzenleyin
İki ayrı baslat.bat var ortbaslat.bat normal çalıştırır v2 olan ise restart atarak çalıştırır sistem fix çalışır. Timeout interval vs. hatalarla karşılaşmazsınız.



KOMUTLAR

DATABASE EDİT, VERİ BAKMA

!ml.ck hexid ---- HEX İD YE CK ATAR
!ml.ck 1100001118b4d66

!ml.kimlik hexid ---- hex idye sahip birinin
kimlik bilgilerini gösterir

!ml.adetaykimlik hexid ---- hex idye sahip birinin detaylı kimlik bilgilerini gösterir

!ml.pedver hexid pedmodeli ---- hex idye sahip birine ped verir
!ml.pedver 1100001118b4d66 s_m_y_dealer_01

!ml.pedal hexid ---- hex idye sahip birinden ped alır
!ml.pedal 1100001118b4d66

!ml.bankaldır hexid ---- hex idye sahip birinin banını kaldırır (ml menüden banlanması gerekmektedir)

!ml.banbak hexid ---- hex idye sahip birinin ban bilgilerini görüntüler

!ml.telnodeğiş hexid yeniletelefonnumarası ---- telefon numarasını değiştirir
!ml.telnodegis 1100001118b4d66 0001

!ml.faturabilgi hexid ---- hexidye sahip kişinin faturalarını gösterir

!ml.envbak hexid ---- hex idye sahip birinin üzerindeki item ve silahları gösterir 

!ml.motelbak hexid ---- hex idye sahip birinin motel kasasındaki itemleri gösterir

!ml.depobak depokodu ---- oluşumun deposunun içeriğini gösterir
!ml.depobak aztec
(Setjob kodları ile depo kodları aynıdır) 



Ardından ortbaslatv2.bat çalıştırın.(Kendim özel yazdığım .bat bota belirli aralıkla restart atmaktadır.)

Beni takip etmeyi ve starlamayı unutmayın. Kullanımı ücretsizdir ancak pazarlanması yasaktır.

DC: byorient