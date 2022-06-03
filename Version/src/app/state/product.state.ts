export enum ProductActionsTypes{
  GET_ALL_PRODUCTS = "[Product] Get All Products",
  GET_SELECTED_PRODUCTS = "[Product] Get Selected Products",
  GET_AVALAIBLE_PRODUCTS = "[Product] Get Available Products",
  SEARCH_PRODUCTS = "[Product] Search Products",
  NEW_PRODUCTS = "[Product] New Products"
}

// Cette interfae est utilisée pour donner le type à l'EventEmitter
export interface ActionEvent{
  type:ProductActionsTypes;
  payload?: any;
}

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState:DataStateEnum,
  data?:T,
  errorMessage?:string
}
