const menulinks=document.querySelector(".menu_links");
const coloseSepet =document.querySelector(".bi-x-square-fill");
const bag=document.querySelector(".bi-bag")
const bagCount=document.querySelector(".bagCount")
const sepet=document.querySelector(".sepet_area")
const urunler=document.querySelector(".products")
const kitapEkle=document.querySelector(".booksStore")


function kontrolEt() {
    var productsDiv = document.querySelector(".products");
    var sepetBosMesaji = document.getElementById("sepetBosMesaji");

    if (!productsDiv.firstChild) {
        sepetBosMesaji.style.display = "block";
    }
}

document.addEventListener("Load", function () {
    kontrolEt();
});

function toggleSepet() {
  if (sepet.style.display === "none" || sepet.style.display === "") {
    sepet.style.display = "block";
  } else {
    sepet.style.display = "none";
  }
}
kitapEkle.addEventListener("click",(e)=>{
    
    if(e.target.classList.contains("basketButton"))
    


    {
        let yeniUrun = document.createElement("div");
    yeniUrun.className = "product";
    
    let resim = document.createElement("img");
    
    const alinacakresim=e.target.closest(".bookCard").querySelector("img")
    resim.src = alinacakresim.src;
    resim.alt = "";
    
    var detay = document.createElement("div");
    detay.className = "product_detail";
    
    var yazar = document.createElement("p");
    yazar.textContent =e.target.closest(".bookCard").querySelector(".fos").textContent;
    
    var km = document.createElement("p");
    km.textContent = e.target.closest(".bookCard").querySelector(".bookname").textContent;
    
    var fiyat = document.createElement("span");
    fiyat.className = "prise fw-bolder";
    fiyat.textContent = "130";
    let butonarea=document.createElement("div")
    butonarea.className="butons_area"
    let butonminus=document.createElement("span")
    butonminus.className="buton_minus"
    let eksi=document.createElement("i")
    eksi.className="bi bi-dash"
    let miktar=document.createElement("span")
    miktar.className="quantity"
    miktar.textContent="1"
    let butonplus=document.createElement("span")
    butonplus.className="buton_plus"
    let artı=document.createElement("i")
    artı.className="bi bi-plus"
    
    var kaldır = document.createElement("p");
    kaldır.className = "fw-bolder sepet_remove";
    kaldır.textContent = "Sepetten Kaldır";
    detay.appendChild(yazar);
    detay.appendChild(km);
    detay.appendChild(fiyat);
    detay.appendChild(document.createElement("br"));
    detay.appendChild(kaldır);
    butonarea.appendChild(butonminus)
    butonminus.appendChild(eksi)
    butonarea.appendChild(miktar)
    butonarea.appendChild(butonplus)
    butonplus.appendChild(artı)
    yeniUrun.appendChild(resim);
    yeniUrun.appendChild(detay);
    yeniUrun.appendChild(butonarea)
    
    // Yeni ürünü "products" div'inin altına ekleyin
    document.querySelector(".products").appendChild(yeniUrun);
    
    }
})

urunler.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.classList.contains("sepet_remove")) {
        e.target.closest(".product").remove();
        kontrolEt()
    } else if (e.target.classList.contains('bi-plus')) {
        const quantityElement = e.target.closest(".butons_area").querySelector(".quantity");
        const fiyatElement = e.target.closest(".product").querySelector(".prise");
        let currentFiyat = 130;

        let currentQuantity = parseInt(quantityElement.textContent);
        currentQuantity++;
        quantityElement.textContent = currentQuantity;
        fiyatElement.textContent = currentFiyat*currentQuantity;

    } else if (e.target.classList.contains('bi-dash')) {
        const quantityElement = e.target.closest(".butons_area").querySelector(".quantity");
        const fiyatElement = e.target.closest(".product").querySelector(".prise");
        let currentFiyat = 130;

        let currentQuantity = parseInt(quantityElement.textContent);

        if (currentQuantity > 0) {
            currentQuantity--;
            quantityElement.textContent = currentQuantity;
            fiyatElement.textContent = currentFiyat*currentQuantity;
        }
        if(currentQuantity==0){
            e.target.closest(".product").remove();
            kontrolEt()
        }
    }
});

function fiyatHesapla(quantity, currentFiyat) {
    return quantity * currentFiyat;
}


bag.addEventListener("click", toggleSepet);

bagCount.addEventListener("click", toggleSepet);

coloseSepet.addEventListener("click",()=>{
    sepet.style.display="none"

})

 menulinks.addEventListener("click",(e)=>{
    console.log(e.target.tagName)
    if(e.target.tagName == "LI")
    {
        menulinks.querySelectorAll("LI ,UL").forEach((p)=>{
            p.classList.remove("bi-bookmark-fill")
            p.classList.remove("filter_active")
        })
        e.target.classList.add("bi-bookmark-fill")
        e.target.classList.add("filter_active")
    }
    

 })


 function ekle() {
    // Yeni ürün öğesini oluşturun
    
    // Ürün öğesini birleştirin
    
}
