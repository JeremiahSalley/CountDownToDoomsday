import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm tracking-widest text-white/60">
          MARVEL • COUNTDOWN TO DOOMSDAY
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Who will survive <span className="text-red-500">Doomsday</span>?
        </h1>

        <p className="mt-4 max-w-2xl text-white/70">
          Log in with X (Twitter) to vote for who you think will appear in Doomsday.
          Watch the leaderboard update as the fandom decides.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs text-white/60">STEP 1</div>
            <div className="mt-2 text-lg font-semibold">Login with X</div>
            <div className="mt-1 text-sm text-white/70">
              One account, one vote. Keeps it fair.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs text-white/60">STEP 2</div>
            <div className="mt-2 text-lg font-semibold">Pick your hero</div>
            <div className="mt-1 text-sm text-white/70">
              Vote for who you think will show up in the movie.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs text-white/60">STEP 3</div>
            <div className="mt-2 text-lg font-semibold">See live rankings</div>
            <div className="mt-1 text-sm text-white/70">
              The top-voted character gets spotlighted.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/vote"
            className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold hover:bg-red-500"
          >
            Enter Voting Room
          </a>
          <a
            href="/leaderboard"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
          >
            View Leaderboard
          </a>
        </div>

        <div className="mt-16 text-xs text-white/40">
          Fan project. Not affiliated with Marvel.
        </div>
      </div>
    </main>
  );
}

