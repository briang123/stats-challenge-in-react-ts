export type FixMeLater = any;

export interface IDataset {
  data: number[];
}

export interface IForm {
  setDataSet: () => void;
  dataSet: IDataset;
}
