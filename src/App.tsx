import COMPONENT from "./global_components";
import { Suspense } from "react";

export const App: React.FC = () => {
  return (
    <Suspense fallback={<COMPONENT.Loading />}>
      <COMPONENT.AppWrapper>
        <COMPONENT.NavigationalBar />
        <COMPONENT.RoutesWrapper />
      </COMPONENT.AppWrapper>
    </Suspense>
  );
};
