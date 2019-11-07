# Webdevelopment Basis-Setup & responsive Website in React

#### AGENDA

* Terminal Setup und Kommandos
* (bash profile = optional)
* Nodejs Setup und npm Kommandos
* SublimeText installieren und starten
* React installieren und erste App zum Laufen bringen
* Erste Schritte in React
* The Cat Empire
* (Wenn noch Zeit ist) Advanced React: State, Hooks & Context

#### iTerm2 installieren

```
https://iterm2.com/
```

#### iTerm2 basics

<details>
    <summary>Kommandos</summary>

&nbsp;

neuer tab
```
⌘ + d
```

tab schließen
```
⌘ + w
```

tab wechseln
```
⌘  + ← →
```

fenster teilen
```
⌘ + d
```

geteiltes fenster schließen
```
⌘ + w
```

geteiltes fenster wechseln
```
⌘ + alt + ← →
```

autocomplete
```
TAB
```

</details>

<details>
    <summary>Neuen Tab im selben Ordner öffnen</summary>

&nbsp;

* iTerm2 öffnen.
* Preferences öffnen.
* Profiles öffnen.
* General öffnen.
* 'Reuse previous session's directory' auswählen.
</details>

#### nodejs installieren LTS / Current

```
https://nodejs.org/en/
```

#### SublimeText installieren

```
https://www.sublimetext.com/
```

#### terminal basics

<details>
    <summary>Navigation & Übersicht</summary>

&nbsp;

Zum Home Verzeichnis
```
cd
```

Zum letzten Verzeichnis
```
cd -
```

Ordnerinhalt komplett ausgeben
```
ls -la
```

Einen Ordner rauf
```
cd ..
```

In einen Ordner gehen
```
cd verzeichnisname
```

letzte Befehle durchgehen
```
↑
```

letzte Eingabe nehmen und an der Stelle ausgeben
```
!!
```

Befehl abbrechen
```
strg + c
```

</details>

<details>
    <summary>Erstellen & Löschen</summary>

&nbsp;

Neue Datei anlegen
```
touch dateiname
```

Neuen Ordner anlegen
```
mkdir ordnername
```

Datei löschen
```
rm dateiname
```

Ordner inklusive Inhalte löschen
```
rm -r
```
</details>

#### bash profile und Aliase

Entweder ins Home Verzeichnis navigieren und dort die Datei erstellen (1)
oder von beliebiger location aus (2)

(1) bash profile im Home Verzeichnis erstellen
```
cd
touch .bash_profile
```

(2) bash profile erstellen beliebiger Ort (alt + n = tilde)
```
touch ~/.bash_profile
```

<details>
    <summary>Sinnvolle Aliase</summary>

&nbsp;

```
alias ll='ls -la'
```

```
alias cra='create-react-app'
```

```
alias bashp='subl ~/.bash_profile'
alias bashs='source ~/.bash_profile'
```
</details>

#### nodejs und npm Kommandos

Versionsnummern erhalten und damit sicherstellen, dass beides installiert wurde
```
node -v
npm -v
```

Ein neues npm-Modul global installieren
```
npm i -g modulname
```

Package-Manager yarn global installieren
```
npm i -g yarn
```

yarn Versionsnummer abrufen
```
yarn -v
```

| npm lang | npm kurz | yarn Äquivalent |
|-|-|-|
| npm install | npm i | yarn | 
| npm install packageName | npm i packageName | yarn add packageName | 
| npm install --global packageName | npm i -g packageName | yarn global add packageName | 

#### react installieren und app generieren

Mit yarn global hinzufügen
```
yarn global add create-react-app
```

Den development-Ordner erstellen und reinnavigieren
```
cd
mkdir development
cd development
```

React app generieren
```
cra responsive
cd responsive
```