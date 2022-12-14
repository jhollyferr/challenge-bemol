// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
  road: string;
  district: string;
  city: string;
  cep: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
  city: "",
  district: "",
  road: "",
  cep: "",
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
  setCity,
  setDistrict,
  setRoad,
  setAddress,
  resetData,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    case FormActions.setCity:
      return { ...state, city: action.payload };
    case FormActions.setRoad:
      return { ...state, road: action.payload };
    case FormActions.setDistrict:
      return { ...state, district: action.payload };

    case FormActions.setAddress:
      return {
        ...state,
        city: action.payload.city,
        district: action.payload.district,
        road: action.payload.road,
        cep: action.payload.cep,
      };

    case FormActions.resetData:
      return {
        ...state,
        currentStep: 0,
        name: "",
        level: 0,
        email: "",
        github: "",
        city: "",
        district: "",
        road: "",
        cep: "",
      };
    default:
      return state;
  }
};

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook
export const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined)
    throw new Error("useForm deve ser usado em FormProvider");

  return context;
};
