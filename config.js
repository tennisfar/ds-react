const dsPath = 'C:/Projects/danskespil-website/';
const mockedPath = 'C:/Projects/ds-react/';

export const PATH = {
  DS: {
    COMPONENTS: dsPath + 'Website/Components',
    KLUBLOTTO: dsPath + 'Website/Components/DanskeSpil/Domain/Feature.KlubLotto',
    QUICK: dsPath + 'Website/Components/DanskeSpil/Domain/AvalonQuick',
    AVALONCOMPONENTS: dsPath + 'Website/Components/DanskeSpil/Domain/AvalonComponents',
  },
  MOCK: {
    API_DATA: mockedPath + 'src/@ApiData',
    ENSIGHTEN: mockedPath + 'src/DanskeSpil/@Ensighten',
    ERRORHANDLING: mockedPath + 'src/DanskeSpil/@ErrorHandling',
    SHARED_SCRIPTS: mockedPath + 'src/DanskeSpil/@SharedScripts',
    MOCK: mockedPath + 'src/@Mock',
    KLUBLOTTO: {
      VIEWS: mockedPath + 'src/DanskeSpil/KlubLotto/Views',
    },
  }
}
