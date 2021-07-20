jQuery(document).ready(function() {
var arrLang = {
 'polish': {
   'contactNumber':'+ 48 783 966 632',
   'openingTime': 'Pn - Sob: 9:00 - 17:00',
   'home': 'Home',
   'about': 'O nas',
   'why-us': 'Dlaczego my',
   'portfolio': 'Nasze produkty',
   'faq': 'FAQ',
   'contact': 'Kontakt',
   'descriptionLarge':'Nowy punkt widzenia na wyroby z wikliny',
   'descriptionSmall':'Zapoznaj się naszą ofertą',
   'ourProducts':'Nasze produkty',
   'aboutUsDesL':'Kilka słów o nas ...',
   'aboutUsDesS':'Od 20 lat zajmujemy się głównie szyciem legowisk – poduszek dla zwierząt oraz obszyć do koszy wiklinowych, skrzynek drewnianych itp. Szyjemy gotowe produkty ze swoich materiałów oraz wykonujemy szycie na zlecenie klienta z jego materiału. Można u nas zakupić gotowy produkt lub zlecić nam uszycie wybranego elementu według potrzeb klienta.',
   'standsOutHead':'Dlaczego my ?',
   'quality':'Jakość',
   'qualityDes':'Dbamy o najwyższą jakość naszych produktów',
   'experience':'Doświadczenie',
   'experienceDes':'Nasze produkty wytwarzane są przez pracowników z wieloletnim doświadczeniem',
   'tradition':'Tradycja',
   'traditionDes':'Kultywujemy tradycję wytwarzania wszelakich wyrobów z wikliny z której słynie nasze miasto',
   'ourProductsHead':'Nasze produkty',
   'ourProductsHeadDes':'Oferujemy jedynie produkty najwyższej jakości, wytwarzane przez doświadczonych pracowników z wieloletnim doświadczeniem.',
   'allProducts':'Wszystkie',
   'petPillows':'Poduszki dla zwierząt',
   'cottonBags':'Torby bawełniane',
   'shopingBaskets':'Obszycia do koszy zakupowych',
   'furnitureCushions':'Poduszki do mebli ogrodowych',
   'bicycleBaskets':'Kosze rowerowe',
   'petBeds':'Legowiska dla zwierząt',
   'faqDesS':"Często zadawane pytania",
   'faq1q':'Czy mogę osobiście odebrać zamówienie?',
   'faq1a':'Oczywiście, można odebrać zamówienie w punkcie odbioru osobistego, znajdującym się pod adresem: ul. 1000-lecia 29 , 37-420 Rudnik nad Sanem. Przy odbiorze osobistym nie ponosisz dodatkowych kosztów. ',
   'faq2q':'Czy oferujemy sprzedaż detaliczną?',
   'faq2a':'Zajmujemy się tylko sprzedażą hurtową. ',
   'faq3q':'Czy zajmujemy się wyrobem tylko gotowych produktów z wikliny?',
   'faq3a':'Nie, szyjemy gotowe produkty ze swoich materiałów, ale także wykonujemy szycie na zlecenie klienta z jego materiału.',
   'contactHead':'Kontakt z nami',
   'location':'Lokalizacja:',
   'openingTimeFooter':'Godziny otwarcia:',
   'openingTimeDes':'Poniedziałek-Sobota: 9:00 - 17:00',
   'addressEmail':'E-mail',
   'telNumber':'Telefon:',
   'addressDetail':'ul. 1000-lecia 29 37-420 Rudnik nad Sanem',
   'privacyPolicyFooter':'Polityka prywatności',
   'ppdesFooter':'Wszystkie prawa zastrzeżone',
   'sendButton':'Wyślij wiadomość',
   'cookiesDes':'Korzystając z naszej strony zgadzasz się na naszą politykę cookies',
   'cookiesDes2':'Dowiedz się więcej',
   'cookiesButtonDes':'Zgadzam się'

 },
 'english': {
   'contactNumber':'+48 783 966 632',
   'openingTime': 'Mon - Fri: 9AM - 5PM',
   'home': 'Home',
   'about': 'About',
   'why-us': 'Why us',
   'portfolio': 'Our products',
   'faq': 'FAQ',
   'contact': 'Contact',
   'descriptionLarge':'The new point of view on wicker products',
   'descriptionSmall':'See our offer of wicker products',
   'ourProducts':'Our products',
   'aboutUsDesL':'A few words about us...',
   'aboutUsDesS':"For 20 years we have been sewing beds - pillows for animals and hems for wicker baskets, wooden boxes, etc. We sew ready-made products from our own materials and sewing on the customer's request from his material. You can buy a finished product from us or have us sew a selected item according to the customer's needs.",
   'standsOutHead':'Why us ?',
   'quality':'Quality',
   'qualityDes':'We care about the highest quality of our products',
   'experience':'Experience',
   'experienceDes':'Our products are manufactured by employees with many years of experience',
   'tradition':'Tradition',
   'traditionDes':'We cultivate the tradition of producing all kinds of wicker products for which our city is famous',
   'ourProductsHead':'Our products',
   'ourProductsHeadDes':'We offer only the highest quality products, manufactured by experienced employees with many years of experience.',
   'allProducts':'All',
   'petPillows':'Pet pillows',
   'cottonBags':'Cotton bags',
   'shopingBaskets':'Trims for shopping baskets',
   'furnitureCushions':'Garden furniture cushions',
   'bicycleBaskets':'Bicycle baskets',
   'petBeds':'Pet beds',
   'faqDesS':"Frequently asked questions",
   'faq1q':'Can I personally pick up the order?',
   'faq1a':'Of course, you can pick up the order at the personal collection point at ul. 1000-lecia 29, 37-420 Rudnik nad Sanem. There are no additional costs for picking up in person.',
   'faq2q':'Do we offer retail sale?',
   'faq2a':'We only deal with wholesale.',
   'faq3q':'Do we only manufacture ready-made wicker products?',
   'faq3a':"No, we sew finished products from our own materials, but we also sew on the client's request from his material.",
   'contactHead':'Contact Us',
   'location':'Location:',
   'openingTimeFooter':'Opening hours:',
   'openingTimeDes':'Monday-Friday: 9AM - 7PM',
   'addressEmail':'E-mail',
   'telNumber':'Telephone:',
   'addressDetail':'1000-lecia Street 29 37-420 Rudnik nad Sanem Poland',
   'privacyPolicyFooter':'Privacy policy',
   'ppdesFooter':'All rights reserved',
   'sendButton':'Send message',
   'cookiesDes':'By using our website you consent to the website cookies',
   'cookiesDes2':'Find out more',
   'cookiesButtonDes':'I agree'
 },
 'deutsch': {
   'contactNumber':'+48 783 966 632',
   'openingTime': 'Mo - Fr: 9:00 - 17:00',
   'home': 'Home',
   'about': 'Über uns',
   'why-us': 'Warum wir',
   'portfolio': 'Unsere Produkte',
   'faq': 'FAQ',
   'contact': 'Kontakt',
   'descriptionLarge':'Eine neue Sicht auf Korbwaren',
   'descriptionSmall':'Sehen Sie unser Angebot an Korbwaren',
   'ourProducts':'unsere Produkte',
   'aboutUsDesL':'Ein paar Worte über uns ...',
   'aboutUsDesS':'Seit 20 Jahren nähen wir Betten - Kissen für Tiere und Säume für Weidenkörbe, Holzkisten usw. Wir nähen fertige Produkte aus unseren eigenen Materialien und nähen auf Wunsch des Kunden aus seinem Material. Sie können ein fertiges Produkt bei uns kaufen oder einen ausgewählten Artikel nach Kundenwunsch nähen lassen.',
   'standsOutHead':'Warum wir ?',
   'quality':'Qualität',
   'qualityDes':'Wir legen Wert auf höchste Qualität unserer Produkte',
   'experience':'Erfahrung',
   'experienceDes':'Unsere Produkte werden von Mitarbeitern mit langjähriger Erfahrung hergestellt',
   'tradition':'Tradition',
   'traditionDes':'Wir pflegen die Tradition, alle Arten von Weidenprodukten herzustellen, für die unsere Stadt berühmt ist',
   'ourProductsHead':'Unsere Produkte',
   'ourProductsHeadDes':'Wir bieten nur Produkte von höchster Qualität an, die von erfahrenen Mitarbeitern mit langjähriger Erfahrung hergestellt werden.',
   'allProducts':'Alle',
   'petPillows':'Tierkissen',
   'cottonBags':'Baumwolltaschen',
   'shopingBaskets':'Borten für Einkaufskörbe',
   'furnitureCushions':'Gartenmöbelkissen',
   'bicycleBaskets':'Fahrradkörbe',
   'petBeds':'Haustierbetten',
   'faqDesS':"Häufig gestellte Fragen",
   'faq1q':'Kann ich meine Bestellung persönlich abholen?',
   'faq1a':'Selbstverständlich können Sie die Bestellung an der persönlichen Abholstelle bei ul abholen. 1000-lecia 29, 37-420 Rudnik nad Sanem. Für die persönliche Abholung fallen keine zusätzlichen Kosten an. ',
   'faq2q':'Bieten wir Einzelhandel an?',
   'faq2a':'Wir beschäftigen uns nur mit Großhandel. ',
   'faq3q':'Stellen wir nur fertige Korbwaren her ?',
   'faq3a':'Nein, wir nähen fertige Produkte aus unseren eigenen Materialien, aber wir nähen auch auf Wunsch des Kunden aus seinem Material.',
   'contactHead':'Kontaktiere uns',
   'location':'Lokalisierung:',
   'openingTimeFooter':'Öffnungszeiten:',
   'openingTimeDes':'Montag-Freitag: 9:00 - 17:00',
   'addressEmail':'Email',
   'telNumber':'Telefon:',
   'addressDetail':'1000-lecia str. 29 37-420 Rudnik nad Sanem Polen',
   'privacyPolicyFooter':'Datenschutz-Bestimmungen',
   'ppdesFooter':'Alle Rechte vorbehalten',
   'sendButton':'Nachricht schicken',
   'cookiesDes':'Durch die Nutzung unserer Website stimmen Sie den Website-Cookies zu',
   'cookiesDes2':'mehr Informationen',
   'cookiesButtonDes':'Genau'
 }
};

// Process translation
$(function() {
 $('.translate').click(function() {
   var lang = $(this).attr('id');
   $('.lang').each(function(index, item) {
     $(this).text(arrLang[lang][$(this).attr('key')]);
   });
 });
});

// Process translation placeholders
  var phdictronary = {
          "pl": {
  
              "fullName" : "Imię i nazwisko",
              "addressEmail" : "Adres e-mail",
              "subjectEmail" : "Temat",
              "message" : "Wiadomość"
          },
          "en": {
            
              "fullName" : "First name and last name",
              "addressEmail" : "E-mail adress",
              "subjectEmail" : "Subject",
              "message" : "Message"
          },
          "de": {
       
            "fullName" : "Vorname und Nachname",
            "addressEmail" : "E-Mail-Adresse",
            "subjectEmail" : "Thema",
            "message" : "Nachricht"
        }
      };
      
      var set_lang = function (phdictronary) {
          $("[data-translate]").each(function(){
             if($(this).is( "input" ) ||$(this).is( "textarea" )  )  {
                $(this).attr('placeholder',phdictronary[$(this).data("translate")] )
             } else{
                 $(this).text(phdictronary[$(this).data("translate")])
             }
          })
      };
  
     // Swap languages when menu changes
    $('#polish').click(function() {

      set_lang(phdictronary.pl);
    });
    $('#english').click(function() {

      set_lang(phdictronary.en);
    });
    $('#deutsch').click(function() {

      set_lang(phdictronary.de);
    });

      // Set initial language to Polish
      set_lang(phdictronary.pl);
 
    });