### Hibák:

A `UserList.tsx` -ben nem létező végpont volt megadva, de mivel a feladat megkövetelte hogy ez kerüljön átalakításra így ez törlésre került.
A `useApi.ts` -ben a `sendPost` és a `sendGet` metódusban lévő hibakezelés nem megfelelően volt megírva, ez a feladatoknál az **1. feladat** résznél ki van fejtve.
A `reportWebVitals.ts` -ben a `reportWebVitals` metódusnál hiányzott a return type, erre az eslint hívta fel a figyelmet, ez a metódus kapott egy `void` visszatérési értéket.

### Telepített csomagok:

**Universal-cookie**:
Általános cookie(süti) kezeléséhez,
`yarn add universal-cookie` parancsal lett telepítve

**Material-UI**:
Széleskörű funckionalitást kínáló lib react alkalmazásokhoz, amiben kész komponensek vannak.
Itt több parancsot kellett futtatni mivel több a Material-UI-hoz több csomag is szükséges hogy megfelelően működjön.
`yarn add @mui/material @emotion/react @emotion/styled`
`yarn add @mui/material @mui/styled-engine-sc styled-components`
`yarn add @mui/icons-material`

**React Bootstrap Typeahead**:
A 2. feladathoz kért komponens
`yarn add react-bootstrap-typeahead`

**Bootstrap**:
A Bootstrap Typeahead-hez szükséges volt feltelepíteni hogy az alapértelmezett megjelenés jól működjön.
`yarn add bootstrap`
Emellett az `index.tsx`-be importálni kellett a bootstrap css-t is:
`import 'bootstrap/dist/css/bootstrap.css';`

### 1. feladat:

A hibakezelés nem megfelelően volt megírva a `sendPost` és a `sendGet` függvényekben a következők miatt:
Pl. a 401-es hibát nem fogja a try catch block megfogni, mivel ha jön válasz a backendről, akkor a fetch sikeresnek fog minősülni. A catch ágba akkor fog belefutni ha valamilyen hálózati hiba jön, azaz nem fut le sikeresen a fetch, vagy ha valamilyen javascript hiba keletkezik, például nem sikerül a bejövő JSON parse-olása a `response.json()` függvénynél.
Ezek miattt a try részben kell ellenőrizni az esetleges hibákat amiket sikeres lefutás után a backend dobhat.
Például ha az `axios` csomaggal lenne kezelve a hívás, akkor már a 401-es hiba és a többi backendről visszajött hiba a catch ágban lenne kezelve.

### 2. feladat:

A login oldal elkészítéséhez létre lett hozva a `Login.tsx` file.
A `Login` komponens fel lett véve az `App.tsx`-be a route-ok közé, a `/login` útvonalra.
A Login koponensben létre lett hozva 2 input mező a felhasználónévnek és a jelszónak.
A bejelentkezés gomb-al, vagy a jelszó beírása után az enter-el lehet belépni az alkalmazásba.
Felhasználónév: admin
Jelszó: password
Rossz belépési adatok megadása esetén hiba üzenetet fog kiírni.
Sikeres belépés után az app elmenti a cookie-k közé hogy a felhasználó belépett, `isLoggedIn` változóként aminek értéke `true` vagy `false` lehet.
Ennek ellenőrzéséhez készült egy `AuthChecker` komponens ami az `App.tsx`-ben található.
Ez a komponens lényegében figyeli a cookie-ban lévő `isLoggedIn` értéket és ha az false vagy nem létezik, automatikusan a `/login`-ra navigál.

### 3. feladat:

Ez a szűrő felület, csak bejelentkezés után érhető el.
Itt fel lett használva a statikus tömb, és az api-n keresztül lévő hívás, a lista elemek és az input mező törölve lett.
Ehelyett a bootstrap által biztosított `React Bootstrap Typeahead` komponenst kellet felhasználni.
Került ide pluszba egy logout gomb, ez a felhasználó kiléptetésére szolgál, false-ra állítja az `isLoggedIn` cookiet és átnavigál a `/login` oldalra.

### 4. feladat:

A dockeresítéshez szükség volt egy `Dockerfile` -ra és egy `docker-compose.yaml` file-ra.
A Dockerfile-ba szükségesek azok a parancsok amik a konténer indulásakor le kell fussanak.
A docker-compose.yaml-be meg a docker környezet verziói és nevei szüksések.
A gyökérmappában `docker compose up` parancsal indítható az alkalmazás, és saját gépen a `http://localhost:3001` címen található meg buildelés és indítás után amit a docker automatikusan megcsinál az előző parancs kiadása után.
