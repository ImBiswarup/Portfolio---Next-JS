'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    heading: '',
    desc: '',
    techStack: '',
    gitRepo: '',
    hostedUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) return alert('Please select an image');

    const imgFormData = new FormData();
    imgFormData.append('image', image);

    const uploadRes = await fetch('/api/upload', {
      method: 'POST',
      body: imgFormData,
    });

    const uploadData = await uploadRes.json();

    if (!uploadData.url) {
      return alert('Image upload failed');
    }

    setUrl(uploadData.url);

    const projectRes = await fetch('/api/add-projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        id: Number(formData.id),
        url: uploadData.url,
      }),
    });

    const projectData = await projectRes.json();

    if (projectRes.ok) {
      alert('Project created successfully');
      setFormData({
        id: '',
        heading: '',
        desc: '',
        techStack: '',
        gitRepo: '',
        hostedUrl: '',
      });
      setImage(null);
      setUrl('');
    } else {
      alert(projectData.error || 'Failed to create project');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-4 text-white">Upload Project</h1>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="number"
          name="id"
          placeholder="Project ID"
          value={formData.id}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="heading"
          placeholder="Heading"
          value={formData.heading}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="desc"
          placeholder="Description"
          value={formData.desc}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="techStack"
          placeholder="Tech Stack"
          value={formData.techStack}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="url"
          name="gitRepo"
          placeholder="GitHub Repository"
          value={formData.gitRepo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="url"
          name="hostedUrl"
          placeholder="Hosted URL"
          value={formData.hostedUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload Project
        </button>
      </form>
    </div>
  );
}
