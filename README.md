# CiftlikApp

Bu uygulama büyükbaş hayvan çiftliklerinde kullanılmak üzere tasarlanmıştır. Çiftlikler bu uygulama sayesinde kapasitelerini artırarak üyelerine özel bir panel sunabilir.

Uygulama ile kullanıcılar:

- Çiftlikten canlı kamera yayınlarını izleyebilir,
- Hayvan sahiplenebilir,
- Sahiplendikleri hayvanların masraflarını takip edebilir,
- Hayvan sağlık durumlarını görüntüleyebilir.

## Başlangıç

Bu depo PHP tabanlı [Laravel](https://laravel.com/) çatısı ile geliştirilmek üzere hazırlanmıştır. Varsayılan veritabanı olarak Microsoft SQL Server kullanılacak şekilde örnek yapılandırma sağlanmıştır.

### Gereksinimler

- PHP 8.1+
- Composer
- MSSQL sunucusu


### Kurulum

```bash
composer install
cp .env.example .env
# .env dosyasında MSSQL bilgilerinizi düzenleyin
php artisan key:generate
php artisan serve
```

`public/index.php` dosyası Laravel uygulamasını başlatır. Gerekli dizin yapısı oluşturulmuştur ancak bağımlılıkların yüklenmesi için `composer install` komutu çalıştırılmalıdır.


## Katkıda Bulunma

Pull request'ler kabul edilir. Büyük değişiklikler için lütfen önce bir tartışma açınız.
