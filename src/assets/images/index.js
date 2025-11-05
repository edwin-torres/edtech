// Front images
import quadFront1 from "./quad-front-1.png";
import quadFront2 from "./quad-front-2.png";
import quadFront3 from "./quad-front-3.png";
import quadFront4 from "./quad-front-4.png";
import quadFront5 from "./quad-front-5.png";
import quadFront6 from "./quad-front-6.png";
import quadFront7 from "./quad-front-7.png";
import quadFront8 from "./quad-front-8.png";

// Back images
import quadBack1 from "./quad-back-1.png";
import quadBack2 from "./quad-back-2.png";
import quadBack3 from "./quad-back-3.png";
import quadBack4 from "./quad-back-4.png";
import quadBack5 from "./quad-back-5.png";
import quadBack6 from "./quad-back-6.png";
import quadBack7 from "./quad-back-7.png";
import quadBack8 from "./quad-back-8.png";

// Export individually grouped
export const fronts = {
  quadFront1,
  quadFront2,
  quadFront3,
  quadFront4,
  quadFront5,
  quadFront6,
  quadFront7,
  quadFront8,
};

export const backs = {
  quadBack1,
  quadBack2,
  quadBack3,
  quadBack4,
  quadBack5,
  quadBack6,
  quadBack7,
  quadBack8,
};

// Export all together (optional)
export default {
  ...fronts,
  ...backs,
};
