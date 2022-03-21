AFRAME.registerComponent('switch-card', {
  init: function () {
    let self = this.el;
    let id = self.getAttribute('id');
    let cardEl = document.querySelector('#card');

    let cardTitle = document.querySelector('#card-title');
    let cardText = document.querySelector('#card-text');

    // show card
    self.addEventListener('click', function () {
      cardEl.classList.add('showCard');
      if (id == 'bm') {
        cardTitle.textContent = 'Tanzmaske, Bali';
        cardText.textContent =
          'Diese Tanzmaske stellt einen Charakter dar, der als Patih Manis bekannt ist, der Premierminister am königlichen Hof war. Er hat ein mildes Temperament, was sich in seinem Gesichtsausdruck widerspiegelt. Das Topeng-Tanzdrama ist eine wichtige traditionelle Unterhaltungsform auf der Insel Bali, Indonesien. Die Geschichten, die in diesem Drama namens Babad Dalem dargestellt werden, erzählen die Geschichte der Inseln Bali und Java, wie sie von den Hofdichtern der regionalen Könige beschrieben wurde. Der Tanz ist wohl schon um 840 n. Chr. entstanden.';
      } else if (id == 'gm') {
        cardTitle.textContent = 'Vaquero Maske, Guatemala';
        cardText.textContent =
          'Wird bei Jahresfesten zusammen mit einem Kostüm bei Tänzen und Spielen verwendet. Verbindet spanische wie indianische Traditionen mit dem Christentum und der lokalen Religion. Masken und deren Tänze entstanden erst durch die Kolonialisierung. Dient dazu Kolonialisten zu karikieren, um die gemeinsame Geschichte zu       verarbeiten und ist Identitätsbildend.';
      } else if (id == 'ikm') {
        cardTitle.textContent = 'Theyyam Maske aus Kerala';
        cardText.textContent =
          'Findet  in einem rituellen Theater Verwendung. Sie spiegelt die zentrale Religion des Hinduismus wieder. Material: Holz, bunt bemalt.  Die Maske ist beseelt, dadurch wird der Maskenträger Teil der Gottheit.';
      } else if (id == 'icm') {
        cardTitle.textContent = 'Gägon Vogelmaske, Elfenbeinküste';
        cardText.textContent =
          'Vogelmaske stellt stilisierten Nashornvogel dar. Dient bei Initiationsritualen und Tänzen als Wächter und Unterhalter. Ethnie: Dan von der Elfenbeinküste';
      } else if (id == 'jm') {
        cardTitle.textContent = 'Nô-Maske, Ko-omote (junges Mädchen), Japan';
        cardText.textContent =
          'Gipsmodell. Masken bestehen sonst aus leichtem Holz und stellen Gesichter bzw. Charaktere dar. Ursprung im Theater mit Rückbezug auf die vorgeschichtliche Mythologie. Die heute bekannte Form entwickelte sich seit dem 17. Jahrhundert';
      } else if (id == 'km') {
        cardTitle.textContent = 'Kiwebe Maske, Kongo';
        cardText.textContent =
          'Genutzt vom Stamm der Songye und Luba im Ostkongo. Für Zeremonien der Kiwebe Gesellschaft. Dient zur Stabilisierung der sozialen Ordnung bzw. Balance. Wird auch bei Initiationsriten verwendet.';
      } else if (id == 'pngm') {
        cardTitle.textContent = 'Männerhausmaske der Iatmul, Papua Neuguinea';
        cardText.textContent =
          'Diese Maskenkultur der Iatmul aus dem Sepik-Gebiet in Papua Neuguineas ist ursprünglich auf übermodellierte Menschenschädel zurückzuführen. Bei den latmul wurden die Schädel bedeutender, verstorbener Männer mit rötlicher Tonerde bemalt. Man glaubte, ihnen dadurch das Gesicht zurückzugeben. Die Bemalung des Gesichtes entsprach jenen Mustern die der verstorbene auch zu Lebzeiten bei Zeremonien getragen hatte. Diese übermodellierten Ahnen-Schädel wurden im Männerhaus aufbewahrt und verehrt. Die Männerhaus-Versammlungen hatten wohl gesellschaftsordnende Funktionen und dienten der Friedenswahrung. Diese Iatmulmaske ist eine modellierte Tonmaske, die mit Kauri Muscheln verziert ist. Über der Stirn und der Maske entlang sind Zöpfe aus echtem Papua-Kraushaar angebracht. Die Maske hat das Maß eines menschlichen Kopfs.';
      } else if (id == 'pm') {
        cardTitle.textContent = 'Caretos Maske, Podence in Portugal';
        cardText.textContent =
          'Fasnachtsfigur mit roter Maske und buntem Kostüm. Stellt eine Teufelsfigur dar. Vor allem am Fasnachtssonntag und -dienstag sind sie auf den Straßen unterwegs. Seit 1985 sind die Caretos de Podence ein eingetragener Kulturverein.';
      } else if (id == 'scm') {
        cardTitle.textContent = 'Hahoe Maske, Südkorea';
        cardText.textContent =
          'Stammt aus dem Dorf Hahoe an der Südküste Südkoreas. Wird für den traditionellen Maskentanz verwendet um die göttlichen Wesen zu verehren, welche das Dorf schützen. Es gibt acht Szenen und neun Charaktere die im Maskenspiel des Dorfes im Mittelpunkt stehen';
      } else if (id == 'slm') {
        cardTitle.textContent = 'Garra Yakka, Sri Lanka';
        cardText.textContent =
          'Charakter aus den Teufelstänzen, welche nicht nur Dämonen vertreiben soll, sondern auch zur Heilung von Krankheiten beiträgt. Bis heute werden die nächtlichen Rituale durchgeführt. Echte Masken sind, u.a. aufgrund der Beliebtheit als Souvenir, sehr selten geworden.';
      } else if (id == 'tm') {
        cardTitle.textContent = 'Mahakala Maske, Tibet';
        cardText.textContent =
          'Mahakala ist ein Beschützer des buddhistischen Glaubens. Er wird immer mit den fünf Schädeln, die seinen Kopf krönen, und dem dritten Auge dargestellt. Die fünf Schädel, die seine Krone schmücken, sind Symbole für die Umwandlung der fünf negativen Emotionen in die fünf Weisheiten. Sein Gesicht soll böse Geister von dem Ort, den er beschützt, abschrecken und negative Energie, schlechte Gedanken und falsche Handlungen fernhalten. Die Maske wird oft in Häusern aufgehängt und sie ist auch ein begehrtes Souvenier. Mahakala ist die am häufigsten reproduzierte Maske im Himalaya-Gebiet. Man findet sie u.a. in Tibet, Nepal, Bhutan und Nordindien.';
      } else if (id == 'vm') {
        cardTitle.textContent = 'Narro, Villingen';
        cardText.textContent =
          'Der Narro ist die bekannteste Figur der Villinger Fasnet. Er wurde bis zur Mitte des 18. Jahrhunderts als „Masquera“ bezeichnet. Auch heute noch wird für die historischen Fasnetsfiguren das Wort „Maschgere“ im Villinger Dialekt verwendet. Der Narro gehört zur Gruppe der Weißnarren mit weißem Leinengewand, auf das mit Ölfarben Figuren, Tiere und Blumen gemalt sind.';
      }
    });

    //hide card
    self.addEventListener('animationcomplete__pos-', function () {
      cardEl.classList.remove('showCard');
    });
  },
});
