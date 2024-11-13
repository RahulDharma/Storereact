export default function Widget() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="bg-card rounded-lg shadow-lg p-8 max-w-sm w-full">
            <h1 className="text-2xl font-bold text-foreground mb-4">Your logo</h1>
            <h2 className="text-xl font-semibold text-foreground mb-6">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-muted-foreground mb-1" htmlFor="email">Email</label>
                <input className="w-full p-2 border border-border rounded-md" type="email" id="email" placeholder="name@example.com" required />
              </div>
              <div className="mb-4">
                <label className="block text-muted-foreground mb-1" htmlFor="password">Password</label>
                <input className="w-full p-2 border border-border rounded-md" type="password" id="password" placeholder="********" required />
              </div>
              <a href="#" className="text-accent text-sm hover:underline mb-4 block">Forgot Password?</a>
              <button className="bg-primary text-primary-foreground hover:bg-primary/80 w-full p-2 rounded-md">Sign in</button>
            </form>
            <div className="flex items-center justify-between my-4">
              <hr className="flex-grow border-muted" />
              <span className="text-muted-foreground mx-2">or continue with</span>
              <hr className="flex-grow border-muted" />
            </div>
            <div className="flex space-x-4">
              <button className="bg-muted text-muted-foreground hover:bg-muted/80 p-2 rounded-md">Google</button>
              <button className="bg-muted text-muted-foreground hover:bg-muted/80 p-2 rounded-md">GitHub</button>
              <button className="bg-muted text-muted-foreground hover:bg-muted/80 p-2 rounded-md">Facebook</button>
            </div>
            <p className="text-muted-foreground text-sm mt-4">Don't have an account yet? <a href="#" className="text-accent hover:underline">ame 2Register for free</a></p>
          </div>
        </div>
    )
}