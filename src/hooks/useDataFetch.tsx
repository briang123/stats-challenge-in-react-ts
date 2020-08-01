import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
// import { FixMeLater } from '../models/Dataset';

interface IProps {
  initialUrl: string;
  initialData: any;
  // initialData: (string | number)[];
}

export interface IDataFetch {
  // data?: (string | number)[];
  data?: any;
  isLoading?: boolean;
  isError?: boolean;
  error?: any;
  url?: string;
}

export interface IDataResponse {
  data?: any;
  // data?: (string | number)[];
}

export const useDataFetch = (
  initialUrl: string,
  initialData: any
  // initialData: (string | number)[]
): [IDataFetch, any] => {
  // const [data, setData] = useState<(string | number)[]>(initialData);
  const [data, setData] = useState<any>(initialData);
  const [url, setUrl] = useState<string>(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result: AxiosResponse<IDataResponse> = await axios(url);
        setData(result?.data || []);
      } catch (e) {
        setError(e);
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError, error, url }, setUrl];
};
