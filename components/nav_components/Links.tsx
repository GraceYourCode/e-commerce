const links: Array<string> = ["Home", "Contact", "About", "Sign Up"]
const Links = () => {
  return (
    <div className="text-black flex items-center gap-12">
      {
        links.map(link => <p key={link}>{link}</p>)
      }
    </div>
  )
}

export default Links
