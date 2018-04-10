class Language {
    loadLanguage = () => {
      GLOBAL.appLanguages = {
        english: {
          logOut: 'Logout',
          pushMoney: 'Push for Money',
          jobSeeker: 'Push for Jobs',
          login: 'Login',
          loginTab: 'Login',
          newAccount: 'Register',
          create: 'Create Account',
          accountCreated: 'New account created.',
          email: 'E-MAIL',
          or: 'OR',
          name: 'Name',
          password: 'Password',
          repeat: 'Repeat Password',
          checkFields: 'Fill in all fields.',
          loginSuccess: 'Login successful.',
          dontRemember: 'Forgot your password?',
          google: 'Login With Google',
          facebook: 'Login With Facebook',
          linkedin: 'Login with LinkedIn',
          twitter: 'log in met Twitter',
          guest: 'Use Without Login',
          settings: 'Settings',
          mainColor: 'Main Color',
          change: 'Change',
          mainTheme: 'Main Theme',
          white: 'White',
          black: 'Dark',
          text: 'Text',
          lan: 'Language',
          language: 'English',
          hello: 'Hello',
        },
        polski: {
          logOut: 'Wyloguj się',
          login: 'Zaloguj się',
          loginTab: 'Logowanie',
          newAccount: 'Nowe konto',
          create: 'Utwórz konto',
          accountCreated: 'Stworzono nowe konto.',
          email: 'E-MAIL',
          or: 'OR',
          name: 'Imię',
          password: 'Hasło',
          repeat: 'Powtórz hasło',
          checkFields: 'Sprawdź wszystkie pola.',
          loginSuccess: 'Zalogowano poprawnie.',
          dontRemember: 'Nie pamiętasz hasła?',
          google: 'Zaloguj się z Google',
          facebook: 'Zaloguj się przez Facebook',
          linkedin: 'Zaloguj się z LinkedIn',
          twitter: 'log in met Twitter',
          guest: 'Używaj bez logowania',
          settings: 'Ustawienia',
          mainColor: 'Główny kolor',
          change: 'Zmień',
          mainTheme: 'Główny motyw',
          white: 'Biały',
          black: 'Ciemny',
          text: 'Tekst',
          lan: 'Język',
          language: 'Polski',
          hello: 'Witaj',
        },
        dutch: {
          logOut: 'uitloggen',
          pushMoney: 'Push for Money',
          jobSeeker: 'Push for Jobs',
          login: 'Login',
          loginTab: 'LoginTab',
          newAccount: 'nieuwe Account',
          create: 'creëren',
          accountCreated: 'Account creëren',
          email: 'E-MAIL',
          or: 'OR',
          name: 'naam',
          password: 'wachtwoord',
          repeat: 'herhaling',
          checkFields: 'Controleren rij',
          loginSuccess: 'login succes',
          dontRemember: 'Je wachtwoord vergeten',
          google: 'log in met Google',
          facebook: 'log in met Facebook',
          linkedin: 'log in met Linkedin',
          twitter: 'log in met Twitter',
          guest: 'gast',
          settings: 'instellingen',
          mainColor: 'hoofd kleur',
          change: 'verandering',
          mainTheme: 'hoofd Thema',
          white: 'Wit',
          black: 'zwart',
          text: 'tekst',
          lan: 'lan',
          language: 'Dutch',
          hello: 'Hallo',
        },
      };
    }
}

export default new Language();
