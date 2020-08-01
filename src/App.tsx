import React from 'react';
import { useDataFetch } from './hooks';
import {
  DATASET_BASELINE_URL,
  DATASET_1,
  DASHBOARD_TITLE,
  DASHBOARD_DESC,
} from './common/constants';
import { Header, Body } from './components';
import styled from 'styled-components';
import './theme/nautical.css';
import { IDataFetch, IDataResponse } from './hooks/useDataFetch';
// import { FixMeLater } from './models/Dataset';

const App = () => {
  const [{ data: response, isLoading, isError, error, url }, setUrl]: [
    IDataFetch,
    any
  ] = useDataFetch(DATASET_1.url, []);

  const dataSet: any = response?.data;

  const onReload = (e: React.FormEvent<HTMLButtonElement | HTMLInputElement>, dataFile: number) => {
    e.preventDefault();
    setUrl(`${DATASET_BASELINE_URL}${dataFile}`);
  };

  console.log(dataSet);
  return (
    <Container data-testid="container">
      <Header heading={DASHBOARD_TITLE} description={DASHBOARD_DESC} />
      {dataSet && !isLoading && <Body data={dataSet} onReload={onReload} />}
    </Container>
  );
};

export default React.memo(App);

const Container = styled.div`
  background-color: var(--secondarybg);
  text-align: center;
`;
