import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { JsonEditor } from '../components/JsonEditor';
import { fetchData, updateData } from '../services/api';

export const Documents = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await fetchData('DOCUMENTS');
      setData(result);
    } catch (error) {
      toast.error('Failed to fetch documents');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await updateData('DOCUMENTS', JSON.parse(data));
      toast.success('Documents updated successfully');
    } catch (error) {
      toast.error('Failed to update documents');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !data) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <JsonEditor
      title="Documents"
      data={data}
      onChange={setData}
      onSave={handleSave}
      isLoading={loading}
    />
  );
};