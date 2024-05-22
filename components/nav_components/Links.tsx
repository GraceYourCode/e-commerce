const links: Array<string> = ["Home", "Contact", "About", "Sign Up"]

const Links = ({addedClass}: {addedClass: string}) => {
  return (
    <div className={`text-black items-center md:gap-8 lg:gap-10 Xl:gap-12 ${addedClass}`}>
      {
        links.map(link => <p key={link}>{link}</p>)
      }
    </div>
  )
}

export default Links
