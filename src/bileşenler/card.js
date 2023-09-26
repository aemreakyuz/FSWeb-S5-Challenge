import axios from "axios";

// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

const Card = (makale) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  document.body.append(cardContainer);

  const headText = document.createElement("div");
  headText.classList.add("headline");
  headText.textContent = makale.anabaslik;
  cardContainer.appendChild(headText);

  const yazar = document.createElement("div");
  yazar.classList.add("author");
  cardContainer.appendChild(yazar);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  yazar.appendChild(imgContainer);

  const image = document.createElement("img");
  image.src = makale.yazarFoto;
  imgContainer.appendChild(image);

  const yazarName = document.createElement("span");
  yazarName.textContent = `${makale.yazarAdi} tarafından`;
  yazar.appendChild(yazarName);

  cardContainer.setAttribute("data-id", makale.id);

  cardContainer.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return cardContainer;
};

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

const cardEkleyici = (secici) => {
  const updatedCardContainer = document.querySelector(secici);

  axios.get("http://localhost:5001/api/makaleler").then(function (res) {
    const haberler = res.data.makaleleler;
    const haberlerArray = Object.values(haberler).flat();
    haberlerArray.forEach((haber) => {
      const card = Card(haber);
      updatedCardContainer.append(card);
    });
  });
};

export { Card, cardEkleyici };
