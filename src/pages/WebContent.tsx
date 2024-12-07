import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { JsonEditor } from '../components/JsonEditor';
import { fetchData, updateData } from '../services/api';

export const WebContent = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await fetchData('WEB_CONTENT');
      setData(result);
    } catch (error) {
      toast.error('Failed to fetch web content');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await updateData('WEB_CONTENT', JSON.parse(data));
      toast.success('Web content updated successfully');
    } catch (error) {
      toast.error('Failed to update web content');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !data) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <JsonEditor
      title="Web Content"
      data={data}
      onChange={setData}
      onSave={handleSave}
      isLoading={loading}
    />
  );
};