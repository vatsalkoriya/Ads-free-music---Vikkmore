import { Music2, ShieldCheck } from "lucide-react";

const ProfileView = () => {
  return (
    <div className="min-h-full flex flex-col animate-in fade-in duration-500 relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent pointer-events-none" />
      
      <div className="p-6 pb-24 md:pb-6 relative z-10 max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-md shadow-2xl">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Your Profile</h1>
            <p className="text-muted-foreground/80">Your music space, stored locally on this device.</p>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <Music2 className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-lg font-semibold">Local library</h2>
            <p className="mt-2 text-sm text-muted-foreground">Liked songs, playlists, and listening history stay available on this device.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <ShieldCheck className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-lg font-semibold">No account required</h2>
            <p className="mt-2 text-sm text-muted-foreground">Start listening immediately without sign-in screens or account setup.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
