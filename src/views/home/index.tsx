import { DribbleShots } from "./dribbleShots";
import { MyLearning } from "./myLearning";
import { MyWorks } from "./myWorks";
import { Testimonials } from "./testimonials";
import { TopSection } from "./topSection";

export const HomePage = () => {
  return (
    <>
      <TopSection />
      <MyWorks />
      <MyLearning />
      <Testimonials />
      <DribbleShots />
    </>
  );
};

// export default HomePage;
