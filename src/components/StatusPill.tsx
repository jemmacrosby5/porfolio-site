type StatusPillProps = {
  live: boolean;
  wip: boolean;
};

export default function StatusPill({ live, wip }: StatusPillProps) {
  return (
    <div className="font-mono flex w-fit items-center gap-2 rounded-2xl bg-gray-100 px-4 py-1 text-sm">
      <div
        className={`h-2 w-2 rounded-full ${wip ? "animate-pulse bg-orange-500" : live ? "animate-pulse bg-green-500" : "bg-red-500"}`}
      />
      {wip ? <p>WIP</p> : live ? <p>Live</p> : <p>Down</p>}
    </div>
  );
}
