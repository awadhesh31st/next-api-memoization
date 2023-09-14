export const clientQuery = () => {
  const fetchMap = new Map<string, Promise<any>>();
  return <T>(name: string, query: () => Promise<T>): Promise<T> => {
    if (!fetchMap.has(name)) {
      fetchMap.set(name, query());
    }
    return fetchMap.get(name)!;
  };
};

export const quryClient = clientQuery();
