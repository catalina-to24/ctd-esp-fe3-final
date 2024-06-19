import { useContextState } from '../Components/utils/global.context'

export const Error = () => {
  const { state } = useContextState()

  return (
    <div className= {state.theme}>
      <h4 className={`${state.theme} errorMessega`} style={{ color: "red"}}>Your information is wrong, please try again. </h4>
    </div>
  );
};
