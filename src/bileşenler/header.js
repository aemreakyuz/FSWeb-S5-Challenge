// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//

const Header = (baslik, tarih, yazi) => {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header");
  document.body.append(headerContainer);

  const tarihSpan = document.createElement("span");
  tarihSpan.classList.add("date");
  tarihSpan.textContent = tarih;
  headerContainer.appendChild(tarihSpan);

  const title = document.createElement("h1");
  title.textContent = baslik;
  headerContainer.appendChild(title);

  const text = document.createElement("span");
  text.classList.add("temp");
  text.textContent = yazi;
  headerContainer.appendChild(text);

  return headerContainer;
};

// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//

const headerEkleyici = (secici) => {
  const newHeader = document.querySelector(secici);

  newHeader.append(Header("Teknoloji Zamanı", new Date(), "HelloWorld"));

  return newHeader;
};

// headerEkleyici(".header-container");

// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

export { Header, headerEkleyici };
