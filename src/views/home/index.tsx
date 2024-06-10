import { MyLearning } from "./myLearning";
import { MyWorks } from "./myWorks";
import { TopSection } from "./topSection";

export const HomePage = () => {
  return (
    <>
      <TopSection />
      <MyWorks />
      <MyLearning />
    </>
  );
};

// export default HomePage;
