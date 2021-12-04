/* Dugme nakon unosa imena i prezimena u prijavi, pojavljuju se polja za telefon, email i adresu */ 
function dalje1() {
  
    /* Javlja poruku korisniku ako nije popunio polje za ime i prezime */
    if (document.forms[0].ime.value=='') {
      alert("Unesi ime!");
      document.forms[0].ime.focus();
      return false;
    }
    if (document.forms[0].prezime.value=='') {
      alert("Unesi prezime!");
      document.forms[0].ime.focus();
      return false;
    } else{
      var x = document.getElementById("dalje1");
    x.style.display = "block";
    var y = document.getElementById("dugmedalje2");
    y.style.display = "block";
    var z = document.getElementById("dugmedalje1");
    z.style.display = "none";
    }
  }
  
  function dalje2() {
    /* Javlja poruku korisniku ako nije popunio polje za broj telefona */
    if (document.forms[1].telefon.value=='') {
      alert("Nisi uneleo broj telefona!");
      document.forms[1].telefon.focus();
      return false;
    }
    
    /* Javlja poruku korisniku ako nije popunio polje za email */
    if (document.forms[1].mejl.value=='') {
      alert("Nisi uneo e-mail adresu!");
      document.forms[1].mejl.focus();
      return false;
    }
  
    /* Javlja poruku korisniku ako nije popunio polje email-a sa znakom @ */
    if(document.forms[1].mejl.value.indexOf('@') == -1){
      alert("Nisi uneo e-mail adresu u odgovarajucem formatu! (mora sadrzati @)");
      document.forms[1].mejl.focus();
      return false;
    }
        
    /* Javlja poruku korisniku ako nije popunio polje za adresu */
    if (document.forms[1].adresa.value=='') {
      alert("Nisi uneo adresu!");
      document.forms[1].adresa.focus();
      return false;
    }
  
    else{
      var x = document.getElementById("dalje2");
      x.style.display = "block";
      var y = document.getElementById("dugmedalje3");
      y.style.display = "block";
      var z = document.getElementById("dugmedalje2");
      z.style.display = "none";
    }
    
  }
  
  function dalje3() {
    /* Javlja poruku korisniku ako nije popunio polje za sifru */
    if (document.forms[2].sifra.value=='') {
      alert("Nisi uneo šifru!");
      document.forms[2].telefon.focus();
      return false;
    }
    
    /* Javlja poruku korisniku ako nije popunio polje za potvrdu sifre */
    if (document.forms[2].psifra.value=='') {
      alert("Nisi uneo potvrdu šifre!");
      document.forms[2].mejl.focus();
      return false;
    }
  
    else{
      var x = document.getElementById("dalje3");
      x.style.display = "block";
      var y = document.getElementById("dugmedalje4");
      y.style.display = "block";
      var z = document.getElementById("dugmedalje3");
      z.style.display = "none";
    }
    
  }
  
  function dalje4() {
  
    confirm("Da li želiš da završiš zakazivanjem treninga?");
    alert("Uspešno si zakazao prvi trening u Hulk teretani! Želimo ti uspešan ostatak dana! :)");

    var x = document.getElementById("dalje3");
    x.style.display = "none";
    var y = document.getElementById("dugmedalje4");
    y.style.display = "none";
    var z = document.getElementById("dugmedalje3");
    z.style.display = "none";
    var m = document.getElementById("dalje2");
    m.style.display = "none";
    var n = document.getElementById("dugmedalje2");
    n.style.display = "none";
    var p = document.getElementById("dalje1");
    p.style.display = "none";
    var q = document.getElementById("dugmedalje1");
    q.style.display = "block";
    
  }
  
  /* Motivaciona slika meseca fade in and out */
  
  $(document).ready(function(){
    $("#za_motivaciju").focus(function(){
      $("#slika_motivacija").css("display", "inline").fadeOut(6100);
    });
  });
  $(document).ready(function(){
    $("#slika_motivacija").hide();
  });
  
  
      