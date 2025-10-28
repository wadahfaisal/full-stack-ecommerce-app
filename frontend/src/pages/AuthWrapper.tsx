import { useAuth0 } from "@auth0/auth0-react";
import { PropsWithChildren } from "react";

const AuthWrapper = ({ children }: PropsWithChildren) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <section style={styles}>
        <h1>loading...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section style={styles}>
        <h1>{error?.message}</h1>
      </section>
    );
  }

  return <>{children}</>;
};

// const Wrapper = styled.section`
//   min-height: 100vh;
//   display: grid;
//   place-items: center;
// `;
const styles = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
};

export default AuthWrapper;
