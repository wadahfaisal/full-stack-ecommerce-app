import { useEffect } from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import { customFetch } from "../utils/axios";

const HomePage = () => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await customFetch.get("/users/showMe");
        console.log({ data: res.data });
      } catch (error) {
        console.log({ error: error.response.data.msg });
      }
    };

    fetchUser();
  }, []);

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};
export default HomePage;
