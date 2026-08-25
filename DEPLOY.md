# Habibi web sitesi nasıl açılır?

## En kolay yol: Vercel + Supabase
1. Projeyi GitHub'a yükle.
2. Vercel'de "New Project" seç ve GitHub reposunu bağla.
3. `apps/admin` klasörü yerine bu web klasörünü proje kökü olarak kullan.
4. Environment Variables bölümüne `.env.example` içindeki iki Supabase değerini gir.
5. Deploy'a bas.
6. Alan adını (ör. habibifal.com) Vercel'deki Domains bölümünden bağla.

## Mobil uygulamalar
`Habibi_Production_Starter.zip` içindeki `apps/mobile` klasörü Expo/EAS ile iOS ve Android için build edilir.
- Apple Developer hesabı + App Store Connect gerekir.
- Google Play Console hesabı gerekir.
- Uygulama kimlikleri: `com.habibi.fal`

## Gerçek ödeme
Kredi satışı için ödeme sağlayıcısı ve App Store/Google Play kurallarına uygun dijital ürün satın alma akışı ayrıca bağlanmalıdır.

## Admin güvenliği
Admin sayfası canlıya alınmadan önce Supabase Auth + server-side role kontrolü zorunlu hale getirilmelidir.
