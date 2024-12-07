import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { JsonEditor } from '../components/JsonEditor';
import { fetchData, updateData } from '../services/api';

export const Settings = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await fetchData('CHATBOT_SETTINGS');
      setData(result);
    } catch (error) {
      toast.error('Failed to fetch settings');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await updateData('CHATBOT_SETTINGS', JSON.parse(data));
      toast.success('Settings updated successfully');
    } catch (error) {
      toast.error('Failed to update settings');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !data) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <JsonEditor
      title="Settings"
      data={data}
      onChange={setData}
      onSave={handleSave}
      isLoading={loading}
    />
  );
};