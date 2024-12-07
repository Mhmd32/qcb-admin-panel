import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { JsonEditor } from '../components/JsonEditor';
import { fetchData, updateData } from '../services/api';

export const List = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await fetchData('LIST');
      setData(result);
    } catch (error) {
      toast.error('Failed to fetch list data');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await updateData('LIST', JSON.parse(data));
      toast.success('List data updated successfully');
    } catch (error) {
      toast.error('Failed to update list data');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !data) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <JsonEditor
      title="List"
      data={data}
      onChange={setData}
      onSave={handleSave}
      isLoading={loading}
    />
  );
};