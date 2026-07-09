type StatusPillProps = {
  live: boolean;
};

export default function StatusPill({ live }: StatusPillProps) {
  return (
    <div className="font-mono flex w-fit items-center gap-2 rounded-2xl bg-gray-100 px-4 py-1 text-sm">
      <div
        className={`h-2 w-2 rounded-full ${live ? "animate-pulse bg-green-500" : "bg-red-500"}`}
      />
      {live ? <p>Live</p> : <p>Down</p>}
    </div>
  );
}
