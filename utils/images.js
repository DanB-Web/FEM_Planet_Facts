export const imageSizer = (planet) => {
  switch (planet) {
    case 'Mercury': 
      return 290;
    case 'Venus':
      return 350;
    case 'Earth':
      return 400;
    case 'Mars' :
      return 350;
    case 'Jupiter':
      return 450;
    case 'Saturn':
      return 500;
    case 'Uranus':
      return 380;
    case 'Neptune':
      return 450;
    default :
      return 400;  
  }
}