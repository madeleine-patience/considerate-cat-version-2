interface DataStatusHandlerProps {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  data: any[] | null;
}

const DataStatusHandler = ({
  isLoading,
  isError,
  error,
  data,
}: DataStatusHandlerProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error("Error fetching data: ", error);
    return <div>Error loading data</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return null; // Return null when there is no specific state to handle
};

export default DataStatusHandler;
