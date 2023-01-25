# Workshop React, Api og Github Page

## Lenker og annet nyttig under workshoppen

```json
   "homepage": "http://<ditt-github-navn>.github.io/restaurantguiden,"
```

```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
```

Mattilsynet api: "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim"

## Workshop

Hva trenger man på forhånd: Node, npm, git, og Github bruker

### Web app

Applikasjonen vi skal deploye er en REACT applikasjon som henter inn restauranter i trondheim fra et åpent api mattilsynets tilbyr. Vi skal hente ut restaurantene og karakteren mattilsynet, så får dere en liten guide over dere trygt kan gå ut å spise i trondheim og hvor dere kanskje burde unngå. Hvor vi bruker vite som utvilingsverkøty.

- Åpne terminalen og naviger til ønsket sted å legge prosjektet

- (Optional) eventuelt lag en ny mappe for å lagre prosejektet

  Eksempel: `mkdir workshops`
  naviger inn i mappen: `cd workshops`

- For å opprette prosjektet med vite:

  npm: `npm create vite@latest`

  project name: restaurantguiden

  velg `React` som rammeverk og `JavaScript`

- Kjør opp appen:

  - naviger inn i prosjektet: `cd restaurantguiden`
  - installer dependencies

    npm: `npm install`

  - Åpne prosjektet i deres code editor, i vs code kjør i terminalen: `code .`

  - kjør appen og åpne localhost linken:

    npm: `npm run dev`

  - Slett innholdet i App.jsx og skriv en enkel hello world og se at det skjer endringer

  - Slett index.css og slett importen i main.jsx
  - slett innholdet i app.css og kopier innholdet i app.css som ligger i src mappen fra bredvid.no/ivdagene

### Push appen med git

Neste steg er å initiere prosjektet med git og pushe det til github. I terminalen kjør kommandoene:

- Initier git med:

  `git init`

- Legg til alle filene

  `git add .`

- Commit endringene

  `git commit -m "initial commit"`

- Gå til github og lag repo, kan kalle repoet det samme som prosjektet (navnet på repoet vil også være med i Url'en når vi deployer med Github pages)
- Kopier linken og gå tilbake til terminalen og skriv inn:

  `git remote add origin <link>`

- Set hovedbranchen til main og push comitten til github

  ```
    git branch -M main
    git push -u origin main
  ```

- Oppdater git og se at koden ligger der

### Github pages

- Installer github pages:

  npm: `npm install gh-pages`

- I vite.config.js legg til:

  `base "/<repo>/"`

- I package.json legg til:

  øverst i filen: => vil være Url'en til nettsiden

  ```json
    "homepage": "http://<ditt-github-navn>.github.io/<repo>,"
  ```

  I script taggen under "dev":

  ```json
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
  ```

- Legg til endringer, commit og push

  ```
    git add .
    git commit -m "configure gh-pages"
    git push
  ```

- Kjør:

  npm: `npm run deploy`

- Legg til endringer, commit og push

  ```
    git add .
    git commit -m "setup gh-pages"
    git push
  ```

- Gå til github, man kan nå se gh-pages som en egen branch

- Sjekk at appen er deployet
- gå til: http://<ditt-github-navn>.github.io/<repo>

## Gjøres sammen

### Oppgave 1 - Hente inn data fra apiet

1. Skriv fetch funksjon som henter data fra endepunktet "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim" og console logge daten
2. Gjøre det om til en funksjon og bruke useEffect til å hente dataen når siden lastes inn
3. Lagre datasettet i en useState

### Oppgave 2 - Vise frem dataen

1. Mappe gjennom dataen og hente ut navnet og totalkarakteren

- pushe endringene vi har gjort :

  ```
    git add .
    git commit -m "fetch restaurantsdata"
    git push
  ```

## Redeploye appen

- Kjør:

  npm: `npm run deploy`

## Gjøres indivduelt

### Oppgave 3 - Sorter restaurantene på total karakteren

<details><summary>Hint</summary>

Bruk [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) funksjonen

</details>

<details><summary>LF</summary>

```Javascript
    {restaurants
        .sort((a, b) => a.total_karakter - b.total_karakter)
        .map((restaurant, index) => (
        <Restaurant key={index} restaurant={restaurant}></Restaurant>
        ))}
```

</details>

### Oppgave 4 - Filtrer dataen

#### Vanskelihetsgrad 1:

Filtrer ut restauranter med en type karakter

<details><summary>Hint</summary>

Bruk [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) funksjonen

</details>

<details><summary>LF</summary>

```Javascript
    .filter((restaurant) => restaurant.total_karakter === "3")
```

</details>

#### Vanskelihetsgrad 2:

Lag en filter meny som lar deg hente ut Restauranter med en eller flere karakterer. F.eks karakter 0, eller med karekter 0 og 1

### Oppgave 5 - Hent ut 5 første restaurantene

<details><summary>Hint</summary>

Bruk [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) funksjonen

</details>

<details><summary>LF</summary>

```Javascript
    restaurants.slice(0, 5)
```

</details>

### Oppgave 6 - Finn en random restaurant

<details><summary>Hint 1</summary>

Bruk [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) funksjonen, som gir et random tall mellom 0 og 1

</details>

<details><summary>Hint 2</summary>

Bruk lengden av restaurant listen som max verdi, for å få en verdi mellom 0 og lengden av restaurant listen

</details>

<details><summary>Hint 3</summary>

Bruk Math.floor() for å ikke få desimaler

</details>

<details><summary>Hint 3</summary>

Bruk verdien veriden for å hente ut restauranten på indeksen tilsvarende den randome veriden

</details>

<details><summary>LF</summary>

```Javascript

  function getRandomRestaurants(restaurants) {
    return restaurants[Math.floor(Math.random() * restaurants.length)];
  }

  console.log(getRandomRestaurants(restaurants));
```

</details>

Lag en knapp som henter den randome restauranten når man klikker på den

Vis restauranten hvis man har trykket på knappen

<details><summary>Hint </summary>

Lagre restauranten i en local variabel, og vis informasjonen du ønsker hvis knappen er klikket

</details>

<details><summary>LF</summary>

```Javascript

  const [randomRestaurant, setRandomRestaurant] = useState({});

  function getRandomRestaurant(restaurants) {
    setRandomRestaurant(
      restaurants[Math.floor(Math.random() * restaurants.length)]
    );
  }

    //i return
  <button
    className="random-button"
    onClick={() => getRandomRestaurant(restaurants)}
    >
        random restaurant
    </button>
    {randomRestaurant && (
        <>
            <h1>{randomRestaurant.navn}</h1>
        </>
    )}
```

</details>
