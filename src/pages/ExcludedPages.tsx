import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { JsonEditor } from '../components/JsonEditor';
import { fetchData, updateData } from '../services/api';

export const ExcludedPages = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await fetchData('EXCLUDED_PAGES');
      setData(result);
    } catch (error) {
      toast.error('Failed to fetch excluded pages');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await updateData('EXCLUDED_PAGES', JSON.parse(data));
      toast.success('Excluded pages updated successfully');
    } catch (error) {
      toast.error('Failed to update excluded pages');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !data) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <JsonEditor
      title="Excluded Web Pages"
      data={data}
      onChange={setData}
      onSave={handleSave}
      isLoading={loading}
    />
  );
};