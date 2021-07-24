export const imageSizer = (planet) => {
  switch (planet) {
    case 'Mercury': 
      return 200;
    case 'Venus':
      return 300;
    case 'Earth':
      return 340;
    case 'Mars' :
      return 280;
    case 'Jupiter':
      return 430;
    case 'Saturn':
      return 420;
    case 'Uranus':
      return 380;
    case 'Neptune':
      return 360;
    default :
      return 360;  
  }
}