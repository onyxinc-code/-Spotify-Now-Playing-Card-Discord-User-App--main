🎵 Spotify Now Playing Card (Discord User App)
Bu proje, Discord'un yeni Kullanıcı Uygulamaları (User Apps) sistemini kullanarak, kullanıcının o an Spotify'da ne dinlediğini şık bir görsel kart (Canvas) olarak paylaşmasını sağlayan bir bot altyapısıdır. Sunucu bağımsız çalışır; yani botu hesabınıza bir kez eklediğinizde her yerde (DM, Grup DM, Sunucular) /spo komutunu kullanabilirsiniz.

🚀 Özellikler
Her Yerde Kullanım: Botu sunucuya eklemek yerine doğrudan hesabınıza kurarak her ortamda komutları tetikleyebilirsiniz.

Dinamik Görselleştirme: Spotify verilerini (şarkı adı, sanatçı, albüm kapağı) canvas kütüphanesi ile anlık olarak işler.

Modern Discord API: Discord.js v14 ve en güncel Slash Command yapılandırması kullanılmıştır.

🛠️ Kurulum
1. Gereksinimler
Node.js (v16.11.0 veya üstü).

Discord Bot Token.

Canvas kütüphanesi için gerekli sistem paketleri.

2. Adımlar
Depoyu klonlayın: git clone [https://github.com/kullaniciadi/proje-adi.git](https://github.com/kullaniciadi/proje-adi.git).

Klasöre girin: cd proje-adi.

Gerekli kütüphaneleri kurun: npm install.

index.js dosyasındaki TOKEN ve CLIENT_ID kısımlarını kendi bilgilerinizle doldurun.

Botu başlatın: node index.js.

⚙️ Discord Developer Portal Ayarları
Botun DM'lerde çalışması ve şarkı verisini okuması için şu ayarlar şarttır:

Bot Sekmesi: Presence Intent ve Server Members Intent seçeneklerini aktif edin.

Installation Sekmesi: User Install seçeneğini işaretleyin ve applications.commands kapsamını (scope) ekleyin.

Kurulum: Oluşturulan "Install Link" üzerinden botu "Hesabınıza Ekle" (Add to my account) diyerek yetkilendirin.

📖 Kullanım
Herhangi bir sohbet kutusuna /spo yazın. Eğer Spotify üzerinden bir şarkı dinliyorsanız, bot sizin için otomatik olarak o anki şarkının bilgilerini içeren bir kart oluşturup gönderecektir.

📝 Notlar
Botun şarkı verisini çekebilmesi için kullanıcının durumunda (Presence) Spotify'ın görünüyor olması ve botla en az bir ortak sunucuda bulunulması gerekir.

Bu proje WaseMaster altyapısı kapsamında geliştirilmiştir.
