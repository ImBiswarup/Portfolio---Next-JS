import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  heading: { type: String, required: true },
  desc: { type: String, required: true },
  techStack: { type: String, required: true },
  gitRepo: { type: String, required: true },
  hostedUrl: { type: String, required: true },
  url: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
export { projectSchema };
export type ProjectType = mongoose.InferSchemaType<typeof projectSchema>;
export type ProjectInput = Omit<ProjectType, 'id' | 'createdAt'> & { id?: number };