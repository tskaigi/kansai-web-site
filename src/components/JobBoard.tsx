import { jobBoard } from "@/lib/data/jobBord";

export const JobBoard = () => {
  return (
    <div className="pb-20 md:pb-40">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-20 scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl">
          JOB BOARD
        </h2>
      </div>
      <div className="mx-auto w-5/6 px-2">
        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobBoard.map((job) => (
            <div key={job.link}>
              <a href={job.link} target="_blank" rel="noopener noreferrer">
                <img src={job.imageLink} alt={job.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
