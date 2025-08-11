


export const jobs = [
  {
    id: "job-1",
    title: "Python Developer",
    company: "Schaeffler India",
    location: "Pune",
    description: "Build backend APIs using Python/Django",
    postedAt: "2025-07-10",
    applicants: ["user-2"],
  },
];

export const users = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john@hireiq.com",
    role: "employer",
    company: "Schaeffler India",
  },
  {
    id: "user-2",
    name: "Jane Smith",
    email: "jane@hireiq.com",
    role: "applicant",
    resumeLink: "https://example.com/jane-resume.pdf",
    appliedJobs: ["job-1"],
  },
];

export const messages = [
  {
    id: "msg-1",
    senderId: "user-1",
    receiverId: "user-2",
    content: "Hello Jane, your resume looks great!",
    timestamp: "2025-07-15T10:00:00Z",
  },
];
  