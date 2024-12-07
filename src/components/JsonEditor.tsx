import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

interface JsonEditorProps {
  title: string;
  data: any;
  onChange: (value: string) => void;
  onSave: () => void;
  isLoading: boolean;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({
  title,
  data,
  onChange,
  onSave,
  isLoading
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <div className="space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Dashboard
            </button>
            <button
              onClick={onSave}
              disabled={isLoading}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 disabled:bg-blue-400"
            >
              <Save className="mr-2" size={20} />
              Save Changes
            </button>
          </div>
        </div>
        <textarea
          value={typeof data === 'string' ? data : JSON.stringify(data, null, 2)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-[calc(100vh-200px)] p-4 font-mono text-sm border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          spellCheck="false"
        />
      </div>
    </div>
  );
};