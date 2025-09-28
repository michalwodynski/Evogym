# Gym Website - React TypeScript Application

## 📋 Opis Projektu

Nowoczesna, responsywna strona internetowa dla siłowni zbudowana w React z TypeScript. Aplikacja prezentuje kompletną ofertę klubu fitness z intuicyjną nawigacją, dynamicznym przewijaniem i mobilnym menu hamburgerowym. Projekt został zaprojektowany z naciskiem na user experience i nowoczesną estetykę.

## 🚀 Technologie

- **React 18** - biblioteka do budowania interfejsu użytkownika
- **TypeScript** - typowane rozszerzenie JavaScript dla lepszej jakości kodu
- **Tailwind CSS** - framework CSS do szybkiego stylowania
- **Vite** - szybkie narzędzie do budowania aplikacji
- **Heroicons** - ikony SVG dla React
- **React Hooks** - zarządzanie stanem i efektami ubocznymi

## 🎯 Funkcjonalności

### ✨ Główne Cechy
- **Responsywna nawigacja** z dynamicznym tłem przy przewijaniu
- **Menu mobilne** typu hamburger dla urządzeń o mniejszych ekranach
- **Smooth scrolling** między sekcjami strony
- **Zarządzanie stanem** aktywnej sekcji i pozycji przewijania
- **Custom hook** dla media queries (`useMediaQuery`)

### 📱 Sekcje Strony
- **Home** - strona główna z hero section
- **Benefits** - korzyści z członkostwa w siłowni
- **Our Classes** - oferta zajęć grupowych
- **Contact Us** - formularz kontaktowy
- **Footer** - stopka z dodatkowymi informacjami

## 🏗️ Architektura

```
src/
├── App.tsx                 # Główny komponent aplikacji
├── main.tsx               # Punkt wejścia aplikacji
├── index.css              # Globalne style
├── assets/                # Grafiki i logo
├── Hooks/
│   └── useMediaQuery.ts   # Custom hook dla media queries
├── scenes/                # Komponenty sekcji
│   ├── navbar/           # Nawigacja główna
│   ├── home/             # Sekcja główna
│   ├── benefits/         # Sekcja korzyści
│   ├── ourClasses/       # Sekcja zajęć
│   ├── contactUs/        # Formularz kontaktowy
│   └── footer/           # Stopka
└── shared/               # Komponenty współdzielone
    ├── ActionButton.tsx  # Przycisk CTA
    ├── HText.tsx         # Stylowane nagłówki
    └── types.ts          # Definicje typów TypeScript
```

## 🔧 Kluczowe Implementacje

### Dynamiczna Nawigacja
- Automatyczna zmiana tła nawigacji przy przewijaniu
- Podświetlanie aktywnej sekcji
- Powrót do sekcji Home przy przewijaniu na górę

### Responsywność
- Adaptacyjne menu dla różnych rozmiarów ekranów
- Custom hook `useMediaQuery` do zarządzania breakpointami
- Mobile-first approach

### TypeScript Integration
- Pełne typowanie komponentów i props
- Enum dla zarządzania sekcjami strony
- Type safety dla wszystkich funkcji

## 🎨 UI/UX Features

- **Minimalistyczny design** zgodny z nowoczesnymi trendami
- **Płynne animacje** i przejścia
- **Intuicyjna nawigacja** z visual feedback
- **Accessible design** z odpowiednimi kontrastami

## 🚀 Uruchomienie

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Budowanie produkcyjne
npm run build
```
