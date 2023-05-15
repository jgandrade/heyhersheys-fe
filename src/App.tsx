import * as COMPONENT from "./global_components"

export const App: React.FC = () => {
  return (
    <COMPONENT.AppWrapper>
      <COMPONENT.NavigationalBar />
      <COMPONENT.RoutesWrapper />
    </COMPONENT.AppWrapper>
  )
}
